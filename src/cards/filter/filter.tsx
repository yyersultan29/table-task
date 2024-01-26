import { ChangeEvent, useCallback, useEffect, useLayoutEffect, useState } from "react"

import { Price } from "./components/price"
import { HouseType } from "./components/house-type"
import { RatingStar } from "./components/rating-star"
import { CountryList } from "./components/country-list"
import { ReviewCount } from "./components/review-count"
import { Button } from "../../components/button/button"
import { useSearchParams } from "react-router-dom"

export const Filter = () => {

  const [params, setParams] = useSearchParams();

  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [type, setType] = useState<string[]>([]);
  const [stars, setStars] = useState<string[]>([]);
  const [reviewCount, setReviewCount] = useState(0);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  const handleChangeFrom = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFrom(Number(e.target.value));

  }, []);

  const handleChangeTo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTo(Number(e.target.value))

  }, []);

  const handleChangeReviewCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) return;

    setReviewCount(Number(e.target.value));

  }, [])

  const handleChangeStars = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setStars(prev => [...prev, e.target.value]);
    } else {
      setStars(prev => prev.filter(el => el !== e.target.value));
    }

  }, [])

  const handleChangeType = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setType(prev => [...prev, e.target.value]);
    } else {
      setType(prev => prev.filter(el => el !== e.target.value));
    }

  }, [])

  const handleSelectCountry = useCallback((e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.checked) {
      setSelectedCountries(prev => [...prev, e.target.value]);
    } else {
      setSelectedCountries(prev => prev.filter(el => el !== e.target.value.trim()));
    }

  }, []);

  useLayoutEffect(() => {
    params.has("country") && setSelectedCountries(JSON.parse(params.get("country") ?? ""));
    params.has("type") && setType(JSON.parse(params.get("type") ?? ""));
    params.has("stars") && setStars(JSON.parse(params.get("stars") ?? ""));
    params.has("review") && setReviewCount(Number(params.get("stars")));
    if (params.has("from") && params.has("to")) {
      setFrom(Number(params.get("from")));
      setTo(Number(params.get("to")));
    }
  }, []);

  useEffect(() => {
    selectedCountries.length ? params.set("country", JSON.stringify(selectedCountries)) : params.delete("country");
    type.length ? params.set("type", JSON.stringify(type)) : params.delete("type");
    stars.length ? params.set("stars", JSON.stringify(stars)) : params.delete("stars");
    reviewCount ? params.set("review", reviewCount.toString()) : params.delete("review");
    if (to && !from) {
      params.set("price_from", "0")
      params.set("price_to", to.toString());
    } if (!to && from) {
      params.set("price_from", from.toString());
      params.set("price_to", "500000");
    }
    setParams(params);

  }, [selectedCountries, type, stars, reviewCount, from, to]);

  console.log("Render")

  return (
    <div className="w-[325px] flex flex-col gap-[25px]">
      <CountryList
        selectedCountries={selectedCountries}
        onSelectCountry={handleSelectCountry}
      />
      <HouseType
        type={type}
        handleChangeType={handleChangeType}
      />
      <RatingStar
        stars={stars}
        handleChangeStars={handleChangeStars}
      />
      <ReviewCount
        reviewCount={reviewCount}
        handleChangeReviewCount={handleChangeReviewCount}
      />
      <Price
        to={to}
        from={from}
        handleChangeTo={handleChangeTo}
        handleChangeFrom={handleChangeFrom}
      />

      <div className="flex flex-col gap-[15px]">
        <Button view="primary" >Submit</Button>
        <Button view="ghost">x Clear Filter</Button>
      </div>
    </div>
  )
}
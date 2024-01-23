import { ChangeEvent, useCallback, useState } from "react"

import { Price } from "./components/price"
import { HouseType } from "./components/house-type"
import { RatingStar } from "./components/rating-star"
import { CountryList } from "./components/country-list"
import { ReviewCount } from "./components/review-count"
import { Button } from "../../components/button/button"

export const Filter = () => {

  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const [type, setType] = useState<string[]>([]);

  const [stars, setStars] = useState<string[]>([]);

  const [reviewCount, setReviewCount] = useState(0);

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  const handleChangeFrom = useCallback((e: ChangeEvent<HTMLInputElement>) => setFrom(Number(e.target.value)), []);

  const handleChangeTo = useCallback((e: ChangeEvent<HTMLInputElement>) => setTo(Number(e.target.value)), []);

  const handleChangeReviewCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) return;

    setReviewCount(Number(e.target.value))
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
  }, [])

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
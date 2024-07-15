import { Fragment, useContext, useEffect, useMemo, useState } from "react";
import houselist from "../../data/house-list.json";
import { CardItem } from "./card-item";
import { MyContextValues, StateContext } from "../../context/StateContext";

export const CardList = () => {
  const { selectedCountries, reviewCount, stars, from, to } = useContext(
    StateContext,
  ) as MyContextValues;

  const [houseList, setHouseList] = useState(() => houselist);

  const filteredHouseList = useMemo(() => {
    return houseList.hotels
      .filter((house) => {
        if (!selectedCountries.length) return true;
        return selectedCountries.includes(house.country);
      })
      .filter((house) => {
        if (!stars.length) return true;
        return stars.includes(house.stars + "");
      })
      .filter((house) => reviewCount <= house.reviews_amount);
    // .filter(house => house.min_price >= from && house.min_price <= to)
  }, [selectedCountries, reviewCount, stars, from, to]);

  useEffect(() => {
    setHouseList(houselist);
  }, []);

  if (!filteredHouseList.length) {
    return (
      <div className="w-[839px] text-center">
        <h4>Not Found </h4>
      </div>
    );
  }

  return (
    <Fragment>
      {filteredHouseList.map((house, index) => (
        <CardItem key={`${house.name}_${index}`} {...house} />
      ))}
    </Fragment>
  );
};

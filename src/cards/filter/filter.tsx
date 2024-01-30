import { useContext, } from "react"


import { Price } from "./components/price"
import { HouseType } from "./components/house-type"
import { RatingStar } from "./components/rating-star"
import { CountryList } from "./components/country-list"
import { ReviewCount } from "./components/review-count"
import { Button } from "../../components/button/button"
import { MyContextValues, StateContext } from "../../context/StateContext"

export const Filter = () => {


  const { selectedCountries,
    type,
    stars,
    reviewCount,
    from, to,
    handleChangeFrom,
    handleChangeTo,
    handleChangeReviewCount,
    handleChangeStars,
    handleChangeType,
    handleSelectCountry } = useContext(StateContext) as MyContextValues;





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
        <Button view="secondary" >Submit</Button>
        <Button view="ghost">x Clear Filter</Button>
      </div>
    </div>
  )
}
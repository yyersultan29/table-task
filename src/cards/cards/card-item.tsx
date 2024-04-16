import { FC } from "react";

import { House } from "../../type/types";
import GoldStar from "../../assets/star-gold.png";
import SilverStar from "../../assets/star-silver.png";
import { Button } from "../../components/button/button";

export const URL = "/main/filter"

export const CardItem: FC<House> = (props) => {
  return (
    <div className="flex justify-between border-2 rounded-lg p-[25px] gap-[10px]">
      {/* Left Info */}
      <div className="flex flex-col">
        <h1>{props.name}</h1>

        {/* Infos */}
        <div className="flex gap-[15px] items-center mt-[6px] mb-[16px]">
          {/* Rating */}
          <div className="flex gap-[2px]">
            {Array(Math.floor(props.stars)).fill(0).map((_, index) => (
              <img key={index} src={GoldStar} alt="star" />
            ))}

            {Array(5 - Math.floor(props.stars)).fill(0).map((_, index) => (
              <img key={index} src={SilverStar} alt="silver" />
            ))}

          </div>
          <div className="text-[14px] text-[#868686]">Appartment * {props.reviews_amount} reviews</div>

          <div className="text-[14px]">{props.country}</div>
        </div>

        {/* Description */}
        <div >
          {props.description}
        </div>
      </div>

      {/* Right Infos */}
      <div>
        {/* Price */}
        <div className="mb-[25px] text-end">
          <h1 className="font-bold text-[25px]">{props.min_price} {props.currency}</h1>
          <div className="text-[#868686] text-[12px]">За один день {props.reviews_amount}</div>
        </div>

        <Button view="tertiary" size="s">Забронировано</Button>

      </div>
    </div>
  )
}
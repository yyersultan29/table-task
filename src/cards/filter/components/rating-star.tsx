import { ChangeEvent, FC, memo } from "react";
import { CheckBox } from "../../../components/checkbox/checkbox"

interface IProps {
  stars: string[],
  handleChangeStars: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RatingStarComponent: FC<IProps> = ({ stars, handleChangeStars }) => {

  return (
    <div className="flex flex-col gap-[13px]">
      <h3>Number of stars</h3>
      <div className=" flex flex-col gap-[15px] px-[20px] py-[20px] rounded-lg border-2">
        <CheckBox label="1 star" value="1" checked={stars.includes("1")} onChange={handleChangeStars} />
        <CheckBox label="2 star" value="2" checked={stars.includes("2")} onChange={handleChangeStars} />
        <CheckBox label="3 star" value="3" checked={stars.includes("3")} onChange={handleChangeStars} />
        <CheckBox label="4 star" value="4" checked={stars.includes("4")} onChange={handleChangeStars} />
        <CheckBox label="5 star" value="5" checked={stars.includes("5")} onChange={handleChangeStars} />
      </div>
    </div>
  )
}

export const RatingStar = memo(RatingStarComponent);
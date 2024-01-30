import { ChangeEvent, FC, memo } from "react"
import { CheckBox } from "../../../components/checkbox/checkbox"

interface IProps {
  type: string[],
  handleChangeType: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const HouseTypeComponent: FC<IProps> = ({ type, handleChangeType }) => {

  return (
    <div className="flex flex-col gap-[13px]">
      <h3>Type</h3>
      <div className=" flex flex-col gap-[15px] px-[20px] py-[20px] rounded-lg border-2">
        <CheckBox
          value="apartment"
          label="Apartment"
          checked={type.includes("apartment")}
          onChange={handleChangeType} />
        <hr />
        <CheckBox
          value="hotel"
          label="Hotel"
          checked={type.includes("hotel")}
          onChange={handleChangeType} />
      </div>
    </div>
  )
}
export const HouseType = memo(HouseTypeComponent);
import { ChangeEvent, FC, memo } from "react"
import { Input } from "../../../components/input/input"

interface IProps {
  from: number;
  to: number;

  handleChangeFrom: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeTo: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const PriceComponent: FC<IProps> = ({ from, to, handleChangeFrom, handleChangeTo }) => {

  return (
    <div>
      <h3 className="font-bold">Price</h3>
      <div className="flex items-center gap-[10px]">

        <Input type="number" placeholder="from 0$" value={from} onChange={handleChangeFrom} />

        <div className="w-[10px] h-[1px] bg-[#C4C4C4]" />

        <Input type="number" placeholder="to 1200$" value={to} onChange={handleChangeTo} />
      </div>
    </div>
  )
}
export const Price = memo(PriceComponent);
import { CardItem } from "./cards/card-item"
import { Filter } from "./filter/filter"

export const Cards = () => {

  return (
    <div className="flex gap-[40px]">
      <Filter />

      <div className="max-w-[1000px] flex flex-col gap-[15px]">
        {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, index) => (
          <CardItem key={index} />
        ))}
      </div>
    </div>
  )
}
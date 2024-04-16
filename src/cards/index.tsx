import { CardList } from "./cards/card-list"
import { Filter } from "./filter/filter"

export const Cards = () => {

  return (
    <div className="flex gap-[40px]">
      <Filter />

      <div className="max-w-[1000px] flex flex-col gap-[15px]">
        <CardList />
      </div>

      <div>
        <ul><li>1</li></ul>
      </div>
    </div>
  )
}
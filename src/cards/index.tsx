import { CardList } from "./cards/card-list"
import { Filter } from "./filter/filter"

export const Cards = () => {

  return (
    <div className="flex gap-[40px]">
      <Filter />

      <div className="max-w-[1000px] flex flex-col gap-[15px]">
        <CardList />
      </div>

      <h1>Hello world</h1>

      <div>
        <ul><li>1</li></ul>
        <h1>sdsd</h1>
      </div>

      <h1>Yyyyy</h1>
    </div>
  )
}
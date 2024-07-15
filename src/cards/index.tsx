import { Filter } from "./filter/filter";
import { CardList } from "./cards/card-list";

export const Cards = () => {
  return (
    <div className="flex gap-[40px]">
      <Filter />

      <div className="max-w-[1000px] flex flex-col gap-[15px]">
        <CardList />
      </div>
    </div>
  );
};

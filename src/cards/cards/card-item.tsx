import GoldStar from "../../assets/star-gold.png";
import SilverStar from "../../assets/star-silver.png";
import { Button } from "../../components/button/button";

export const CardItem = () => {
  return (
    <div className="flex justify-between border-2 rounded-lg p-[25px] gap-[10px]">
      {/* Left Info */}
      <div className="flex flex-col">
        <h1>Marina In</h1>

        {/* Infos */}
        <div className="flex gap-[15px] items-center mt-[6px] mb-[16px]">
          {/* Rating */}
          <div className="flex gap-[2px]">
            <img src={GoldStar} alt="star" />
            <img src={GoldStar} alt="star" />
            <img src={GoldStar} alt="star" />
            <img src={SilverStar} alt="star" />
            <img src={SilverStar} alt="star" />
          </div>
          <div className="text-[14px] text-[#868686]">Appartment * 23 reviews</div>

          <div className="text-[14px]">Brazil</div>
        </div>

        {/* Description */}
        <div >
          Этот 4-звездочный отель расположен в центре города.
          На его территории есть бассейн с терассой и сауна.
          Из номеров открывается вид на море.
        </div>
      </div>

      {/* Right Infos */}
      <div>
        {/* Price */}
        <div className="mb-[25px] text-end">
          <h1 className="font-bold text-[25px]">4 600 ₽</h1>
          <div className="text-[#868686] text-[12px]">Цена за 1 ночь</div>
        </div>

        <Button view="tertiary" size="s">Забронировано</Button>

      </div>
    </div>
  )
}

import { Button } from "antd";
import arrowImg from "../../assets/Solid.png";

export const CustomDropDown = () => {

    return (
        <div className="relative">
            <div className="w-[100px] p-3  bg-gray-100 flex justify-between items-center cursor-pointer rounded-lg">
                <h1>Цвет</h1>
                <img src={arrowImg} width={20} height={20} alt="img"/>
            </div>

            <div className="hidden  p-5 rounded-lg bg-gray-100 ">
                <Button >Hyundai</Button>
                <Button >Sharp</Button>
                <Button >BMW</Button>
                <Button color="primary">KIA</Button>
                <Button >Ford</Button>
            </div>
        </div>
    )
}
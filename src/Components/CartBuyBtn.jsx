import Image from "./Image";
import car from '../assets/car.png';
import style from '../Css/button.module.css';

const CartBuyBtn = ({condition,  color,text}) => {
  return (
    <div className="inline-block">
        <div className={`flex ${color ? style.button_bgr : style.button_bg} cursor-pointer border broder-solid border-[#ffffff33] pt-3 pr-7 pb-3 pl-7 rounded-lg items-center gap-x-2`}>
            {
                condition ? <Image src={car} alt="image"/> : null
            }
            <h3 className="font-os font-normal text-white text-2xl">{text}</h3>
        </div>
    </div>
  )
}

export default CartBuyBtn
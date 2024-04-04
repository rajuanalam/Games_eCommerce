// import theLast from "../../assets/theLast.png";
import { useDispatch } from "react-redux";
import xy from "../assets/xy.png";
import style from "../Css/cart.module.css";
import ProductDetailButton from "../Components/layouts/ProductDetailButton";
import Flex from "./Flex";
import Image from "./Image";
import { FaRegHeart } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { deleted, toggled } from "../redux/addToCart/Actions";
import { decrement } from "../redux/counter/Actions";
import BrowseButton from "./BrowseButton";

const ChoiceCartFrame = ({ src, title, discount, price, info, vat }) => {
  const { id, heartCondition } = info;
  const dispatch = useDispatch();
  // Handle Function
  const handleColor = (id) => {
    dispatch(toggled(id));
  };
  // Hendle Delete
  const handleDelete = (id) => {
    dispatch(deleted(id));
    dispatch(decrement(1));
  };

  return (
    <div className={`${style.choice_cart} w-[1150px] rounded-2xl`}>
      <Flex>
        <div className="overflow-hidden">
          <Image src={src} alt="image" className="h-[300px] w-[257px]" />
        </div>

        <div className="ml-11 pt-[49px] pb-[51px]">
          <Flex>
            <h3 className="text-white font-inter font-normal text-3xl">
              {title}
            </h3>
            <div className="ml-5">
              <Image src={xy} alt="image" />
            </div>
          </Flex>
          <Flex className="items-center gap-x-[18px] mt-5 mb-7">
            <ProductDetailButton
              bdrColor="border-[#28B8E3]"
              txtColor="text-[#28B8E3]"
            >
              Save 25%
            </ProductDetailButton>

            <ProductDetailButton
              condition={true}
              bdrColor="border-[#E614FC]"
              txtColor="text-[#E614FC]"
            >
              Save 25%
            </ProductDetailButton>
          </Flex>

          <Flex className="gap-x-[14px]">
            <BrowseButton text="PS5" />
            <BrowseButton text="Deluxe edition" />
            <BrowseButton text="Key" />
            <BrowseButton text="UK" />
          </Flex>
        </div>

        <div className="ml-[90px] pt-[49px] pb-[51px]">
          <h3 className="font-os font-normal text-2xl text-[#78797D]">
            Unit Price:
          </h3>
          <del className="font-os font-normal text-2xl text-[#78797D]">
            ${discount}
          </del>
          <h3 className="font-os font-normal text-2xl text-[#E614FC]">
            ${price}
          </h3>
          <h3 className="hidden font-os font-normal text-2xl text-[#E614FC]">
            ${vat}
          </h3>
          <div className="mt-7">
            <select
              name=""
              id=""
              className="p-[14px] rounded-lg border border-solid border-white text-white bg-[#1E2127] text-[22px] font-os font-normal"
            >
              <option value="">01</option>
              <option value="">02</option>
              <option value="">03</option>
              <option value="">04</option>
            </select>
          </div>
        </div>
        <div className="ml-5 mt-1">
          <div
            onClick={() => handleColor(id)}
            className={`h-[135px] cursor-pointer w-[70px] border-[#ffffff26] rounded-xl flex justify-center items-center border border-solid ${
              heartCondition ? "bg-[#E614FC]" : null
            }`}
          >
            <FaRegHeart
              className={`text-3xl text-[#707070] ${
                heartCondition ? "text-black" : null
              }`}
            />
          </div>
          <div
            onClick={() => handleDelete(id)}
            className="h-[135px] cursor-pointer w-[70px] mt-5 border-[#ffffff26] rounded-xl flex justify-center items-center border border-solid"
          >
            <MdClear className="text-3xl text-[#707070]" />
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default ChoiceCartFrame;

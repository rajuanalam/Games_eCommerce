import dStar from "../../../assets/dStar.png";
import bag from "../../../assets/bag.png";
import share from "../../../assets/share.png";
import sub from "../../../assets/sub.png";
import inh from "../../../assets/inh.png";
import ProductDetailButton from "../ProductDetailButton";
import Flex from "../../Flex";
import Image from "../../Image";
import ProductDetailFormMostButton from "./ProductDetailFormMostButton";
import { IoIosArrowDown } from "react-icons/io";
import style from "../../../Css/button.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../redux/addToCart/Actions";
import {increment} from '../../../redux/counter/Actions';
import { Link } from "react-router-dom";
import CartBuyBtn from "../../CartBuyBtn";

const DetailFrom = () => {

  const dispatch = useDispatch()
  
  const data = useSelector((state) => state.clickCart.data[0]);
  
  const handleDispatch = (info) => {
    dispatch(addCart(info))
    dispatch(increment(1))
  }

  return (
    <div childrenClass="bg-[#1E2127] pt-6 pr-[58px] pb-7 pl-14 w-[817px]">
      <div className="pb-5 border-b broder-solid border-[#ffffff33] flex items-center justify-center">
        <Flex className="gap-x-3">
          <div>
            <Image src={sub} />
          </div>
          <div>
            <h3 className="font-normal  text-white text-[23px] ">
              {data.title}
            </h3>
          </div>
        </Flex>
      </div>
      <Flex className="pt-[34px] justify-between">
        <Flex className="items-center gap-x-5">
          <Flex className="w-[200px] h-[54px] bg-black justify-center items-center rounded-3xl">
            <Image src={dStar} alt="image" />
          </Flex>
          <div>
            <h3 className="text-[#787A7D] text-[23px] font-os font-normal">
              5.0 (457 Reviews)
            </h3>
          </div>
        </Flex>
        <div className="cursor-pointer">
          <Image src={share} alt="image" />
        </div>
      </Flex>
      {/* product name */}
      <div className="mt-[18px] mb-6">
        <h3 className="text-white font-inter text-[58px] font-normal">
          The Last Of Us Part II
        </h3>
      </div>

      {/* button */}
      <ProductDetailFormMostButton />
      {/* button */}

      <Flex className="pt-11 pb-7 items-center gap-x-5">
        <ProductDetailButton
          bdrColor="border-[#28B8E3]"
          txtColor="text-[#28B8E3]"
        >
          Save 25%
        </ProductDetailButton>

        <ProductDetailButton
          bdrColor="border-[#E614FC]"
          txtColor="text-[#E614FC]"
          condition={true}
        >
          Instant Delivery
        </ProductDetailButton>

        <ProductDetailButton bdrColor="border-white" txtColor="text-white">
          Ask Question
        </ProductDetailButton>
      </Flex>
      {/* ====================== */}
      <Flex className="py-3 justify-between items-center pr-7 pb-3 pl-7 bg-white rounded-lg w-full">
        <div>
          <Image src={bag} />
        </div>
        <Flex className="gap-x-2">
          <h3 className="text-black text-2xl font-inter font-normal">
            Sold By
          </h3>
          <h3 className="text-[#E614FC] text-2xl font-inter font-normal">
            BigBoyGames
          </h3>
        </Flex>
        <div className="h-8 w-[2px] bg-black"></div>
        <Flex className="gap-x-2">
          <h3 className="text-black text-2xl font-inter font-normal">
            100% of 281 ratings
          </h3>
          <h3 className="text-black text-2xl font-inter font-bold">superb!</h3>
        </Flex>
      </Flex>
      {/* ============= */}
      <Flex className="justify-center items-center mt-4 relative mb-7 pb-8 border-b broder-solid border-[#ffffff33]">
        <select
          name=""
          id=""
          className="bg-[#1E2127] appearance-none text-white text-2xl font-inter font-normal focus:outline-none text-center"
        >
          <option value="">6 More Offers Available Starting From $55.99</option>
          <option value="">6 More Offers Available Starting From $55.99</option>
          <option value="">6 More Offers Available Starting From $55.99</option>
        </select>
        <div className="absolute top-0 right-14">
          <IoIosArrowDown className="text-white text-3xl" />
        </div>
      </Flex>
      {/* ================= */}
      <Flex className="justify-between items-center pb-10 border-b broder-solid border-[#ffffff33]">
        <Flex className="flex-col">
          <h3 className="text-[#78797D]  font-normal text-xl">From</h3>
          <del className="text-[#78797D]  font-normal text-xl leading-3">
            ${data.discount} to
          </del>
        </Flex>
        <h3 className="text-[#E614FC]  font-medium text-[28px]">
          ${data.price}
        </h3>
        <div>
          <button
            className={`py-3 px-6 ${style.button_two} text-2xl text-black  font-normal rounded-lg`}
          >
            Grab 15% OFF
          </button>
        </div>

        <div className="">
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
        <Link to='/addcart' onClick={() => handleDispatch(data)}>
          <CartBuyBtn condition={true} text="Buy Now"/>
        </Link>
      </Flex>
      {/* ================== */}
      <Flex className='items-center justify-center mt-6 gap-x-4'>
        <div>
            <Image src={inh} alt="iamge"/>
        </div>
        <div>
            <h3 className="text-[22px] font-normal font-os text-white">How to activate</h3>
        </div>
      </Flex>
    </div>
  );
};

export default DetailFrom;

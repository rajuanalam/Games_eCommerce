import Flex from "./Flex";
import { FaRegHeart } from "react-icons/fa6";
import Image from "./Image";
import Star from "../Icons/Star";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {clickAdd} from '../redux/clickCart/Actions'


const ArrivalCard = ({
  bannerImage,
  title,
  price,
  discount,
  offerPer,
  info,
  iconOne,
  iconTwo,
  iconThree,
  iconFour,
  iconFive,
}) => {

  const dispatch = useDispatch();
  const handleDispatch = (info) => {
    dispatch(clickAdd(info));
  };
  


  return (
    <div>
     <Link to="/productdetail" onClick={() => handleDispatch(info)}>
     <div className="w-[393px] xs:w-[158px] rounded-2xl bg-searchBgColor mt-8 xs:mt-2">
        <div className=" pt-4 px-4 pb-8 rounded-r20 xs:pt-2 xs:px-2 xs:pb-2">
          <div className="  pb-4 relative">
           
              <Image src={bannerImage} alt="image" className=" " />
           

            <div className="absolute top-2.5 left-2.5">
              {offerPer == 0 ? (
                null
              ) : (
                <p className="bg-gradient-to-br from-[#FC00FF] to-[#00DBDE]  text-black text-2xl font-semibold px-4 xs:px-2 py-2.5 xs:py-1 xs:text-sm rounded-full inline-block">
                  {offerPer}
                </p>
              )}
            </div>
            <div className=" w-[54px] h-[54px] rounded-full bg-white opacity-70 cursor-pointer absolute top-2.5 right-2.5 z-20 xs:hidden">
              <FaRegHeart className="text-3xl text-black text-center ml-3 mt-3.5" />
            </div>
          </div>
          <div>
            <h3 className="text-[28px] text-white  font-normal pl-3 xs:text-sm xs:pl-1 xs:-mt-2">
              {title}
            </h3>
          </div>
          <Flex className="pl-3 pt-4 xs:pt-0 xs:pl-1">
          {discount ? (
                <Flex className="flex-col">
                  <h3 className="text-[#78797D] font-os font-normal text-lg">
                    From
                  </h3>
                  <del className="text-[#78797D] font-os font-normal text-lg leading-3">
                    ${discount} to
                  </del>
                </Flex>
              ) : null}
            <p className="text-priceColor text-[28px] font-normal pr-4 xs:text-sm xs:pr-2 xs:pt-1">
              ${price}
            </p>
            <Flex className="pt-1 gap-x-1  xs:hidden">
              <Star svgW={29} svgH={28} />
              <Star svgW={29} svgH={28} />
              <Star svgW={29} svgH={28} />
              <Star svgW={29} svgH={28} />
              <Star svgW={29} svgH={28} />
            </Flex>
            <Flex className="pt-1 gap-x-1 hidden xs:inline-flex xs:gap-x-0 xs:pt-2">
              <Star svgW={10} svgH={10} />
              <Star svgW={10} svgH={10} />
              <Star svgW={10} svgH={10} />
              <Star svgW={10} svgH={10} />
              <Star svgW={10} svgH={10} />
            </Flex>
          </Flex>
          <Flex className="justify-center gap-x-7 pt-7 xs:pt-3">
            <Flex className="gap-x-7 xs:text-[18px] xs:gap-x-2 text-[34px] text-textColor">
              <Link to="" className="text-[42px] -mt-1 xs:text-[24px]">
                {iconOne}
              </Link>
              <Link to="">{iconTwo}</Link>
              <Link to="">{iconThree}</Link>

              <Link to="" className="border-l border-l-textColor pl-5 h-[35px] xs:pl-2 xs:h-[20px]">
                {iconFour}
              </Link>
              <Link to="">
                <Image src={iconFive} alt="icon" className="xs:w-[19px]" />
              </Link>
            </Flex>
          </Flex>
        </div>
      </div></Link>
    </div>
  );
};

export default ArrivalCard;

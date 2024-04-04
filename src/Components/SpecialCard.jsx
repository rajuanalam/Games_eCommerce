import Flex from "./Flex";
import Image from "./Image";
import { Link } from "react-router-dom";

const SpecialCard = ({
  img,
  title,
  price,
  discount,
  text,
}) => {
  return (
    <div>
      <div className="w-[524px] xs:w-[327px] rounded-3xl bg-searchBgColor mt-8 xs:mt-4 xs:rounded-2xl">
        <div className=" pt-2 px-2 pb-2 rounded-3xl xs:rounded-2xl">
          <Flex className=" relative ">
            <Link to="">
              <Image
                src={img}
                alt="image"
                className=" rounded-3xl mr-3 xs:w-[76px]"
              />
            </Link>
            <div>
              <h3 className="text-[28px] text-white  font-normal pl-3 pt-4 xs:text-sm xs:pl-1 xs:pt-3 ">
                {title}
              </h3>
              <div className="pl-3 xs:pl-1">
                {price == null ? (
                  <p className="text-priceColor text-[28px] font-normal pr-4 xs:text-base">
                    {text}
                  </p>
                ) : (
                  <Flex className=" pt-2.5 xs:pt-0 ">
                    <p className="w-[62px] text-textColor text-lg font-normal leading-none pt-1 xs:text-xs xs:w-[38px]">
                      From $70 to
                    </p>
                    <p className="text-priceColor text-[28px] font-normal pr-4 xs:text-sm xs:pt-2">
                      ${price}
                    </p>
                  </Flex>
                )}
              </div>
            </div>
            <div className=" absolute right-3 bottom-3.5 ">
              {discount == null ? (
                <p className=" text-saveColor text-xl font-semibold border border-saveColor px-2 py-2 rounded-md hidden">
                  {discount}
                </p>
              ) : (
                <p className=" text-saveColor text-xl font-semibold inline-block border border-saveColor px-2 py-2 rounded-md xs:text-xs xs:px-[3px] xs:py-[3px]">
                  {discount}
                </p>
              )}
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;

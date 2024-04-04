import Flex from "./Flex";
import Image from "./Image";
import { Link } from "react-router-dom";

const ComingCard = ({ img, title, release, iconOne, iconTwo, iconThree }) => {
  return (
    <div>
      <div className="w-[393px] xs:w-[158px] xs:mt-2 rounded-2xl bg-searchBgColor mt-8">
        <div className=" pt-4 px-4 pb-8 rounded-2xl xs:pt-2 xs:px-2 xs:pb-2">
          <div className="  pb-4 relative">
            <Link to="">
              <Image src={img} alt="image" className="w-full " />
            </Link>
          </div>
          <div>
            <h3 className="text-[28px] text-white  font-normal pl-3 xs:text-sm xs:pl-2 xs:-mt-2">
              {title}
            </h3>
          </div>

          <p className="text-priceColor text-[26px] font-normal pr-4 pl-3 xs:text-sm xs:pl-2 xs:pt-1">
            {release}
          </p>

          <Flex className="justify-center gap-x-7 pt-7 xs:pt-3">
            <Flex className="gap-x-7 xs:text-[18px] xs:gap-x-2 text-[34px] text-textColor">
              <Link to="" className="text-[42px] -mt-1 xs:text-[24px]">
                {iconOne}
              </Link>
              <Link to="">{iconTwo}</Link>
              <Link to="">{iconThree}</Link>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default ComingCard;

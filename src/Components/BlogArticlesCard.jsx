import Clock from "../Icons/Clock";
import Flex from "./Flex";
import Image from "./Image";
import { Link } from "react-router-dom";
import { RiEyeFill } from "react-icons/ri";
import { PiClockCountdownFill } from "react-icons/pi";

const BlogArticlesCard = ({ img, title, date, readTime, view }) => {
  return (
    <div>
      <div className=" w-[817px] xs:w-[327px] rounded-2xl bg-searchBgColor">
        <div className="p-7 xs:p-2">
          <Flex>
            <div className="w-1/2 ">
              <Link to="">
                <Image
                  src={img}
                  alt="image"
                  className="xs:w-[127px] xs:h-[107px]"
                />
              </Link>
            </div>
            <div className="w-1/2 pl-8 pt-8 xs:pl-0 xs:pt-1">
              <h3 className="text-[28px] xs:text-sm text-white  font-normal leading-snug">
                {title}
              </h3>
              <p className="text-priceColor text-[26px] font-normal pt-7 xs:pt-1 xs:text-[13px]">
                {date}
              </p>
              <Flex className=" gap-x-5 xs:gap-x-1 pt-4 items-center xs:pt-0">
                <Flex className="items-center gap-x-1">
                  <PiClockCountdownFill className="text-3xl text-textColor xs:text-xl" />

                  <p className="text-textColor text-[20px] xs:text-sm font-normal leading-none">
                    {readTime}
                  </p>
                </Flex>
                <Flex className="items-center gap-x-1">
                  <RiEyeFill className="text-3xl text-textColor xs:text-xl" />
                  <p className="text-textColor text-[20px] font-normal leading-none xs:text-[13px]">
                    {view}
                  </p>
                </Flex>
              </Flex>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default BlogArticlesCard;

import Image from "./Image";
import React from "react";
import Flex from "./Flex";
import Star from "../Icons/Star";

const ReviewsCard = ({ img, username, text }) => {
  return (
    <>
      <div className="w-[540px] xs:w-[204px] h-[237px] xs:h-[100px] bg-gradient-to-b from-borderOneColor via-borderTwoColor to-borderThreeColor p-[2px] flex justify-center rounded-3xl xs:rounded-xl">
        <div className="bg-searchBgColor h-full w-full rounded-3xl xs:rounded-xl ">
          <Flex className="mt-10 ml-9 xs:mt-3 xs:ml-3">
            <Image
              src={img}
              alt="image"
              className="w-[56px] h-[56px] xs:w-[28px] xs:h-[28px] ring-2 ring-imageRingColor ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 rounded-full"
            />
            <div className="ml-5 xs:ml-2">
              <h4 className="text-2xl font-medium text-white xs:text-sm">
                {username}
              </h4>
              <Flex className="">
                <Star svgW="12px" svgH="12px" />
                <Star svgW="12px" svgH="12px" />
                <Star svgW="12px" svgH="12px" />
                <Star svgW="12px" svgH="12px" />
                <Star svgW="12px" svgH="12px" />
              </Flex>
            </div>
          </Flex>
          <p className="text-[22px] font-normal text-searchIconColor pl-8 pt-6 pr-8 xs:text-sm xs:tracking-tighter xs:pt-1  xs:pl-3 xs:pr-0">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewsCard;

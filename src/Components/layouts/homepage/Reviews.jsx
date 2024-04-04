import Flex from "../../Flex";
import ReviewsCard from "../../ReviewsCard";
import Star from "../../../Icons/Star";
import Image from "../../Image";
import Rectangle1 from "../../../assets/Rectangle1.png";
import Woman1 from "../../../assets/woman1.png";
import Man1 from "../../../assets/man1.png";
import Man2 from "../../../assets/man2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../../Container";

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="pt-28 pb-36 xs:py-4 ml-[80px] mx-auto ">
      <Container>
        <Flex className="">
          <div className="mr-28 xs:mr-5 xs:-ml-10  xs:w-[100%]">
            <h3 className="text-white text-[40px] font-bold  leading-snug xs:text-sm">
              Trustpilot
            </h3>
            <h3 className="text-white text-[40px] font-bold leading-snug pl-3 pb-7 xs:text-sm xs:pl-0 xs:pb-2">
              Reviews
            </h3>
            <Image src={Rectangle1} alt={Rectangle1} className="-ml-1" />
            <Flex className="items-center gap-x-2 pl-5 pt-6 xs:pt-1 xs:pl-1">
              <p className="text-[#38AAE6] text-[47px] font-bold xs:text-base ">
                5.0
              </p>
              <Star svgW="18px" svgH="17px" />
            </Flex>
          </div>

          <div className="slider-container -mt-2">
            <Slider {...settings}>
              <div>
                <ReviewsCard
                  img={Woman1}
                  username="Username"
                  text="Lorem Ipsum is simply dummy text of the  printing and type."
                />
              </div>
              <div>
                <ReviewsCard
                  img={Man1}
                  username="Username"
                  text="Lorem Ipsum is simply dummy text of the  printing and type."
                />
              </div>
              <div>
                <ReviewsCard
                  img={Man2}
                  username="Username"
                  text="Lorem Ipsum is simply dummy text of the  printing and type."
                />
              </div>
            </Slider>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Reviews;

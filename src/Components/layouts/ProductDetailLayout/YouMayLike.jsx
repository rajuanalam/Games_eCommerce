import BrowseButton from "../../BrowseButton";
import Container from "../../Container";
import Flex from "../../Flex";
import Heading from "../../Heading";
import ArrivalCard from "../../ArrivalCard";
import Image from "../../Image";
import newArrivalData from "../../Data/ArrivalData";
import Rectangle1 from "../../../assets/Rectangle1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../../RightArrow";
import LeftArrow from "../../LeftArrow";

const YouMayLike = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pb-44">
      <Container>
        <div className="pt-10 ">
          <Flex className="items-center px-0 justify-center xs:px-0 xs:ml-0 xs:justify-center  ">
            <Flex className="items-center justify-between">
              <Heading
                as="h4"
                text="You May Also Like"
                className=" xs:text-base xs:mr-2"
              />

              <Image
                src={Rectangle1}
                alt={Rectangle1}
                className="w-[1140px] xs:w-[120px] "
              />

              <BrowseButton text="Browse All" className="ml-7 xs:-ml-2" />
            </Flex>
          </Flex>
          <div className="xs:flex xs:justify-center xs:mx-auto ">
            <div className="slider-container responsive-slider ">
              <Slider {...settings} className="responsive-slider">
                {newArrivalData.map((item) => (
                  <div className="my-2">
                    <ArrivalCard
                      key={item.id}
                      info={item}
                      bannerImage={item.bannerImage}
                      discount={item.discount}
                      offerPer={item.offerPer}
                      title={item.title}
                      price={item.price}
                      iconOne={item.iconOne}
                      iconTwo={item.iconTwo}
                      iconThree={item.iconThree}
                      iconFour={item.iconFour}
                      iconFive={item.iconFive}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default YouMayLike;

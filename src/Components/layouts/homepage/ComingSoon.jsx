import BrowseButton from "../../BrowseButton";
import Container from "../../Container";
import Flex from "../../Flex";
import Heading from "../../Heading";
import Image from "../../Image";
import { useState } from "react";
import ComingCard from "../../ComingCard";
import ComingSoonData from "../../Data/ComingSoonData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../../RightArrow";
import LeftArrow from "../../LeftArrow";
import Rectangle1 from "../../../assets/Rectangle1.png";

const ComingSoon = () => {
  const [product, setProduct] = useState(ComingSoonData());

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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="bg-[#15181D] rounded-md pb-40 xs:w-[100%] xs:pb-20">
      <Container>
        <div className="">
          <Flex className="items-center px-10 xs:px-0 xs:ml-0 xs:justify-center  ">
            <Flex className="items-center justify-between">
              <Heading
                as="h4"
                text="Coming Soon"
                className="mr-8 xs:text-base xs:mr-2"
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
                {product.map((el, index) => (
                  <div className="my-2" key={index}>
                    <ComingCard
                      img={el.img}
                      title={el.title}
                      release={el.release}
                      iconOne={el.iconOne}
                      iconTwo={el.iconTwo}
                      iconThree={el.iconThree}
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

export default ComingSoon;

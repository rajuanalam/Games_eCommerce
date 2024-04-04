import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import Image from '../../Image'
import BrowseButton from '../../BrowseButton'
import Heading from '../../Heading'
import Rectangle1 from '../../../assets/Rectangle1.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewsCard from '../../ReviewsCard'
import Woman1 from "../../../assets/woman1.png";
import Man1 from "../../../assets/man1.png";
import Man2 from "../../../assets/man2.png";

const ProductReviews = () => {

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
    <>
    <div className='pb-44'>
        <Container>
        <div className="items-center justify-center xs:px-0 xs:ml-0 xs:justify-center  ">
                <Flex className="items-center justify-between">
                  
                  <Heading as="h4" text="Product Reviews" className="mr-8 xs:text-base xs:mr-2"/>
                  
                 
                  <Image src={Rectangle1} alt={Rectangle1} className='w-[1140px] xs:w-[120px] '/>
                 
          
                 
                  <BrowseButton text="Browse All" className="ml-7 xs:-ml-2" />
                 
                </Flex>
                <div className='mt-12'>
                <div className="slider-container review-slider">
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
                </div>
               
          </div>
        </Container>
    </div>
    </>
  )
}

export default ProductReviews

import BrowseButton from "../../BrowseButton";
import Container from "../../Container";
import WeeklyDealsData from "../../Data/WeeklyDealsData";
import Flex from "../../Flex";
import Heading from "../../Heading";
import WeeklyDealsCard from "../../WeeklyDealsCard";
import Image from "../../Image";
import { useState } from "react";
import Rectangle1 from '../../../assets/Rectangle1.png'

const WeeklyDeals = () => {

  const [product, setProduct] = useState(WeeklyDealsData());

  return (
    <>
      <div className="xs:bg-none mx-auto w-[1763px] xs:w-[100%] h-[680px] bg-gradient-to-b from-borderOneColor via-borderTwoColor to-borderThreeColor p-[2px] flex justify-center rounded-3xl">
        <div className=" bg-[#15181D] h-full w-full rounded-3xl ">
          <Container>
            <div className="pt-10 ">
              <Flex className="items-center px-10 xs:px-0 xs:ml-0 xs:justify-center  ">
                <Flex className="items-center ">
                  <div>
                  <Heading as="h4" text="Weekly Deals" className="xs:text-base xs:mr-2"/>
                  </div>
                  <div>
                  <Image src={Rectangle1} alt={Rectangle1} className='hidden xs:inline-block xs:w-[120px] '/>
                  </div>
                  <div>
                  <BrowseButton to="/shoplist" text="Browse All" className="ml-7 xs:-ml-2" />
                  </div>
                </Flex>
                <div>
                  <Image src={Rectangle1} alt={Rectangle1} className='xs:hidden'/>
                </div>
                <Flex className="items-center gap-x-3.5 xs:hidden">
                  <div className="bg-gradient-to-r from-buttonColorTwo to-buttonColorOne inline-block py-3.5 px-4 rounded-md text-white font-normal text-2xl">
                    06
                  </div>
                  <p className="text-4xl text-searchIconColor">:</p>
                  <div className="bg-gradient-to-r from-buttonColorTwo to-buttonColorOne inline-block py-3.5 px-4 rounded-md text-white font-normal text-2xl">
                    24
                  </div>
                  <p className="text-4xl text-searchIconColor">:</p>
                  <div className="bg-gradient-to-r from-buttonColorTwo to-buttonColorOne inline-block py-3.5 px-4 rounded-md text-white font-normal text-2xl">
                    59
                  </div>
                  <p className="text-4xl text-searchIconColor">:</p>
                  <div className="bg-gradient-to-r from-buttonColorTwo to-buttonColorOne inline-block py-3.5 px-4 rounded-md text-white font-normal text-2xl">
                    01
                  </div>
                </Flex>
              </Flex>
             <Flex className="justify-between xs:justify-center xs:gap-x-2 xs:flex-wrap ">
             {product.map((el, index) => (
            <div className="my-2" key={index}>
              <WeeklyDealsCard
              img={el.img}
              discount={el.discount}
                title={el.title}
                price={el.price}
                iconOne={el.iconOne}
                iconTwo={el.iconTwo}
                iconThree={el.iconThree}
                iconFour={el.iconFour}
                iconFive={el.iconFive}
              />
            </div>
          ))}
             </Flex>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default WeeklyDeals;

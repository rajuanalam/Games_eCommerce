
import BrowseButton from "../BrowseButton";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import { useState } from "react";
import SpecialCard from "../SpecialCard";
import GiftCardsData from "../Data/GiftCardsData";
import Rectangle1 from "../../assets/Rectangle1.png"
import Image from "../Image";
const GiftCards = () => {
  const [product, setProduct] = useState(GiftCardsData());

  return (
    <div className="bg-[#15181D] rounded-md w-[524px] xs:w-[100%] xs:flex xs:justify-center xs:pt-8">
      <Container>
        <div className="">
          <Flex className="items-center justify-between px-4">
            <Heading as="h4" text="Gift Cards" className="xs:text-base"/>
            <Image src={Rectangle1} alt={Rectangle1} className=" hidden xs:inline-block xs:w-[100px]" />
            <BrowseButton text="Browse All" className="" />
          </Flex>
          <div className="pt-3">
            {product.map((el, index) => (
              <div className="" key={index}>
                <SpecialCard
                  img={el.img}
                  title={el.title}
                  text={el.text}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GiftCards;

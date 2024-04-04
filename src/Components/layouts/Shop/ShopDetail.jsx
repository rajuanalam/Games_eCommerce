import React, { useState } from "react";
import Container from "../../Container";
import Flex from "../../Flex";
import BrowseButton from "../../BrowseButton";
import Delivery from "../Delivery";
import ShortBy from "../ShortBy";
import Price from "../Price";
import Seller from "../Seller";
import cartData from "../../Data/CartData";
import ArrivalCard from "../../ArrivalCard";

const ShopDetail = () => {

  

  return (
    <div className="pb-24" >
      <Container>
        <Flex className="pt-8 pb-20 gap-x-8">
          <BrowseButton text="PlayStation Network" />
          <BrowseButton text="PS5" />
          <BrowseButton text="PS4" />
          <BrowseButton text="PS3" />
          <BrowseButton text="PSVR" />
        </Flex>
        <Flex className="gap-x-16">
          <div className="w-[393px]">
            <Delivery />
            <ShortBy />
            <Price />
            <Seller />
          </div>
          <div>
               <Flex className="flex-wrap justify-between">
              {cartData.map((item) => (
        <div className="my-2" >
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
              </Flex> 
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default ShopDetail;

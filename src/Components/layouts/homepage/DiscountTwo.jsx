
import BuyButton from "../../BuyButton";
import Container from "../../Container";
import Flex from "../../Flex";
import Image from "../../Image";
import Evil from '../../../assets/evil.png'
import IconGroup from '../../../assets/iconGroup.png'
import GroupTwo from '../../../assets/groupTwo.png'
import DisRec from '../../../assets/disRec.png'

const DiscountTwo = () => {
  return (
    <div className="pt-36 pb-44 xs:pt-0 xs:pb-5 xs:-mt-10 xs:w-[100%] xs:flex xs:justify-center">
      <Container>
        <Flex className="justify-between xs:block ">
          <div className="w-[817px] xs:w-[327px] h-[438px] xs:h-[180px] bg-gradient-to-b from-borderOneColor via-borderTwoColor to-borderThreeColor p-[2px] rounded-3xl">
            <div className="w-full h-full bg-searchBgColor rounded-3xl relative">
            <Image
                src={IconGroup}
                alt={IconGroup}
    
                className="pl-[55px] pt-[65px] xs:w-[200px] xs:pt-8 xs:pl-6"
              />
              <h2 className="text-white text-[64px] font-normal pl-[55px] pt-6 xs:text-[26px] xs:pt-0 xs:pl-6">
              RE4 Remake DLC
              </h2>
              <Image
                src={GroupTwo}
                alt={GroupTwo}
              
                className="pl-[55px] pt-5 xs:pt-2 xs:pl-6 xs:w-[200px]"
              />
              <div className="absolute top-0 right-16  xs:right-5">
              <Image src={DisRec} alt={DisRec} className="xs:w-[44px]"/>
                <div className="absolute top-2 right-[22px] text-white text-[26px] xs:text-xs xs:right-[10px] xs:top-1">
                  <p>Save</p>
                  <p>25%</p>
                </div>
              </div>
              <BuyButton text="Buy Now" className="ml-[55px] mt-9 xs:mt-2 xs:ml-6" />
            </div>
          </div>
          <Image src={Evil} alt={Evil} className="xs:w-[327px] xs:pt-5" />
        </Flex>
      </Container>
    </div>
  );
};

export default DiscountTwo;

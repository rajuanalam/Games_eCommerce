import Container from "../../Container";
import Flex from "../../Flex";
import List from "../../List";
import FaceBook from "../../../Icons/FaceBook";
import Instagram from "../../../Icons/Instagram";
import LinkeDin from "../../../Icons/LinkeDin";
import LogoIcon from "../../../Icons/LogoIcon";
import Xicon from "../../../Icons/Xicon";
import Image from "../../Image";
import { Link } from "react-router-dom";
import Trustpilotlogo from '../../../assets/trustpilotlogo.png'
import SafeSecure from '../../../assets/safe&secure.png'
import Payment from '../../../assets/payment.png'




const Footer = () => {
  return (
    <div className="w-[1862px] h-[923px] bg-gradient-to-b from-borderOneColor via-borderTwoColor to-borderThreeColor p-[2px] rounded-3xl mx-auto flex justify-center">
      <div className="w-full h-full bg-searchBgColor rounded-3xl">
        <Container>
          <Flex className="pt-36 justify-between">
            <div>
              <h4 className="text-[28px] text-white font-medium">Trustful</h4>
              <Image
                src={Trustpilotlogo}
                alt={Trustpilotlogo}
                className="mt-8"
              />
              <p className="text-textColor text-[20px] pt-2">
                TrustScore 5.0 | 457 Reviews
              </p>
              <Image
                src={SafeSecure}
                alt={SafeSecure}
                className=" mt-8 "
              />
              <p className="text-textColor text-[20px]  border-b border-b-textColor pb-10">
                100% Secure, 24/7 Support
              </p>
              <p className="text-priceColor text-[25px] font-normal pt-4">
                100% Money Back
              </p>
            </div>
            <div>
              <h4 className="text-[28px] text-white font-medium pb-8">
                Company
              </h4>
              <ul className="flex flex-col gap-12">
                <List to="" text="Home" />
                <List to="" text="Our Story" />
                <List to="" text="Blog" />
                <List to="" text="Contact Us" />
              </ul>
            </div>
            <div>
              <h4 className="text-[28px] text-white font-medium pb-8">
              Orders
              </h4>
              <ul className="flex flex-col gap-12">
                <List to="" text="My Orders" />
                <List to="" text="Refund Policy" />
                <List to="" text="Cancelations" />
                <List to="" text="Help Center" />
              </ul>
            </div>
            <div>
              <h4 className="text-[28px] text-white font-medium pb-8">
              Resources
              </h4>
              <ul className="flex flex-col gap-12">
                <List to="" text="Why do Customers Love Us" />
                <List to="" text="Redeem Argentina and Turkey" />
                <List to="" text="How to Sell?" />
                <List to="" text="How Become affliate?" />
              </ul>
            </div>
            <div>
              <h4 className="text-[28px] text-white font-medium pb-8">
              Follow Us
              </h4>
              <Flex className="gap-x-2 ">
                <Link to=""><Xicon /></Link>
                <Link to=""><Instagram /></Link>
                <Link to=""><FaceBook /></Link>
                <Link to=""><LinkeDin /></Link>

              </Flex>
            </div>
          </Flex>
          <div className="flex justify-center pt-32">
            <Image src={Payment} alt={Payment}/>
          </div>
          <Flex className="justify-between pt-28">
            <p className="text-white text-[22px]">Vbrae © Copyright 2023</p>
            <LogoIcon />
            <p className="text-white text-[22px]">Privacy Policy | Terms of Service</p>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

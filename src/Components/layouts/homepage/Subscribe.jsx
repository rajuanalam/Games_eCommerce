import BuyButton from "../../BuyButton";
import Container from "../../Container";
import Flex from "../../Flex";
import Mail from "../../../Icons/Mail";


const Subscribe = () => {
  return (
    <div className=" pb-48">
      <Container>
        <div className="w-[1664px] h-[183px] xs:w-[330px] xs:h-[137px] bg-gradient-to-b from-borderOneColor via-borderTwoColor to-borderThreeColor p-[2px] rounded-3xl">
          <div className="w-full h-full bg-searchBgColor rounded-3xl relative">
            <Flex className="justify-between xs:flex-col">
              <Flex className="gap-x-5 items-center pt-10 pl-10 xs:pl-2 xs:pt-2">
                <Mail />
                <div>
                  <h2 className="text-white text-[38px] font-medium xs:text-sm">
                    Sign up For Newsletter
                  </h2>
                  <p className="text-searchIconColor text-2xl font-normal xs:text-sm">
                    Stay tuned! Receive News and Discounts on your email
                  </p>
                </div>
              </Flex>
              <Flex className="pt-[56px] gap-x-3 pr-10 xs:pt-3 xs:pl-6 xs:items-center">
                <input
                  id="txtColor"
                  className="w-[565px] xs:w-[200px] xs:h-7 h-16 rounded-lg bg-white text-black px-7 xs:px-2  outline-none text-2xl xs:text-sm
                  "
                  placeholder="your@email.com"
                  type="email"
                ></input>
                <BuyButton text="Subscribe" className="xs:m" />
              </Flex>
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;

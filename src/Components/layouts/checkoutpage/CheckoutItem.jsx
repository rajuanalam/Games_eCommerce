import Container from "../../Container";
import Flex from "../../Flex";
import Image from "../../Image";
import style from "../../../Css/nav.module.css";
import MasterCard from "../../../assets/mastercard.png";
import Stripe from "../../../assets/stripe.png";
import ApplePay from "../../../assets/applepay.png";
import Amex from "../../../assets/amex.png";
import Viva from "../../../assets/viva.png";
import Paypal from "../../../assets/paypal.png";
import Qpay from "../../../assets/qpay.png";
import Visa from "../../../assets/visa.png";
import Gpay from "../../../assets/gpay.png";
import Skrill from "../../../assets/skrill.png";
import Amazon from "../../../assets/amazon.png";
import { IoIosLock } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Trust from '../../../assets/trustp.png'
import Support from '../../../assets/support.png'
import { useSelector } from "react-redux";

const CheckoutItem = () => {

  const data = useSelector((state) => state);

  const totlePrice = data.addCart.data.reduce(
    (totle, currentValue) => (totle += currentValue.price),
    0
  );

  const vatPrice = data.addCart.data.reduce(
    (totle, currentValue) => (totle += currentValue.vat),
    0
  );

  // VAT

 const totalPrice = totlePrice + vatPrice

  const handleItem = (value) => {
    switch (value) {
      case 1:
        return "1 Item";

      default:
        return `${value} Items`;
    }
  };

  const countdata = useSelector((state) => state.count)

  return (
    <div className="bg-[#15181D] rounded-md pt-10 pb-48">
      <Container>
        <div className="">
        <Flex>
          <Flex className="w-[216px] items-center gap-x-2">
            <h3 className="font-inter font-normal text-white text-3xl">
              My Cart
            </h3>
            <div
              className={`w-7 h-7 rounded-full -top-3 -right-3 ${style.count_bg}`}
            >
              <Flex className="justify-center items-center">
                <h3 className="text-[19px] font-os font-bold text-white">{countdata.value}</h3>
              </Flex>
            </div>
          </Flex>
          <div className="bg-bdr w-[1200px] h-[2px] bg-no-repeat bg-center pt-16 "></div>
          <div className="w-[300px]">
            <button className="text-2xl border border-white border-solid rounded-xl text-white font-os font-normal pt-4 pl-5 pr-4 pb-[10px]">
              Continue Shopping
            </button>
          </div>
        </Flex>
          <Flex className="pt-16 justify-between">
            <div>
              <Flex className="gap-x-5">
                <Image src={MasterCard} alt={MasterCard} />
                <Image src={Stripe} alt={Stripe} />
                <Image src={ApplePay} alt={ApplePay} />
                <Image src={Amex} alt={Amex} />
                <Image src={Viva} alt={Viva} />
                <Image src={Paypal} alt={Paypal} />
                <Image src={Qpay} alt={Qpay} />
                <Image src={Visa} alt={Visa} />
                <Image src={Gpay} alt={Gpay} />
                <Image src={Skrill} alt={Skrill} />
                <Image src={Amazon} alt={Amazon} />
              </Flex>
              <Flex className="pt-9">
                <Flex className="items-center gap-x-10">
                  <div className="flex flex-col gap-y-6">
                  <Flex className="items-center">
                  <input
                    className="w-[526px] rounded-lg bg-searchBgColor  py-7 pl-5 outline-none text-white phColor"
                    placeholder="Card Name:"
                    type="text"
                  />
                  <IoIosLock className="-ml-12 text-4xl text-textColor"/>
                  </Flex>
                  <Flex className="items-center ">
                  <input
                    className="w-[526px] rounded-lg bg-searchBgColor  py-7 pl-5 outline-none text-white phColor"
                    placeholder="Card Name:"
                    type="text"
                  />
                  <IoIosLock className="-ml-12 text-4xl text-textColor"/>
                  </Flex>
                  <Flex className="items-center">
                  <input
                    className="w-[526px] rounded-lg bg-searchBgColor  py-7 pl-5 outline-none text-white phColor"
                    placeholder="Card Name:"
                    type="text"
                  />
                  <IoIosLock className="-ml-12 text-4xl text-textColor"/>
                  </Flex>
                
                  </div>
                 
             <div className="flex flex-col gap-y-6">
             <Flex className="items-center">
                 <input
                    className="w-[526px] rounded-lg bg-searchBgColor  py-7 pl-5 outline-none text-white phColor"
                    placeholder="Month:"
                    type="text"
                  />
                  <FaAngleDown className="-ml-12 text-4xl text-white" />
                 </Flex>
                 <Flex className="items-center">
                 <input
                    className="w-[526px] rounded-lg bg-searchBgColor  py-7 pl-5 outline-none text-white phColor"
                    placeholder="Month:"
                    type="text"
                  />
                  <FaAngleDown className="-ml-12 text-4xl text-white" />
                 </Flex>
                 <div>
                  <Link to="">
                  <button className="text-white text-2xl font-normal  py-[23px] px-[216px] bg-gradient-to-r from-buttonColorTwo to-buttonColorOne inline-block rounded-lg outline-none">Pay Now</button></Link>
                 </div>
             </div>
                  
                </Flex>
                
              </Flex>
            </div>
            <div>
                <div className="w-[526px]   p-6 border border-textColor rounded-2xl">
                <div>
        <Flex className="justify-between mb-7">
          <h3 className="text-white font-os font-normal text-[26px]">
            {handleItem(data.count.value)}
          </h3>
          {totlePrice ? (
            <h3 className="text-white font-os font-normal text-[26px]">
              ${totlePrice}
            </h3>
          ) : null}
        </Flex>
        <Flex className="justify-between mb-7">
          <h3 className="text-white font-os font-normal text-[26px]">VAT</h3>
          <h3 className="text-white font-os font-normal text-[26px]">${vatPrice}</h3>
        </Flex>
        <Flex className="justify-between pb-8 border-b broder-solid border-[#ffffff33]">
          <h3 className="text-white font-os font-normal text-[26px]">Fees</h3>
          <h3 className="text-white font-os font-normal text-[26px]">$0</h3>
        </Flex>

        <Flex className="justify-between mt-8">
          <h3 className="text-white font-os font-normal text-[26px]">Total</h3>
          <h3 className="text-white font-os font-normal text-[26px]">
            ${totalPrice }
          </h3>
        </Flex>
      </div>
                </div>
                <div className="w-[526px] mt-10  p-6 border border-textColor rounded-2xl">
                  
                    <div className="border-b border-b-textColor pb-5">
                      <Image src={Trust} alt={Trust} className="mx-auto"/>
                      <p className="text-textColor text-center  text-[20px] pt-2 -ml-7">TrustScore 5.0 | 457 Reviews </p>
                    </div>
                    <div >
                      <Image src={Support} alt={Support} className="mx-auto mt-5"/>
                    </div>
                   
                </div>
                </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutItem;

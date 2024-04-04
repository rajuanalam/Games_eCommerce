import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import comp from "../../../assets/comp.png";
import style from "../../../Css/button.module.css";
import ApplyButton from "../../ApplyButton";
import ApplyInput from "../../ApplyInput";
import Flex from "../../Flex";
import Image from "../../Image";

const CartForm = () => {
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
  // const vat = vatPrice;

  const handleItem = (value) => {
    switch (value) {
      case 1:
        return "1 Item";

      default:
        return `${value} Items`;
    }
  };

 const totalPrice = totlePrice + vatPrice

  return (
    <div className="w-[526px] py-[29px] px-8 bg-[#1E2127] mt-11 ml-4 rounded-xl">
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

          <h3 className="text-white font-os font-normal text-[26px]">
            ${vatPrice ? vatPrice : "0"}
          </h3>
        </Flex>
        <Flex className="justify-between pb-8 border-b broder-solid border-[#ffffff33]">
          <h3 className="text-white font-os font-normal text-[26px]">Fees</h3>
          <h3 className="text-white font-os font-normal text-[26px]">$0</h3>
        </Flex>
        <div className="mt-8">
          <Flex className="gap-x-3 mt-5">
            <ApplyInput placeholder="Coupon Code:" />
            <ApplyButton />
          </Flex>
          <Flex className="gap-x-3 mt-5">
            <ApplyInput placeholder="Referral Code:" />
            <ApplyButton />
          </Flex>
        </div>

        <Flex className="justify-between mt-8 pb-8 border-b broder-solid border-[#ffffff33]">
          <h3 className="text-white font-os font-normal text-[26px]">Total</h3>
          <h3 className="text-white font-os font-normal text-[26px]">
            ${totalPrice}
          </h3>
        </Flex>
        <div>
          <Link to="/checkout">
            <button
              className={`${style.button_bgr} w-full py-3 font-os font-normal text-white text-2xl border-none rounded-xl`}
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
        <Flex className="items-center justify-center mt-8">
          <Image src={comp} alt="image" />
        </Flex>
      </div>
    </div>
  );
};

export default CartForm;

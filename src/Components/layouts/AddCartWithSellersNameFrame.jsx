import Flex from "../Flex";
import Image from "../Image";
import sStar from "../../assets/sStar.png";

const AddCartWithSellersNameFrame = ({ rating, price }) => {
  return (
    <Flex className="gap-x-3 items-center mt-[22px]">
      <div>
        <input
          type="text"
          placeholder="Sellername"
          className="placeholder:text-[23px] placeholder:font-os placeholder:font-normal text-black text-[23px] font-os font-normal w-[219px] py-[14px] pl-5 bg-white rounded-lg focus:outline-none"
        />
      </div>
      <Flex className="items-center gap-x-3">
        <Flex className="p-4 rounded-lg items-center gap-x-1 bg-[#15181D]">
          <Image src={sStar} />
          <h3 className="text-white font-inter font-normal text-[23px]">
            {rating}
          </h3>
        </Flex>

        <Flex className="p-4 rounded-lg items-center gap-x-1 bg-[#15181D]">
          <h3 className="text-white font-inter font-normal text-[23px]">
            {price}
          </h3>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AddCartWithSellersNameFrame;


import Flex from "../Flex";
import Image from "../Image";
import { IoIosArrowUp } from "react-icons/io";
import ins from '../../assets/ins.png'
import manu from '../../assets/manu.png'

const Delivery = () => {
  return (
    <div>
      <Flex className="items-center justify-between">
        <h4 className="text-2xl font-semibold text-[#FB01FF]">Delivery</h4>
        <IoIosArrowUp className="text-[#FB01FF] text-xl cursor-pointer" />
      </Flex>
      <Flex className="py-4 justify-between items-center">
        <Flex className="gap-5">
          <Image src={ins} />
          <h3 className="text-white font-normal text-2xl">Instant Delivery</h3>
        </Flex>
      </Flex>

      <Flex className="py-4 justify-between items-center">
        <Flex className="gap-5">
          <Image src={manu} />
          <h3 className="text-white font-normal text-2xl">Instant Delivery</h3>
        </Flex>
        
      </Flex>
    </div>
  );
};

export default Delivery;

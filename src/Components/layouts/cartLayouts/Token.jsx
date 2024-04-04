import Flex from "../../Flex";
import Image from "../../Image";
import tr from '../../../assets/tr.png';
import sa from '../../../assets/sa.png';

const Token = () => {
  return (
    <div className="w-[526px] pt-8 pb-12 px-8 bg-[#1E2127] mt-12 ml-4 rounded-xl">
      <div>
        <Flex className='items-center gap-x-2 justify-center'>
            <div>
                <Image src={tr} alt="image"/>
            </div>
            <h3 className="font-inter font-semibold text-white text-2xl">Trustpilot</h3>
        </Flex>
        <Flex className='items-center justify-center mt-3 pb-9 border-b broder-solid border-[#ffffff33]'>
            <h3 className="text-xl font-inter font-normal text-[#787A7D]">TrustScore 5.0 | 457 Reviews</h3>
        </Flex>
      </div>

      <div className="mt-7">
        <Flex className='items-center gap-x-2 justify-center'>
            <div>
                <Image src={sa} alt="image"/>
            </div>
            <h3 className="font-inter font-semibold text-white text-2xl">Safe & Secure</h3>
        </Flex>
        <Flex className='items-center justify-center mt-3'>
            <h3 className="text-xl font-inter font-normal text-[#787A7D]">100% Secure, 24/7 Support</h3>
        </Flex>
      </div>
    </div>
  );
};

export default Token;

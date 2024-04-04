import { IoIosArrowUp } from "react-icons/io";
import CheckBox from "../CheckBox";
import Flex from "../Flex";


const Seller = () => {
  const sortByTxt = [
    { id: 1, text: "Seller Name" },
    { id: 2, text: "Seller Name" },
    { id: 3, text: "Seller Name" },
    { id: 4, text: "Seller Name" },
    { id: 5, text: "Seller Name" },
    { id: 6, text: "Seller Name" },
    { id: 7, text: "Seller Name" },
    { id: 8, text: "Seller Name" },
  ];
  return (
    
      <div>
      <Flex className="items-center justify-between">
      <h4 className="text-2xl font-semibold text-[#FB01FF]">Seller</h4>
        <IoIosArrowUp className="text-[#FB01FF] text-xl cursor-pointer" />
      </Flex>
      <div>
        {sortByTxt.map((item) => {
          return <CheckBox key={item.id} text={item.text} />;
        })}
      </div>
      <div>
        <button className="text-[#FC00FF] font-os text-2xl hover:underline font-normal">+ See all</button>
      </div>
      </div>
   
  );
};

export default Seller;

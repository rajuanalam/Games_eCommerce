import { IoIosArrowUp } from "react-icons/io";
import CheckBox from "../CheckBox";
import Flex from "../Flex";

const Price = () => {
  const sortByTxt = [
    { id: 1, text: "$10 to $25" },
    { id: 2, text: "$25 to $50" },
    { id: 3, text: "$50 to $100" },
    { id: 4, text: "$100 to $200" },
  ];
  return (

      <div>
      <Flex className="items-center justify-between">
        
        <h4 className="text-2xl font-semibold text-[#FB01FF]">Price</h4>
        <IoIosArrowUp className="text-[#FB01FF] text-xl cursor-pointer" />
      </Flex>
      <div>
        {sortByTxt.map((item) => {
          return <CheckBox key={item.id} text={item.text} />;
        })}
        <CheckBox text='From' type={true} />
      </div>
      </div>

  );
};

export default Price;

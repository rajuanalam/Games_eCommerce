import { useState } from "react";
import Input from "./Input";
import Flex from "./Flex";

const CheckBox = ({text, type}) => {
  const [color, setColor] = useState(false);
  // handleColor
  const handleColor = () => {
    setColor((prevColor) => !prevColor);
  };
  return (
    <div className="py-4">
      <div className="flex items-center gap-x-2">
        <div onClick={handleColor}  className="w-6 h-6 border-[#E1E1E5] border-solid border bg-white rounded-full cursor-pointer p-[3px]">
          <div
            className={`w-full h-full ${
              color ? "bg-[#FB01FF]" : "bg-[#E1E1E5]"
            } rounded-full`}
          ></div>
        </div>
        <h3 className="text-white  font-normal text-2xl cursor-pointer">
          {text}
        </h3>
        {
          type ? <div>
            <Flex className='justify-between items-center gap-x-3'>
              <Input/>
              <h3 className="text-white  font-normal text-2xl">to</h3>
              <Input/>
            </Flex>
          </div> : null
        }
      </div>
    </div>
      
  );
};

export default CheckBox;

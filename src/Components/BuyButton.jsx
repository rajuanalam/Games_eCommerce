import Flex from "./Flex";
import { Link } from "react-router-dom";
import { BiCartAdd } from "react-icons/bi";

const BuyButton = ({ onClick, className, text }) => {
  return (
    <Link href="">
      <div
        onClick={onClick}
        className={` ${className} text-white text-2xl xs:text-lg font-normal  py-4 xs:py-1 px-4 xs:px-1 bg-gradient-to-r from-buttonColorTwo to-buttonColorOne inline-block rounded-lg`}
      >
       
          {text === "Subscribe" ? (
            <button>{text}</button>
          ) : (
            <Flex className="items-center gap-x-4 xs:gap-x-2">
              <BiCartAdd className="inline-block text-4xl xs:text-2xl" />
              <button>{text}</button>
            </Flex>
          )}
          
        
      </div>
    </Link>
  );
};

export default BuyButton;

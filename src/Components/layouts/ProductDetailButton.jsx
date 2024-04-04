import cam from "../../assets/cam.png";
import Flex from "../Flex";
import Image from "../Image";

const ProductDetailButton = ({ condition, children, bdrColor, txtColor }) => {
  return (
    <div
      className={`py-3 cursor-pointer px-5 rounded-lg border border-solid ${bdrColor} inline-block`}
    >
      <Flex className="gap-x-2 items-center">
        {condition ? <Image src={cam} alt="image" /> : null}
        <h3 className={`${txtColor} font-normal text-2xl`}>{children}</h3>
      </Flex>
    </div>
  );
};

export default ProductDetailButton;

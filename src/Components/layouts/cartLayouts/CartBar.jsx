import { useSelector } from "react-redux";
import style from "../../../Css/nav.module.css";
import Container from "../../Container";
import Flex from "../../Flex";

const CartBar = () => {
  // useSelector
  const data = useSelector((state) => state.count)
  return (
    <Container>
      <div>
        <Flex>
          <Flex className="w-[216px] items-center gap-x-2">
            <h3 className="font-inter font-normal text-white text-3xl">
              My Cart
            </h3>
            <div
              className={`w-7 h-7 rounded-full -top-3 -right-3 ${style.count_bg}`}
            >
              <Flex className="justify-center items-center">
                <h3 className="text-[19px] font-os font-bold text-white">{data.value}</h3>
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
      </div>
    </Container>
  );
};

export default CartBar;

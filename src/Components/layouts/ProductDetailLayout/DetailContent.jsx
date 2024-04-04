import Flex from "../../Flex";
import Container from "../../Container";
import Image from "../../Image";
import DetailFrom from "./DetailFrom";
import { useSelector } from "react-redux";
import Description from "./Description";
import AddCartWithSellersName from "./AddCartWithSellersName";
import GameMedia from "./GameMedia";

const DetailContent = () => {
  // useSelector
  const data = useSelector((state) => state.clickCart.data[0]);
  console.log(data);

  return (
    <div className="pt-16">
      <Container>
      <Flex className='justify-between'>
        <div className="w-[817px] ">
          <Image src={data.bannerImage} alt="image" className='w-full h-full' />
        </div>
        <div>
          <DetailFrom/>
        </div>
      </Flex>
      <Flex className="pt-48 justify-between">
        <Description />
        <AddCartWithSellersName />
      </Flex>
    </Container>
    </div>
  );
};

export default DetailContent;

import Container from "../../Container";
import Flex from "../../Flex";
import Image from "../../Image";
import game1 from "../../../assets/game1.png";
import game2 from "../../../assets/game2.png";
import game3 from "../../../assets/game3.png";
import game4 from "../../../assets/game4.png";
import video from "../../../assets/video.png";

const GameMedia = () => {
  return (
   <div className="pb-32">
     <Container>
      <Flex className="mt-[158px]">
        <div className="w-[216px]">
          <h3 className="font-inter font-normal text-white text-3xl">
            Game Media
          </h3>
        </div>
        <div className="bg-bdr w-full h-[2px] bg-no-repeat bg-center pt-10 "></div>
      </Flex>
      <Flex className="gap-x-7 mt-10">
        <div className="relative cursor-pointer">
          <div>
            <Image src={game1} alt="image" />
          </div>
          <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image src={video} alt="image" />
          </div>
        </div>

        <div className="relative cursor-pointer">
          <div>
            <Image src={game2} alt="image" />
          </div>
          <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image src={video} alt="image" />
          </div>
        </div>
        <div className="cursor-pointer">
          <Image src={game3} alt="image" />
        </div>
        <div className="cursor-pointer">
          <Image src={game4} alt="image" />
        </div>
      </Flex>
    </Container>
   </div>
  );
};

export default GameMedia;

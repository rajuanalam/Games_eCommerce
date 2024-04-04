import BuyButton from "../../BuyButton";
import Container from "../../Container";
import Image from "../../Image";
import BannerImg from '../../../assets/bannerImage.jpg'
import BannerXs from '../../../assets/bannerxs.png'

const Banner = () => {
  return (
    <div className="pb-10 flex justify-center">
      <Container>
        <div className="relative">
          <Image
            src={BannerImg}
            alt={BannerImg}
           
            className="rounded-[32px] xs:hidden"
          />
           <Image
            src={BannerXs}
            alt={BannerXs}
           
            className="rounded-[32px] hidden xs:inline-block "
          />


          <BuyButton text="Buy Now" className="absolute top-[310px] left-[70px] xs:absolute xs:top-[370px] xs:left-7 " />
        </div>
      </Container>
    </div>
  );
};

export default Banner;

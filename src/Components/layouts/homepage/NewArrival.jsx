import BrowseButton from "../../BrowseButton";
import Container from "../../Container";
import Flex from "../../Flex";
import Heading from "../../Heading";
import ArrivalCard from "../../ArrivalCard";
import Image from "../../Image";
import newArrivalData from "../../Data/ArrivalData";
import Rectangle1 from "../../../assets/Rectangle1.png";

const NewArrival = () => {
  return (
    <div className="">
      <Container>
        <div className="pt-10 ">
          <Flex className="items-center px-10 xs:px-0 xs:ml-0 xs:justify-center  ">
            <Flex className="items-center justify-between">
              <Heading
                as="h4"
                text="New Arrivals"
                className="mr-8 xs:text-base xs:mr-2"
              />

              <Image
                src={Rectangle1}
                alt={Rectangle1}
                className="w-[1140px] xs:w-[120px] "
              />

              <BrowseButton
                to="/shoplist"
                text="Browse All"
                className="ml-7 xs:-ml-2"
              />
            </Flex>
          </Flex>
          <Flex className="justify-between flex-wrap xs:justify-center xs:gap-x-2   xs:flex-wrap">
            {newArrivalData.map((item) => (
              <div className="my-2">
                <ArrivalCard
                  key={item.id}
                  info={item}
                  bannerImage={item.bannerImage}
                  discount={item.discount}
                  offerPer={item.offerPer}
                  title={item.title}
                  price={item.price}
                  iconOne={item.iconOne}
                  iconTwo={item.iconTwo}
                  iconThree={item.iconThree}
                  iconFour={item.iconFour}
                  iconFive={item.iconFive}
                />
              </div>
            ))}
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default NewArrival;

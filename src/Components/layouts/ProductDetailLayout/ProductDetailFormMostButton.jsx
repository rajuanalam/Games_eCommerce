import BrowseButton from "../../BrowseButton"
import Flex from "../../Flex"

const ProductDetailFormMostButton = () => {
  return (
    <div className="pb-[50px] border-b broder-solid border-[#ffffff33]">
    <Flex className="gap-x-[14px] mt-6 mb-[18px]">
      <BrowseButton text="PS5"/>
      <BrowseButton text="PS4"/>
      <BrowseButton text="PS3"/>
    </Flex>
    <Flex className="gap-x-[14px] mt-[18px]">
    <BrowseButton text="Key"/>
    <BrowseButton text="Account"/>
    </Flex>
    <Flex className="gap-x-[14px] mt-[18px]">
    <BrowseButton text="UK"/>
    <BrowseButton text="EU"/>

    </Flex>
    <Flex className="gap-x-[14px] mt-[18px]">
    <BrowseButton text="Deluxe"/>
    <BrowseButton text="Complete"/>
    <BrowseButton text="Ultimate"/>
    </Flex>
  </div>
  )
}

export default ProductDetailFormMostButton
import Flex from "../Flex";

const ProductDateAndOtherDetail = ({ detail }) => {
  return (
    <Flex className="gap-x-[14px] items-center mt-4">
      <h3 className="text-2xl text-white font-normal">{detail.title}:</h3>
      <div>
        {detail.text.map((item, index) => (
          <button
            key={index}
            className="bg-[#1E2127] ml-3 rounded-lg py-3 px-5 text-2xl  font-normal text-white"
          >
            {item}
          </button>
        ))}
      </div>
    </Flex>
  );
};

export default ProductDateAndOtherDetail;

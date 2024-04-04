import AddCartWithSellersNameFrame from "../AddCartWithSellersNameFrame";

const AddCartWithSellersName = () => {
  return (
    <div className="pt-[30px] px-[42px] pb-[44px] bg-[#1E2127] rounded-lg w-[817px]">
      <h3 className="font-inter font-normal text-white text-3xl">
        Offers from other sellers
      </h3>
      <div>
        <AddCartWithSellersNameFrame
          rating="100% of 281 ratings"
          price="$59,99"
        />
        <AddCartWithSellersNameFrame
          rating="100% of 281 ratings"
          price="$59,99"
        />
        <AddCartWithSellersNameFrame
          rating="100% of 281 ratings"
          price="$59,99"
        />
        <AddCartWithSellersNameFrame
          rating="100% of 281 ratings"
          price="$59,99"
        />
        <AddCartWithSellersNameFrame
          rating="100% of 281 ratings"
          price="$59,99"
        />
        <AddCartWithSellersNameFrame
          rating="100% of 281 ratings"
          price="$59,99"
        />
      </div>
    </div>
  );
};

export default AddCartWithSellersName;

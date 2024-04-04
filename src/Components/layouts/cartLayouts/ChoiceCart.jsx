import { useSelector } from "react-redux";
import ChoiceCartFrame from "../../ChoiceCartFrame";

const ChoiceCart = () => {
  const data = useSelector((state) => state.addCart.data);
  return (
    <div>
      {data.map((item) => {
        return (
          <div  className="mt-12">
            <ChoiceCartFrame key={item.id} price={item.price} offerPer={item.offerPer} discount={item.discount} title={item.title} src={item.bannerImage} info= {item} />
          </div>
        );
      })}
    </div>
  );
};

export default ChoiceCart;

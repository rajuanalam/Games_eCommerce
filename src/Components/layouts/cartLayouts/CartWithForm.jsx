import Container from "../../Container";
import Flex from "../../Flex";
import CartForm from "./CartForm";
import ChoiceCart from "./ChoiceCart";
import Token from "./Token";
import CartBar from './CartBar'

const CartWithForm = () => {
  return (
    <Container>
      <CartBar />
      <Flex>
        <ChoiceCart />
        <div>
          <CartForm/>
          <Token/> 
        </div>
       
      </Flex>
    </Container>
  );
};

export default CartWithForm;

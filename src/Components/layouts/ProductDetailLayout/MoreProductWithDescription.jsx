import Container from "../commonComponents/Container"
import Flex from "../commonComponents/Flex"
import Description from "./Description"
import OtherSellers from "./OtherSellers"

const MoreProductWithDescription = () => {
  return (
    <Container className='mt-[176px]'>
        <Flex className='justify-between'>
           <Description/>
           <OtherSellers/>
        </Flex>
    </Container>
  )
}

export default MoreProductWithDescription
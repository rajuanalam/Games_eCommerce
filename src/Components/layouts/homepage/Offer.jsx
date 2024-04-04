import Container from "../../Container"
import Flex from "../../Flex"
import SpecialOffer from "../SpecialOffer"
import GiftCards from "../GiftCards"
import SoftwareDeals from "../SoftwareDeals"


const Offer = () => {
  return (
    <div className="pb-40 xs:mx-auto">
        <Container>
            <Flex className="justify-between xs:flex-col">
                <SpecialOffer />
                <GiftCards />
                <SoftwareDeals />
            </Flex>
        </Container>
    </div>
  )
}

export default Offer
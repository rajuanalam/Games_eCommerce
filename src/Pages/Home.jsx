import IconBar from '../Components/layouts/homepage/IconBar'
import Banner from "../Components/layouts/homepage/Banner"
import BlogArticles from "../Components/layouts/homepage/BlogArticles"
import ComingSoon from "../Components/layouts/homepage/ComingSoon"
import DiscountOne from "../Components/layouts/homepage/DiscountOne"
import DiscountTwo from "../Components/layouts/homepage/DiscountTwo"
import NewArrival from "../Components/layouts/homepage/NewArrival"
import Offer from "../Components/layouts/homepage/Offer"
import Reviews from "../Components/layouts/homepage/Reviews"
import Subscribe from "../Components/layouts/homepage/Subscribe"
import WeeklyDeals from "../Components/layouts/homepage/WeeklyDeals"


const Home = () => {
  return (
    <>
    <IconBar />
    <Banner />
    <Reviews />
    <WeeklyDeals />
    <DiscountOne />
    <NewArrival />
    <DiscountTwo />
    <ComingSoon />
    <Offer />
    <BlogArticles />
    <Subscribe />
    
    </>
  )
}

export default Home

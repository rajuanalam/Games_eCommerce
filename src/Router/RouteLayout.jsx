
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components/layouts/homepage/Navbar'
import Footer from '../Components/layouts/homepage/Footer'



const RouteLayout = () => {
  return (
    <>
    <main className="bg-[#15181D] xs:px-6">
    <Navbar />
    <Outlet />
    <Footer />
    </main>
   
    </>
  )
}

export default RouteLayout
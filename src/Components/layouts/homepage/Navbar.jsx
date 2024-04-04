
// import { Logo } from "../../../Icons/logo";
import Container from "../../Container";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import style  from '../../../Css/nav.module.css';
import { FaUserCircle } from "react-icons/fa";
import Flex from "../../Flex";
import { Link } from "react-router-dom";
import Menu from "../../../Icons/Menu";
import Image from "../../Image";
import Logoimg from '../../../assets/logo.png'
import { useSelector } from "react-redux";

export const Navbar = () => {
  const data = useSelector((state) => state)
  const condition = data.addCart.data.some((item) => item.heartCondition)

  return (
    <>
      <div>
        <Container>
          {/* Header top */}
          <Flex className="border-b border-b-textColor  justify-between items-center py-12 xs:py-6 xs:gap-x-3">
             <div className="hidden xs:inline-block">
                <Link to=""><Menu /></Link>
              </div>
            <div className="px-2">
              
            <Link to="" >
              <Image src={Logoimg} alt={Logoimg} />
            </Link>
            </div>
            <Flex className="items-center xs:hidden">
              <input 
                className="w-[800px] rounded-lg bg-searchBgColor px-6 py-3 outline-none text-white"
                placeholder="Search products, sellers, deals..."
                type="text"
              ></input>
              <Link to="">
                <IoSearch className="-ml-10 text-xl text-searchIconColor" />
              </Link>
            </Flex>
            <Flex className="text-4xl xs:text-2xl text-white items-center gap-x-8 xs:gap-x-2">
              <Link to="">
                <AiFillDollarCircle />
              </Link>
              
              <div>
              {
                condition ? <FaHeart className="text-[#E614FC] text-[32px] cursor-pointer" /> : <FaHeart className="text-white text-[32px] cursor-pointer" />
              }
              
            </div>
            <div className="relative cursor-pointer">
              <Link to='/addcart'>
                <FaBagShopping className="text-white text-[32px]" />
              </Link>
              <div className={`absolute w-6 h-6 rounded-full -top-3.5 -right-4 ${style.count_bg}`}>
                <Flex className='justify-center items-center'>
                    <h3 className="text-[12px] absolute -top-[9px] left-[9px]  font-bold text-white">{data.count.value}</h3>
                </Flex>
              </div>
            </div>
              <Link to="">
                <FaUserCircle />
              </Link>
            </Flex>
          </Flex>
         
          
        </Container>
      </div>
    </>
  );
};

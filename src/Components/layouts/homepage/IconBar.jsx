
import Container from '../../Container'
import Flex from '../../Flex';
import { Link } from 'react-router-dom';
import { FaPlaystation, FaXbox , FaMouse} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import Helmet from "../../../Icons/Helmet";
import TaskBoard from "../../../Icons/TaskBoard";
import SubIcon from "../../../Icons/SubIcon";
import VrSet from '../../../Icons/VrSet';


const IconBar = () => {
  return (
    <section className='flex justify-center'>
        <Container>
        <Flex className="justify-between py-10 px-10 xs:py-5 xs:px-0 ">
            <Flex className="gap-x-40 items-center  xs:gap-x-8">
              <div className=' text-textColor text-6xl xs:text-[28px] xs:border xs:border-textColor xs:p-2 xs:rounded-md'>
              <Link to="">
                <FaPlaystation  />
              </Link>
              </div>

              <Link to="" className=' text-textColor text-5xl xs:text-[28px] xs:border xs:border-textColor xs:p-2 xs:rounded-md'>
                <FaXbox />
              </Link>
              <Link to="" className=' text-textColor text-5xl xs:text-[28px] xs:border xs:border-textColor xs:p-2 xs:rounded-md'>
                <BsNintendoSwitch />
              </Link>
              <div className=' xs:border xs:border-textColor xs:p-2 xs:rounded-md '>
              <Link to="" className='text-textColor text-5xl xs:text-[28px]   xs:pr-0 '>
                <FaMouse className=''/>
              </Link>
              </div>
                <div>
                <Link to="" className='xs:hidden '>
                <VrSet svgW="66px" svgH="44"/>
              </Link>
              <Link to="" className='hidden xs:inline-block xs:border xs:border-textColor xs:p-2 xs:rounded-md'>
                <VrSet svgW="30px" svgH="28"/>
              </Link>
                </div>
              <Link to="" className='xs:hidden'>
                <Helmet />
              </Link>
              <Link to="" className='xs:hidden'>
                <TaskBoard />
              </Link>
              <Link to="" className='xs:hidden'>
                <SubIcon />
              </Link>
            </Flex>
            
          </Flex>
        </Container>
    </section>
  )
}

export default IconBar
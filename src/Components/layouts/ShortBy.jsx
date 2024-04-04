import { IoIosArrowUp } from "react-icons/io";
import Flex from "../Flex";
import CheckBox from '../CheckBox'

const ShortBy = () => {
    const sortByTxt  = [
        {id: 1,text: "Most Recent"},
        {id: 2,text: "Features Items"},
        {id: 3,text: "Best Sellers"},
        {id: 4,text: "Best Reviews"},
        {id: 5,text: "Lowest to highest price"},
    ]

  return (
    <div>
        <Flex className='items-center justify-between'>
        <h4 className="text-2xl font-semibold text-[#FB01FF]">Sort By</h4>
      <IoIosArrowUp className="text-[#FB01FF] text-xl cursor-pointer"/>
    </Flex>
    <div>
        {
            sortByTxt.map((item) => {
                return (
                    <CheckBox key={item.id} text={item.text}/>
                )
            })
        }
      
    </div>
    </div>
  )
}

export default ShortBy
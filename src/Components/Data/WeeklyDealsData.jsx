
import Sekiro from '../../assets/sekiro.png'
import Ghostrun from '../../assets/ghostrun.png'
import Devilme from '../../assets/devilme.png'
import Frycry from '../../assets/frycry.png'
import { FaPlaystation, FaXbox , FaUserCircle} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import UserKey from '../../assets/userkey.png'

const WeeklyDealsData = () => {
    const weeklyData =[
        {
            img:Sekiro,
            title:"Sekiro Shadows Die",
            price:"59.99",
            discount:"25%",
            iconOne:<FaPlaystation />,
            iconTwo:<FaXbox />,
            iconThree:<BsNintendoSwitch />,
            iconFour:<FaUserCircle />,
            iconFive:UserKey,
          
          },
          {
            img:Ghostrun,
            title:"Sekiro Shadows Die",
            price:"59.99",
            discount:"25%",
            iconOne:<FaPlaystation />,
            iconTwo:<FaXbox />,
            iconThree:<BsNintendoSwitch />,
            iconFour:<FaUserCircle />,
            iconFive:UserKey,
          },
          {
            img:Devilme,
            title:"Sekiro Shadows Die",
            price:"59.99",
            discount:"",
            iconOne:<FaPlaystation />,
            iconTwo:<FaXbox />,
            iconThree:<BsNintendoSwitch />,
            iconFour:<FaUserCircle />,
            iconFive:UserKey,
          },
          {
            img:Frycry,
            title:"Sekiro Shadows Die",
            price:"59.99",
            discount:"25%",
            iconOne:<FaPlaystation />,
            iconTwo:<FaXbox />,
            iconThree:<BsNintendoSwitch />,
            iconFour:<FaUserCircle />,
            iconFive:UserKey,
          },
         
    ]
  return (
    weeklyData
  )
}

export default WeeklyDealsData
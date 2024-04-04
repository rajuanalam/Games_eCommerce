
import Sekiro from "../../assets/sekiro.png";
import Ghostrun from "../../assets/ghostrun.png";
import Devilme from "../../assets/devilme.png";
import Frycry from "../../assets/frycry.png";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";

const ComingSoonData = () => {
  const comingData = [
    {
      img: Sekiro,
      title: "Sekiro Shadows Die",
      release: "Release Date 2024",
      iconOne: <FaPlaystation />,
      iconTwo: <FaXbox />,
      iconThree: <BsNintendoSwitch />,
    },
    {
      img: Ghostrun,
      title: "Sekiro Shadows Die",
      release: "Release Date 2024",
      iconOne: <FaPlaystation />,
      iconTwo: <FaXbox />,
      iconThree: <BsNintendoSwitch />,
    },
    {
      img: Devilme,
      title: "Sekiro Shadows Die",
      release: "Release Date 2024",
      iconOne: <FaPlaystation />,
      iconTwo: <FaXbox />,
      iconThree: <BsNintendoSwitch />,
    },
    {
      img: Frycry,
      title: "Sekiro Shadows Die",
      release: "Release Date 2024",
      iconOne: <FaPlaystation />,
      iconTwo: <FaXbox />,
      iconThree: <BsNintendoSwitch />,
    },
   
  ];
  return comingData;
};

export default ComingSoonData;

import { FaChevronRight } from "react-icons/fa";

const RightArrow = (props) => {
  const { className, onClick,  } = props;
 
  return (
    <div
      className={`${className} inline-block`}
    //   style={{ ...style, display: "inline-block", background: "red", padding:"20px" }}
      onClick={onClick}
    >
      <FaChevronRight className="text-white text-5xl  rounded-full border border-white p-3 absolute top-0 -right-3 xs:hidden" />
    </div>
  );
};

export default RightArrow;

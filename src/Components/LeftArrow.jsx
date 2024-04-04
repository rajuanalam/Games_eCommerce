import { FaChevronLeft } from "react-icons/fa";

const LeftArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}  inline-block`}
      // style={{ ...style, display: "inline-block", background: "red", }}
      onClick={onClick}
    >
      <FaChevronLeft className="text-white text-5xl  rounded-full border border-white p-3 absolute -left-10 top-0 xs:hidden" />
    </div>
  );
};

export default LeftArrow;

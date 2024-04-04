import ProductDateAndOtherDetail from "../ProductDateAndOtherDetail";

const Description = () => {
  const data = [
    { id: 1, title: "Release Date", text: ["2018-07-30"] },
    { id: 2, title: "Genre", text: ["Adventure", "Horror", "Survivor"] },
    { id: 3, title: "Language", text: ["English", "Spanish", "Russian", "Japanese"] },
    { id: 4, title: "Playable on", text: ["PS5", "PS4", "PS3"] },
  ];
  return (
    <div className="w-[816px]">
      <div className="border-b broder-solid border-[#ffffff33] pb-10">
        <h3 className="text-white font-inter font-normal text-3xl">
          Description
        </h3>
        <p className="text-white pt-5 pb-[14px] font-inter font-normal text-[22px] pr-8">
          Five years after their perilous journey across post-pandemic America,
          Ellie and Joel settle in Jackson, Wyoming. Life in a thriving
          community of{" "}
        </p>
        <button className="text-[#E614FC] text-2xl font-inter font-normal hover:underline">
          Read more
        </button>
      </div>
      <div className="mt-10">
        {data.map((item) => (
            <ProductDateAndOtherDetail key={item.id} detail={item} />
        ))}
      </div>
    </div>
  );
};

export default Description;

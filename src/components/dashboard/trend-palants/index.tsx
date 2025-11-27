import { ArrowRightOutlined } from "@ant-design/icons";
import succulents from "../../../assets/succulents.png";
import Styling from "../../../assets/styling.png";

function TrendPlantes() {
  return (
    <section className="py-[25px]">
      <div className="container2 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 p-4 rounded-xl border border-[#e5e5e5]">
          <div className="flex justify-center items-center h-[200px] sm:h-[220px] md:h-[250px]">
            <img
              src={succulents}
              alt="succulents"
              className="object-contain h-full"
            />
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
            <h2 className="font-bold leading-[133%] uppercase text-[#3d3d3d] text-lg sm:text-xl">
              Summer cactus & succulents
            </h2>

            <p className="font-normal text-[14px] leading-[171%] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>

            <button className="bg-[#46a358] text-white flex gap-1 justify-center items-center p-[8px_25px] rounded-md w-full sm:w-auto">
              Find More <ArrowRightOutlined />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 p-4 rounded-xl border border-[#e5e5e5]">
          <div className="flex justify-center items-center h-[200px] sm:h-[220px] md:h-[250px]">
            <img
              src={Styling}
              alt="succulents"
              className="object-contain h-full"
            />
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
            <h2 className="font-bold leading-[133%] uppercase text-[#3d3d3d] text-lg sm:text-xl">
              Summer cactus & succulents
            </h2>

            <p className="font-normal text-[14px] leading-[171%] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>

            <button className="bg-[#46a358] text-white flex gap-1 justify-center items-center p-[8px_25px] rounded-md w-full sm:w-auto">
              Find More <ArrowRightOutlined />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendPlantes;

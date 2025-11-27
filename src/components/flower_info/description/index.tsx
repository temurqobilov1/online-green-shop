import type { FC } from "react";
import { useState } from "react";
import type { ShopProductType } from "../../../@types";

const Description: FC<ShopProductType> = ({ data }) => {
  const props_data = data;
  const [active, setActive] = useState<boolean>(false);
  const active_color = "text-[#46A358]";
  const htmlContent = `<div> 
      ${props_data?.description}
   </div>`;
  return (
    <div className="my-[100px]">
      <div className="flex items-center gap-4 border-b-[1px] border-[#46A358] pb-[10px]">
        <h2
          onClick={() => setActive(false)}
          className={`${
            !active && active_color
          } text-[17px] font-medium cursor-pointer transition-colors`}
        >
          Product Description
        </h2>
        <h2
          onClick={() => setActive(true)}
          className={`${
            active && active_color
          } text-[17px] font-medium cursor-pointer transition-colors`}
        >
          Reviews ({props_data?.views})
        </h2>
      </div>
      {active ? (
        <h2 className="font-medium">Reviews</h2>
      ) : (
        <div className="font-light text-[15px] leading-8 mb-[30px] pt-3">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      )}
    </div>
  );
};

export default Description;

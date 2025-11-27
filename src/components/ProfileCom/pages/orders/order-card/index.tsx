import type { FC } from "react";
import type { CheckoutModalType } from "../../../../../@types";

const OrderCard: FC<CheckoutModalType> = (order) => {
  return (
    <div
      key={order?._id}
      className="bg-[#FBFBFB] w-full flex flex-col mb-[20px]"
    >
      <div className="w-full grid grid-cols-4 max-sm:grid-cols-2 mb-[10px]">
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Order Number</h3>
          <p className="font-bold">{order?._id.slice(0, 12)}</p>
        </div>
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Date</h3>
          <p className="font-bold">
            {String(new Date(order?.created_at)).slice(0, 15)}
          </p>
        </div>
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Total</h3>
        </div>
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">More</h3>
          <p className="text-[#46A358] cursor-pointer">Get Details</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

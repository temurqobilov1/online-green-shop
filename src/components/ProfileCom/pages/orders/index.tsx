import type { FC } from "react";
import { useQueryHendler } from "../../../../hooks/useQuery";
import type { CheckoutModalType } from "../../../../@types";
import { Empty } from "antd";
import OrderCard from "./order-card";

const Order: FC = () => {
  const { data } = useQueryHendler({
    url: "/order/get-order",
    pathname: "order",
  });
  return (
    <div>
      <h3 className="font-bold  text-xl mb-[20px]">Track your Orders</h3>
      {data?.length ? (
        data?.map((order: CheckoutModalType) => (
          <OrderCard key={order._id} {...order} />
        ))
      ) : (
        <Empty
          description={
            <div>
              <h3 className="text-[18px] text-bold">No order...</h3>
            </div>
          }
        />
      )}
    </div>
  );
};

export default Order;

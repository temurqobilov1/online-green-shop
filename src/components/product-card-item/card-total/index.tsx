import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useReduxSelector } from "../../../hooks/userRedux";
import { useRef } from "react";
import { useAxios } from "../../../hooks/useAxios";
import { useDispatch } from "react-redux";
import { getCouponCode } from "../../../redux/product-slice";
import Cookies from "js-cookie";
import { authorizationModalVisibltiyConf } from "../../../redux/modal-slice";

const CartTotal = () => {
  const cupon_title_style = "text-[#3D3D3D] text-[15px] font-normal";
  const { data, coupon } = useReduxSelector((state) => state.product_slice);
  const couponRef = useRef<HTMLInputElement>(null);

  console.log(coupon);
  const totalPrice = data?.reduce((previousValue, currentValue) => {
    return currentValue.price * Number(currentValue.count) + previousValue;
  }, 0);
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;
  const novigate = useNavigate();

  const dispatch = useDispatch();

  const axios = useAxios();

  const getCoupon = () => {
    axios({
      url: "features/coupon",
      params: {
        coupon_code: couponRef.current?.value,
      },
    }).then((res) => dispatch(getCouponCode(res.data.data.discount_for)));
  };

  return (
    <div className="top-[100px] sticky">
      <div className="flex border-b border-[#46A358]">
        <h2 className="pb-[9px] text-[#3D3D3D] font-bold text-[18px]">
          Card total
        </h2>
      </div>
      <Form className="flex h-10 mt-[35px]">
        <input
          ref={couponRef}
          name="coupon"
          placeholder="Enter coupon code here..."
          className="border w-4/5  border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg rounded-r-none outline-none text-[18px] text-black font-normal"
        />
        <button
          onClick={getCoupon}
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-1/5 rounded-l-none "
        >
          <span> Apply</span>
        </button>
      </Form>
      <div className="mt-5">
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Subtotal</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$</h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Coupon Discount</h3>
          <h2 className="text-[#3D3D3D] text-[15px]">0$</h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Shiping</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$16.00</h2>
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-5">
          <h2 className="text-[#3D3D3D] text-[16px] font-bold">Total:</h2>
          <h1 className="text-[#46A358] text-[18px] font-bold">
            {coupon ? (
              <div>
                $
                {(
                  Number(totalPrice?.toFixed(2)) -
                  (Number(totalPrice?.toFixed(2)) * coupon) / 100
                ).toFixed(2)}
              </div>
            ) : (
              <div>${totalPrice?.toFixed(2)}</div>
            )}

            {coupon && (
              <span className="line-through">${totalPrice?.toFixed(2)}</span>
            )}
          </h1>
        </div>
        <button
        onClick={()=> user ? novigate("/product-checkout") : dispatch(authorizationModalVisibltiyConf())}
         className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-10 mt-[30px] cursor-pointer">
          Proceed To Checkout
        </button>
        <Link to={"/"} className="flex justify-center">
          <button className="mt-3.5 text-[#46A358] cursor-pointer">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;

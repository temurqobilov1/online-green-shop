import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BellOutlined,
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "../../hooks/userRedux";
import { authorizationModalVisibltiyConf } from "../../redux/modal-slice";
import { Badge } from "antd";

const Header = () => {
  const { data } = useReduxSelector((state) => state.product_slice);
  const { user } = useReduxSelector((state) => state.userSlice);

  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="border-b border-[#00800043] py-3 relative">
      <div className="w-[90%] m-auto flex items-center justify-between">
        <Link to={"/"}>
          <img
            src="https://green-shop-otabek.vercel.app/assets/logo-nyVMFuKc.svg"
            alt="Logo"
          />
        </Link>

        <div className="hidden md:flex gap-5">
          <Link to={"/"}>Home</Link>
          <Link to={"/blog"}>Blog</Link>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <SearchOutlined className="text-[20px]" />
          <BellOutlined className="text-[20px]" />
          <Badge count={data?.length}>
            <ShoppingCartOutlined
              onClick={() => navigate("/shop")}
              className="text-[20px]"
            />
          </Badge>

          <button
            onClick={() =>
              user
                ? navigate("/profile")
                : dispatch(authorizationModalVisibltiyConf())
            }
            className="text-white w-[100px] h-[35px] bg-[#46A358] flex items-center gap-1 justify-center rounded-md cursor-pointer"
          >
            {user ? (
              user?.name
            ) : (
              <>
                <LoginOutlined />
                Login
              </>
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <MenuOutlined
            className="text-2xl"
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to={"/"}>
            <img
              src="https://green-shop-otabek.vercel.app/assets/logo-nyVMFuKc.svg"
              alt="Logo"
              className="w-28"
            />
          </Link>
          <CloseOutlined
            className="text-xl cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        <nav className="flex flex-col p-4 gap-4">
          <Link to={"/"} onClick={() => setSidebarOpen(false)}>
            Home
          </Link>
          <Link to={"/blog"} onClick={() => setSidebarOpen(false)}>
            Blog
          </Link>
          <SearchOutlined className="text-lg" />
          <BellOutlined className="text-lg" />
          <Badge count={data?.length}>
            <ShoppingCartOutlined
              onClick={() => {
                navigate("/shop");
                setSidebarOpen(false);
              }}
              className="text-lg"
            />
          </Badge>

          <button
            onClick={() => {
              user
                ? navigate("/profile")
                : dispatch(authorizationModalVisibltiyConf());
              setSidebarOpen(false);
            }}
            className="text-white w-full h-10 bg-[#46A358] flex items-center gap-1 justify-center rounded-md mt-4"
          >
            {user ? (
              user?.name
            ) : (
              <>
                <LoginOutlined />
                Login
              </>
            )}
          </button>
        </nav>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;

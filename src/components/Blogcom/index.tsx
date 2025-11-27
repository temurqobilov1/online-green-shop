import blogimg from "../../assets/blogpng.png";
import { useReduxDispatch } from "../../hooks/userRedux";
import { authorizationModalVisibltiyConf } from "../../redux/modal-slice";
import BlogTexts from "./blogtexts";

function BlogCom() {
  const dispatch = useReduxDispatch();

  return (
    <section className="max-w-[90%] mx-auto mt-10">
      <div className="w-full overflow-hidden rounded-2xl">
        <img
          src={blogimg}
          alt="GreenShop monetization blog"
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>
      <div className="mt-8 flex flex-col items-center gap-5 text-center">
        <h1 className="font-extrabold text-5xl md:text-6xl max-md:text-4xl max-sm:text-3xl leading-[130%]">
          Monetize your content with{" "}
          <span className="text-[#46A358]">GreenShop</span>
        </h1>
        <p className="text-gray-800 font-medium max-w-3xl leading-relaxed md:text-lg sm:text-base max-sm:px-4">
          GreenShop is a platform for buying and selling, publishing, and
          monetizing all types of flowers: articles, notes, videos, photos,
          podcasts, or songs.
        </p>
        <button
          onClick={() => dispatch(authorizationModalVisibltiyConf())}
          className="bg-[#46A358] text-white rounded-md px-6 py-3 hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 max-sm:w-full"
        >
          Join GreenShop
        </button>
      </div>

      <BlogTexts />
    </section>
  );
}

export default BlogCom;

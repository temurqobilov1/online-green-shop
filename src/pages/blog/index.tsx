import Footer from "../../components/footer";
import Header from "../../components/header";

function Blog() {
  return (
    <section className="w-[90%] m-auto ">
      <Header />
      <div className="flex flex-col justify-center  items-center gap-[20px]">
        <div className="w-full  h-fit rounded-2xl my-7 overflow-hidden">
          <img
            src="https://green-shop-otabek.vercel.app/assets/blog-header-hi2KeX2m.png"
            className="h-full w-full object-contain rounded-xl"
            alt=""
          />
          <h1 className="font-bold text-center  text-6xl leading-[130%] max-[730px]:text-4xl max-[430px]:text-2xl">
            Monetize your content
            <br />
            with <span className="text-[#46A358]">GreenShop</span>
          </h1>
          <p className="text-center w-[70%] my-7 mx-auto leading-[140%] text-[#3d3d3d] font-medium max-[730px]:w-full max-[730px]:font-normal max-[730px]:text-[14px]">
            GreenShop - a platform for buying and selling, publishing and
            monetizing all types of flowers: articles, notes, video, photos,
            podcasts or songs.
          </p>
          <button className="bg-[#46A358] rounded-md ml-[45%] text-white p-[8px_25px] max-[335px]:w-full">
            Join GreenShop
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 my-10 max-[1000px]:grid-cols-2 max-[630px]:grid-cols-1"></div>
      <Footer />
    </section>
  );
}

export default Blog;

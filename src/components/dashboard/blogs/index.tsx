import Succulents from "../../../assets/Succulents1.png";
import cactus from "../../../assets/cactus.png";
import cacti from "../../../assets/cacti.png";
import houseplant from "../../../assets/houseplant.png";
import { ArrowRightOutlined } from "@ant-design/icons";

const posts = [
  {
    img: cactus,
    title: "Cactus & Succulent Care Tips",
    text: "Cacti are succulents are easy care plants for any home or patio.",
    date: "September 12 | Read in 6 minutes",
  },
  {
    img: Succulents,
    title: "How to Grow Healthy Succulents",
    text: "Learn how to water, light, and care for indoor succulents.",
    date: "September 12 | Read in 6 minutes",
  },
  {
    img: cacti,
    title: "Top 10 Cactus Types",
    text: "Discover the most popular cactus plants for your collection.",
    date: "September 12 | Read in 6 minutes",
  },
  {
    img: houseplant,
    title: "Indoor Plants Guide",
    text: "Perfect houseplants that can thrive with low sunlight.",
    date: "September 12 | Read in 6 minutes",
  },
];

function BlogPosts() {
  return (
    <section className="mt-12">
      <div className="flex flex-col items-center text-center gap-3 mb-10">
        <h2 className="font-bold text-3xl sm:text-4xl text-[#3d3d3d]">
          Our Blog Posts
        </h2>
        <p className="text-[#727272] text-sm sm:text-base leading-relaxed max-w-[450px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-xl  p-4 
                       transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="h-[180px] sm:h-[200px] w-full flex justify-center items-center rounded-md ">
              <img
                src={post.img}
                alt={post.title}
                className="h-full w-auto object-contain"
              />
            </div>
            <span className="text-[#46a358] text-sm font-medium">
              {post.date}
            </span>
            <h3 className="font-bold text-lg sm:text-xl text-[#3d3d3d] leading-snug">
              {post.title}
            </h3>
            <p className="text-[#727272] text-sm leading-relaxed">
              {post.text}
            </p>
            <button
              className="text-[#3d3d3d] flex items-center gap-2 
                               hover:text-[#46a358] transition-colors mt-auto"
            >
              Read More
              <ArrowRightOutlined />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogPosts;

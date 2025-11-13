const Blog = () => {
  return (
    <div className="w-full m-auto py-10 mt-5">
      <h1 className="text-3xl font-bold text-center mb-3">Our Blog Posts</h1>
      <p className="text-center text-gray-500 mb-10">
        We are an online plant shop offering a wide range of cheap and trendy plants.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
          <img
            src="https://green-shop-otabek.vercel.app/assets/1-Ch9JE0GV.png"
            alt="Cactus & Succulent Care Tips"
            className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="p-4">
            <p className="text-sm text-green-600 mb-2">September 12 | Read in 6 minutes</p>
            <h2 className="text-lg font-semibold mb-2">Cactus & Succulent Care Tips</h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              Cacti are succulents are easy care plants for any home or patio. These resilient plants thrive in bright light and minimal water.
            </p>
            <a href="#" className="text-green-600 font-medium flex items-center gap-1 hover:underline">
              Read More →
            </a>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
          <img
            src="https://green-shop-otabek.vercel.app/assets/2-BqD2fIC7.png"
            alt="Top 10 Succulents for Your Home"
            className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="p-4">
            <p className="text-sm text-green-600 mb-2">September 13 | Read in 2 minutes</p>
            <h2 className="text-lg font-semibold mb-2">Top 10 Succulents for Your Home</h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              Best in hanging baskets. Prefers medium to high light and requires little maintenance for healthy growth.
            </p>
            <a href="#" className="text-green-600 font-medium flex items-center gap-1 hover:underline">
              Read More →
            </a>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
          <img
            src="https://green-shop-otabek.vercel.app/assets/3-Bg8f3bcT.png"
            alt="Cacti & Succulent Care Tips"
            className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="p-4">
            <p className="text-sm text-green-600 mb-2">September 15 | Read in 3 minutes</p>
            <h2 className="text-lg font-semibold mb-2">Cacti & Succulent Care Tips</h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              Cacti and succulents thrive in containers and are perfect for indoor decoration. They add a natural touch to any space.
            </p>
            <a href="#" className="text-green-600 font-medium flex items-center gap-1 hover:underline">
              Read More →
            </a>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
          <img
            src="https://green-shop-otabek.vercel.app/assets/4-CGk6Ds5n.png"
            alt="Best Houseplants Room by Room"
            className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="p-4">
            <p className="text-sm text-green-600 mb-2">September 12 | Read in 6 minutes</p>
            <h2 className="text-lg font-semibold mb-2">Best Houseplants Room by Room</h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              The benefits of houseplants are endless. In addition to improving air quality, they bring calmness and freshness to your home.
            </p>
            <a href="#" className="text-green-600 font-medium flex items-center gap-1 hover:underline">
              Read More →
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Blog;

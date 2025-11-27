import BlogPosts from "./blogs";
import Categories from "./categories";
import Product from "./product";
import TrendPlantes from "./trend-palants";

const Dashboard = () => {
  return (
    <div>
      <section className="flex items-start gap-2 mt-5">
        <Categories />
        <Product />
      </section>
      <section>
        <TrendPlantes />
        <BlogPosts/>
      </section>
    </div>
  );
};

export default Dashboard;

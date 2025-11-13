import Dashboard from "../../components/dashboard";
import Header from "../../components/header";
import Hero from "../../components/hero";
import BlogPost from "../../components/blog_post";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <Hero />
      <Dashboard />
      <BlogPost />
      <Footer />
    </div>
  );
};

export default Home;

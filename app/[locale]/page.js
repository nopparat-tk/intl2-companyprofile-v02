import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/index/Banner";
import About from "@/components/sections/index/About";
import Service from "@/components/sections/index/Service";
import Branch from "@/components/sections/index/Branch";
import Product_accordian from "@/components/sections/index/Product-accordian";
import Store from "@/components/sections/index/Store";
import Contact from "@/components/sections/index/Contact-submit-gclid2";

export default function HomePage() {
  return (
    <Layout headerStyle={3} footerStyle={4}>
      {/* Your homepage content here */}
      <div className="main-content">
        <Banner />
        <About />
        <Product_accordian />
        <Service />
        <Branch />
        <Store />
        <Contact />
      </div>
    </Layout>
  );
}

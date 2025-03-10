import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/index/Banner";
import About from "@/components/sections/index/About";
import Service from "@/components/sections/index/Service";
import Branch from "@/components/sections/index/Branch";
import Product from "@/components/sections/index/Product";
import Store from "@/components/sections/index/Store";
import Contact from "@/components/sections/index/Contact-submit";
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs";
import Skills from "@/components/sections/home1/Skills";
import Testimonial from "@/components/sections/home1/Testimonial";
import Faq from "@/components/sections/home1/Faq";
import Cta from "@/components/sections/home1/Cta";
import Funfacts from "@/components/sections/home1/Funfacts";
import Team from "@/components/sections/home1/Team";
import Blog from "@/components/sections/home1/Blog";
import Brands from "@/components/sections/home1/Brands";
import FacebookMSG from "@/components/elements/FacebookMSG";

export default function Home() {
   return (
      <>
         <Layout headerStyle={3} footerStyle={4}>
            <Banner />
            <About />
            <Product />
            <Service />
            <Branch />
            <Store />
            <Contact />
            {/* <Skills />
            <Testimonial />
            <Faq />
            <Cta />
            <Funfacts />
            <Team />
            <Blog />
            <Brands /> */}
            <FacebookMSG />
         </Layout>
      </>
   );
}

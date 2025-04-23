"use client";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/index/Banner";
import About from "@/components/sections/index/About";
import Service from "@/components/sections/index/Service";
import Branch from "@/components/sections/index/Branch";
import Product from "@/components/sections/index/Product-accordian";
import Store from "@/components/sections/index/Store";
import Contact from "@/components/sections/index/Contact-submit";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
   const searchParams = useSearchParams();

   useEffect(() => {
      const section = searchParams.get("section");
      if (section === "contact") {
         const element = document.getElementById("contact");
         if (element) {
            element.scrollIntoView({ behavior: "smooth" });
         }
      }
   }, [searchParams]);

   return (
      <Layout headerStyle={3} footerStyle={4}>
         {/* Your homepage content here */}
         <div className="main-content">
            <Banner />
            <About />
            <Product />
            <Service />
            <Branch />
            <Store />
            <Contact />
         </div>
      </Layout>
   );
}

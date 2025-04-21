import Layout from "@/components/layout/Layout";
import CookiesPolicy from "@/components/sections/index/Cookies-Policy";

export default function Home() {
   return (
      <>
         <Layout headerStyle={3} footerStyle={4}>
            <CookiesPolicy />
         </Layout>
      </>
   );
}

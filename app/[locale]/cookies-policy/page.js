import Layout from "@/components/layout/Layout";
import CookiesPolicy from "@/components/sections/index/Cookies-Policy";

export default function CookiesPolicyPage() {
   return (
      <>
         <Layout headerStyle={4} footerStyle={4}>
            <CookiesPolicy />
         </Layout>
      </>
   );
}

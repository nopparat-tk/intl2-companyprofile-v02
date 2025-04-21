import Layout from "@/components/layout/Layout";
import PrivacyPolicy from "@/components/sections/index/Privacy-Policy";

export default function Home() {
   return (
      <>
         <Layout headerStyle={3} footerStyle={4}>
            <PrivacyPolicy />
         </Layout>
      </>
   );
}

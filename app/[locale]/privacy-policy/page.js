import Layout from "@/components/layout/Layout";
import Privacy from "@/components/sections/index/Privacy-Policy";

export default function PrivacyPolicyPage() {
   return (
      <Layout headerStyle={4} footerStyle={4}>
         <Privacy activeTab="privacy" />
      </Layout>
   );
}

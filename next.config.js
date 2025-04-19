// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
   async redirects() {
      return [
         {
            source: "/",
            destination: "/th",
            permanent: true,
         },
      ];
   },
});

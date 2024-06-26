/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `mini-portfolio-fem`,
    siteUrl: `https://master.dw0h5zausfmzd.amplifyapp.com/`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap`,
          },
          {
            name: `Lora`,
            file: `https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/portfolio`,
      }
    },
    'gatsby-plugin-mdx'
  ],
};

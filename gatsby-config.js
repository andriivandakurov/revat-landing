module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: 'REVAT – спеціалізований кросфіт зал. Групові та індивідуальні заняття',
    description: 'Групові та індивідуальні заняття з кросфіту для новачків та професіоналів. Ранкові та вечірні заняття. Сертифіковані тренери, крута атмосфера, індивідуальний підхід. Перше заняття безкоштовне',
    author: 'andriy.vandakurov@gmail.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'revat',
        short_name: 'revat',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiURL: "http://ec2-54-93-99-240.eu-central-1.compute.amazonaws.com",
    //     contentTypes: [
    //       // List of the Content Types you want to be able to request from Gatsby.
    //       "post",
    //       "class",
    //       "coach"
    //     ],
    //   },
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To arn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N2MVLX5",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: 'Revat',
    description: 'Revat Hard Total Gym',
    author: 'hello@teonica.com',
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
  ],
}

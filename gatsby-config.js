require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const siteUrl = process.env.GATSBY_SITE_URL || `https://example.com/`
module.exports = {
  pathPrefix: '/Nova-Gasby-starter',
  siteMetadata: {
    title: 'NovaGaïa Starter site',
    description: `la description`,
    author: `@novagaia`,
    titleTemplate: `%s | NovaGaïa Starter`,
    url: siteUrl,
    siteUrl: siteUrl,
    image: `/mainBCG.jpg`,
    twitterUsername: `@novagaiafr`,
  },
  plugins: [
    'gatsby-plugin-tailwindcss',
    `gatsby-plugin-postcss`,
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `./src/assets/`,
      },
      __key: 'assets',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styles`,
        path: `./src/styles/`,
      },
      __key: 'styles',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}

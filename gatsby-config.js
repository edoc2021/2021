require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `EDOC2021 - The No1 Conference in Enterprise Computing`,
    shortTitle: `EDOC2021`,
    description: `EDOC, a series of IEEE conferences on distributed systems in and beyond the enterprise, celebrates its 25th anniversary with a return to Australia’s Gold Coast where it all began in 1997`,
    author: `vuluong@griffithuni.edu.au`,
    url: "http://ieee-edoc.org", // No trailing slash allowed!
    image: "/2021/img/linkedin_post.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ieee_edoc",
    siteUrl: `http://ieee-edoc.org`
  },
  pathPrefix: "/2021",
  plugins: [
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: "margin-bottom: 1.0725rem;"
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem"
            }
          },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-sass",
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GA_TRACKING_ID}`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}

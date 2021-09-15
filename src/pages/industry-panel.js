import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import { Badge } from "react-bootstrap"


class IndustryPanel extends React.Component {

  render() {
    const { posts } = this.props.data

    console.log(posts)
    return (
      <div>
        <Layout location={this.props.location}>
          <div className="article">
            <div className="container">
              <h1 style={{ color: "#2c4f90" }}>Industry Panel</h1>
              <hr />
              {
                posts.edges.map((edge) => {
                  console.log(edge)
                  const frontmatter = edge?.node?.frontmatter
                  const authors = frontmatter?.authors.split(",")
                  console.log(authors)

                  return (
                    <div key={edge.node.id}
                      // className="content text-justify"
                    >
                      <h2 style={{ color: "#e23d53", fontSize: 21 }}>
                        {frontmatter.title}
                      </h2>
                      {/*{*/}
                      {/*  authors.map((author, i) => {*/}
                      {/*    return <Badge style={{ marginRight: 4, fontSize: "14px" }}*/}
                      {/*                  variant="secondary" key={i}>{author}</Badge>*/}
                      {/*  })*/}
                      {/*}*/}
                      <div className="input-group" style={{ marginTop: 4 }}>
                        <span className="input-group-text" style={{ padding: 3 }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                               className="bi bi-people"
                               viewBox="0 0 16 16">
                            <path
                              d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                          </svg>
                          <Badge>Panel Chairs: {frontmatter?.authors}</Badge>
                        </span>
                      </div>
                      <div className="input-group">
                        <span className="input-group-text" style={{ marginTop: 6, marginRight: 6, padding: 3 }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                               className="bi bi-clock" viewBox="0 0 16 16">
                            <path
                              d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                          </svg>
                        <Badge>{frontmatter?.date}</Badge>
                        </span>
                        <span className="input-group-text" style={{ padding: 3, marginTop: 6 }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                               className="bi bi-link-45deg"
                               viewBox="0 0 16 16">
                            <path
                              d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                            <path
                              d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                          </svg>
                          <Badge>
                            <a href="https://uqz.zoom.us/webinar/register/WN_ZtxjUedTSf6MvahH7YAwvw">
                              <u>Zoom link</u> (Registration required prior to event)
                            </a>
                          </Badge>
                        </span>
                      </div>
                      <div style={{ marginTop: 8 }} />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: edge.node.html || ""
                        }}
                      />
                      <br />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default IndustryPanel

export const query = graphql`
  query {
    posts: allMarkdownRemark(sort: {fields: [frontmatter___order], order: ASC},
      filter: {frontmatter: {type: {eq: "industry-panel"}}}) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD hh:mma")
            authors
            link
          }
        }
      }
    }
  }
`

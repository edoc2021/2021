import React from "react"
import Layout from "../components/layout/layout"
import { graphql, Link } from "gatsby"
import { Badge } from "react-bootstrap"


class WorkshopKeynote extends React.Component {

  render() {
    const { posts } = this.props.data

    console.log(posts)
    return (
      <div>
        <Layout location={this.props.location}>
          <div className="article">
            <div className="container">
              <h1 style={{ color: "#2c4f90" }}>Workshop Keynotes</h1>
              <hr />
              <p style={{ fontSize: "17.8px" }}>
                {/*[Workshop keynotes introduction]*/}
              </p>
              {
                posts.edges.map((edge) => {
                  console.log(edge)
                  const frontmatter = edge?.node?.frontmatter
                  const authors = frontmatter?.authors.split(",")
                  console.log(authors)

                  return (
                    <div key={edge.node.id}>
                      <h2 style={{ color: "#e23d53", fontSize: 21 }}>
                        {frontmatter.title}
                      </h2>
                      <Link activeStyle={{color: "red"}} to={frontmatter.link}>
                        <h2 className="subtitle">
                          {frontmatter.workshop}
                        </h2>
                      </Link>
                      {
                        authors.map((author, i) => {
                          return <Badge style={{ marginRight: 4, fontSize: "14px" }}
                                        variant="secondary" key={i}>{author}</Badge>
                        })
                      }
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

export default WorkshopKeynote

export const query = graphql`
  query {
    posts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC},
      filter: {frontmatter: {type: {eq: "workshop-keynote"}}}) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            authors
            workshop
            link
          }
        }
      }
    }
  }
`

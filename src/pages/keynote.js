import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import { Badge } from "react-bootstrap"


class Keynote extends React.Component {

  render() {
    const { posts } = this.props.data

    console.log(posts)
    return (
      <div>
        <Layout location={this.props.location}>
          <div className="article">
            <div className="container">
              <h1 style={{ color: "#2c4f90" }}>Conference Keynotes</h1>
              <hr />
              <p style={{ fontSize: "17.5px" }}>
                It is our honour to welcome our EDOC21 keynote speakers
                addressing topics associated with our Industry 4.0 theme.
                <p style={{ marginTop: "4px", marginBottom: "4px" }}>
                  &bull;<b> Dr. Richard Soley</b> (OMG/Digital Twin Consortium) – Digital Twins<br/>
                  &bull;<b> Dr. Clemens Szyperski</b> (Microsoft) - Highly Scalable Streaming Analytics<br/>
                  &bull;<b> Dr. Heiko Ludwig</b> (IBM) – Federated Learning<br/>
                  &bull;<b> Prof. Tamara Davis</b> (The University of Queensland) – Applications of Machine Learning
                </p>
                These speakers bring together the rich history of EDOC together with insights from those new to EDOC. It
                is our pleasure to welcome these eminent speakers for the EDOC's 25th anniversary.
              </p>
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
                      {/*<time style={{ marginRight: 10 }}*/}
                      {/*      dateTime={frontmatter?.date}>{frontmatter?.date}</time>*/}
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

export default Keynote

export const query = graphql`
  query {
    posts: allMarkdownRemark(sort: {fields: [frontmatter___order], order: ASC},
      filter: {frontmatter: {type: {eq: "keynote"}}}) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            authors
          }
        }
      }
    }
  }
`

import React from "react"
import Layout from "../../components/layout/layout"
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
              <h1 style={{ color: "#2c4f90" }}>Keynotes</h1>
              <hr />
              <p style={{ fontSize: "17.8px" }}>
                It is our honour to announce that our first two keynotes will be Dr. Richard Soley of OMG and Dr. Clemens
                Szyperski of Microsoft. They plan to present their experience with and future thoughts about industry 4.0 themes, in
                particular digital twins and highly scalable streaming analytics. Richard and Clemens were involved in
                the inaugural EDOC'97 event and it is our particular pleasure to welcome them back for the EDOC's 25th
                anniversary.
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
                      <h2>{frontmatter.title}</h2>
                      {/*<time style={{ marginRight: 10 }}*/}
                      {/*      dateTime={frontmatter?.date}>{frontmatter?.date}</time>*/}
                      {
                        authors.map((author, i) => {
                          return <Badge style={{ marginRight: 4, fontSize: "16px" }}
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
    posts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC},
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

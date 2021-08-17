import React from "react"
import Layout from "../components/layout/layout"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"


class PMW2021 extends React.Component {

  render() {

    const post = this.props.data.post

    return (
      <Layout location={this.props.location}>
        <Container>
          <h1 style={{ color: "#2c4f90" }}>PMW2021: Privacy in the Modern World (Cancelled)</h1>

          <hr />
          <div
            dangerouslySetInnerHTML={{
              __html: post.html || ""
            }}
          />
        </Container>
      </Layout>
    )

  }

}

export default PMW2021

export const query = graphql`
  query {
    post: markdownRemark(frontmatter: {type: {eq: "PMW2021"}}) {
#          post: markdownRemark(frontmatter: {type: {eq: "empty"}}) {
      id
      html
    }
  }
`

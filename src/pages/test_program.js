import React from "react"
import Layout from "../components/layout/layout"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"
import LayoutProgram from "../components/layout/layout_program"


class Registration extends React.Component {

  render() {

    const post = this.props.data.post
    console.log(post)

    return (
      <LayoutProgram location={this.props.location}>
        <Container>
          <h1 style={{ color: "#2c4f90" }}>Test Program</h1>
          <hr />
          <div
            dangerouslySetInnerHTML={{
              __html: post.html || ""
            }}
          />
        </Container>
      </LayoutProgram>
    )
  }
}

export default Registration

export const query = graphql`
  query {
    post: markdownRemark(frontmatter: {type: {eq: "test_program"}}) {
#    post: markdownRemark(frontmatter: {type: {eq: "empty"}}) {
      id
      html
    }
  }
`

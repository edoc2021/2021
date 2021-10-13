import React from "react"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"
import LayoutProgram from "../components/layout/layout_program"


class DemoPaperSessions extends React.Component {

  render() {

    const post = this.props.data.post
    console.log(post)

    return (
      <LayoutProgram location={this.props.location}>
        <Container>
          <h1 style={{ color: "#2c4f90" }}>Demo Paper Sessions</h1>
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

export default DemoPaperSessions

export const query = graphql`
  query {
    post: markdownRemark(frontmatter: {type: {eq: "demo-paper-sessions"}}) {
      #    post: markdownRemark(frontmatter: {type: {eq: "empty"}}) {
      id
      html
    }
  }
`

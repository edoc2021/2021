import React from "react"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"
import LayoutProgram from "../components/layout/layout_program"


class ConferencePaperSessions extends React.Component {

  render() {

    const post = this.props.data.post
    console.log(post)

    return (
      <LayoutProgram location={this.props.location}>
        <Container>
          <h1 style={{ color: "#2c4f90" }}>Conference Paper Sessions</h1>
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

export default ConferencePaperSessions

export const query = graphql`
  query {
    post: markdownRemark(frontmatter: {type: {eq: "conference-paper-sessions"}}) {
#    post: markdownRemark(frontmatter: {type: {eq: "empty"}}) {
      id
      html
    }
  }
`

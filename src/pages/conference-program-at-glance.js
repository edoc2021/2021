import React from "react"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"
import LayoutProgram from "../components/layout/layout_program"


class ConferenceProgramAtGlance extends React.Component {

  render() {

    const post = this.props.data.post
    console.log(post)

    return (
      <LayoutProgram location={this.props.location}>
        <Container>
          <h1 style={{ color: "#2c4f90" }}>Conference Program at a Glance</h1>
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

export default ConferenceProgramAtGlance

export const query = graphql`
  query {
    post: markdownRemark(frontmatter: {type: {eq: "conference-program-at-glance"}}) {
      #    post: markdownRemark(frontmatter: {type: {eq: "empty"}}) {
      id
      html
    }
  }
`

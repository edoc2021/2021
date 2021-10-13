import React from "react"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"
import LayoutProgram from "../components/layout/layout_program"


class WorkshopProgramAtGlance extends React.Component {

  render() {

    const post = this.props.data.post
    console.log(post)

    return (
      <LayoutProgram location={this.props.location}>
        <Container>
          <h2 style={{ color: "#2c4f90" }}>Workshops, Demos and Doctoral Consortium Program at a Glance</h2>
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

export default WorkshopProgramAtGlance

export const query = graphql`
  query {
    post: markdownRemark(frontmatter: {type: {eq: "workshop-program-at-glance"}}) {
      #    post: markdownRemark(frontmatter: {type: {eq: "empty"}}) {
      id
      html
    }
  }
`

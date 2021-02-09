import React from "react"
import Layout from "../components/layout/layout"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"


class CallPaper extends React.Component {

  render() {

    const post = this.props.data.post

    return (
      <Layout location={this.props.location}>
        <Container>
          <h1 style={{ color: "#2c4f90" }}>
            Committees<span style={{fontSize: 20, verticalAlign: '3px', color: '#D9780F'}}>*</span>
          </h1>

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

export default CallPaper

export const query = graphql`
  query {
    post: markdownRemark(frontmatter: {type: {eq: "committees"}}) {
      id
      html
    }
  }
`

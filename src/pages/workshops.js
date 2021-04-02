import React from "react"
import Layout from "../components/layout/layout"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"


class CallWorkshops extends React.Component {

  render() {

    const post = this.props.data.post

    return (
      <Layout location={this.props.location}>
        <Container>
          <h1 style={{ color: "#2c4f90" }}>Call for Workshop Contributions</h1>
          <p>
            The Industry 4.0 theme of EDOC21 has attracted many high quality workshop proposals addressing the interplay of new technology trends and environmental, social and governance (ESG) factors. The topics such as AI, privacy, ethics, trust, digital twins and interoperability bring many new challenges to the long-established EDOC’s focus on building distributed systems in and beyond the enterprise - for industry and science communities.
          </p>
          <p>
            The selected workshops would provide a fertile ground for many interesting discussions and productive proposals for new industry and research projects, leading to what promises to be an exceptional workshop programme.
          </p>
          <p>
            We would like to extend our appreciation to our Workshop Chairs, Dimka Karastoyanova (University of Groningen, Netherlands), Luise Pufahl (TU Berlin, Germany) and Asif Gill (University of Technology Sydney, Australia), for their excellent work in reviewing and combining proposals to provide a good mixture of different industry and research topics across the selected workshops.
          </p>

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

export default CallWorkshops

export const query = graphql`
  query {
    post: markdownRemark(frontmatter: {type: {eq: "workshops"}}) {
      #    post: markdownRemark(frontmatter: {type: {eq: "empty"}}) {
      id
      html
    }
  }
`

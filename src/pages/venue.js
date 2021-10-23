import React from "react"
import Layout from "../components/layout/layout"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"
import axios from "axios"


class Venue extends React.Component {


  constructor(props, context) {
    super(props, context)
    this.state = {
      "password": "a"
    }
  }

  componentDidMount() {

  }

  _onSendGetAPI = () => {
    console.log("den day roi")
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
        console.log(response?.data?.status)
        this.setState({ password: response?.data?.status })
      }
    )
  }


  render() {
    const post = this.props.data.post
    console.log(post)

    return (
      <Layout location={this.props.location}>
        <Container>
          {/*<button onClick={this._onSendGetAPI}>Send GET API</button>*/}
          {/*<h1>Password {this.state.password}</h1>*/}
          <h1 style={{ color: "#2c4f90" }}>Venue</h1>
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

export default Venue

export const query = graphql`
  query {
    post: markdownRemark(frontmatter: {type: {eq: "venue"}}) {
      #    post: markdownRemark(frontmatter: {type: {eq: "empty"}}) {
      id
      html
    }
  }
`

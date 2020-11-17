import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout/layout"
import { Container } from "react-bootstrap"

class IndexPage extends React.Component {

  // componentDidMount() {
  //   navigate("/EDOC2021");
  // }

  render() {
    return (
      <Layout>
        <Container>
          <h1>Hello World</h1>
        </Container>
      </Layout>
    )
  }
}


export default IndexPage


import React from "react"
import Layout from "../../components/layout/layout"
import { Container } from "react-bootstrap"


class Conference extends React.Component {

  render() {

    return (
      <Layout location={this.props.location}>
        <Container>
          <h1>
            This is Conference section
          </h1>
        </Container>
      </Layout>
    )

  }

}

export default Conference

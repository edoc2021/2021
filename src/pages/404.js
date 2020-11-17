import React from "react"
import Layout from "../components/layout/layout"
import { Container } from "react-bootstrap"


const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>404: Not Found</h1>
      <hr/>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage

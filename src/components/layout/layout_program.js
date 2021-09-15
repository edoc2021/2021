import React from "react"
import Navibar from "../navibar/navibar"
import { siteMetadata } from "../../../gatsby-config"
import Footer from "../footer/footer"

import "../../scss/gatstrap.scss"
import { Col, Container, Row } from "react-bootstrap"
import { Waypoint } from "react-waypoint"
import { graphql, navigate, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import SEO from "../seo"


class LayoutProgram extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  _handleOnHomeClick = () => {
    navigate("/")
  }

  render() {
    // const { hideAnnouncement } = this.props
    return (
      <StaticQuery
        query={graphql`
          query {
            fileName: file(relativePath: { eq: "gc_header.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 2500, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }`
        }
        render={data => (
          <div>
            {/*<Helmet title="EDOC2021 - The No1 Conference in Enterprise Computing" />*/}
            <SEO />
            <div id="header" style={{
              position: "relative",
              top: 0
            }}>
              <span className="logo">
                <Img fluid={data.fileName.childImageSharp.fluid} alt="" />
                {/*<Image src={headerImage} alt="" fluid />*/}
              </span>
            </div>
            <Waypoint
              invisible
              onEnter={this._handleWaypointEnter}
              onLeave={this._handleWaypointLeave}
            />
            <Navibar title={siteMetadata.shortTitle} location={this.props.location} sticky={this.state.stickyNav} />
            <Container>
              <Row>
                <Col md="12">
                  {this.props.children}
                </Col>
              </Row>
            </Container>
            <Footer title={siteMetadata.shortTitle} author={siteMetadata.author} />
          </div>
        )}
      />
    )
  }
}

export default LayoutProgram

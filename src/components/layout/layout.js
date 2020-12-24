import React from "react"
import Navibar from "../navibar/navibar"
import { siteMetadata } from "../../../gatsby-config"
import Footer from "../footer/footer"

import "../../scss/gatstrap.scss"
import { Container, Image, Col, Row } from "react-bootstrap"
import { Waypoint } from "react-waypoint"
import { graphql, Link, navigate, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import SEO from "../seo"
import logoImage from "../../../content/images/logo.png"
import griffithLogo from "../../../content/images/griffith_brand.png"
import desGC from "../../../content/images/destination_gc.png"
import digitalTwin from "../../../content/images/digital_twin.png"


class Layout extends React.Component {
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
              <Row style={{
                position: "absolute",
                bottom: 5,
                width: "100%",
                height: "100%"
              }}>
                <Col style={{}}>
                  <Link to="/">
                    <Image
                      style={{
                        padding: "12pt"
                      }}
                      src={logoImage} alt="" fluid />
                  </Link>
                </Col>
                <Col />
                <Col />
              </Row>

              <Row style={{
                position: "absolute",
                top: "76%",
                width: "100%",
                height: "22%",
                marginLeft: 0,
                marginRight: 0
              }}>
                <Col>
                  <Link to="https://www.destinationgoldcoast.com/"
                        style={{
                          marginLeft: "2.1%"
                        }}>
                    <Image
                      style={{
                        width: "9.6%"
                      }}
                      src={desGC} alt="" fluid />
                  </Link>
                  <Link to="https://www.griffith.edu.au/"
                        style={{
                          marginLeft: "1.6%"
                        }}
                  >
                    <Image
                      style={{
                        width: "9.6%"
                      }}
                      src={griffithLogo} alt="" fluid />
                  </Link>
                  <Link to="https://www.digitaltwinconsortium.org/"
                        style={{
                          marginLeft: "63.7%"
                        }}>
                    <Image
                      style={{
                        width: "9.6%"
                      }}
                      src={digitalTwin} alt="" fluid />
                  </Link>
                </Col>
              </Row>
            </div>
            <Waypoint
              invisible
              onEnter={this._handleWaypointEnter}
              onLeave={this._handleWaypointLeave}
            />
            <Navibar title={siteMetadata.shortTitle} location={this.props.location} sticky={this.state.stickyNav} />
            <Container>
              <Row>
                <Col md="8">
                  {this.props.children}
                </Col>
                <Col md="4">
                  <Link to="https://twitter.com/ieee_edoc">
                    <a className="twitter-timeline" data-min-width="220" data-height="100%" data-theme="light"
                       href="https://twitter.com/ieee_edoc?ref_src=twsrc%5Etfw">Tweets by ieee_edoc</a>
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                  </Link>
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

export default Layout

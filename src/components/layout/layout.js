import React from "react"
import Navibar from "../navibar/navibar"
import { siteMetadata } from "../../../gatsby-config"
import Footer from "../footer/footer"

import "../../scss/gatstrap.scss"
import { Col, Row } from "react-bootstrap"
import { Waypoint } from "react-waypoint"
import { graphql, Link, navigate, StaticQuery } from "gatsby"
import Helmet from "react-helmet"
import Img from "gatsby-image"


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
            <Helmet title="EDOC2021 - The No1 Conference in Enterprise Computing" />
            <span className="logo">
              <Img fluid={data.fileName.childImageSharp.fluid} alt="" />
              {/*<Image src={headerImage} alt="" fluid />*/}
            </span>
            <header id="header" className="container" style={{
              position: "relative",
              top: 0
            }}>
              <Row style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "90%"
              }}>
                <Col>
                  <Link to="/">
                    {/*<Image*/}
                    {/*  src={logoImage} alt="" fluid />*/}
                  </Link>
                </Col>
                <Col />
                <Col />
              </Row>

            </header>
            <Waypoint
              invisible
              onEnter={this._handleWaypointEnter}
              onLeave={this._handleWaypointLeave}
            />
            <Navibar title={siteMetadata.title} location={this.props.location} sticky={this.state.stickyNav} />
            {this.props.children}
            <Footer title={siteMetadata.title} author={siteMetadata.author} />
          </div>
        )}
      />
    )
  }
}

export default Layout

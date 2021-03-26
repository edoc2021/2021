import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import "../../utils/font-awesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = ({ author, title }) => {
  return (
    <div className="footer">
      <div className="container">
        <hr className="border-primary" />
        <Row style={{
          height: "4px"
        }}>
          <Col style={{}}>
            <Link to="https://twitter.com/ieee_edoc">
              {title} {" "}
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </Link>
            <br />
            <Link to="https://www.gatsbyjs.com/">
              <strong>Powered by @<u>Gatsby</u></strong>
            </Link>
            <br />
            <Link to="https://www.destinationgoldcoast.com/">
              <small>Images courtesy of <u>Gold Coast Tourism</u></small>
            </Link>
          </Col>

          <Col style={{
            textAlign: "right"
          }}>
            <Link to="https://ieee-edoc.org/mailinglist.html">
              <small>To keep informed about EDOC, <u>subscribe to our mailing list</u></small>
            </Link>
            <br />
            <Link to="https://ieee-edoc.org/mailinglist.html">
              <small>For enquiry, please contact: <u>edoc2021@griffith.edu.au</u></small>
            </Link>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p style={{textAlign: "center"}}>
        <small>
          We respectfully acknowledge the <a href="https://www.yugambeh.com/"><u>Yugambeh People</u></a>, the traditional owners of the land on which we meet, and pay our respect to their elders past and present, and all Aboriginal and Torres Strait Islander Peoples here today.
        </small>
        </p>
        <br />
      </div>
    </div>
  )
}

export default Footer

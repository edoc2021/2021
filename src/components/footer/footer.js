import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import "../../utils/font-awesome"

const Footer = ({ author, title }) => {
  return (
    <div className="footer">
      <div className="container">
        <hr className="border-primary" />
        <p>
          <Row style={{
            height: "4px"
          }}>
            <Col>
              <Link to="#">
                {title} {" "}
                {/*<FontAwesomeIcon icon={["fab", "twitter"]} />*/}
              </Link>
            </Col>
            <Col style={{
              textAlign: "right"
            }}>
              <Link to="https://ieee-edoc.org/mailinglist.html">
                <small>To keep informed about EDOC, <u>subscribe to our mailing list</u></small>
              </Link>
            </Col>
          </Row>
          <Link to="https://www.gatsbyjs.com/">
            <br />
            {/*<strong>By {author}</strong>*/}
            <strong>Powered by @<u>Gatsby</u></strong><br />
          </Link>
          <Link to="https://www.destinationgoldcoast.com/">
            <small>Images courtesy of <u>Gold Coast Tourism</u></small>
          </Link>
          <br />
        </p>
      </div>
    </div>
  )
}

export default Footer

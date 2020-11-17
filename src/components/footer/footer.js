import React from "react"
import { Link } from "gatsby"

const Footer = ({ author, title }) => {
  return (
    <div className="footer">
      <div className="container">
        <hr className="border-primary" />
        <p>
          {title}
          <Link to="https://www.gatsbyjs.com/">
            <br />
            {/*<strong>By {author}</strong>*/}
            <strong>Powered by @<u>Gatsby</u></strong><br/>
          </Link>
          <Link to="https://www.destinationgoldcoast.com/">
            <small>Images courtesy of <u>Gold Coast Tourism</u></small>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Footer

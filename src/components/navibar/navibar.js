import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import HoverDropdown from "./hoverdropdown"
import { Link } from "gatsby"

const Navibar = ({ sticky, location, title }) => {
  return (
    <div style={{ marginBottom: 100 }}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"
              fixed={sticky ? "top" : ""}
              style={{
                position: sticky ? "fixed" : "absolute",
                width: "100%",
                zIndex: 100
              }}>

        <Container>
          <Container fluid={true}>
            <Navbar.Brand as={Link} to="/EDOC2021">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <HoverDropdown href="" title="Program" id="collasible-nav-dropdown-1">
                  <NavDropdown.Item as={Link} to="/EDOC2021/keynote">Keynotes</NavDropdown.Item>
                  {/*<NavDropdown.Item as={Link} to="/EDOC2021/accepted-papers">Accepted papers</NavDropdown.Item>*/}
                </HoverDropdown>
                <HoverDropdown href="" title="Conference" id="collasible-nav-dropdown-2">
                  <NavDropdown.Item as={Link} to="/EDOC2021/call-papers/">Call for Papers</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/EDOC2021/committees/">Committees</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/EDOC2021/important-dates">Important Dates</NavDropdown.Item>
                  <NavDropdown.Item href="http://www.ieee-edoc.org/">Previous EDOCs</NavDropdown.Item>
                </HoverDropdown>
                <HoverDropdown title="Workshops, Demos, Doctoral Consortium" id="collasible-nav-dropdown-3">
                  <NavDropdown.Item as={Link} to="/EDOC2021/workshops">Call for Workshops</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/EDOC2021/call-demos">Call for Demos</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/EDOC2021/doctoral-consortium">Doctoral Consortium</NavDropdown.Item>
                  {/*<NavDropdown.Divider />*/}
                  {/*<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                </HoverDropdown>
                {/*<Nav.Link as={Link} to="/EDOC2021/registration">Registration</Nav.Link>*/}
                {/*<Link to="/EDOC2021/program">Registration</Link>*/}
                <Nav.Link as={Link} to="/EDOC2021/venue">Venue</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navibar

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
            <Navbar.Brand
              style={{
                fontSize: 18
              }}
              as={Link} to="/">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <HoverDropdown href="" title="Program" id="collasible-nav-dropdown-1">
                  <NavDropdown.Item as={Link} to="/keynote">Conference Keynotes</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/workshop-keynote">Workshop Keynotes</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/industry-panel">Industry Panel</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/program-at-glance">Program at a Glance</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/paper-sessions">Paper Sessions</NavDropdown.Item>
                  {/*<NavDropdown.Item as={Link} to="/accepted-papers">Accepted papers</NavDropdown.Item>*/}
                </HoverDropdown>
                <HoverDropdown href="" title="Conference" id="collasible-nav-dropdown-2">
                  <NavDropdown.Item as={Link} to="/call-papers/">Call for Papers</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/committees/">Committees</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/important-dates">Important Dates</NavDropdown.Item>
                  <NavDropdown.Item href="https://ieee-edoc.org/">Previous EDOCs</NavDropdown.Item>
                </HoverDropdown>
                <HoverDropdown title="Workshops, Demos, Doctoral Consortium" id="collasible-nav-dropdown-3">
                  <NavDropdown.Item as={Link} to="/workshops">Call for Workshop Papers</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/call-workshops">Call for Workshop Proposals</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/call-demos">Call for Demos</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/doctoral-consortium">Doctoral Consortium</NavDropdown.Item>
                  {/*<NavDropdown.Divider />*/}
                  {/*<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                </HoverDropdown>
                <Nav.Link
                  style={{
                    fontSize: 18
                  }}
                  as={Link} to="/registration">Registration</Nav.Link>
                {/*<Link to="/program">Registration</Link>*/}
                <Nav.Link
                  style={{
                    fontSize: 18
                  }}
                  as={Link} to="/venue">Venue</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navibar

import { Link } from 'gatsby'
import React from 'react'

import '../styles/menu.css'

// import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
// import { Navbar, Nav, NavItem } from 'reactstrap'

const Menu = () => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">PARK SLOPE COLONICS</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={2}>
          <Link to="/">HOME</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/about">ABOUT</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/blog">BLOG</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/about">HOW TO PREPARE</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/faq">FAQ AND PRICING</Link>
        </NavItem>
        <NavItem eventKey={3}>
          <Link to="/testimonials">TESTIMONIALS</Link>
        </NavItem>
        <NavItem eventKey={4}>
          <Link to="/contact">CONTACT</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Menu

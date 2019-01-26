import { Link } from 'gatsby'

import { Grid } from 'react-bootstrap'

import '../styles/menu.css'

import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <Grid>
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/">PARK SLOPE COLONICS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">HOME</Link>
              </NavItem>
              <NavItem>
                <Link to="/about">ABOUT</Link>
              </NavItem>
              <NavItem>
                <Link to="/blog">BLOG</Link>
              </NavItem>
              <NavItem>
                <Link to="/about/">HOW TO PREPARE</Link>
              </NavItem>
              <NavItem>
                <Link to="/faq/">FAQ AND PRICING</Link>
              </NavItem>
              <NavItem>
                <Link to="/testimonials/">TESTIMONIALS</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact/">CONTACT</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Grid>
    )
  }
}

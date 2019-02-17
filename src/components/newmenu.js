import { Link } from 'gatsby'

import { Grid } from 'react-bootstrap'

// import '../styles/bootstrap.scss'

import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'

import '../styles/menu.css'

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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Park Slope Colonics</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="navbar-links" navbar>
              <NavItem>
                <Link to="/">HOME</Link>
              </NavItem>
              <NavItem>
                <Link to="/about">GRAVITY METHOD COLONICS</Link>
              </NavItem>
              <NavItem>
                <Link to="/faq">FAQ AND PRICING</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact">CONTACT</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Grid>
    )
  }
}

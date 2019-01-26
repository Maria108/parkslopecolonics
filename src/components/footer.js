import { Link } from 'gatsby'
import React from 'react'

import '../styles/footer.css'
import { Row, Col, Grid } from 'react-bootstrap'

import { FaMapMarkerAlt, FaPhone, FaRegClock } from 'react-icons/fa'

const Footer = () => (
  <footer className="footer">
    <Grid className="box-footer">
      <Row>
        <Col xs={6} md={6}>
          <div>
            <p>Contact</p>
            <p>
              <FaMapMarkerAlt /> 313 7th St, Brooklyn, NY, 11215
            </p>
            <p>
              <FaPhone /> 646-385-9985
            </p>
            <p>
              <FaRegClock /> Fridays 8:00AM - 7:00PM
            </p>
          </div>
        </Col>
        <Col xs={6} md={6}>
          <div>
            <p>Visit</p>
            <Link to="/instagram">
              <i class="fab fa-instagram" /> Instagram
            </Link>
            <p>
              <Link to="/About">
                <i class="fab fa-facebook-square" /> Facebook
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Grid>
  </footer>
)

export default Footer

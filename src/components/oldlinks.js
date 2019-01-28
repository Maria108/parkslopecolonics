import React from 'react'
import { Link } from 'gatsby'

import '../styles/about.css'
import { Row, Col, Grid } from 'react-bootstrap'

const Oldlinks = () => (
  <Grid>
    <Row>
      <Col xs={12} md={4}>
        <div className="page-link">
          <Link className="img-page-link" to="/about/">
            ABOUT COLONIC
          </Link>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div className="page-link">
          <Link className="img-page-link" to="/faq">
            FAQ and PRICE
          </Link>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div className="page-link">
          <Link className="img-page-link" to="/testimonials">
            TESTIMONIALS
          </Link>
        </div>
      </Col>
    </Row>
  </Grid>
)

export default Oldlinks

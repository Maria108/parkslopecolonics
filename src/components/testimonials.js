import React from 'react'

import '../styles/home.css'
import { Row, Col, Grid } from 'react-bootstrap'

import { FaChild, FaFeatherAlt, FaGem } from 'react-icons/fa'
import { IoMdStar } from 'react-icons/io'

const Testimonials = () => (
  <Grid>
    <Row>
      <Col xs={12} md={12}>
        <p className="what-they-say">What Clients Are Saying</p>
      </Col>
    </Row>
    <Row>
      <Col xs={3} md={3}>
        <p>
          {' '}
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </p>
        <p>
          -This is amazing. Feel so much better. Lena is the best therapist in
          the world!-
        </p>
        <p className="testimon">-Maria A-</p>
      </Col>
      <Col xs={3} md={3}>
        <p>
          {' '}
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </p>
        <p>
          -This is amazing. Feel so much better. Lena is the best therapist in
          the world!-
        </p>
        <p className="testimon">-Maria A-</p>
      </Col>
      <Col xs={3} md={3}>
        <p>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </p>
        <p>
          -This is amazing. Feel so much better. Lena is the best therapist in
          the world!-
        </p>
        <p className="testimon">-Maria A-</p>
      </Col>
      <Col xs={3} md={3}>
        <p>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </p>
        <p>
          -This is amazing. Feel so much better. Lena is the best therapist in
          the world!-
        </p>
        <p className="testimon">-Maria A-</p>
      </Col>
    </Row>
  </Grid>
)

export default Testimonials

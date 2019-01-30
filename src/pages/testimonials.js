import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/testimonials.css'
import { Grid, Col, Row } from 'react-bootstrap'

const Testimonials = () => (
  <Layout>
    <SEO title="testimonials" />
    <Grid align="center">
      <div class="customers-main">
        <Row>
          <Col xs={12} md={2} />
          <Col xs={12} md={8} className="top-review">
            <p>
              -This is amazing. Feel so much better. Lena is the best therapist
              in the world!-
            </p>
            <p className="testimon">-Maria A-</p>
          </Col>
        </Row>
      </div>
    </Grid>
  </Layout>
)

export default Testimonials

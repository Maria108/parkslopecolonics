import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Grid, Row, Col } from 'react-bootstrap'

import '../styles/faq.css'

const Faq = () => (
  <Layout>
    <SEO title="faq" />
    <Grid>
      <Row className="div-about-faq">
        <Col xs={2} md={3}>
          <p className="coming">coming soon...</p>
        </Col>
        <Col xs={10} md={9} className="faq" />
      </Row>
    </Grid>
  </Layout>
)

export default Faq

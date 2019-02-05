import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/faq.css'
import { Grid, Row, Col } from 'react-bootstrap'

const Faq = () => (
  <Layout>
    <SEO title="faq" />
    <Grid>
      <Row>
        <Col xs={2} md={3}>
          <p className="coming">coming soon...</p>
        </Col>
        <Col xs={10} md={9} className="main-div faq" />
      </Row>
    </Grid>
  </Layout>
)

export default Faq

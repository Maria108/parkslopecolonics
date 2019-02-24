import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Grid, Row, Col } from 'react-bootstrap'

import { FaCircle } from 'react-icons/fa'

import '../styles/faq.css'

const Faq = () => (
  <Layout>
    <SEO title="faq" />
    <Grid>
      <Row className="div-about-faq">
        <Col xs={2} md={5}>
          <p className="faq-p">
            <b>Gravity Colon Hydrotherapy Session (45-60 mins)</b>
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaCircle />
            </span>{' '}
            One Session $130{' '}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaCircle />
            </span>{' '}
            Package of Three Sessions $350{' '}
            <span className="cross-text">$390</span>
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaCircle />
            </span>{' '}
            Package of Six Sessions $650{' '}
            <span className="cross-text">$780</span>
          </p>
          <p className="faq-p">
            <b>Super Fresh Start (New Clients Only)</b>
          </p>
          <p className="faq-p">
            Come for your first colonic for regular price - get second one for
            $75 if you come within two weeks
          </p>
          <p className="coming">coming soon...</p>
        </Col>
        <Col xs={10} md={7} className="faq" />
      </Row>
    </Grid>
  </Layout>
)

export default Faq

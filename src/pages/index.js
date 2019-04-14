import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Grid, Row, Col } from 'react-bootstrap'

import SecondSection from '../components/secondSection'
import Testimonials from '../components/testimonials'
import Gallery from '../components/reactcar'

import '../styles/bootstrap.scss'
import '../styles/home.css'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Colon Hydrotherapy"
      keywords={[`colonic`, `brooklyn`, `newyork`, `colonics`, `park slope`]}
    />
    <Grid>
      <Row>
        <Col xs={12} md={12} className="first-section-home">
          <Row>
            <Col xs={6} md={7}>
              <div className="first-section-home-slogan">
                <p className="lighter-brighter">
                  Lighter & Brighter with Park Slope Colonics
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <SecondSection />

      <Row>
        <Col xs={12} md={12}>
          <p className="third-section-home-header">Meet Your Therapist</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} className="third-section-home-bio">
          <Row>
            <Col xs={6} md={5} />
            <Col xs={6} md={7}>
              <div className="bio">
                <p>
                  Hi! My name is Lena Bykova. I am a certified colon
                  hydrotherapist, certified holistic nutritionist and the owner
                  of Park Slope Colonics. Using gravity method as my preferred,
                  I have performed over a 1000 colonics each year since 2014 and
                  have had nothing but positive feedback from clients. I am
                  passionate about this work and look forward to helping you!
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={12} className="third-section-home-lena" />
      </Row>
      <Gallery />
    </Grid>
  </Layout>
)

export default IndexPage

import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Grid, Row, Col } from 'react-bootstrap'

import SecondSection from '../components/secondSection'
import Testimonials from '../components/testimonials'
import Gallery from '../components/reactcar'
import Carousel from '../components/carousel'


import '../styles/bootstrap.scss'
import '../styles/home.css'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Colon Hydrotherapy"
      keywords={[`colonic`, `brooklyn`, `newyork`, `colonics`, `park slope`, `discount`, `hydrotherapy`]}
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
          <div className="check-deal"><Link to="/faq">Enjoy our spring special!</Link></div>
        </Col>
        
      </Row>

      <SecondSection />

      <Row>
        <Col xs={12} md={12}>
          <p className="third-section-home-header">MEET YOUR THERAPIST</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} className="third-section-home-bio">
          <Row>
            <Col xs={6} md={5} />
            <Col xs={6} md={7}>
              <div className="bio">
                <p>
                  Hi! My name is Lena Bykova. I am a certified colon hydrotherapist, certified holistic nutritionist and the owner of Park Slope Colonics. In my early twenties I starter working at a colonic center and saw incredible results and transformations clients were having using gravity method colonics. That inspired me to get certified and to start doing colon hygiene for myself regularly and to provide this service for clients. I've been a therapist since 2014 and performed over 1000 colonics each year, helping clients to get their optimal results. Im passionate about digestive health and its huge role on our life and wellbeing, and I see daily what tremendous impact colonics are making in helping your digestive system and overall health.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={12} className="third-section-home-lena" />
      </Row>
      <Row>
      <Col xs={12} md={12}>
        <p className="fourth-section-home-header">WHAT CLIENTS ARE SAYING</p>
      </Col>
    </Row>
      <Gallery />
    </Grid>
  </Layout>
)

export default IndexPage

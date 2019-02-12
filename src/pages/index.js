import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Row, Col, Grid } from 'react-bootstrap'

import Oldlinks from '../components/oldlinks'
import SecondSection from '../components/secondSection'
import Testimonials from '../components/testimonials'
import TestimonialsNew from '../components/newtestimonials'
import Responsive from '../components/slide'
import Carouselreact from '../components/carousel'
import Gallery from '../components/reactcar'

import { FaRegCheckSquare } from 'react-icons/fa'

import '../styles/bootstrap.scss'
import '../styles/home.css'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`colonic`, `brooklyn`, `newyork`, `colonics`, `park slope`]}
    />
    <Grid>
      <Row>
        <Col xs={12} md={12} className="first-section-home">
          <Row>
            <Col xs={6} md={7}>
              <div className="on-top">
                <p>Lighter & Brighter with Park Slope Colonics</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
    <div className="second-section">
      <SecondSection />
    </div>
    <Grid>
      <Row>
        <Col xs={12} md={12}>
          <p className="about-me">Meet Your Therapist</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} className="div-about-lena-home">
          <Row>
            <Col xs={6} md={5} />
            <Col xs={6} md={7}>
              <div className="bio">
                <p>
                  I am Lena Bykova, a certified colon hydrotherapist, certified
                  holistic nutritionist and the owner of Park Slope Colonics.
                  Using gravity method as my preferred, I have been performing
                  over a 1000 colonics each year since 2014 and got nothing but
                  positive feedback. Happy to help!
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={12} className="div-about-lena-two" />
      </Row>
      <Testimonials />
    </Grid>
    <div className="testimonials-section" />
  </Layout>
)

export default IndexPage

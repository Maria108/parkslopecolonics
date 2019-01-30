import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Row, Col, Grid } from 'react-bootstrap'

import Oldlinks from '../components/oldlinks'
import SecondSection from '../components/secondSection'
import Testimonials from '../components/testimonials'
import TestimonialsNew from '../components/newtestimonials'

import { FaRegCheckSquare } from 'react-icons/fa'

import '../styles/home.css'
import 'bootstrap/dist/css/bootstrap.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`colonic`, `brooklyn`, `newyork`]} />
    <Grid>
      <Col className="main-div pic-one">
        <Row>
          <Col xs={6} md={7}>
            <div className="on-top">
              <p>Lighter & Brighter with Park Slope Colonics</p>
            </div>
          </Col>
        </Row>
      </Col>
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
      <div className="main-div-about pic-four">
        <Row>
          <Col xs={6} md={5} />
          <Col xs={6} md={7}>
            <div className="bio">
              <p>
                My name is Lena Bykova, I am a certified colon hydrotherapist,
                certified holistic nutritionist and the owner of Park Slope
                Colonics. Using gravity method as my preffered, I have been
                performing over a 1000 colonics each year since 2014 and got
                nothing but positive feedback.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Grid>
    <div className="testimonials-section">
      <Testimonials />
    </div>
  </Layout>
)

export default IndexPage

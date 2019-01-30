import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Row, Col, Grid } from 'react-bootstrap'

import Oldlinks from '../components/oldlinks'
import SecondSection from '../components/secondSection'

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
              <p>Powerful detoxification methods for a healthy life</p>
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
                Lena Bykova is a certified colon hydrotherapist, certified
                holistic nutritionist and the owner of Park Slope Colonics.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Grid>
  </Layout>
)

export default IndexPage

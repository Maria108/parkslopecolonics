import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Grid, Row, Col } from 'react-bootstrap'

import SecondSection from '../components/secondSection'
// import Gallery from '../components/reactcar'
// import Carousel from '../components/carousel'
import Carouselmulti from '../components/multicar'
import ModalExample from '../components/modalcovid'

import { BsFillExclamationTriangleFill } from 'react-icons/bs'

import '../styles/bootstrap.scss'
import '../styles/home.css'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Colon Hydrotherapy"
      keywords={[
        `colonic`,
        `brooklyn`,
        `newyork`,
        `colonics`,
        `park slope`,
        `discount`,
        `hydrotherapy`,
      ]}
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
              {/*<div className="covidalert">
                <BsFillExclamationTriangleFill
                  color="red"
                  style={{ verticalAlign: 'text-top' }}
                />
                <span className="covidmsg">
                  Park slope colonics is now open!
                  <span>
                    <ModalExample />
                  </span>
                </span>
              </div> */}
              <div className="first-section-home-book-apt">
                <a
                  className="book-apt"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://square.site/book/B5H65JGC5J9Y9/park-slope-colonics-brooklyn-ny"
                >
                  BOOK AN APPOINTMENT
                </a>
              </div>
            </Col>
          </Row>

          {/*<div className="check-deal">
            <Link className="check-deal-deal" to="/faq">
              Enjoy our New Year deal!
            </Link>
            </div> */}
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
                  Hi! My name is Elena Bykova. I am a certified colon
                  hydrotherapist, certified holistic nutritionist and the owner
                  of Park Slope Colonics. In my early twenties I starter working
                  at a colonic center and saw incredible results and
                  transformations clients were having using gravity method
                  colonics. That inspired me to get certified and to start doing
                  colon hygiene for myself regularly and to provide this service
                  for clients. I've been a therapist since 2014 and performed
                  over 1000 colonics each year, helping clients to get their
                  optimal results. Im passionate about digestive health and its
                  huge role on our life and wellbeing, and I see daily what
                  tremendous impact colonics are making in helping your
                  digestive system and overall health.
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
      <Carouselmulti />
    </Grid>
  </Layout>
)

export default IndexPage

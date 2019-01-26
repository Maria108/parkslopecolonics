import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Row, Col, Grid } from 'react-bootstrap'

import { FaRegCheckSquare } from 'react-icons/fa'

import '../styles/home.css'
import 'bootstrap/dist/css/bootstrap.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`colonic`, `brooklyn`, `newyork`]} />
    <Grid>
      <div className="main-div pic-one">
        <Row>
          <Col xs={6} md={7}>
            <div className="on-top">
              <p>Powerful detoxification methods for a healthy life</p>
            </div>
            <div>
              <p className="points">
                <FaRegCheckSquare /> Eliminate bloating
              </p>
              <p className="points">
                <FaRegCheckSquare /> Increase energy
              </p>
              <p className="points">
                <FaRegCheckSquare /> Boost immunity
              </p>
              <p className="points">
                <FaRegCheckSquare /> Clear skin
              </p>
              <p className="points">
                <FaRegCheckSquare /> Detoxify your body
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Grid>
    <div className="second-section">
      <Grid>
        <Row>
          <Col xs={12} md={4}>
            <div className="page-link">
              <Link className="img-page-link" to="/about/">
                ABOUT COLONIC
              </Link>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="page-link">
              <Link className="img-page-link" to="/faq">
                FAQ and PRICE
              </Link>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="page-link">
              <Link className="img-page-link" to="/testimonials">
                TESTIMONIALS
              </Link>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
    <Grid>
      <div className="main-div-about pic-four">
        <Row>
          <Col xs={6} md={5} />
          <Col xs={6} md={7}>
            <div className="bio">
              <p>
                ELENA BYKOVA moved to NY from Russia, Siberia in 2010. Armed
                with a bachelor degree in Mathematics, Elena was on the fast
                track towards a career in finance, but soon realized how
                unfulfilling and meaningless this path was. Eventually, she
                moved to the USA alone and started a new life. Passionate about
                health and nutrition, her decision to refocus her studies and
                professional career came naturally when in 2013 she became a
                part of the Gravity East Village team. Elena became extremely
                knowledgeable about holistic living, cleansing and
                detoxification, and healthy lifestyle. After a year of
                witnessing all the many happy clients exiting the colonic room
                and watching the incredible positive change Colon Hydro-therapy
                made on them, she became inspired to become a therapist herself.
                Elena has enjoyed working as a Colon Hydro-therapist for several
                years now.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Grid>
  </Layout>
)

export default IndexPage

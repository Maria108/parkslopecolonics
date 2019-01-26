import React from 'react'
import MapContainer from '../components/map.js'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/contact.css'
import { Row, Col, Grid } from 'react-bootstrap'

import { FaRegEnvelope, FaPhone, FaRegClock } from 'react-icons/fa'

const Contact = () => (
  <Layout>
    <SEO title="contact" />
    <Grid>
      <div className="contacts-main">
        <Row>
          <Col xs={12} md={6}>
            <div className="contact-info">
              <h1>Park Slope Colonics</h1>
              <p>
                <FaPhone /> 646-385-9985 text or call
              </p>
              <p>
                <FaRegEnvelope /> parkslopecolonics@gmail.com
              </p>
              <p>
                <FaRegClock /> Fridays 8:00AM - 7:00PM
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="my-maps">
              <MapContainer />
            </div>
          </Col>
        </Row>
      </div>
    </Grid>
  </Layout>
)

export default Contact

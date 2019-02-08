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
            <Col xs={12} md={12}>
              <div className="contact-info">
                <p className="contact-header">Contacts</p>
                <p>
                  <FaPhone /> <a href="tel:+16463859985">646-385-99852</a> text
                  or call
                </p>
                <p>
                  <FaRegEnvelope /> parkslopecolonics@gmail.com
                </p>
                <p>
                  <FaRegClock /> Wednesdays 8:00AM - 7:00PM
                </p>
                <p className="work-hours">Thursday 8:00AM - 7:00PM</p>
                <p className="work-hours">Friday 8:00AM - 7:00PM</p>
              </div>
            </Col>
            <Col xs={12} md={12}>
              <div className="my-maps">
                <MapContainer />
              </div>
            </Col>
          </Col>
          <Col xs={12} md={6}>
            <div className="contact-picture" />
          </Col>
        </Row>
      </div>
    </Grid>
  </Layout>
)

export default Contact

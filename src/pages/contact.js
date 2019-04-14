import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Grid, Row, Col } from 'react-bootstrap'

import MapContainer from '../components/map.js'
// import Maps from '../components/newmap.js'

import '../styles/contact.css'

import { FaRegEnvelope, FaPhone, FaRegClock, FaInstagram } from 'react-icons/fa'

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
                <p className="contact-content">
                  <FaPhone color="green" />{' '}
                  <a href="tel:+16463859985">646-385-9985</a> text or call
                </p>
                <p className="contact-content">
                  <FaRegEnvelope color="blue" />{' '}
                  <a href="mailto:parkslopecolonics@gmail.com">
                    parkslopecolonics@gmail.com
                  </a>
                </p>
                <p className="contact-content">
                  <FaRegClock /> Wed-Fri 8:00AM - 7:00PM
                </p>
                <div className="contact-content">
                  <FaInstagram className="instagram-icon" />{' '}
                  <a
                    href="https://www.instagram.com/parkslopecolonics/?hl=en"
                    target="_blank"
                  >
                    parkslopecolonics
                  </a>
                </div>
                <div className="div-book-apt">
                  <a
                    className="book-apt"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    href="https://squareup.com/appointments/book/8bc57aaf-d0a9-46ce-8841-ea5b773419e0/0XQ3582XGB99C/date"
                  >
                    BOOK AN APPOINTMENT
                  </a>
                </div>
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

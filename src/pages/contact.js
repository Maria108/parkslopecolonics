import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Grid, Row, Col } from 'react-bootstrap'

import MapContainer from '../components/map.js'
// import Maps from '../components/newmap.js'

import '../styles/bootstrap.scss'
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
                <p className="contact-header">CONTACTS</p>
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
                  <FaRegClock /> Mon-Tue 3:30PM - 8PM
                  <p>Wed-Fri 8AM - 8PM</p>
                </p>
                <div className="contact-content">
                  <FaInstagram className="instagram-icon" />{' '}
                  <a
                    href="https://www.instagram.com/parkslopecolonics/?hl=en"
                    rel="noopener noreferrer nofollow"
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
                    href="https://square.site/book/B5H65JGC5J9Y9/park-slope-colonics-brooklyn-ny"
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

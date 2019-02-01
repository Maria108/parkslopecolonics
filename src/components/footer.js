import { Link } from 'gatsby'
import React from 'react'

import '../styles/footer.css'
import { Row, Col, Grid } from 'react-bootstrap'

import { FaMapMarkerAlt, FaPhone, FaRegClock } from 'react-icons/fa'

const Footer = () => (
  <footer className="footer">
    <Grid className="box-footer">
      <Row>
        <Col xs={6} md={6}>
          <div>
            <p>Contact</p>
            <p>
              <FaMapMarkerAlt /> 313 7th St, Brooklyn, NY, 11215
            </p>
            <p>
              <FaPhone /> 646-385-9985
            </p>
            <p>
              <FaRegClock /> Fridays 8:00AM - 7:00PM
            </p>
          </div>
        </Col>
        <Col xs={6} md={6}>
          <div>
            <p className="let-connect">Let's connect</p>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" />
              <p className="message-me">
                <label>
                  Name{' '}
                  <p>
                    <input className="input-t-2" type="text" name="name" />
                  </p>
                </label>
              </p>
              <p className="message-me">
                <label>
                  Email{' '}
                  <p>
                    <input className="input-t-2" type="email" name="email" />
                  </p>
                </label>
              </p>
              <p className="message-me">
                <label>
                  Message:{' '}
                  <p>
                    <textarea className="input-message" name="message" />
                  </p>
                </label>
              </p>
              <p className="message-me">
                <button className="btn-form" type="submit">
                  Send
                </button>
              </p>
            </form>
          </div>
        </Col>
      </Row>
    </Grid>
  </footer>
)

export default Footer

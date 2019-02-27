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
            <p className="footer-contact">Contact</p>
            <div className="footer-contact">
              <FaMapMarkerAlt /> 313 7th St, Brooklyn, NY, 11215
            </div>
            <div className="footer-contact">
              <FaPhone /> <a href="tel:+16463859985">646-385-9985</a>
            </div>
            <div className="footer-contact">
              <FaRegClock /> Wed-Fri 8:00AM - 7:00PM
            </div>
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
        </Col>
        <Col xs={6} md={6}>
          <div>
            <p className="let-connect">Let's connect</p>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" />
              <div>
                <label>
                  Name{' '}
                  <div>
                    <input
                      className="footer-input-text"
                      type="text"
                      name="name"
                    />
                  </div>
                </label>
              </div>
              <div>
                <label>
                  Email{' '}
                  <div>
                    <input
                      className="footer-input-text"
                      type="email"
                      name="email"
                    />
                  </div>
                </label>
              </div>
              <div>
                <label>
                  Message:{' '}
                  <div>
                    <textarea className="input-message" name="message" />
                  </div>
                </label>
              </div>
              <div>
                <button className="btn-form" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Grid>
  </footer>
)

export default Footer

import React from 'react'

import '../styles/footer.css'
import { Row, Col, Grid } from 'react-bootstrap'

import {
  FaMapMarkerAlt,
  FaPhone,
  FaRegClock,
  FaInstagram,
} from 'react-icons/fa'

const Footer = () => (
  <footer className="footer">
    <Grid className="box-footer">
      <Row>
        <Col xs={6} md={6}>
          <div>
            <p className="footer-contact-header">CONTACT</p>
            <div className="footer-contact">
              <FaMapMarkerAlt color="red" /> <a
              href="https://www.google.com/maps/dir//Park+Slope+Colonics,+7th+Street,+Brooklyn,+NY/@40.7136227,-74.0399837,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25bfecdb8bcc7:0x40af216f52f8c20a!2m2!1d-73.9858381!2d40.6708317"
              target="_blank"
              rel="noopener noreferrer"
            >
            313 7th St, Brooklyn, NY, 11215
            </a>
            </div>
            <div className="footer-contact">
              <FaPhone color="green" />{' '}
              <a href="tel:+16463859985">646-385-9985</a>
            </div>
            <div className="footer-contact">
              <FaRegClock /> Mon-Tue 3:30PM - 8PM
              <p>Wed-Fri 8AM - 8PM</p>
            </div>
            <div className="footer-contact">
              <FaInstagram className="instagram-icon-footer"/>{' '}
              <a
                href="https://www.instagram.com/parkslopecolonics/?hl=en"
                target="_blank"
              >
                parkslopecolonics
              </a>
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
            <p className="let-connect">SEND US A MESSAGE</p>
          </div>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" />
              <Row>
                <Col xs={5} md={5} className="footer-input-name">
                  <label>
                
                    <div>
                      <input
                        className="footer-input-text"
                        type="text"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                  </label>
                </Col>
              
             
                <Col xs={7} md={7} className="footer-input-name">
                  <label>
                  
                    <div>
                      <input
                        className="footer-input-text"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                  </label>
                </Col>
              </Row>
              <div>
                <label>
            
                  <div>
                    <textarea className="input-message" name="message" placeholder="Message"/>
                  </div>
                </label>
              </div>
              <div>
                <button className="btn-form" type="submit">
                  Send
                </button>
              </div>
            </form>
          
        </Col>
      </Row>
    </Grid>
  </footer>
)

export default Footer

import React from 'react'

import { Row, Col } from 'react-bootstrap'

import { FaCircle, FaCheck } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

import '../styles/about.css'

const Prepare = () => (
  <Row className="third-section-about">
    <Col xs={6} md={5}>
      <div className="third-section-about-picture" />
    </Col>
    <Col xs={12} md={7}>
      <div>
        <Row>
          <Col xs={12} md={12}>
            <div className="third-section-about-header">
              <p>HOW TO PREPARE</p>
            </div>
            <div className="third-section-about-recommendations">
              <p>
                Here are some recommendations to help you get the most out of
                your session, not requirements.
              </p>
              <p>Few days prior and right after your colonic session:</p>
            </div>
          </Col>
          <Col xs={2} md={5}>
            <div className="third-section-about-avoid-include">
              <div className="third-section-about-colon-dos">
                <span className="icon-dont">
                  <IoMdClose />
                </span>
                AVOID
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Alcohol
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Carbonated drinks
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Dairy Products
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Fatty and fried foods
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                White flour products
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Processed and junk foods
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Refined sugar
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Acidic foods
              </div>
            </div>
          </Col>
          <Col xs={2} md={7}>
            <div className="third-section-about-avoid-include">
              <div className="third-section-about-colon-dos">
                {' '}
                <span className="icon-do">
                  <FaCheck />
                </span>{' '}
                INCLUDE
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Leafy greens (kale, spinach, mustard greens)
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Colorful veggies, fruits, berries
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Organic vegetable soups
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Veggie juices
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Whole grains (brown rice, quinoa)
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Seasonal organic vegetables
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Purified and distilled water, herbal teas
              </div>
              <div className="third-section-about-points">
                <span className="third-section-about-icon">
                  <FaCircle />
                </span>{' '}
                Alkaline foods
              </div>
            </div>
          </Col>
          <Col xs={12} md={12}>
            <div className="third-section-about-recommendations-bottom">
              <p>
                On the day of your session you should come on empty stomach,
                stop eating at least 3,5 hours leading up to your appointment
                and stop drinking about 1,5 hours before your appointment.
                You'll feel a lot more comfortable if you'll avoid a full
                stomach and bladder. It's important to stay hydrated pre and
                post colonic session.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
)

export default Prepare

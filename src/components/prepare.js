import React from 'react'

import '../styles/about.css'
import { Row, Col, Grid } from 'react-bootstrap'

import { FaCircle, FaCheck } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

const Prepare = () => (
  <Grid id="how-to-prepare">
    <div className="main-div-colon picture-include">
      <div className="opacity-dive">
        <Row>
          <Col xs={4} md={4} />
          <Col xs={12} md={8}>
            <div className="white-bckgrnd-about">
              <Row>
                <Col xs={12} md={12}>
                  <div className="about-colon">
                    <p>HOW TO PREPARE</p>
                  </div>
                  <div className="recommendations">
                    <p>
                      Here are some recommendations to help you get the most out
                      of your session, not requirements.
                    </p>
                    <p>Few days prior and right after your colonic session:</p>
                  </div>
                </Col>
                <Col xs={2} md={5}>
                  <div className="avoid">
                    <p className="info-about-colon-dos">
                      <span className="icon-dont">
                        <IoMdClose />
                      </span>
                      AVOID
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Alcohol
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Carbonated drinks
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Dairy Products
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Fatty and fried foods
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      White flour products
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Processed and junk foods
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Refined sugar
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Acidic foods
                    </p>
                  </div>
                </Col>
                <Col xs={2} md={7}>
                  <div className="include">
                    <p className="info-about-colon-dos">
                      {' '}
                      <span className="icon-do">
                        <FaCheck />
                      </span>{' '}
                      INCLUDE
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Leafy greens (kale, spinach, mustard greens)
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Colorful veggies, fruits, berries
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Organic vegetable soups
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Veggie juices
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Whole grains (brown rice, quinoa)
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Seasonal organic vegetables
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Purified and distilled water, herbal teas
                    </p>
                    <p className="info-about-colon">
                      <span className="icon">
                        <FaCircle />
                      </span>{' '}
                      Alkaline foods
                    </p>
                  </div>
                </Col>
                <Col xs={12} md={12}>
                  <div className="recommendations-bottom">
                    <p>
                      On the day of your session you should come on empty
                      stomach, stop eating at least 3,5 hours leading up to your
                      appointment and stop drinking about 1,5 hours before your
                      appointment. You'll feel a lot more comfortable if you'll
                      avoid a full stomach and bladder. It's important to stay
                      hydrated pre and post colonic session.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </Grid>
)

export default Prepare

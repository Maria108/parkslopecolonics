import React from 'react'

import '../styles/about.css'
import { Row, Col, Grid } from 'react-bootstrap'

import {
  FaChild,
  FaFeatherAlt,
  FaGem,
  FaCheck,
  FaHippo,
  FaRegMehRollingEyes,
  FaRegDizzy,
} from 'react-icons/fa'

const SecondSection = () => (
  <Grid>
    <Row>
      <Col xs={12} md={12}>
        <p className="what-will-get">What Will You Get Out Off The Treatment</p>
        <p className="recommendations">
          In the words of my clients the past 4 years…they have repeatedly
          shared the following…
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={4}>
        <div className="image-about-about">
          <div className="poop-icon">
            <FaFeatherAlt />
          </div>
          <p className="myth">FEEL</p>
          <div>
            <p className="points">
              <FaCheck /> Lighter and Brighter!
            </p>
            <p className="points">
              <FaCheck /> Eliminate bloating
            </p>
            <p className="points">
              <FaCheck /> Get clear glowing skin
            </p>
            <p className="points">
              <FaCheck /> Enhance elimination
            </p>
            <p className="points">
              <FaCheck /> Improve digestion
            </p>
          </div>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div className="image-about-about">
          <div className="poop-icon">
            <FaGem />
          </div>
          <p className="myth">LOOK</p>
          <div>
            <p className="points">
              <FaCheck /> Radiant!
            </p>
            <p className="points">
              <FaCheck /> Loose extra inches
            </p>
            <p className="points">
              <FaCheck /> Reduce inflammation
            </p>
            <p className="points">
              <FaCheck /> Decrease puffiness
            </p>
            <p className="points">
              <FaCheck /> Maintain youthfulness
            </p>
          </div>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div className="image-about-about">
          <div className="poop-icon">
            <FaChild />
          </div>
          <p className="myth">EXPERIENCE</p>
          <div>
            <p className="points">
              <FaCheck /> Function at your optimum level
            </p>
            <p className="points">
              <FaCheck /> Think clearly
            </p>
            <p className="points">
              <FaCheck /> Reduce anxiety
            </p>
            <p className="points">
              <FaCheck /> Absorb nutrients better
            </p>
            <p className="points">
              <FaCheck /> Boost your immune system
            </p>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={12}>
        <p className="recommendations-b">
          In short, enhance your overall sense of physical & mental wellbeing.
          You will feel the difference even after one session. Happy to help!
        </p>
      </Col>
    </Row>
  </Grid>
)

export default SecondSection

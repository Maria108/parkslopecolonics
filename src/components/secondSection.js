import React from 'react'

import '../styles/about.css'
import { Row, Col, Grid } from 'react-bootstrap'

import { FaChild, FaFeatherAlt, FaGem } from 'react-icons/fa'
import { IoMdCheckmark } from 'react-icons/io'

const SecondSection = () => (
  <Grid>
    <Row>
      <Col xs={12} md={12}>
        <p className="what-will-get">What Will You Get Out Of The Treatment</p>
        <p className="recommendations">
          In the words of my clients they have repeatedly shared the following…
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
              <IoMdCheckmark /> Lighter and Brighter!
            </p>
            <p className="points">
              <IoMdCheckmark /> Eliminate bloating
            </p>
            <p className="points">
              <IoMdCheckmark /> Reduce inflammation
            </p>
            <p className="points">
              <IoMdCheckmark /> Enhance elimination
            </p>
            <p className="points">
              <IoMdCheckmark /> Improve digestion
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
              <IoMdCheckmark /> Radiant!
            </p>
            <p className="points">
              <IoMdCheckmark /> Loose extra inches
            </p>
            <p className="points">
              <IoMdCheckmark /> Get clear glowing skin
            </p>
            <p className="points">
              <IoMdCheckmark /> Decrease puffiness
            </p>
            <p className="points">
              <IoMdCheckmark /> Maintain youthfulness
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
              <IoMdCheckmark /> Function at your optimum level
            </p>
            <p className="points">
              <IoMdCheckmark /> Think clearly
            </p>
            <p className="points">
              <IoMdCheckmark /> Reduce anxiety
            </p>
            <p className="points">
              <IoMdCheckmark /> Absorb nutrients better
            </p>
            <p className="points">
              <IoMdCheckmark /> Boost your immune system
            </p>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={12}>
        <p className="recommendations-b">
          In short, enhance your overall sense of physical & mental wellbeing.
          Most people feel the difference even after one session.
        </p>
      </Col>
    </Row>
  </Grid>
)

export default SecondSection

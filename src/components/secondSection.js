import React from 'react'

import '../styles/about.css'
import { Row, Col } from 'react-bootstrap'

import { FaChild, FaFeatherAlt, FaGem } from 'react-icons/fa'
import { IoMdCheckmark } from 'react-icons/io'

const SecondSection = () => (
  <div className="second-section-home">
    <Row>
      <Col xs={12} md={12}>
        <p className="second-section-home-header">
          WHAT WILL YOU GET OUT OF THE TREATMENT
        </p>
        <p className="second-section-home-dscrpn">
          In the words of my clients they have repeatedly shared the following…
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={4}>
        <div className="second-section-home-icon">
          <FaFeatherAlt />
        </div>
        <p className="second-section-home-points-header">FEEL</p>
        <div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Lighter and Brighter!
          </div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Eliminate bloating
          </div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Reduce inflammation
          </div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Enhance elimination
          </div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Improve digestion
          </div>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div className="second-section-home-icon">
          <FaGem />
        </div>
        <p className="second-section-home-points-header">LOOK</p>
        <div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Radiant!
          </div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Loose extra inches
          </div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Get clear glowing skin
          </div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Decrease puffiness
          </div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Maintain youthfulness
          </div>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div className="second-section-home-icon">
          <FaChild />
        </div>
        <p className="second-section-home-points-header">EXPERIENCE</p>
        <div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Function at your optimum level
          </div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Think clearly
          </div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Reduce anxiety
          </div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Absorb nutrients better
          </div>
          <div className="second-section-home-points">
            <IoMdCheckmark /> Boost your immune system
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={12}>
        <p className="second-section-home-conclusion">
          In short, enhance your overall sense of physical & mental wellbeing.
          Most people feel the difference even after one session.
        </p>
      </Col>
    </Row>
  </div>
)

export default SecondSection

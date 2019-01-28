import React from 'react'

import '../styles/about.css'
import { Row, Col, Grid } from 'react-bootstrap'

import {
  FaWind,
  FaToiletPaper,
  FaBatteryQuarter,
  FaHippo,
  FaRegMehRollingEyes,
  FaRegDizzy,
  FaRegCheckSquare,
} from 'react-icons/fa'

const SecondSection = () => (
  <Grid>
    <Row>
      <Col xs={12} md={4}>
        <div className="image-about-about">
          <div className="poop-icon">
            <FaBatteryQuarter />
          </div>
          <p className="myth">LOOK</p>
          <div>
            <p className="points">
              <FaRegCheckSquare /> Eliminate bloating
            </p>
            <p className="points">
              <FaRegCheckSquare /> Increase energy
            </p>
            <p className="points">
              <FaRegCheckSquare /> Boost immunity
            </p>
            <p className="points">
              <FaRegCheckSquare /> Clear skin
            </p>
            <p className="points">
              <FaRegCheckSquare /> Detoxify your body
            </p>
          </div>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div className="image-about-about">
          <div className="poop-icon">
            <FaWind />
          </div>
          <p className="myth">FEEL</p>
          <div>
            <p className="points">
              <FaRegCheckSquare /> Eliminate bloating
            </p>
            <p className="points">
              <FaRegCheckSquare /> Increase energy
            </p>
            <p className="points">
              <FaRegCheckSquare /> Boost immunity
            </p>
            <p className="points">
              <FaRegCheckSquare /> Clear skin
            </p>
            <p className="points">
              <FaRegCheckSquare /> Detoxify your body
            </p>
          </div>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div className="image-about-about">
          <div className="poop-icon">
            <FaToiletPaper />
          </div>
          <p className="myth">EXPERIENCE</p>
          <div>
            <p className="points">
              <FaRegCheckSquare /> Eliminate bloating
            </p>
            <p className="points">
              <FaRegCheckSquare /> Increase energy
            </p>
            <p className="points">
              <FaRegCheckSquare /> Boost immunity
            </p>
            <p className="points">
              <FaRegCheckSquare /> Clear skin
            </p>
            <p className="points">
              <FaRegCheckSquare /> Detoxify your body
            </p>
          </div>
        </div>
      </Col>
    </Row>
  </Grid>
)

export default SecondSection

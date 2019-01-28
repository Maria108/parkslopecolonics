import React from 'react'

import '../styles/about.css'
import { Row, Col, Grid } from 'react-bootstrap'


const Benefits = () => (
  <Grid>
    <div className="main-div-colon picture-about">
      <div className="opacity-dive">
        <Row>
          <Col xs={12} md={12}>
            <div className="white-bckgrnd-about">
              <Row>
                <Col xs={12} md={12} className="recommendations">
                  <p>
                    In the words of my clients the past 4 years…they have
                    repeatedly shared the following…
                  </p>
                </Col>

                <Col xs={4} md={3}>
                  <p className="info-benefit">LOOK</p>
                  <p className="info-about-colon">Radiant!</p>
                  <p className="info-about-colon">Bright-Eyed</p>
                  <p className="info-about-colon">Full of Life</p>
                  <p className="info-about-colon">Stress-free</p>
                  <p className="info-about-colon">Slimmer</p>
                </Col>

                <Col xs={4} md={3}>
                  <p className="info-benefit">THINK</p>
                  <p className="info-about-colon">Clearly!</p>
                  <p className="info-about-colon">Eliminate Brain Fog</p>
                  <p className="info-about-colon">More Mental Sharpness</p>
                  <p className="info-about-colon">Enhanced Concentration</p>
                  <p className="info-about-colon">Improved Memory</p>
                </Col>

                <Col xs={4} md={3}>
                  <p className="info-benefit">FEEL</p>
                  <p className="info-about-colon">Amazing!</p>
                  <p className="info-about-colon">More Alive</p>
                  <p className="info-about-colon">Super Clean</p>
                  <p className="info-about-colon">Deeply Calm</p>
                  <p className="info-about-colon">Relieved</p>
                </Col>

                <Col xs={4} md={3}>
                  <p className="info-benefit">BEAUTY</p>
                  <p className="info-about-colon">Eliminate Bloating!</p>
                  <p className="info-about-colon">Decrease Water Weight</p>
                  <p className="info-about-colon">Lose Inches</p>
                  <p className="info-about-colon">Get Glowing Skin</p>
                  <p className="info-about-colon">Manage Skin Breakouts</p>
                </Col>

                <Col xs={12} md={12} className="recommendations">
                  <p>
                    In short, enhance your overall sense of physical & mental
                    wellbeing. You will feel the difference even after one
                    session. Happy to help!
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </Grid>
)

export default Benefits

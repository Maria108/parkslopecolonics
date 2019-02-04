import React from 'react'
import { Link } from 'gatsby'

import Prepare from '../components/prepare'
import Benefits from '../components/benefits'

import Layout from '../components/layout'
import SEO from '../components/seo'

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

const About = () => (
  <Layout>
    <SEO title="about" />
    <Benefits />
    <div className="about-two">
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <div className="how-you-know">
              <p>HOW DO YOU KNOW IT'S TIME FOR COLONIC</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <div className="image-about-about">
              <div className="poop-icon">
                <FaBatteryQuarter />
              </div>
              <p className="myth">FATIGUE</p>
              <p className="about-myth">
                A lack of essential vitamins in the body can sap your energy, it
                can be the major factor in chronic fatigue syndrome. If your
                digestive system isn’t able to draw all the nutrients from food,
                it misses out on vital sustenance. An unhealthy colon can also
                have undigested food building up which blocks the body’s ability
                to eliminate it as waste. This matter will turn toxic so by
                flushing through the colon with water, colonic hydrotherapy can
                restore normal function. And the benefits of colonic
                hydrotherapy for fatigue and depression don’t end there.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="image-about-about">
              <div className="poop-icon">
                <FaWind />
              </div>
              <p className="myth">BLOATING</p>
              <p className="about-myth">
                Colon cleanse is the top remedy to relieve gas and bloating.
                Colon hydrotherapy can help to treat gas and bloating in a few
                ways: It is the safest and most effective method to remove bowel
                obstructions, so that the colon may pass blocked fecal matter
                and release trapped gas.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="image-about-about">
              <div className="poop-icon">
                <FaToiletPaper />
              </div>
              <p className="myth">CONSTIPATION</p>
              <p className="about-myth">
                With time, some unwanted fecal matter and toxic material may
                accumulate in the colon leading to overdistention of the colon
                muscles resulting in chronic constipation. Although the colon
                has its own way of cleansing these toxic materials, nowadays our
                diet, environment, low physical activity, and stressful
                lifestyle may lead to dysfunction of this colon function.
                Colonic hydrotherapy is a very effective and simple way to get
                rid of these toxins.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <div className="image-about-about">
              <div className="poop-icon">
                <FaRegMehRollingEyes />
              </div>
              <p className="myth">SKIN ISSUES</p>
              <p className="about-myth">
                Practitioners and devotes of colonic agree, there is no clear
                and beautiful skin without a clean colon. What happens in the
                colon is directly seen in the skin. Regular sessions with the
                hose and clean diet can clear up acne, psoriasis and eczema, and
                even a single session can give an immediate glow to the skin.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="image-about-about">
              <div className="poop-icon">
                <FaHippo />
              </div>
              <p className="myth">FEELING HEAVY/SLUGGISH</p>
              <p className="about-myth">
                If you are feeling sluggish, constantly fighting off colds, flu
                and allergies, if you are craving sugary foods, fighting a foggy
                brain, its a sign your body needs a cleanse/detox. Most clients
                report feeling lighter, emptier, uplifted, cleansed, less
                bloated, and happier and more at ease.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="image-about-about">
              <div className="poop-icon">
                <FaRegDizzy />
              </div>
              <p className="myth">HEADACHE</p>
              <p className="about-myth" />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
    <Prepare />
  </Layout>
)

export default About

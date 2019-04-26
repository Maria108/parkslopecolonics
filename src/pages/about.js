import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Grid, Row, Col } from 'react-bootstrap'

import Prepare from '../components/prepare'
import AboutColonic from '../components/aboutColonic'

import '../styles/about.css'

import {
  FaWind,
  FaToiletPaper,
  FaBatteryQuarter,
  FaHippo,
  FaRegMehRollingEyes,
  FaRegDizzy,
} from 'react-icons/fa'

const About = () => (
  <Layout>
    <SEO title="About" />
    <Grid>
      <AboutColonic />
      <Row>
        <Col xs={12} md={12}>
          <div className="second-section-about">
            <p>HOW DO YOU KNOW IT'S TIME FOR COLONIC</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <div className="second-section-about-icon">
            <FaBatteryQuarter />
          </div>
          <p className="second-section-about-icon-header">FATIGUE</p>
          <p className="second-section-about-icon-content">
          The major factor for chronic fatigue and low energy can simply be a lack of essential vitamins in the body. If your digestive system isn’t able to absorb all the nutrients from food, it misses out on vital sustenance. An unhealthy colon can have undigested food build up which blocks the body’s ability to absorb the nutrients and eliminate the waste. This matter will turn toxic so by flushing through the colon with water, colonic can deeply detoxify your colon and restore it’s normal function.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <div className="second-section-about-icon">
            <FaWind />
          </div>
          <p className="second-section-about-icon-header">BLOATING</p>
          <p className="second-section-about-icon-content">
          Although bloating is sometimes caused by serious medical conditions, it is most often caused by the diet and some foods or ingredients you are intolerant to. Studies show that constipation can often exacerbate symptoms of bloating. Colonic is the proven top remedy to relieve gas and bloating. It is the safest and most effective method to remove bowel obstructions, so that the colon may pass blocked fecal matter and release trapped gas.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <div className="second-section-about-icon">
            <FaToiletPaper />
          </div>
          <p className="second-section-about-icon-header">CONSTIPATION</p>
          <p className="second-section-about-icon-content">
          Many people likely have years of impacted waste material in their colon. Accumulated toxins may be absorbed into the system and over time may stress the organs of elimination which are the liver, kidneys, skin, and large intestine. The toxins move around and around in the lymph system and blood, slowly causing auto-intoxication which then leads to disease. Colonic is a very effective and simple way to relieve constipation and get rid of the toxic build up.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <div className="second-section-about-icon">
            <FaRegMehRollingEyes />
          </div>
          <p className="second-section-about-icon-header">SKIN ISSUES</p>
          <p className="second-section-about-icon-content">
            Practitioners and devotes of colonic agree, there is no clear and
            beautiful skin without a clean colon. What happens in the colon is
            directly seen in the skin. Regular sessions with the hose and clean
            diet can clear up acne, psoriasis and eczema, and even a single
            session can give an immediate glow to the skin.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <div className="second-section-about-icon">
            <FaHippo />
          </div>
          <p className="second-section-about-icon-header">
            FEELING HEAVY/SLUGGISH
          </p>
          <p className="second-section-about-icon-content">
            If you are feeling sluggish, constantly fighting off colds, flu and
            allergies, if you are craving sugary foods, fighting a foggy brain,
            its a sign your body needs a cleanse/detox. Most clients report
            feeling lighter, emptier, uplifted, cleansed, less bloated, and
            happier and more at ease.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <div className="second-section-about-icon">
            <FaRegDizzy />
          </div>
          <p className="second-section-about-icon-header">HEADACHE</p>
          <p className="second-section-about-icon-content">
            Headaches and brain fog are very simple indicators that your body is
            overloaded with toxins. If your headache is not related to tight
            neck muscles, dehydration or stress, its a good sign its time for
            colonic. Getting rid of impurities through a detox helps
            immediately. When your cells aren’t burdened with processed foods,
            sugars, fats and heavy proteins and they are soaking up nutrient
            dense foods and getting the nourishment they need and want, you will
            be amazed how much more clearly your brain can function.
          </p>
        </Col>
      </Row>
      <Prepare />
    </Grid>
  </Layout>
)

export default About

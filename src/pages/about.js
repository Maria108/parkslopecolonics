import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Grid, Row, Col } from 'react-bootstrap'

// import Prepare from '../components/prepare'
import AboutColonic from '../components/aboutColonic'

import '../styles/bootstrap.scss'
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
            Bloating and a congested colon can contribute to feelings of fatigue. 
  When the digestive system is burdened with excess waste, it may impact overall energy levels. 
  Addressing these issues can be a step towards revitalizing your well-being.
In a decade of practice, clients often report heightened energy and occasional sleep restoration post-colonic.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <div className="second-section-about-icon">
            <FaWind />
          </div>
          <p className="second-section-about-icon-header">BLOATING</p>
          <p className="second-section-about-icon-content">
            Bloating is one of the top concerns clients mention when they come for colonic sessions. 
  This isn't surprising, given that bloating is often linked to factors like stress, overeating, food intolerances, medication, lack of movement, and frequent travel—common challenges in the bustling life of New York. 
  Addressing bloating in my practice, I consistently witness immediate relief during a session. 
  Whether pursued independently or as part of a comprehensive health plan, colonics compliment balanced diets, exercise, and medical recommendations for a holistic approach to well-being.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <div className="second-section-about-icon">
            <FaToiletPaper />
          </div>
          <p className="second-section-about-icon-header">CONSTIPATION</p>
          <p className="second-section-about-icon-content">
            Constipation is frustrating. Often caused by factors such as low fiber, dehydration, medication, and lack of movement, it’s a widespread concern. Colon hydrotherapy provides a highly effective and straightforward solution for relieving constipation and eliminating toxic buildup. In many scenarios, a single session can promptly restore regular bowel movements—whether rebounding after travel, adjusting to new medications, or navigating short-term stressors like staying at your new boyfriend's house.
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
            As someone who battled acne and psoriasis, I discovered that colonics played a crucial role in my skin journey. Health practitioners and advocates of colon hydrotherapy universally recognize the essential link between a healthy colon and well-functioning elimination organs for achieving clear and beautiful skin. Skin condition often mirrors colon health. While regular colonic sessions and a clean diet can contribute to relieving issues like acne, psoriasis, and eczema, achieving clear skin involves a mix of factors. In some cases, I've witnessed a single colonic session providing an immediate radiant glow to the skin.
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
            Feeling sluggish, frequently battling colds, flu, or allergies, and experiencing cravings for sugary foods are signs that your body may benefit from a cleanse or detox. Colon hydrotherapy offers an effective starting point. Many clients report feeling lighter, more energized, less bloated, with an uplifted and happier demeanor after just one session or a series of treatments.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <div className="second-section-about-icon">
            <FaRegDizzy />
          </div>
          <p className="second-section-about-icon-header">HEADACHE</p>
          <p className="second-section-about-icon-content">
            Headaches and brain fog often signal an overload of impurities in the body. If your headache isn't linked to tight neck muscles, dehydration, or stress, it might be time for a colonic. Eliminating unwanted waste from your colon will effectively address this concern. In my practice, I consistently hear feedback that brain fog disappears after colonic sessions. Nourishing your cells with nutrient-dense foods, free from the burden of processed foods, sugars, fats, and heavy proteins, can lead to improved brain function and clarity.
          </p>
        </Col>
      </Row>
    </Grid>
  </Layout>
)

export default About

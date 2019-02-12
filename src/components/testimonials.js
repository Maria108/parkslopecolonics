import React from 'react'

import '../styles/home.css'
import { Row, Col } from 'react-bootstrap'

import { IoMdStar } from 'react-icons/io'

const Testimonials = () => (
  <div>
    <Row>
      <Col xs={12} md={12}>
        <p className="fourth-section-home-header">What Clients Are Saying</p>
      </Col>
    </Row>
    <Row>
      <Col xs={3} md={3}>
        <p className="rating">
          {' '}
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </p>
        <p className="review">
          -I've worked with Elena over the last past 2 years and she has helped
          improve my digestion, help my skin clear up and help guide me along
          the way with her vast knowledge in health and wellness. She has shown
          genuine concern and has been patient with me through my journey. I'm
          very grateful to have Elena in my life, I would definitely recommend
          this establishment if you are looking for improvements in you overall
          health and well being-
        </p>
        <p className="review-author">-Tiffany W-</p>
      </Col>
      <Col xs={3} md={3}>
        <p className="rating">
          {' '}
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </p>
        <p className="review">
          -I love love Elena at Park Slope Colonics. I had loads of antibiotics
          growing up and my digestive system has been quite damaged (leaky gut
          etc). Elena is so pleasant to work with, I feel so comfortable and
          safe with her. Since I started getting colonics with Elena I don't
          feel comfortable going to see anyone else ! She gave me lots of great
          diet suggestion pre and post colonics and is extremely knowledgeable
          when it comes to other healing modalities such as nutrition. I feel I
          cannot get enough treatments with her to help me further with detox
          and cleansing at more deeper level. I have seeing Elena now for over
          two years regularly and every session makes me feel better: I feel
          more energy, better digestion and clearer skin. Most important because
          I am cleaning my digestive system my immune system is becoming
          stronger. Thanks Elena for all your help-
        </p>
        <p className="review-author">-Maria A-</p>
      </Col>
      <Col xs={3} md={3}>
        <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </p>
        <p className="review">
          -I love coming to Park slope Colonics, it's a cosy space, very private
          makes me feel calm and peaceful. I see Elena for my colonics and every
          time I feel amazing after!! Elena makes the experience very
          comfortable for me and I feel like I'm in good hands. Highly
          recommend!-
        </p>
        <p className="review-author">-Anna S-</p>
      </Col>
      <Col xs={3} md={3}>
        <p className="rating">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </p>
        <p className="review">
          -I’ve been working with Elena for over 2 years now. I’ve had issues
          with gas and bloating, but since I started having treatments with
          Elena everything has cleared up. She is so knowledgeable and has
          helped me to be more aware about my diet and cleansing. She is very
          patient and kind and makes the whole process a favorable experience. I
          highly recommend having a Colonic with Elena!-
        </p>
        <p className="review-author">-Athena T-</p>
      </Col>
    </Row>
  </div>
)

export default Testimonials

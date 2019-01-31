import React from 'react'

import '../styles/home.css'
import { Row, Col, Grid } from 'react-bootstrap'

import { FaChild, FaFeatherAlt, FaGem } from 'react-icons/fa'
import { IoMdStar } from 'react-icons/io'

const Testimonials = () => (
  <Grid>
    <Row>
      <Col xs={12} md={12}>
        <p className="what-they-say">What Clients Are Saying</p>
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
        <p className="testimon">-Karina V-</p>
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
        <p className="testimon">-Jason M-</p>
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
          -I love coming to Park slope colonics, it's a cosy space, very private
          makes me feel calm and peaceful. I see Elena for my colonics and every
          time I feel amazing after!! Elena makes the experience very
          comfortable for me and I feel like I'm in good hands. Highly
          recommend!-
        </p>
        <p className="testimon">-Patricia N-</p>
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
          -This is amazing. Feel so much better. Lena is the best therapist in
          the world!-
        </p>
        <p className="testimon">-Maria A-</p>
      </Col>
    </Row>
  </Grid>
)

export default Testimonials

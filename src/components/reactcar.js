import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Row, Col } from 'react-bootstrap'

import { IoMdStar } from 'react-icons/io'
import 'react-alice-carousel/lib/alice-carousel.css'
import '../styles/home.css'


const Gallery = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <AliceCarousel mouseDragEnabled>
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
            -I've worked with Elena over the last past 2 years and she has
            helped improve my digestion, help my skin clear up and help guide me
            along the way with her vast knowledge in health and wellness. She
            has shown genuine concern and has been patient with me through my
            journey. I'm very grateful to have Elena in my life, I would
            definitely recommend this establishment if you are looking for
            improvements in you overall health and well being-
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
            -I love love Elena at Park Slope Colonics. I had loads of
            antibiotics growing up and my digestive system has been quite
            damaged (leaky gut etc). Elena is so pleasant to work with, I feel
            so comfortable and safe with her. Since I started getting colonics
            with Elena I don't feel comfortable going to see anyone else ! She
            gave me lots of great diet suggestion pre and post colonics and is
            extremely knowledgeable when it comes to other healing modalities
            such as nutrition. I feel I cannot get enough treatments with her to
            help me further with detox and cleansing at more deeper level. I
            have seeing Elena now for over two years regularly and every session
            makes me feel better: I feel more energy, better digestion and
            clearer skin. Most important because I am cleaning my digestive
            system my immune system is becoming stronger. Thanks Elena for all
            your help-
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
            -I love coming to Park slope Colonics, it's a cosy space, very
            private makes me feel calm and peaceful. I see Elena for my colonics
            and every time I feel amazing after!! Elena makes the experience
            very comfortable for me and I feel like I'm in good hands. Highly
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
            patient and kind and makes the whole process a favorable experience.
            I highly recommend having a Colonic with Elena!-
          </p>
          <p className="review-author">-Athena T-</p>
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
            -I’ve finally found the place of my dreams and Park Slope Colonics is it. For so long I’ve been suffering with stomach issues, fatigue and not to mention acne. I definitely needed help and guidance and I found that here with the expertise of owner Elena Bykova. With her vast knowledge and patience she has given me the clarity in which I needed. I finally feel a sense of relief and more energized than I have in a long time, not to mention a glow has returned to my skin. It is beautiful and tranquil and Elena is amazing and I highly recommend to anyone who is looking to improve themselves inside and out. The best decision I ever made-
          </p>
          <p className="review-author">-Mia K-</p>
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
            -Very professional, informative, but very caring as well.  She made the whole process very comfortable.  I highly recommend her, and i plan to visit again. Thank you Elena-
          </p>
          <p className="review-author">-Eliot A-</p>
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
            -Omg!! This is hands down the best colonic that I have ever received! Lena is amazing and I highly recommend her. She was very gentle, nurturing and attentive. She made me feel very comfortable and at ease. She was very knowledgeable which made me feel safe and reassured. I have been to a lot of colonic places but this was very cozy and clean which I loved! A great gem in park slope!-
          </p>
          <p className="review-author">-Jennifer Gage-</p>
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
          -Really great service. Highly recommend this place especially if it's your first time. Elena responded to all my questions and concerns. Also, she walked me through the whole process. Will definitely come back again!-
          </p>
          <p className="review-author">-Autumn W-</p>
        </Col>
      </Row>
    </AliceCarousel>
  )
}

export default Gallery

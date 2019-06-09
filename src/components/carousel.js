import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Row, Col } from 'react-bootstrap'
import { IoMdStar } from 'react-icons/io'


import 'pure-react-carousel/dist/react-carousel.es.css';
 
export default class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={3}
      >
      <div style={{position: 'relative'}}>
        <Slider>
          <Slide index={0}>
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
        </Slide>
          <Slide index={1}>
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
        </Row></Slide>
          <Slide index={2}>
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
            -I really enjoy coming to Park Slope colonics. Super easy to book online and Lena always makes my tummy happy! I love that she is using essential oils, I’m a huge fan of oils and it makes an experience much better. Also the office is clean and she is not using any toxic cleaners, I’m very sensitive and I really appreciate that-
          </p>
          <p className="review-author">-Rufina NF-</p>
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
            -I had wonderful experience! So thankful to this place to help me in my health journey! Started with series of treatments and now in a good shape to do just maintenance once in a few month!!-
          </p>
          <p className="review-author">-Nina D-</p>
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
            -I had colonics before with good practitioners, but Lena seem to be on another level.
            Very caring, intuitive  and sincere approach helped me immediately  to feel at ease and I was able to let go of my waste very quickly.
            I was impressed with her knowledge on the subject and with lots of practical advises I have received.
            I have booked another treatment already-
          </p>
          <p className="review-author">-Yana Ya-</p>
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
          -Lena is amazing! She's very knowledgeable and knows exactly what she's doing and how to make sure you feel comfortable in every moment. Moreover, you can tell she has put so much love into her office space, and is really there to help people. She's truly a five-star expert in every way!-
          </p>
          <p className="review-author">-Aspen L-</p>
        </Col>
      </Row>
          </Slide>
        </Slider>
        <ButtonBack style={{position: 'absolute', top: '50%'}}>Back</ButtonBack>
        <ButtonNext style={{position: 'absolute', top: '50%', right: 0}}>Next</ButtonNext>
      </div>
      </CarouselProvider>
    );
  }
}

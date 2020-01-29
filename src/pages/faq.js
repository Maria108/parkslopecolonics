import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Grid, Row, Col } from 'react-bootstrap'
import Prepare from '../components/prepare'
import { FaCircle } from 'react-icons/fa'

import '../styles/bootstrap.scss'
import '../styles/faq.css'

const Faq = () => (
  <Layout>
    <SEO title="faq" />
    <Grid>
      <Row className="div-about-faq">
        <Col xs={10} md={7} className="faq-phone" />
        <Col xs={2} md={5}>
          <p className="prices">PRICES</p>
          <p className="faq-price">
            Gravity Colon Hydrotherapy Session (45-60 mins)
          </p>
          {/*<p className="spring-deal">Post Holiday Detox! (Now till January 31)</p>
            <p className="deal">Start your New Year fresh! Enjoy our deal till January 31! </p> */}
          <p className="faq-p-deal">
            <span className="third-section-about-icon">
              <FaCircle />
            </span>{' '}
            One Colonic Session $130{' '}
          </p>

          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaCircle />
            </span>{' '}
            Package of Three Sessions $350{' '}
            <span className="cross-text">$390</span>
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaCircle />
            </span>{' '}
            Package of Six Sessions $650{' '}
            <span className="cross-text">$780</span>
          </p>
          <div className="first-section-faq-book-apt">
            <a
              className="book-apt"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://square.site/book/B5H65JGC5J9Y9/park-slope-colonics-brooklyn-ny"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>
        </Col>
        <Col xs={10} md={7} className="faq" />
      </Row>
      <Prepare />
      <Row>
        <Col xs={12} md={12}>
          <p className="second-section-faq-header">
            FREQUENTLY ASKED QUESTIONS
          </p>
        </Col>
        <Col xs={12} md={12}>
          <p className="question">How long is the session?</p>
          <p className="answer">
            One session takes about 45 mins to an hour, after that you will
            finish up on a toilet releasing the remaining water
          </p>
        </Col>
        <Col xs={12} md={12}>
          <p className="question">How many sessions do I need?</p>
          <p className="answer">
            Frequency depends on your intentions and health concerns. If you are
            in good health and are interested in colonic for detox and optimum
            health, the recommendation for colon hygiene is every change of a
            season - 3-4 times a year. If you have any digestive issues, issues
            with skin, weight, inflammation, low energy or if you are doing a
            Cleanse right now - you most likely will need a series of colonics -
            that could be once a week for 3-6 weeks, every 2 weeks or every
            month depending on the issue. I will be able to judge when is the
            best next time for you to come after our session. As you feel the
            results, you will not need to do colonics that often.{' '}
          </p>
        </Col>
        <Col xs={12} md={12}>
          <p className="question">Does it hurt?</p>
          <p className="answer">
            No, Gravity method colonics are known for being gentle on the body.
            As your body releases matter and gas you may feel some cramping or
            pressure for a few seconds, that might be uncomfortable but not
            painful. Most clients feel comfortable and at ease during the
            treatment. I highly recommend to prepare for your session, following
            the dietary suggestions I offer will help you to avoid any
            discomfort.
          </p>
        </Col>
        <Col xs={12} md={12}>
          <p className="question">
            Will colonic wash out all my good bacteria?
          </p>
          <p className="answer">
            NO, there is no evidence for that and it is a myth. I have been
            getting colonics regularly for over 6 years and have been seeing
            clients who have been doing colonics for over 20 years and still
            have healthy digestion and regular bowel movements, that would be
            impossible if the bacteria in the colon was “washed out”. Your
            heathy bacteria can only survive in a proper, clean, healthy
            environment and colonic combined with a healthy diet plays a huge
            role in it.{' '}
          </p>
        </Col>
        <Col xs={12} md={12}>
          <p className="question">How do I feel after?</p>
          <p className="answer">
            You feel lighter and brighter! Feel free to go about you day. You
            should feel empty, light, relieved, rejuvenated, energized, happy.
            Increased sense of sight is very common. Lower back pain, headaches,
            puffyness often relieved after one treatment. If you feel less than
            great (sluggish, sleepy, dizzy, headaches, etc.), this is a sign
            that there is more work to do and you need to come back for a
            follow-up session within a week and be careful with food choices.
          </p>
        </Col>
        <Col xs={12} md={12}>
          <p className="question">Who should not come in for colonic?</p>
          <p className="answer">
            Most people can benefit from colonic, but there are some
            contradictions. You should consul with your doctor if you have
            conditions listed below:
          </p>
          <p className="answer-points">Abdominal hernia</p>
          <p className="answer-points">
            Acute Crohn’s disease, diverticulitis, abdominal pain
          </p>
          <p className="answer-points">
            Severe liver, kidney or heart disease conditions
          </p>
          <p className="answer-points">Epilepsy or psychological disorders</p>
          <p className="answer-points">Pregnancy</p>
          <p className="answer-points">Recent heat attack</p>
          <p className="answer-points">Recent surgery (last 6 month)</p>
          <p className="answer-points">Rectal or abdominal tumor</p>
          <p className="answer-points">Severe hemorrhoids</p>
          <p className="answer-points">Uncontrolled hypertension</p>
          <p className="answer-points-last">Vascular aneurism</p>
        </Col>
        <Col xs={12} md={12}>
          <p className="question">Can I just take a laxative?</p>
          <p className="answer">
            Laxatives (like senna or cassia), are often marketed as being
            “natural”, but overtime, these types of laxatives damage the
            function of your intestinal walls and decrease the ability of your
            muscles to contract on their own. Too often I get clients in my
            practice who have been on laxatives for years and their colon is so
            weak and loose, it can not function anymore so now these people HAVE
            TO use something to have a bowel movement. Unlike laxatives, colonic
            is actually strengthening your colon muscle. During the session your
            colon hydrotherapist is massaging your colon in a specific way to
            stimulate your natural peristalsis, we call it “a gym for your
            colon”, overtime the muscle gets stronger and clients report more
            frequent easy-to-pass bowel movements. Thats the part of the
            “therapy” in colon hydrotherapy.
          </p>
        </Col>
      </Row>
    </Grid>
  </Layout>
)

export default Faq

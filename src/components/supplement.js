import React from 'react'

import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap'
import '../styles/supplement.css'

const Supplement = props => {
  return (
    <Row>
      <Col xs={12} md={4}>
        <Card className="supcard">
          <div className="cabralimg" />
          <CardBody>
            <CardTitle className="blogcardtitle">
              DR. CABRAL FUNCTIONAL MEDICINE LIVER DETOX
            </CardTitle>
            <CardText className="blogcardtext">
              The Dr. Cabral Detox (DCD) is “The Most Powerful, Scientifically
              Researched, Full-Body Detoxification, Weight Loss & Wellness
              System Ever Created." This is the exact 7, 14, or 21-day protocol
              that Dr. Cabral uses in his practice to help people lose weight,
              get well, or reverse the aging process.
            </CardText>
          </CardBody>
          <a
            className="book-apt"
            href="https://track.equilibriumnutrition.com/SH2uj"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            ORDER NOW
          </a>
        </Card>
      </Col>
    </Row>
  )
}

export default Supplement

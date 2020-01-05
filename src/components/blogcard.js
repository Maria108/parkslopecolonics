import React from 'react';
import { Link } from 'gatsby'

import { Card, CardBody, CardImg, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../styles/blogcard.css'

const Blogcard = (props) => {
  return (
    <Row>
    <Col xs={12} md={4} >
    <Link className="blogcardcardlink" to="/blogtext">
      <Card className="blogcardcard" >
          <div className="blogonecardimg"></div>
          <CardBody>
            <CardTitle className="blogcardtitle">What the heck is a colonic?! How Colonics Play  A Key Role in Achieving Ultimate Health</CardTitle>
            <CardText className="blogcardtext"><i>“The very best of diets can be no better than the very worst if the sewage system of the colon is clogged with a collection of waste and corruption.” </i> – Dr. Norman. Walker Our colon is said to be...</CardText>
          </CardBody>
       </Card>
    </Link>
    </Col>
    <Col xs={12} md={4} >
    <Card className="blogcardcard">
        <div className="blogtwocardimg"></div>
        <CardBody>
          <CardTitle className="blogcardtitle">What Goes In Does Not Necessarily Go Out.</CardTitle>
          <CardText className="blogcardtext">Coming soon...</CardText>
        </CardBody>
     </Card>
  </Col>
  <Col xs={12} md={4} >
  <Card className="blogcardcard">
      <div className="blogthreecardimg"></div>
      <CardBody>
        <CardTitle className="blogcardtitle">Faulty Functioning in the Bowel and What You Can Do</CardTitle>
        <CardText className="blogcardtext">Coming soon...</CardText>
      </CardBody>
   </Card>
</Col>
  
    </Row>
    
  );
};

export default Blogcard;



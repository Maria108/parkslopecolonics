import React from 'react';
import { Card, CardBody, CardImg, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Blogcard = (props) => {
  return (
    <Row>
    <Card>
    <CardImg top width="100%" src="/src/images/detox.jpeg" alt="Card image cap" />
    <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
    </Row>
  );
};

export default Blogcard;



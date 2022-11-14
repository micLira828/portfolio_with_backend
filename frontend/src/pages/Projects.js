import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
  const [website, setWebsite] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [design, setDesign] = useState([]);

  useEffect(() => {
    console.log("project mounted");
    getData();
  }, []);

  const getData = async () => {
    const websiteResponse = await fetch("api/website");
    const websiteData = await websiteResponse.json();
    setWebsite(websiteData);

    const animationResponse = await fetch("api/animation");
    const animationData = await animationResponse.json();
    setAnimation(animationData);

    const designResponse = await fetch("api/design");
    const designData = await animationResponse.json();
    setDesign(designData);
  };

  const WebsiteCard = (w) => (
    <Col md={4}>
      <Card style={{ width: "18rem" }} class="shadow-sm">
        {console.log(w.image)}
        <Card.Img variant="top" alt="Project Image" src={w.image} />
        <Card.Body>
          <Card.Title>{w.title}</Card.Title>
          <Card.Text>{w.description}</Card.Text>
          <Button variant="primary" href={w.url}>
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );

  if (!website) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container className="Projects-container">
        <Row>{website.map(WebsiteCard)}</Row>
      </Container>
    </>
  );
}

export default Projects;

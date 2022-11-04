import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Projects() {
    const [website, setWebsite] = useState([]);
    const [animation, setAnimation] = useState([]);
    const [design, setDesign] = useState([]);
    
    useEffect(() => {
       getData()
      }, []);

      const getData = async() => {
        const websiteResponse = await fetch('/portfolio/website/')
        const websiteData = await websiteResponse.json()
        setWebsite(websiteData)

        const animationResponse = await fetch('/portfolio/animation/')
        const animationData = await animationResponse.json()
        setAnimation(animationData)

        const designResponse = await fetch('/portfolio/design/')
        const designData = await animationResponse.json()
        setDesign(designData)        
      }

      return(
       <>
        <Container>
        
          <Row>
          {website && website.map(w => (
              <Col md = {4}>
              
              <Card>
                <Card.Body>

                 <Card.Title>{w.title}</Card.Title>
                  <Card.Text>{w.description}</Card.Text>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <Button variant="primary" href = {w.url} >Go somewhere</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            ))}
           
            </Row>
          </Container>
        
        </>
         );
        }

export default Projects;
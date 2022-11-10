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
              
              <Card  style={{ width: '18rem' }} class = "shadow-sm">
              <Card.Img variant = "top" alt = "Project Image" src = {w.image}/>
                <Card.Body>
                 
                 <Card.Title>{w.title}</Card.Title>
                  <Card.Text>{w.description}</Card.Text>
                    <Button variant="primary" href = {w.url} >Go somewhere</Button>
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
import { useEffect, useState } from "react";

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
        <Container fluid = "md">
          <Row>
          <Col md = {4}>
             <p>Hi</p>
            </Col>{/*<!--end of column-->*/}

            <Col md = {4}>
              <p>Hi</p>
            </Col>{/*<!--end of column-->*/}

            <Col md = {4}>
               <p>Hi</p>
            </Col>{/*<!--end of column-->*/}


          </Row>{/*<!--end of row-->*/}
        </Container>{/*<!--end of container-->*/}

        <div class="album py-5 bg-light">
        <div class="container">
        
          <div class = "row">
          {website && website.map(w => (
              <div class="col">
              
              <div class="card shadow-sm">
                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={w.image} />
    
                <div class="card-body">

                 <h5 class="card-title">{w.title}</h5>
                  <p class="card-text">{w.description}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" href = {w.url} class="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            ))}
           
            </div>
          </div>
        </div>
        </>
         );
        }

export default Projects;
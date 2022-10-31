import { useEffect, useState } from "react";

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
        setAnimation(designData)

        console.log(websiteData)
        console.log(animationData)
        console.log(designData)

        
      }

      return(
        <div class="album py-5 bg-light">
        <div class="container">
    
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {website && website.map(w => (
              <div class="col">
              <div class="card shadow-sm">
                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={p.image.url} />
    
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
      );
}

export default Projects;
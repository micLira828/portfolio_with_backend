import { useEffect, useState } from "react";

function Projects() {
    const [change, setChange] = useState(false);
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/test_api')
        .then(res=>res.json())
        .then(
          (result)=>{
            setChange(true);
            console.log({result}) 
          },
          (error)=>{
            console.log({error})
          }
        )
      });
    return (<div>merp</div>)
}

export default Projects;
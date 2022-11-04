import Computer from './Computer.js'
import Nav from './Nav';
/*import './home.css';*/


function Home() {
    return (
      <>
        <div className = "mainContainer">
        <Computer/>
        <Nav/>
       </div>
       </>
    );
  }
  
  export default Home;
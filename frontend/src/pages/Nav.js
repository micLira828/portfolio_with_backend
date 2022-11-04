import { Outlet, Link } from "react-router-dom";


const Nav = () => {
    return (
        <>
        
    <div className="navigation">
        <header class="d-flex justify-content-center py-3">
          <ul class="nav nav-pills">
            <li class="nav-item"><Link to = "/" class="nav-link active" aria-current="page">Home</Link></li>
            <li class="nav-item"><Link to = "/services"  class="nav-link">Services</Link></li>
            <li class="nav-item"><Link to = "/projects"  class="nav-link">Projects</Link></li>
            <li class="nav-item"><Link to = "/contact"  class="nav-link">Contact Us</Link></li>
          </ul>
        </header>
      </div> 
     <Outlet />
     </>
      );
}

export default Nav;
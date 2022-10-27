function Contact() {
    return (
      <div>
      <h2>Contact Us</h2>
      <p>Please enter your contact information, <br></br>
	     and you'll hear back within 24 hours! :)</p>

      <div>
      <form class = "form-inline justify-content-center">
      
      <label class="form-label"> Name
	     <input type="text" class="form-control" placeholder="Jane Smith" require/></label><br></br>
       <label> Email
       <input type="email" class="form-control" placeholder="janesmith@yahoo.com" required/></label><br></br>
       <label class="form-label"> Phone
       <input type="tel" class="form-control" placeholder="303-469-9076" required/></label><br></br>
       <button class = "btn btn-primary mb-3" type="submit">Submit</button>
      </form>
      </div> 
      </div>
    );
  }
  
  export default Contact;
  

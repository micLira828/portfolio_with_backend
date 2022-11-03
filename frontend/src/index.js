import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
/*import Home from './Home';*/
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

/*Import other pages here */
import reportWebVitals from './reportWebVitals';

$(function(){
  $('#rightCircle').hide();
  $('#leftCircle').hide();
  $('#middleCircle').hide();
  $('#mouse_pointer').hide();
  $('.ball').hide();


  $('a').on('click', function(e){ 
      $('.active').removeClass('active');
      $(this).addClass('active');
  });

 
$('#EllipseNonGradient').click(
  function(){
   $('#mouse_pointer').fadeIn(1000, function(){
      $('#EllipseNonGradient').fadeOut(1000, function(){
         
          $('#leftCircle').fadeIn(1000,function(){
          $('#middleCircle').fadeIn(1000, function(){
          $('#rightCircle').fadeIn(1000, function(){
            $('.ball').show();
          });
        });
        });
   })
  });
 
  
  });

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </BrowserRouter>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

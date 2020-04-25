import React, { Component } from 'react';
import './Images.css';

import BackToTop from "react-back-to-top-button";
import Popup from "reactjs-popup";

import MyComponent from "./MyComponent";
import SimpleReactLightbox from "simple-react-lightbox";

import pic1 from '../image/pic1.jpg'
import pic2 from '../image/pic2.jpg'
import pic3 from '../image/pic3.jpg'
import pic4 from '../image/pic4.jpg'
import pic5 from '../image/pic5.jpg'
import pic6 from '../image/pic6.jpg'
import pic7 from '../image/pic7.jpg'
import pic8 from '../image/pic8.jpg'
import pic9 from '../image/pic9.jpg'
import pic10 from '../image/pic11.jpg'
import pic11 from '../image/pic12.jpg'
import pic12 from '../image/pic13.jpg'
import pic13 from '../image/pic15.jpg'
import pic14 from '../image/pic16.jpg'


export class Images extends Component{
  render(){

    return (
	

    	<div className="gallary">
			
			<SimpleReactLightbox>

					<MyComponent />

			</SimpleReactLightbox>	
			

    	</div>
    	);
             
      
  }

}


export default Images;
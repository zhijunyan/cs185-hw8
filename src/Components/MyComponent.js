import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper


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
 
function MyComponent() {
  return (
    <div className="MyComponent">
      <SRLWrapper>
            <img src={pic1} alt="185"/>
			<img src={pic2} alt="185"/>
			
			<img src={pic4} alt="185"/>
			<img src={pic5} alt="185"/>
			
			<img src={pic7} alt="185"/>
			<img src={pic8} alt="185"/>
			<img src={pic9} alt="185"/>
			<img src={pic10} alt="185"/>
			<img src={pic11} alt="185"/>
			<img src={pic12} alt="185"/>
			<img src={pic13} alt="185"/>
			<img src={pic14} alt="185"/>
      </SRLWrapper>
    </div>
  );
}
 
export default MyComponent;
import React, { Component } from 'react';
 
import face from '../image/pic10.jpg'


export class Home extends Component{
  render(){

    return (

	

    	<div className="home">
			<img src= {face} alt="185"/>
		
			<h2>Welcome to Zhijun Yan's assignment page of CS185 <br></br><br></br><br></br><br></br>
			
				Assignment 1: ❤ <br></br>
				Assignment 2: ❤<br></br>
				Assignment 3: ❤<br></br>
				Assignment 4: ❤<br></br>
				Assignment 5: T.B.A<br></br>
				Assignment 6: T.B.A<br></br>
				Assignment 7: T.B.A<br></br>
				Assignment 1: T.B.A</h2>
			
    	</div>
    	);
             
      
  }

}


export default Home;
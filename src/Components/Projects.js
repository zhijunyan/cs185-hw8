import React, { Component } from 'react';

import pic_s from '../image/sexinfo.jpg'
import pic_c from '../image/card.jpg'
import pic_y from '../image/yan.jpg'
import pic_g from '../image/github.jpg'



export class Projects extends Component{
  render(){

    return (
    	<div className="project">
		
		
		<li><a href='http://www.sexinfoonline.com/'><img src={pic_s} alt="button" width="40" height="40"/></a>
		SexInfo Online: A Website Under UCSB Sociology Department (worked as front-end & back-end developer) 
		<br></br><br></br><br></br><br></br>
		</li>
		
		

		
		<li><a href='https://github.com/Alexxx411/cs48_jocker'><img src={pic_c} alt="button" width="40" height="40"/></a>
		Joker: A Blackjack Game (implemented with others)
		<br></br><br></br><br></br><br></br>
		</li>

		<li><a href='https://www.mynamestats.com/Last-Names/Y/YA/YAN/index.html'><img src={pic_y} alt="button" width="40" height="40"/></a>
		Yan is my last name.
		<br></br><br></br><br></br><br></br>
		</li>

		<li><a href='https://github.com/zhijunyan/'><img src={pic_g} alt="button" width="40" height="40"/></a>
		My github is here.
		<br></br><br></br><br></br><br></br>
		</li>
		
		
		



		</div>

		
		
		
		
    	);
             
      
  }

}


export default Projects;
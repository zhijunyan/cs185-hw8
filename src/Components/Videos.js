import React, { Component } from 'react';

import vid1 from '../video/vid1.mp4'
import vid2 from '../video/vid2.mp4'
import vid3 from '../video/vid3.mp4'
import vid4 from '../video/vid4.mp4'
import vid5 from '../video/vid5.mp4'
import vid6 from '../video/vid6.mp4'
import { Button} from 'react-bootstrap';


export class Videos extends Component{
  render(){

    return (
    	<div className="vid">
    		<video src={vid1}  controls="controls"  />
			<video src={vid2}  controls="controls"  />
			<video src={vid3}  controls="controls"  />
			<video src={vid4}  controls="controls"  />
			<video src={vid5}  controls="controls"  />
			<video src={vid6}  controls="controls"  />
			
			{/* <Button variant="outline-primary" id="top_but">Primary</Button> */}
    	</div>

			
		// <Button onclick="topFunction()" id="top_but" title="Go to top">Back to top
		// </Button>

		

    	);
             
      
  }

}


export default Videos;
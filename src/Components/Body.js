import React, { Component } from 'react';
import Home from './Home'
import Images from './Images'
import Videos from './Videos'
import Projects from './Projects'
import Forms from './Form'
import Movies from './Movies'
import Add from './add_movie'
import Create from './create_list'
import Graph from './movie_graph'


export class Body extends Component{
	displayContent =() => {
		var activeTab = this.props.activeTab

		if(activeTab===1)
			return <Home/>
		else if (activeTab==2) 
			return <Images/>

		else if (activeTab==3)
			return <Videos/>

		else if (activeTab==4)
			return <Projects/>

		else if (activeTab==5)
			return <Movies/>

		else if (activeTab==6)
			return <Add/>

		else if (activeTab==7)
			return <Create/>

		else if (activeTab==8)
			return <Graph/>

		else
			return <Forms/>
		
	}
  render(){

    return (this.displayContent());
             
      
  }

}


export default Body;
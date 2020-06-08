import React, { Component } from 'react';

import './App.css'
import Body from './Components/Body'
import TabList from './Components/TabList'
import './Components/header.css'






export class App extends Component{
  constructor(){
    super();
    this.state ={
      activeTab: 1
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
      })
    }
  }
  render(){
    const tabs = [
    {
      id:1,
      title: 'Home'
    },

    {
      id:2,
      title: 'Images'
    },

    {
      id:3,
      title: 'Videos'
    },

    {
      id:4,
      title: 'Projects'
    },

    {
      id:5,
      title: 'Movies'
    },

    {
      id:6,
      title: '+Movie'
    },

    {
      id:7,
      title: '+List'
    },

    {
      id:8,
      title: 'Movie-Graph'
    },
    
    {
      id:9,
      title: 'Form'
    }

    ]


    return(
      
      

      <div className= "body">

        <div className = "header">
          <h1>CS185 PROJECT SITE </h1>
			    <h2>Zhijun (Kenneth) Yan </h2>
        </div>
      


        <div className ="nav-bar"> 
          

          < TabList tabs={tabs} 
          changeTab={this.changeTab}
            
          activeTab={this.state.activeTab} />
          
          
        </div>

       
        <div className ="main-body">
          <Body activeTab={this.state.activeTab}/>
        </div>

        
          
        
      </div>

      );
  }
}


export default App;
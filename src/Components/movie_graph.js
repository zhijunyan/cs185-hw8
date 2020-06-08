import React, { Component } from 'react';
import config from '../config.js';
const firebase = require('firebase')
var d3 = require('d3');

let data = {nodes: [], links: [],}

let commonactors = [];
let index_list = [];

export class movie_graph extends Component {
  constructor(props) {
    super();
    this.state = {
      movieInfo: {},
    }
  }


  drag = (simulation, tooltip) => {
    function start(d) {
      if(!d3.event.active) {
        simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    }
    function moved(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
      tooltip.style('top', (d.fy) + 'px').style('left',(d.fx) + 'px');
    }
    function end(d) {
      if(!d3.event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }
    return d3.drag()
      .on('start', start)
      .on('drag', moved)
      .on('end', end);
  }
  chart(nodes, links) {
    const width = 2000
    const height = 1000
    const obj_links = links.map(d => Object.create(d));
    const obj_nodes = nodes.map(d => Object.create(d));
    const svg = d3.create('svg').attr('viewBox', [0, 0, width, height]);
    const link = svg.append('g')
    .attr('stroke', '#ff0000', 'bold')
    .selectAll('line')
    .data(obj_links)
    .join('line')
    const simulation = d3.forceSimulation(obj_nodes)
      .force('link', d3.forceLink().links(obj_links).id(d => { return d.name; }).distance(150))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width/2, height/2));

    let tooltip = d3.select('body')
      .append('div')
      .style('position', 'absolute')
      .style('z-index', '10')
      .style('visibility', 'hidden')

     const hf = (node) => {
      if(node.type === 'movie') {
        return node.src;
      } 
      return '';
     }
    svg.append('defs')
      .selectAll('pattern')
      .data(obj_nodes)
      .enter()
      .append("pattern")
      .attr('id', function(d) {
        return 'id-'+d.id;
      })
      .attr('patternUnits', 'objectBoundingBox')
      .attr('width', 1)
      .attr('height', 1)
      .append('image')
      .attr('xlink:href', hf)
      .attr('x', -35)
      .attr('y', -35)
      .attr('width', 220)
      .attr('height', 220);
     
    const color = (node) =>{
          if(node.type === 'movie') {
               return ("url(#id-"+node.id+")");
          }
          return d3.color('#cc99ff');
    }

    const radius = (node) => {
     if(node.type === 'actor') {
       return 20;
     } 
     return 50;
   }
      
    const node = svg.append('g')
      .attr('stroke', '#ff0000')
      .selectAll('circle')
      .data(obj_nodes)
      .join('circle')
      .attr('r', radius)
      .style('fill', color)
      .attr('cursor', 'pointer')
    node.on('mouseover', function(node){
        if(node.type === 'actor') {
          tooltip.text(node.name);
          tooltip.style('visibility', 'visible');
          tooltip.style('top', (d3.event.y)+'px').style('left',(d3.event.x)+'px');
        }
      })
	    .on('mouseout', function(){
        return tooltip.style('visibility', 'hidden');
      })
      .call(this.drag(simulation, tooltip));

    simulation.on('tick', () => {
      link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y);

      node
          .attr('cx', d => d.x)
          .attr('cy', d => d.y);
    });

    return svg.node();
  }

  componentDidMount(){
    document.title = 'Graph';
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    let movsInGraph = [];
    let ref = firebase.database().ref('relations');
    ref.once('value').then(snapshot => {
      let rels = snapshot.val();
      for (let entry in rels) {
        if(rels[entry].list === 'GraphViz') {
          movsInGraph.push(rels[entry].mov);
        }
      }
    });
    let movieInfo = [];
    let movsRef = firebase.database().ref('movies');
    movsRef.once('value').then(snapshot => {
      let movies = snapshot.val();
      for (let entry in movies) {
        if (movsInGraph.includes(entry)) {
          movieInfo.push({
            name:  movies[entry].name,
            src:  movies[entry].src,
            actors: movies[entry].actors,
            id:  entry,
          })
          console.log("already push actors: ", movies[entry].actors);
        }
      }
     let index = 0;
     for(let i in movieInfo) {
        let movieObj = {
          type: 'movie',
          name: movieInfo[i].name,
          src: movieInfo[i].src,
          id: index,
        }
        index++;
        data.nodes.push(movieObj);
        let actors = movieInfo[i].actors.split(', ');
        for(let j in actors) {
          let actObj = {
            type: 'actor',
            name: actors[j],
            id: index,
          }
          index++;
          if(!(commonactors.includes(actors[j]))) {
            commonactors.push(actors[j]);
            data.nodes.push(actObj);
            let loc = data.nodes.indexOf(actObj);
            index_list.push(loc);
          }
          let linkObj = {
            source: movieInfo[i].name,
            target: actors[j], 
          }
          data.links.push(linkObj);
        }
      }

      const elem = document.getElementById('mysvg');
      elem.appendChild(this.chart(data.nodes, data.links));
    });
  }

  componentWillUnmount() {
    data.nodes = [];
    data.links = [];
    commonactors = [];
    index_list = [];
  }

  render() {
    return <div id='mysvg'></div>      
  }
}
export default movie_graph;
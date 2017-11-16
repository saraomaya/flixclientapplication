import React, { Component } from 'react';
import logo from './FLIX.png';
import './App.css';
import { ActivityIndicator, ListView, Text, View } from 'react';

export default class App extends Component {


      constructor(props) {
        super(props);
        this.state = { 
         movies:[],
      };
        this.componentDidMoungggt = this.componentDidMount.bind(this);
		        console.log(this.componentDidMoungggt);

	  }
  render() {
    const { movies } = this.state;

    return (
	      <div className="App">
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Flix</h1>
        </header>
        <p className="App-intro">
        </p>

      <div>
	  
        {movies.map(hit =>
          <div >
		  {hit}
          </div>
        )}
      </div>
      </div>
	  

    );
  }
    componentDidMount() {
		let headers = new Headers();


   return  fetch("http://localhost:3000/movies",{
 
      method: "GET"
    }) 
    .then(response => response.json())
  .then(json  => {
        console.log(json.movies);
		this.setState({ movies: json.movies });
		return json.movies;
  } )

.catch((error) => {
        console.log(error);
      });
  };

   return 
		gallerySection;
 
      
}



import React, { Component } from "react";
import Data from "../../Data";
import "./Post.css";
import Foot from "../Foot/Foot";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 0
    };
  }

  up = () => {
    if (this.state.pos < Data.length - 1) {
      this.setState({
        pos: this.state.pos + 1
      });
    } else {
      this.setState({
        pos: this.state.pos - 24
      });
    }
  };

  down = () => {
    if (this.state.pos > 0) {
      this.setState({
        pos: this.state.pos - 1
      });
    } else {
      this.setState({
        pos: this.state.pos + 24
      });
    }
  };

  // componentDidMount(){
  //   this.setState({
  //     city: Data[this.state.pos].city,
  //     country: Data[this.state.pos].country,
  //     employer: Data[this.state.pos].employer,
  //     favoriteMovies: Data[this.state.pos].favoriteMovies,
  //     id: Data[this.state.pos].id,
  //     name: Data[this.state.pos].name,
  //     title: Data[this.state.pos].title

  //   })
  // }

  render() {
    console.log(this.state);

    return (
      <div>
        <div className="post-container">
          <div className="post">
            <p className="pos"> {this.state.pos + 1}/25</p>
            <p className="name">
              {Data[this.state.pos].name.first} {Data[this.state.pos].name.last}
            </p>
            <p>
              From: {Data[this.state.pos].city}, {Data[this.state.pos].country}
            </p>
            <p>Job Title: {Data[this.state.pos].title} </p>
            <p>Employer: {Data[this.state.pos].employer} </p>
            <p className="movie">
              Favorite Movie:
              <li>{Data[this.state.pos].favoriteMovies[0]}</li>
              <li>{Data[this.state.pos].favoriteMovies[1]}</li>
              <li>{Data[this.state.pos].favoriteMovies[2]}</li>
            </p>

            <div className="btnHolder">
              <button className="btn" onClick={this.down}>
                down
              </button>
              <button className="btn" onClick={this.up}>
                up
              </button>
            </div>
          </div>
          <Foot />

          {/* <p className='span city'>{this.city}</p>
                <span className='span country'>{this.country}</span>
                <span className='span employer'>{this.employer}</span>
                <span className='span favoriteMovies'>{this.favoriteMovies}</span>
                <span className='span id'>{this.id}</span>
                <span className='span name'>{this.name}</span>
                <span className='span title'>{this.title}</span> */}
        </div>
      </div>
    );
  }
}

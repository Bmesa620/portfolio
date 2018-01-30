import React, { Component } from 'react';
import Entry from '../entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import './Styles/content.css';
import './Styles/quotes.css';
import './Styles/skills.css'

class About extends Component{
  constructor(props) {
    super(props);
    this.state ={
      slideIndex: 1
    }
    this.showSlides = this.showSlides.bind(this);
  }
  // <a className="prev" onClick={this.plusSlides.bind(this, -1)}>&#10094;</a>
  // <a className="next" onClick={this.plusSlides.bind(this, 1)}>&#10095;</a>
  componentDidMount(){
    document.documentElement.scrollTop = 0;
    this.showSlides(this.state.slideIndex);
  }
  
  // plusSlides(n, e) {
  //   var slideIndex = this.state.slideIndex;
  //   debugger;
  //   this.showSlides(slideIndex += n);
  // }
  
  currentSlide(n, e) {
    this.showSlides(n);
  }
  
  showSlides(n) {
    var slideIndex = n;
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1; this.setState({slideIndex: 1});} 
      if (n < 1) {slideIndex = slides.length; this.setState({slideIndex: slides.length});}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
      }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
  }

  render(){
    const me = require('./Images/brian-img.jpg');
    return (
      <div>
      <div className='main'>
        <div className='about' id="blue">
        <h1>Hi, I'm Brian.</h1>
            <div className='row'>
            <div className='column left-img'>
             <img src={me}/>
            </div>
            <div className='column middle-text justify'>
              <h3>What do I do?</h3>
              <p>
              I'm an full-stack web developer and software engineer based out of New York City. I analyze challenging problems and provide elegant yet simplistic solutions for them. I take pride in creating clean, concise, and efficient code. I strive to be a better programmer with every passing day and look at every project like a stepping stone in my career. I have always been passionate about technology and the internet and hope to one day make a lasting impact with my unique skill set. 
              </p>
              <h3>How did I get here?</h3>
              <p>
              I obtained my Bachelor’s of Science in Computer Science at CUNY York College where I learned all of the theory that goes behind fixing complex systems. Along the way, I realized I wanted to put these theories to use and obtain more practical knowledge in development. Soon after, I completed a web development fellowship with The Flatiron School arming me with a full-circle understanding of web development. Since then, I've put my skills to use with temporary positions at great companies like BounceX, Virtual APT, and ACT. I'm now looking to land a full-time position where I can help a company reach its full potential while enhancing my skills with every task. I'm super friendly, feel free to take a look at my projects or reach out to me directly. 
              </p>
            </div>
          </div>
        </div>
          <div className='about' id="gray">
          <h1>My Skills</h1>
            <div className='row'>
              <div className='column left'>
                <div className="skills-text">
                  <p>JavaScript</p>
                </div>
                <div className="skills-text">
                  <p>HTML</p>
                </div>
                <div className="skills-text">
                  <p>CSS</p>
                </div>
                <div className="skills-text">
                  <p>jQuery</p>
                </div>
                <div className="skills-text">
                  <p>React</p>
                </div>
                <div className="skills-text">
                <p>C++</p>
                </div>
                <div className="skills-text">
                <p>Ruby</p>
                </div>
              </div>
              <div className='column middle'>
                <div className="skills-container">
                  <div className="skills ninty">90%</div>
                </div>
                <div className="skills-container">
                  <div className="skills ninty">90%</div>
                </div>
                <div className="skills-container">
                  <div className="skills ninty">90%</div>
                </div> 
                <div className="skills-container">
                  <div className="skills eighty">80%</div>
                </div>  
                <div className="skills-container">
                  <div className="skills sixty-five">65%</div>
                </div>
                <div className="skills-container">
                  <div className="skills sixty">60%</div>
                </div>
                <div className="skills-container">
                  <div className="skills sixty">60%</div>
                </div>
            </div>
          </div>
        </div>
        <div className='about'>
        <h1>Testimonials</h1>
          <div className="slideshow-container">
            <div className="mySlides">
              <h3><q>...he is the guy to ask for help when stuck with a web problem.</q></h3>
              <p className="author">- Bryan Colin - CEO - VirtualAPT</p>
            </div>
          
            <div className="mySlides">
            <h3><q>...extremely likable on a personal level and in a work environment.</q></h3>
            <p className="author">- Sara B. Garcia - Faculty Advisor - York College</p>
            </div>
          
            <div className="mySlides">
              <h3><q>..most amazing man ever.</q></h3>
              <p className="author">- Mom</p>
            </div>
          </div>
          
          <div className="dot-container">
            <span className="dot" onClick={this.currentSlide.bind(this, 1)}></span> 
            <span className="dot" onClick={this.currentSlide.bind(this, 2)}></span> 
            <span className="dot" onClick={this.currentSlide.bind(this, 3)}></span> 
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default About;
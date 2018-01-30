import React, { Component } from 'react';
import Entry from '../entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import './Styles/content.css';
import './Styles/home.css';

class Home extends Component{
  constructor(props) {
    super(props);
    this.openTab = this.openTab.bind(this);
    this.state ={
      who:['Who'],
      what: ['What'],
      where: ['Where'],
    }
  }
  componentDidMount () {
    document.documentElement.scrollTop = 0;
    document.getElementById("defaultOpen").click();
}

openTab(e) {
  var data = e.target.value;
  var tabName = data.split(",")[0];
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "rgb(30,30,30)";
  }

  // Show the specific tab content
  document.getElementById(tabName).style.display = 'block';

  // Add the specific color to the button used to open the tab content
  e.target.style.backgroundColor = 'rgb(81,154,186)';
}


  render(){

  return (
    <div className='main'>
      <div className='intro'>
      <div className="tablink-container">
      <button className="tablink" onClick={this.openTab.bind(this)} value={this.state.who} id="defaultOpen">Who I am</button>
      <button className="tablink" onClick={this.openTab.bind(this)} value={this.state.what}>What I do</button>
      <button className="tablink" onClick={this.openTab.bind(this)} value={this.state.where}>Where to find me</button>
    </div>
        <div id="Who" className="tabcontent">
          <h1>Hi, I'm Brian.</h1>
          <p>I am Web Developer / Software Engineer.</p>
          <p>I am an advocate and promoter of all things tech.</p>
          <p>I am ambitious and unyielding in my pursuit of learning.</p>
          <Link to ="/aboutme" id="more">Learn More</Link>
        </div>
    
        <div id="What" className="tabcontent">
          <h1>I like to build.</h1>
          <p>My projects are meaningful.</p>
          <p>My projects are challenging and new.</p> 
          <p>My projects are the greatest learning lessons.</p> 
          <Link to ="/projects" id="more">Learn More</Link>
        </div>
    
        <div id="Where" className="tabcontent">
          <h1>I would like to hear from you.</h1>
          <p>Get in touch.</p>
          <p>Drop me a line.</p>
          <p>Even if it's just to say hi!</p>
          <Link to ="/contact" id="more">Learn More</Link>
        </div>
    


    </div>
  </div>
  );
}
};

export default Home;
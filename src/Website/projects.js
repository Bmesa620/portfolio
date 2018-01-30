import React, { Component } from 'react';
import './Styles/content.css';
import './Styles/card.css';

class Projects extends Component{
    constructor(props) {
        super(props);
        this.state = {
            closetShare: {
                id: "closetShare",
                description: "ClosetShare is an E-commerce webapp that encourages users to donate their unwanted clothing items. By donating thier items users can sell it to anyone within the application. The proceeds of the sale are then split between the chosen charity of the seller and the buyer.",
                link: "https://github.com/CUNYTech/closetShare",
                stack: "ReactJS | Javascript | HTML | CSS | Firebase ",
                part: ["Responsible for monitoring the entire stack of the project.", "Helped set up Firebase & CRUD operations to the database, I created new products and maintained them.","I had a very large role in creating the flow, design, and overall life cycle of all the pages including their functionality and routes.", "Implemented the Stripe API in order to potentially authorize and process payments in the future. This is an ongoing project."]
            },
            brianmesa: {
                id: "brianmesa",
                description: "My website was a simple exercise in React, HTML and CSS in order to create a small expression of myself. I approached it using design elements and organizations that I feel allow for minimum scrolling and navigation while trying to keep things uncluttered. The color pallete I choose was inspired by colors I see everyday, such as my text editors, terminals, programs and my favorite websites.",
                link: "https://github.com/Bmesa620/portfolio",
                stack: "ReactJs | Javascript | HTML | CSS ",
                part: ["Used React to handle most of the site, it’s a very useful library that I heavily enjoy when it comes to front-end.", "React handles most of the routing, elements and information you see on the DOM.", "Created my own style sheet using CSS and organized my HTML as best as possible.", "Created display block modals with hidden html."]
            },
            fithub: {
                id: "Fithub",
                description: "Fithub is a social platform for individuals interested in fitness. Fithub is a platform that is designed for user to learn about, maintain and create their favorite workouts. Users could create a workout plan of their own or request to join in or even simply copy the workout of another user.",
                link:"https://github.com/jmdelvalle/FitHub",
                stack: "Ruby | Ruby on Rails | HTML | CSS | Javascript| MySQL | Postgres",
                part: ["I helped build robust database models to organize large amounts of user information.", "Implemented Bootstrap with custom CSS for front-end layout and style.", "Assisted in implementation of Omniauth to provide a simple login process using users’ Facebook accounts.", "Designed controllers in line with RESTful conventions to promote an intuitive user experience."]
            },
            beacon: {
                id: "beacon",
                description: "Beacon is an idea first conceived at the 2017 CUNY Startups Hackathon. Alongside of J.P Morgan, Google and IBM this application was designed to specifically handle one situation. With inspiration from J.P Morgan and their attempts to create applications that can aid in disaster situations, Beacon aimed to solve the attempts to communicate with your loved one and first responders that you’re okay. The concept, originality and practicality was so good in fact it landed us in the top 15 amongst over 60+ teams.",
                link: "https://devpost.com/software/beacon-qm65r9",
                stack: "MongoDB | Express | Angular | Node | Typecript | Ionic",
                part: ["Lead and scrum master - deciding and implementing the stack and organizing roles. I choose a MEAN stack for the project, overall because it’s quick and flexible in its deployment.", "Using Angular also provides the opportunity to use libraries such as Ionic to deploy to mobile upon completion of the project."]
            },
            modaltext: null,
            modallinks: null,
            modalstack: null,
            modalpart: [],
        };
        this.closeModal = this.closeModal.bind(this);
      }

componentDidMount(){
    document.documentElement.scrollTop = 0;
    var modal = document.getElementsByClassName("modal")[0];
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

openModal(num, e){
    var modal = document.getElementsByClassName("modal")[0];
    this.setState({
        modaltext : num.description,
        modallinks : num.link,
        modalstack: num.stack,
        modalpart: num.part
    });
    modal.style.display = "block";

}
closeModal(){
    var modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
}



    render(){
        const closetshare = require('./Images/closetshare-2.png');
        const comingsoon = require('./Images/coming-soon-2.png');
        const logo = require('./Images/BM_Square Logo_White_Final-01.png');
        const fithub = require('./Images/fitness-2.png');
        return(
            <div>
            <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>&times;</span>
                <div className="modal-content-text">
                <p>{this.state.modaltext}</p>
                </div>
                <div className="modal-content-list">
                <ul>
                {this.state.modalpart.map(function(v){
                  return <li>{v}</li>;
                })}
                </ul>
                </div>
                <div className="link-center">
                <p>{this.state.modalstack}</p>
                </div>
                <div className="link-center">
                <p><a id="more"href={this.state.modallinks}>View</a></p>
                </div>
            </div>
          </div> 
            <div className='main'>
                <h2>
                I do cool things.
                </h2>
                <div className="project">
                    <div className="card" onClick={this.openModal.bind(this, this.state.closetShare)}>
                        <div className="img-wrapper">
                        <img src={closetshare}/>
                        </div>
                        <div className="card-container">
                            <h4><b>ClosetShare</b></h4> 
                            <p>React & Firebase</p> 
                        </div>
                    </div>
                    <div className="card" onClick={this.openModal.bind(this, this.state.brianmesa)}>
                        <div className="img-wrapper">
                        <img src={logo}/>
                        </div>
                        <div className="card-container">
                            <h4><b>Brianmesa.com</b></h4> 
                            <p>React, CSS & HTML</p> 
                        </div>
                    </div>
                    <div className="card" onClick={this.openModal.bind(this, this.state.fithub)}>
                        <div className="img-wrapper">
                        <img src={fithub}/>
                        </div>
                        <div className="card-container">
                            <h4><b>Fithub</b></h4> 
                            <p>Ruby on Rails</p> 
                        </div>
                    </div>
                    <div className="card" onClick={this.openModal.bind(this, this.state.beacon)}>
                        <div className="img-wrapper img-wrapper2">
                        <img src={comingsoon}/>
                        </div>
                        <div className="card-container">
                            <h4><b>Beacon</b></h4> 
                            <p>MongoDB & Angular</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Projects;
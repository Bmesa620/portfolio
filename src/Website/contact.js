import React, { Component } from 'react';
import './Styles/content.css';
import './Styles/contact.css';

class Contact extends Component{
    componentDidMount(){
        document.documentElement.scrollTop = 0;
    }
    openModal(num, e){
        var modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "block";
    
    }
    closeModal(){
        var modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "none";
    }
    
    render(){
        const github = require('./Images/github-logo.png');
        const linkedin = require('./Images/linkedin.png');
        const resume = require('./Images/curriculum.png');
        const resumepdf = require('./Images/Brian Mesa Resume.pdf');
        return(
            <div>
            <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>&times;</span>
              <embed src={resumepdf} width="100%" height="600px" type='application/pdf'/>
            </div>
          </div> 
                    <div class="main">
                        <h2>Get In Touch</h2>
                        <form action="https://formspree.io/bmesa620@gmail.com" method="POST">
                                <input placeholder="Name" type="text" name="Name" required/>
                                <input placeholder="Email" type="email" name="Email" required/>
                                <textarea placeholder="Message" name="Message" required></textarea>
                                <input className="submit" type="submit" value="Submit"/>
                        </form>
                        <div class="links-row">
                            <a target="_blank" className="social-wrapper" href="https://www.linkedin.com/in/brian-mesa-b5ab8ab2/"><img src={linkedin} alt="LinkedIn"/></a>
                            <a target="_blank" className="social-wrapper" onClick={this.openModal}><img src={resume} alt="GitHub" /></a>
                            <a target="_blank" className="social-wrapper" href="https://github.com/bmesa620"><img src={github} alt="GitHub" /></a>    
                        </div>
                    </div>
                    </div>
        );
    }
}

export default Contact;
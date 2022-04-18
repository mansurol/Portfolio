import React from 'react';
import './SectionOne.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload,faEnvelopeCircleCheck} from '@fortawesome/free-solid-svg-icons'
import {
  
    faFacebook,
    faLinkedin,
    faGithub,
  
      } from "@fortawesome/free-brands-svg-icons";

import Img from '../Img/developer.359cb282.jpg'
const SectionOne = () => {
    return (
        <div className='FullSectionColor'>
            <div className='container'>
                 <div className='row'>
                 <div className="col-sm-6  webLogoStyle mt-5 animationTwo">
                     <img className="img-fluid " src={Img} alt="webLogo"  />
                     
                     </div>
                  
                  
                    <div className="col-sm-6 mt-5 contentstyle animation">
                          <h2>Hey, I'm Mansorol Islam.</h2>
                          <p>React Developer</p>
                          <p>I am a Full Stack Web Developer who likes to build things that works on the web. If you're looking for a developer to add to your team, I'd love to hear from you!</p>  
                         <div className="d-flex mt-5">
                          <div className="ButtonColor">
                              <Button><FontAwesomeIcon icon={faDownload}/> RESUME</Button>
                          </div>
                         <div className='Btn2 ButtonColor'>
                              <Button >Hire Me</Button>
                         </div>
                         </div>

                         <div className="d-flex mt-5 IconStyle mb-5">
                         <a href="https://www.facebook.com/mansurol.islam.3/" > <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                         <a href="https://www.youtube.com/c/jamesqquick" > <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="2x" /></a>
                         <a href="https://www.youtube.com/c/jamesqquick" > <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                         <a href="https://www.youtube.com/c/jamesqquick"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>

                         </div>
                     </div>
                    

                    

                 </div>
            </div>
        </div>
    );
};

export default SectionOne;
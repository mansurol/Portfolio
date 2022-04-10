import React from 'react';
import './SectionFive.css'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone ,faEnvelopeCircleCheck ,faLocationDot} from '@fortawesome/free-solid-svg-icons'

const SectionFive = () => {
    return (
        <div className='FullSectionColorFive'>
        <div className='container'>
        <div className='HeaderSectionFive '>
             <h2 >Get   i n   Touch</h2>
        </div>

        <div className='row '>
            <div className='col-sm-5 text-white mt-5'>
            <div>
            <div className='d-flex'>
            <div className='p-2'><FontAwesomeIcon icon={faPhone}/> </div>
            <div className='addressDetais p-1'>
            <b>P h o n e</b>
            <p>+ 8 8 0 1 6 8 0 6  2 2 9 9 3</p>
            </div>
            </div>

            <div className='d-flex'>
            <div className='p-2'><FontAwesomeIcon icon={faEnvelopeCircleCheck}/> </div>
            <div className='addressDetais p-1'>
            <b>E m a i l</b>
            <p>m a n s u r o l i s l a m  @ g m a i l . c o m</p>
            </div>
            </div>

            <div className='d-flex'>
            <div className='p-2'><FontAwesomeIcon icon={faLocationDot}/> </div>
            <div className='addressDetais p-1'>
            <b>L o c a t i o n</b>
            <p>M i r p u r , D h a k a </p>
            </div>
            </div>
            </div>
            </div>
            <div className='col-sm-7 text-white'>
            <Form className='mb-5'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Mansorol islam"  className="importStyle" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Email </Form.Label>
                  <Form.Control type="email" placeholder="Mansurolislam@gmail.com" className="importStyle" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Subject</Form.Label>
                  <Form.Control type="Name" placeholder="Subjects" className="importStyle"/>
                   </Form.Group>
                  
               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                  <Form.Control placeholder="Message" as="textarea" rows={3} className="importStyle" />
               </Form.Group>

               <button class="btn btn-outline-secondary" type="button" id="button-addon1"><span className='sendBtn'>Send Message</span></button>
             </Form>
            </div>
        </div>

     

 
        </div>
    </div>
    );
};

export default SectionFive;
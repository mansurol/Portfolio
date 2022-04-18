import React from 'react';
import './SectionSix.css'
const SectionSix = () => {
    return (
        <div className='FullSectionColorSix'>
             <div className='container' >
                 <div className='HeaderSectionSix'>
                     <h2 className=" mt-5">F u n F a c t s</h2>
                 </div>

                 <div className=' d-flex mt-5 FunSectionStyle '>
                    
                     <div className='col-4'>
                         <h2>40000</h2>
                         <p>Lines of Code</p>
                     </div>

                     <div className='col-4'>
                         <h2>250</h2>
                         <p>Sleepless Nights</p>
                     </div>

                     <div className='col-4 '>
                         <h2>500</h2>
                         <p>Cup of Coffees</p>
                     </div>
               
                 </div>
             </div>
        </div>
    );
};

export default SectionSix;
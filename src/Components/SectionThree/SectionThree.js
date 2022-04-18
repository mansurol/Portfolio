import React, { useState } from 'react';
import './SectionThree.css'
import Fakedata from '../FakeData/fakedata'
import PartTwo from '../SectionThreePTwo/PartTwo'
const SectionThree = () => {
    const [Data , Setdata] = useState(Fakedata)
    
    return (
        <div className='FullSectionColorThree'>
        <div className='container'>
        <div className='HeaderSectionThree'>
             <h2>S k i l l s</h2>
        </div>

        <div>
            <div>
            <div class="d-flex flex-wrap mt-5 ">
                {
                    Data.map((All)=> <PartTwo fullData ={All} /> )
                }

 
            </div> 
            </div>
        </div>

 
        </div>
    </div>
    );
};

export default SectionThree;
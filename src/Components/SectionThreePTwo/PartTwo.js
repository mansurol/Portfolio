import React from 'react';
import './PartTwo.css'
const PartTwo = (props) => {
    console.log(props)
const {img , name} = props.fullData
    return (
        <div className=' mb-4 m-auto'>
            <div className=' StylePartt box '>
                  <img src={img} alt="" />
                  <p>{name}</p>
               </div>
        </div>
    );
};

export default PartTwo;
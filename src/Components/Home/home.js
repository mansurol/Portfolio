import React from 'react';
import Navs from '../Navs/Navs'
import SectionOne from '../Section/SectionOne'
import SectionFive from '../SectionFive/SectionFive';
import SectionThree from '../SectionThree/SectionThree';
import SectionTwo from '../SectionTwo/SectionTwo';
const home = () => {
    return (
        <div>
            <Navs/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFive/>
        </div>
    );
};

export default home;
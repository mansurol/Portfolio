import React from 'react';
import Footer from '../Footer/Footer';
import Navs from '../Navs/Navs'
import SectionOne from '../Section/SectionOne'
import SectionFive from '../SectionFive/SectionFive';
import SectionSix from '../SectionSix/SectionSix';
import SectionThree from '../SectionThree/SectionThree';
import SectionTwo from '../SectionTwo/SectionTwo';
const home = () => {
    return (
        <div>
            <Navs/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionSix/>
            <SectionFive/>
            <Footer/>
           
        </div>
    );
};

export default home;
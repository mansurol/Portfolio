import React from 'react';
import './SectionTwo.css'
import Photo from '../Img/273883450_268163595489602_8048617561298763435_n.jpg'
const SectionTwo = () => {
    return (
        <div className='FullSectionColorTwo'>
            <div className='container'>
            <div className='HeaderSection'>
                 <h2>A b o u t   M e</h2>
            </div>

            <div className='row mt-5 '>
                <div className='col-sm-4 MyPhoto mb-5'>
                    <img src={Photo} alt="" />
                </div>
                <div className='col-sm-8 SectionTwoContents'>
                     <h2>I'm MANSOROL ISLAM</h2>
                     <p>Full Stack Web Developer</p>
                     <p>I am dedicated hard-working team player and excellent knowledge on cutting edge up-to-date web development technologies. Also a self-motivated and enthusiastic web developer. Ability to work with any web development projects and fully integrate my skills for company’s progress.</p>
                </div>

            </div>
            </div>
        </div>
    );
};

export default SectionTwo;
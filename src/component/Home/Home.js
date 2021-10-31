import React from 'react';
import Aboutus from '../Aboutus/Aboutus';
import AccordianQuestion from '../AccordianQuestion/AccordianQuestion';
import Banner from '../Banner/Banner';
import LogoName from '../LogoName/LogoName';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className='container'>
                <LogoName></LogoName>
                <Banner></Banner>
                <Services></Services>
                <Aboutus></Aboutus>
                <AccordianQuestion></AccordianQuestion>
            </div>            
        </div>
    );
};

export default Home;
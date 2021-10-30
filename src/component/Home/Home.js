import React from 'react';
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
            </div>            
        </div>
    );
};

export default Home;
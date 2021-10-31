import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';




const Services = () => {
    
    const [services, setServices] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(()=>{
        setIsloading(false)
        fetch('https://stark-retreat-78546.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
        // setIsloading(true)
        .finally(() => setIsloading(true))
    },[])
      

    return (
        
        <div className='container' id='services'>
            <hr />
            {isLoading ? <br /> : <Spinner animation="border" variant="danger" style={{ margin: '20px' }} />}
            <div className='p-md-3'></div>
            <h1 className='fw-bold'> <span className='text-warning'>Services</span> We Provide</h1>
            <h3 className='fw-light'>For almost two decades we have been providing our customers with all tourism related services to their complete satisfactions and at competitive prices. Founded in Dhaka in the year 1992, today we operate in the network from the most important tourist centers in the country, which guarantees the best possible service.</h3>
            <br />
            <div className='p-md-3'></div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                services.map(service=><Service
                key={service._id}
                service={service}
                
                ></Service>)
            }
            </div>
        </div>
        
    );
};

export default Services;
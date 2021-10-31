import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {

    const [services, setServices] = useState([]);
    const {user} =useAuth()

    useEffect(()=>{
        fetch('https://stark-retreat-78546.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
            console.log('services', data)
            const remaining = data.filter(service => service.email === user.email);
             setServices(remaining)
        }).catch(err=>console.log(err))
        // .finally(() => setLoading(false))
    },[user])

    return (
        <div className='p-3 bg-light'>
            <h3 className='text-danger'> YOUR ORDERS</h3>
            <h6>(All order matches your Email will be displayed here!)</h6>
            {
                services.map(service => <div
                key={service._id}>
                    <h6>Your Tour Plan ID : {service.id}</h6>
                    <h6>Your Tour Plan : {service.ordername}</h6>
                    <h6>Customer Name : {service.name}</h6>
                    <h6>Customer Mobile : {service.mobile}</h6>
                    <hr />
                </div> )
            }
        </div>
    );
};

export default MyOrder;
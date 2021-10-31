import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {

    const [services, setServices] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const {user} =useAuth()

    useEffect(()=>{
        setIsloading(false)
        fetch('https://stark-retreat-78546.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
            console.log('services', data)
            const remaining = data.filter(service => service.email === user.email);
             setServices(remaining)
             
        }).catch(err=>console.log(err))
        .finally(() => setIsloading(true))
    },[user])

    const handleClick = id =>{

        const url = `https://stark-retreat-78546.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        }).then(res=>res.json()).then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Confirm Delete the order')
                const remaining = services.filter(order => order._id !== id);
                setServices(remaining)
            }            
        })
    } 

    return (
        <div className='p-3 bg-light'>
            <h3 className='text-danger'> YOUR ORDERS</h3>
            <h6>(All order matches your Email will be displayed here!)</h6>
            <hr />
            {isLoading ? <br /> : <Spinner animation="border" variant="danger" style={{ margin: '20px' }} />}
            {
                services.map(service => <div
                key={service._id}>
                    <h6>Your Tour Plan ID : {service.id}</h6>
                    <h6>Your Tour Plan : {service.ordername}</h6>
                    <h6>Customer Name : {service.name}</h6>
                    <h6>Customer Mobile : {service.mobile}</h6>
                    <button onClick={()=>{handleClick(service._id)}} className='btn btn-danger'>Cancel Order</button>
                    <hr />
                </div> )
            }
        </div>
    );
};

export default MyOrder;
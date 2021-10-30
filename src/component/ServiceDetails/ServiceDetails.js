import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const ServiceDetails = () => {
    const {serviceid} = useParams()
    const [service, setService] = useState([])
    const [status, setStatus] = useState()
    useEffect(()=>{
        fetch(`https://stark-retreat-78546.herokuapp.com/services/${serviceid}`)
        .then(res=>res.json())
        .then(data => setService(data))
        
    },[])

    const {user} = useAuth();

    const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
            console.log(data);
            axios.post('https://stark-retreat-78546.herokuapp.com/orders', data)
            .then(res=>{
                if(res.data.insertedId){
                    alert('Order Added Successfully ! ');
                    reset();
                    setStatus(true)
                }
                console.log(res);
            })
            
        };
    return (
        <div>
            <div className='container'>
                <h1 className="fw-bold">Welcome to {service.name} Program </h1>
                <div className='row'>
                    <div className = 'col-md-7 m-auto'>
                        <div className="card h-100 p-3 m-3">
                            <img src={service.img} className="card-img-top img-fluid w-50 m-auto"  alt="..."/>
                            <div className="card-body p-3 m-3">
                            <h5 className="card-title">{service.name}</h5>
                            <p className="card-text">{service.description}</p>
                            </div>
                            <div className="card-footer">
                            <small className="">Packages : {service.packages}</small>
                            <small className="">Package Price : {service.price}</small>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* {setStatus? <h3 className='text-danger'>Pending</h3> : */}
            <div className='add-service'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input value={user.displayName} {...register("name", { required: true, maxLength: 25 })} placeholder='Name' />
            <input value={user.email}{...register("email", { required: true, maxLength: 40 })} placeholder='Email' /> 
            <input value={serviceid} {...register("id")} placeholder='Service-ID' />
            <input {...register("ordername", { required: true})} placeholder='Enter Order Name' />             
            <textarea {...register("location", )} placeholder='Delivery-location'/>
            <input type="number" {...register("mobile", { required: true})} placeholder='Contact Number' />
            <input type="submit" value='Place Order' className='btn btn-danger' />
            </form>
            </div>
        </div>
    );
};

export default ServiceDetails;
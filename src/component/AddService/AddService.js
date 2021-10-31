import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {

        const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
            console.log(data);
            axios.post('https://stark-retreat-78546.herokuapp.com/services', data)
            .then(res=>{
                if(res.data.insertedId){
                    alert('Data Added Successfully ! ');
                    reset();
                }
                console.log(res);
            })
            
        };
    return (
        <div className='add-service'>
            <h1>Add a Service here!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
            <input {...register("shortdetails", )} placeholder='Details in short 20-30 words'/>
            <textarea {...register("description", )} placeholder='Description'/>
            <input {...register("packages", )} placeholder='2 Night - 3 Days'/>
            <input {...register("img", )} placeholder='Image-url'/>
            <input type="number" {...register("price", )} placeholder='Price' />
            <input className='btn btn-success' type="submit" />
            </form>
            <button onClick={()=>reset()} className='btn btn-warning'>Reset input field</button>

        </div>
    );
};

export default AddService;
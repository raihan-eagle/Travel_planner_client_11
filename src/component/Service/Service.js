import React from 'react';
import { Link } from 'react-router-dom';



const Service = (props) => {
    const {_id, name, img, description, price, shortdetails, packages} = props.service 
    // const handleServiceDetails = ()=>{

    // }
    
    return (
        <div>            
                <div className="col my-2">
                    <div className="card h-100">
                    <img src={img} className="card-img-top img-fluid "  alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title"> Price : {price} - {name}</h5>
                        <p className="card-text">{shortdetails}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{packages}</small>
                    </div>
                    <div >
                        <Link to={`/services/${_id}`}>
                        <button className="btn btn-info px-3 py-1 m-2">Book Now</button>
                        </Link>
                    </div>
                    </div>
                </div>
                
        </div>
    );
};

export default Service;
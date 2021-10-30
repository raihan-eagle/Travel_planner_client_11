import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://stark-retreat-78546.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
        .then(console.log(orders))
        // .finally(() => setLoading(false))
    },[])
    return (
        <div>
        <div className='container mt-2'>
            {
                orders.map(order=><div
                key={order._id} className='w-75 bg-light text-info m-auto mb-3 '
                >
                <h6 className='mx-1'>Customer Name : {order.name}</h6>
                <h6 className='mx-1'>Customer Email : {order.email}</h6>
                <h6 className='mx-1'>Ordered Product ID : {order.id}</h6>
                <h6 className='mx-1'>Ordered Product Name : {order.ordername}</h6>
                <button className='btn btn-danger' onClick={()=>{}}>Approve</button>
                </div>)
            }
        </div>
        </div>
    );
};

export default ManageOrders;
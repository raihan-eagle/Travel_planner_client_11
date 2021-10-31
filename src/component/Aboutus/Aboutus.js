import React from 'react';
import './Aboutus.css'

const Aboutus = () => {
    return (
        <div>
                <div id="aboutus">
                    <div className='p-md-3'></div>
                    <br/>
                    {/* About us Section  */}
                    <h1 className ='fw-bold'> ABOUT <span className='text-warning'> US</span></h1>
                    <h5 className = 'fw-light p-3' >We are not only a franchise, we are a local business too, servicing the local residents of Nunawading, Blackburn, Blackburn North, Blackburn South, Box Hill, Box Hill North, Box Hill South, Burwood, Burwood East, Forest Hill, Mitcham, Mont Albert, Mont Albert North, Surrey Hills, Vermont and Vermont South.</h5>
                    <br />
                    {/* about feature  */}
                    <div className='row text-format'>
                        <div className='col-md-4 p-3 d-flex'>
                            <div>
                                <img className='img-fluid' src="https://i.ibb.co/bbFSFnW/download-1.jpg" alt="" />
                            </div>
                            <div className='w-75'>
                                <h6 className='p-2 text-center'>COMMUNITY</h6>
                                <p className='p-2 text-format'>
                                We aim to present the people, history, cultural heritage and beauty of Bangladesh to the world through unique customized services of international standards. We will continue to strengthen our position in the tourism market as one of Bangladesh's leading providers of such services as well as to promote the superiority of our products, prices and our team of local and international travel experts.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 p-3 d-flex'>
                        <div>
                                <img className='img-fluid' src="https://i.ibb.co/bbFSFnW/download-1.jpg" alt="" />
                            </div>
                            <div className='w-75'>
                                <h6 className='p-2 text-center'> DIFFERENCE Here</h6>
                                <p className='p-2 text-format'>                              
                                The name Tour Planners Ltd, is well known in both national and international markets for the quality of its services having knowledgeable team of English / Japanese / Chinese & other language Speaking Guide.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4 p-3 d-flex'>
                        <div>
                                <img className='img-fluid' src="https://i.ibb.co/bbFSFnW/download-1.jpg" alt="" />
                            </div>
                            <div className='w-75'>
                                <h6 className='p-2 text-center'>IN OUR Tour</h6>
                                <p className='p-2 text-format'>
                                
                                    The members safety is our priority over everything.As a full Destination Management Company, Tour Planners Ltd. offers all services for a professional and perfect handling of all kinds of groups and projects in Bangladesh. We actively participate in the daily life of the communities where we operate. For instance, the company contributes funds to rural tribes visited by our ethnic tours.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* About us Section ends*/}
                </div>
        </div>
    );
};

export default Aboutus;
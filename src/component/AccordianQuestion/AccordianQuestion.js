import React from 'react';
import { Accordion } from 'react-bootstrap';

const AccordianQuestion = () => {
    return (
        <div id='frequentquestions' className='bg-light'>
            <hr />
            <br />
            <h1 className='fw-bold text-warning p-3 m-md-3'>FREQUENTLY ASKED QUESTIONS</h1>
            <div className='w-75 m-auto'>
            <Accordion defaultActiveKey="0" >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. Whats included in your packages?</Accordion.Header>
                        <Accordion.Body>Depending on the offer you buy we only provide food, travel cost.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. Should I have any concern about Security ?</Accordion.Header>
                        <Accordion.Body>
                        No Sir. We have strong communication with local authority and Law enforcing agency. So no issue with security.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. How can I apply for refund ?</Accordion.Header>
                        <Accordion.Body>
                        You should let us know 3 days / 72 hours prior the travel date for refund.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>4. Can you arrange a cutom tour plan?</Accordion.Header>
                        <Accordion.Body>
                        Yes Sir. Its possible if you have more than 10 people in your group.
                        </Accordion.Body>
                    </Accordion.Item>
            </Accordion>
            </div>
            <br />
            <br />
        </div>
    );
};

export default AccordianQuestion;
import React from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function RestReview({ review }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(review);
    return (
        <div><Button variant="primary" onClick={handleShow}>
            Launch
        </Button>

            <Offcanvas show={show} onHide={handleClose}>

                <Offcanvas.Header closeButton>
                    
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                {
                review?.map((item) =>
                    <div>
                        <h6>{item.name}</h6>
                        date:{item.date}
                        <p>{item.comments}</p>
                    </div>
                    // <p>{item.comments}</p>
                )
                }
                </Offcanvas.Body>
            </Offcanvas>
            </div>
    )
}

export default RestReview
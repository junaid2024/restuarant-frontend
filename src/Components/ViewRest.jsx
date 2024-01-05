import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import RestOp from './RestOp';
import RestReview from './RestReview';



function ViewRest() {
  // useparams -used to get path parameter from the url
  // const paraId=useParams()
  // console.log(paraId.id);
  // destructure
  const { id } = useParams()
  console.log(id);
  // Api call to get details of the particular resturent using the path parameter
  const base_url = `https://restuarent-back-end.onrender.com/restaurants/${id}`;
  const [viewData, setViewData] = useState([]);
  const fetchid = async () => {
    const result = await axios.get(`${base_url}`)
    console.log(result);
    setViewData(result.data)
  }
  useEffect(() => {
    fetchid()
  }, [])
  return (
    <div>
      <Row className='row'>
        <Col className='col-6'>
          <img src={viewData.photograph} alt="" style={{ width: '100%',height:'80vh',padding:'30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
        </Col>
        <Col className='col-6'>
          <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='m-5'>
            <div>
              <h1>{viewData.name}</h1>
              <MDBListGroup style={{ minWidth: '22rem' }} light>
                {/* <MDBListGroupItem disabled aria-disabled='true'>
                {viewData.name}
                </MDBListGroupItem> */}
                <MDBListGroupItem>{viewData.address}</MDBListGroupItem>
                <MDBListGroupItem>cuisine type: {viewData.cuisine_type}</MDBListGroupItem>
                <MDBListGroupItem>Neibhorhood :{viewData.cuisine_type}</MDBListGroupItem>
                <MDBListGroupItem><RestOp op={viewData.operating_hours}/></MDBListGroupItem>
                <MDBListGroupItem><RestReview review={viewData.reviews}/></MDBListGroupItem>
              </MDBListGroup>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest
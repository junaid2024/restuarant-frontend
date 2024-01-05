import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function RestCard({ resturent }) {
  console.log(resturent);
  return (
    <div>
     <Link to={`view/${resturent.id}`} style={{textDecoration:'none'}}>
       <MDBCard className='m-5' style={{ height: '600px' }}>
         <MDBCardImage src={resturent.photograph} position='top' alt='...' />
         <MDBCardBody>
           <MDBCardTitle>{resturent.name}</MDBCardTitle>
           <MDBCardText>
             {resturent.address}
           </MDBCardText>
      
         </MDBCardBody>
       </MDBCard>
     </Link>
    </div>
  )
}

export default RestCard
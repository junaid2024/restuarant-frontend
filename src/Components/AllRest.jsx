import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import RestCard from './RestCard';

function AllRest() {
  // api fetching
  const base_url = 'https://restuarent-back-end.onrender.com/restaurants';
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get(base_url);
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Add an empty dependency array to run the effect only once on mount

  return (
    <div>
      <Row>
        {data.map((item) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <RestCard resturent={item}/>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AllRest;

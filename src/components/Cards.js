import React from 'react';
import { Card,Button } from 'react-bootstrap';
import {
  FaUsers,
  FaGasPump,
  FaTachometerAlt,
  FaCar,
} from 'react-icons/fa';
function Cards({ item }) {
    return (
      <Card style={{ width: "calc(33.33% - 10)", marginBottom:"10px",backgroundColor:"#F1F5FC",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.2)" }}>
      <div style={{ height: "50%" }}>
        <Card.Img variant="top" src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-33204,resizemode-75,msid-96191686/industry/auto/auto-news/super-luxury-cars-clock-50-growth-highest-ever-in-india.jpg" style={{ height: "100%", borderRadius:"20px" }} />
      </div>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Card.Title>{item.car}</Card.Title>
          </div>
          <div>
          <div style={{ border: "1px dashed #000", borderRadius: "5px", padding: "3px" }}>
                2023
           </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="d-flex justify-content-between">
            <span><FaUsers />  {item.id}</span>
            <span><FaGasPump /> Gas</span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <span><FaTachometerAlt />{item.car_color}</span>
            <span><FaCar />{item.car_model}</span>
          </div>
        </div>
        <Card.Footer className="mt-3 d-flex  justify-content-between align-items-center" style={{ backgroundColor: 'transparent' , height:"auto"}}>
              <Card.Title>{item.price}</Card.Title>
        <div>
          <Button variant="primary">Buy Car</Button>
        </div>
        </Card.Footer>
      </Card.Body>
    </Card>
    );
}

export default Cards;

import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
// import { Link } from 'react-router-dom'
const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((item)=>(
           
            <Col sm={12}key={item.id} md={6} lg={40} xl={3}>
                {console.log(item)}
            <Product product={item}/>
            </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

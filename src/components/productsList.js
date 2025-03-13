import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import '../components/productList/ProductList.css';

const ProductList = ({ products }) => {
  return (
    <Container className="mt-4">
      <h1 className="text-center">¡Bienvenidos a nuestra tienda de vinos!</h1>
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 text-center shadow product-card">
              <Card.Img variant="top" src={product.image} className="p-3 product-image" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Precio: ${product.price}</Card.Text>
                <Card.Text>Stock disponible: {product.stock}</Card.Text>
                <Button variant="primary" className="product-button">Ver detalle</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;

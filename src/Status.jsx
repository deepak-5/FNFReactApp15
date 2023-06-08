import React from 'react';
import './index.css';
import NavBar from './NavBar';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Status = () => {
  const loanStatus = 'Approved'; // Replace with your actual loan status
  const personDetails = {
    name: 'John Doe', // Replace with actual person details
    address: '123 Main St',
    phone: '555-1234'
  };

  return (
    <div>
      <NavBar />
      <Container>
        <h1 className="title text-center">Loan Status</h1>
        <Row>
          <Col md={6}>
            <Card className="card mb-4">
              <Card.Body>
                <Card.Title className="card-title">Loan Details</Card.Title>
                <hr className="divider" />
                <p><strong>Status:</strong> <span className="text-success">{loanStatus}</span></p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card mb-4">
              <Card.Body>
                <Card.Title className="card-title">Person Details</Card.Title>
                <hr className="divider" />
                <p><strong>Name:</strong> {personDetails.name}</p>
                <p><strong>Address:</strong> {personDetails.address}</p>
                <p><strong>Phone:</strong> {personDetails.phone}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Status;

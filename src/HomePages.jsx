import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import homeImage from './homeImage.jpg';

function HomePages({ userId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwt');

    fetch('https://mortgageautomationgroupa.azurewebsites.net/register', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        const currentUser = data.filter(item => item.id === userId);
        setData(currentUser);
      })
      .catch(error => console.error(error));
  }, [userId]);

  return (
    <div>
      <NavBar />
      <Container fluid className="p-3">
        {data && (
          <Row className="mt-4">
            {data.map(item => (
              <Col md={4} key={item.id}>
                <h3>Welcome {item.username}-{item.id}</h3>
              </Col>
            ))}
          </Row>
        )}

        <Row className="align-items-center">
          <Col md={6}>
            <h1>Welcome to Our Website!</h1>
            <p>We are a leading provider of mortgage automation and solutions that help you streamline your workflow and reduce costs. Whether you are a lender, broker, or borrower, we have the right tools for you.</p>
            <Button variant="primary" href="/about">Learn More</Button>
          </Col>
          <Col md={6}>
            <img src={homeImage} alt="Home page banner" width="100%" />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>For Lenders</Card.Title>
                <Card.Text>
                  Our platform helps you automate the entire loan origination process, from application to closing. You can manage your pipeline, track documents, communicate with borrowers, and generate reports with ease.
                </Card.Text>
                <Button variant="primary" href="/lenders">See Features</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>For Brokers</Card.Title>
                <Card.Text>
                  Our platform helps you connect with multiple lenders and find the best rates and terms for your clients. You can submit applications, compare offers, negotiate fees, and close deals faster.
                </Card.Text>
                <Button variant="primary" href="/brokers">See Features</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>For Borrowers</Card.Title>
                <Card.Text>
                  Our platform helps you find the best mortgage option for your needs. You can apply online, upload documents, check your status, and chat with your loan officer anytime, anywhere.
                </Card.Text>
                <Button variant="primary" href="/borrowers">See Features</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePages;

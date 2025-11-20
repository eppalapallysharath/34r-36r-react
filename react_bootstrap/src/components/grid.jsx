import React, { useState } from "react";
import { Container, Row, Col, Card, Spinner, Navbar, Nav, Button, Modal } from "react-bootstrap";

export const GridExamples = () => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (<>
    <Navbar bg="success" data-bs-theme="light" >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
 <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>


 <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <Spinner animation="grow"></Spinner>



    <Container className="w-100">
      <Row className="w-100">
        <Col>
          <Card >
            <Card.Header>
              <Card.Img src="https://m.media-amazon.com/images/I/81M-HbNmmvL._AC_UL480_FMwebp_QL65_.jpg" />
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Status Contract 3 x 5 Feet Multi Printed Vintage Persian Carpet
              </Card.Text>
              <Card.Title>Covers</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
                <Card.Header>
                  <Card.Img src="https://m.media-amazon.com/images/I/81M-HbNmmvL._AC_UL480_FMwebp_QL65_.jpg" />
                </Card.Header>
                <Card.Body>
                    <Card.Text>Status Contract 3 x 5 Feet Multi Printed Vintage Persian Carpet</Card.Text>
                    <Card.Title>Covers</Card.Title>
                </Card.Body>
              </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

import React, { useState } from "react";
import { Button, Alert, Card } from "react-bootstrap";

export const Alerts = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-100  ">
      {show ? (
        <Alert variant="success">
            <Alert.Heading>Application status</Alert.Heading>
          <p>you app is down</p>
        </Alert>
      ) : (
        <></>
      )}
      <Button className="mx-5 w-25" onClick={()=>setShow(!show)}>show alert message</Button>
      <Card className="w-25">
        <Card.Header>
          <Card.Img src="https://m.media-amazon.com/images/I/81M-HbNmmvL._AC_UL480_FMwebp_QL65_.jpg" />
        </Card.Header>
        <Card.Body>
            <Card.Text>Status Contract 3 x 5 Feet Multi Printed Vintage Persian Carpet</Card.Text>
            <Card.Title>Covers</Card.Title>
        </Card.Body>
      </Card>
      <Card className="w-25">
        <Card.Header>
          <Card.Img src="https://m.media-amazon.com/images/I/81M-HbNmmvL._AC_UL480_FMwebp_QL65_.jpg" />
        </Card.Header>
        <Card.Body>
            <Card.Text>Status Contract 3 x 5 Feet Multi Printed Vintage Persian Carpet</Card.Text>
            <Card.Title>Covers</Card.Title>
        </Card.Body>
      </Card>
      <Card className="w-25">
        <Card.Header>
          <Card.Img src="https://m.media-amazon.com/images/I/81M-HbNmmvL._AC_UL480_FMwebp_QL65_.jpg" />
        </Card.Header>
        <Card.Body>
            <Card.Text>Status Contract 3 x 5 Feet Multi Printed Vintage Persian Carpet</Card.Text>
            <Card.Title>Covers</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

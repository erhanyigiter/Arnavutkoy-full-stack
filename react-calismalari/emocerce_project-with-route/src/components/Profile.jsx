import React from "react";
import {
  FormGroup,
  Container,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import alertify from "alertifyjs";
export default function Profile() {
  const handleSubmit = (e) => {
    e.preventDefault();
    //profil bilgilerini listele
    alertify.success("Profile update successfully!", 2);
    console.log("profile updated");
  };
  return (
    <Container>
      <h2>Profile</h2>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Name</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Name</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Update Profile
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
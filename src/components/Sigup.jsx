import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { MdPassword } from "react-icons/md";

export const Sigup = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Sign Up
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header>
          <Offcanvas.Title className="text-center fs-1">
            Bienvenido a nuestro sitio web :D
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex justify-content-center m-3">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Col} controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <HiOutlineMail />
                </InputGroup.Text>
                <Form.Control
                  className="email"
                  type="text"
                  placeholder="mark123@gmail.com"
                  required
                />
              </InputGroup>
              <Form.Control.Feedback type="invalid">
                Por favor, ingresa tu correo.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="validationCustom04 formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <MdPassword />
                </InputGroup.Text>
                <Form.Control type="password" placeholder="Password" />
              </InputGroup>
              <Form.Control.Feedback type="invalid">
                Por favor, ingresa tu ciudad.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="m-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" variant="success">
              Entrar
            </Button>
            <div className="text-center my-5">
              <h2 className="text-center my-3">
                <Badge pill bg="dark" text="light">
                  Entra con
                </Badge>
              </h2>
              <div className="d-flex aling-content-center justify-content-center"></div>
              <Button className="" size="lg" variant="outline-success">
                <FcGoogle />
              </Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

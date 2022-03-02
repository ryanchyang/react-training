import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { ImHome3 } from 'react-icons/im';
import { WiTime10 } from 'react-icons/wi';

const BootstrapTest = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>React Bootstrap</h1>
            <Button variant="primary" onClick={handleShow}>
              <ImHome3 />
              Primary
            </Button>
            <Button variant="secondary" onClick={handleShow}>
              <WiTime10 />
              Secondary
            </Button>
            <Button variant="success" onClick={handleShow}>
              Success
            </Button>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default BootstrapTest;

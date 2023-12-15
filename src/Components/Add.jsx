import React,{useState} from 'react'
import { Button , Modal } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button onClick={handleShow} style={{color:'white'}} className='btn'><i style={{height:'50px'}} class="fa-solid fa-photo-film fa-2x"></i></button>
    </div>
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Uploading form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video ID"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Uploading Video ID" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video Caption"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Uploading Video Caption" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video Image URL"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Uploading Video Image URL" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Uploading Video Youtube Link"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Uploading Video Youtube Link" />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Add
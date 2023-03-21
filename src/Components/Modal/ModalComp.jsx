import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalComp({children, cardImage, imgTitle}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>
        { children }
      </div>

      <Modal show={show} onHide={handleClose} centered className='rounded-2 modal-lg' >
        <Modal.Header  className='d-block'>
          <Modal.Title>
            <h2 className="text-uppercase section-header text-center fw-bolder">{imgTitle}</h2>
              <div className="d-flex justify-content-center align-items-center">
                <div className="line"></div>
                  <i className="fa-solid fa-star fa-1x p-star"></i>
                <div className="line"></div>
              </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='position-relative bg-white' style={{padding:'3rem 3rem 0' ,borderRadius:'0.75rem'}}>
          <img className='w-100 rounded-2 img-fluid' src={cardImage} alt="" onClick={handleShow} />
          <p className="my-4 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod earum eius aperiam blanditiis natus enim quis sequi at, iusto debitis officiis culpa nisi, consequatur laboriosam ab ea fuga temporibus tempore.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className='m-auto' style={{ background: '#1abc9c',border:'none' }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import InquiryForm from "./InquiryForm";

type PropertyInquiryModalProps = {
  modalShow: boolean;
  setModalClose: (show: boolean) => void;
};

const PropertyInquiryModal: React.FC<PropertyInquiryModalProps> = ({
  modalShow,
  setModalClose,
}) => {
  const formSubmitAction = () => {
    setModalClose(false);
  };

  return (
    <Modal show={modalShow} onHide={() => setModalClose(false)}>
      {/* <Row className="py-2 px-3">
        <Col md="10">
        <h1 className="ft-30 fw-bold text-dark mb-2">
          Send Message to Seller
        </h1>
        </Col>
        <Col md="2" className="text-end">
          <span className="mt-2">
            <MdClose
              size={18}
              className="mx-auto d-block border border-danger cursor-pointer"
              onClick={() => setModalClose(false)}
            />
          </span>
        </Col>
      </Row> */}
      <Modal.Header closeButton>
        <Modal.Title className="ft-30 fw-bold text-dark">
          Send Message to Seller
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InquiryForm submitAction={formSubmitAction} />
      </Modal.Body>
    </Modal>
  );
};

export default PropertyInquiryModal;

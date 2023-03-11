import React from "react";
import ReactModal from "react-modal";
import "../../src/projectmodal.css";

const ModalSection = ({ isOpen, modalClose }) => {
  const modalOpen = () => {
    modalClose();
  };
  return (
    <ReactModal
      className="projectModal"
      overlayClassName="projectModalOverlay"
      isOpen={isOpen}
      preventScroll={false}
    >
      <button className="closeModal" onClick={modalOpen}></button>
    </ReactModal>
  );
};

export default ModalSection;

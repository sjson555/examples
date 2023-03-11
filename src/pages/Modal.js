import React, { useState } from "react";
import ModalSection from "../components/ModalSection";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalOpen = () => {
    setIsOpen(true);
  };
  const modalClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={modalOpen}>열기</button>
      <ModalSection isOpen={isOpen} modalClose={modalClose} />
    </div>
  );
};

export default Modal;

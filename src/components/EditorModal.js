import React, { useState } from "react";
import ReactModal from "react-modal";
import Editor from "./Editor";
import "../styles/projectmodal.css";

function EditorModal({ isOpen, modalClose }) {
  const [content, setContent] = useState("");

  function handleChange(value) {
    setContent(value);
  }

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
      <Editor content={content} onChange={handleChange} />
      <button className="closeModal" onClick={modalOpen}></button>
    </ReactModal>
  );
}

export default EditorModal;

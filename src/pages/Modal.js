import React, { useState } from "react";
import SettingModal from "../components/SettingModal";
import CommentModal from "../components/CommentModal";
import EditorModal from "../components/EditorModal";
import "../styles/modal.css";

const Modal = () => {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const openSettingModal = () => {
    setIsSettingOpen(true);
  };
  const closeSettingModal = () => {
    setIsSettingOpen(false);
  };

  const openCommentModal = () => {
    setIsCommentOpen(true);
  };
  const closeCommentModal = () => {
    setIsCommentOpen(false);
  };

  const openEditorModal = () => {
    setIsEditorOpen(true);
  };
  const closeEditorModal = () => {
    setIsEditorOpen(false);
  };
  return (
    <>
      <div className="settingModal">
        <button className="settingModalBtn" onClick={openSettingModal}>
          SettingModal
        </button>
        <SettingModal isOpen={isSettingOpen} modalClose={closeSettingModal} />
      </div>
      <div className="commentModal">
        <button className="commentModalBtn" onClick={openCommentModal}>
          CommentModal
        </button>
        <CommentModal isOpen={isCommentOpen} modalClose={closeCommentModal} />
      </div>
      <div className="editorModal">
        <button className="editorModalBtn" onClick={openEditorModal}>
          EditorModal
        </button>
        <EditorModal isOpen={isEditorOpen} modalClose={closeEditorModal} />
      </div>
    </>
  );
};

export default Modal;

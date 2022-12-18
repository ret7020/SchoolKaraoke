import React from "react";
import { Modal, Button } from "antd";

const ViewVideoModal = ({ modalState, modalTitle, setModalState, modalVideoLink }) => {
  return (
    <Modal
      width={"100%"}
      open={modalState}
      title={modalTitle}
      style={{ textAlign: "center" }}
      onCancel={() => {
        setModalState(false);
      }}
      footer={[]}
      >
        <iframe className="viewIframe" src={modalVideoLink} allowFullScreen allow="autoplay; encrypted-media"/>
      </Modal>
  );
};

export default ViewVideoModal;

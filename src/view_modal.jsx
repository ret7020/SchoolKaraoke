import React from "react";
import { Modal, Button } from "antd";

const ViewVideoModal = ({ modalState, modalTitle, setModalState }) => {
  return (
    <Modal
      width={"100%"}
      open={modalState}
      title={modalTitle}
      
      onCancel={() => {
        setModalState(false);
      }}
      footer={[]}
    ></Modal>
  );
};

export default ViewVideoModal;

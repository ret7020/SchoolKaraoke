import React from "react";
import { Modal, Button } from "antd";

const ViewVideoModal = ({ modalState, modalTitle, setModalState }) => {
  return (
    <Modal
      width={"100%"}
      open={modalState}
      title={modalTitle}
      style={{textAlign: "center"}}
      onCancel={() => {
        setModalState(false);
      }}
      footer={[]}
    ></Modal>
  );
};

export default ViewVideoModal;

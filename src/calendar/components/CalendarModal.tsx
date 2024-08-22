import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-background"
      closeTimeOutMS={200}
    >
      <h1>Hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam
        ex accusantium id nisi adipisci ea doloribus laborum, in exercitationem
        eligendi quibusdam magni aut possimus saepe excepturi necessitatibus
        dolor esse.
      </p>
    </Modal>
  );
};

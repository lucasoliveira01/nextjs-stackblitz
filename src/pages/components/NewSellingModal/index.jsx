import Modal from "react-modal";

export function NewSellingModal({ isOpen, onRequestClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <h2>New Selling</h2>
      </Modal>
    </>
  );
}

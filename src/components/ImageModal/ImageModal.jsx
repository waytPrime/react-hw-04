
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function ImageModal({ imageUrl, modalIsOpen, setModalIsOpen }) { 
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "500px",
            width: "100%",
          },
        }}
      >
        <h2>Image Modal</h2>
        <div>
          <img src={imageUrl} alt="Modal content" style={{ width: "100%" }} />
        </div>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

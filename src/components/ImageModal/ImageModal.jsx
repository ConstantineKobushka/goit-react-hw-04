import Modal from 'react-modal';

import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ modalIsOpen, closeModal, modalData }) => {
  return (
    <Modal
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      bodyOpenClassName={styles.noScroll}
    >
      <div className={styles.modalWrapper}>
        <img
          className={styles.modalImg}
          src={modalData.urlRegular}
          alt={modalData.altDescr}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;

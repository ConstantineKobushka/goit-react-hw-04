import Modal from 'react-modal';

import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ modalData, modalIsOpen, onCloseModal }) => {
  console.log(modalData);
  return (
    <Modal
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
    >
      <div className={styles.modalWrapper}>
        <img className={styles.modalImg} src={modalData.urlRegular} alt={modalData.altDescr} />
      </div>
    </Modal>
  );
};

export default ImageModal;

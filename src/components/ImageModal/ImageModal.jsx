import Modal from 'react-modal';

import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

const ImageModal = ({ modalData, modalIsOpen, onCloseModal }) => {
  console.log(modalData);
  return (
    // <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={onCloseModal}>
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

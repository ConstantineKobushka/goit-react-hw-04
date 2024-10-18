import Modal from 'react-modal';

import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ImageModal = ({ modalData }) => {
  console.log(modalData);
  return (
    <Modal style={customStyles}>
      <div className={styles.item}>
        <img className={styles.img} src={modalData.urlRegular} alt={modalData.altDescr} />
        <div className={styles.wrapper}>
          {/* <p>📅 {`${day}.${month}.${year}`}</p> */}
          {/* <p>❤{like}</p> */}
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;

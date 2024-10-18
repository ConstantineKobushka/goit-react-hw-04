import styles from './ImageCard.module.css';

const ImageCard = ({ altDescr, urlSmall, urlRegular, dateCreated, like, onModalData, onOpenModal }) => {
  const dateString = dateCreated;
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  const year = date.getFullYear();

  // function onClickHandler(urlRegular, altDescr) {
  //   onModalData({ urlRegular, altDescr });
  // }

  return (
    <li
      className={styles.item}
      // onClick={onClickHandler}
      onClick={() => {
        onModalData({ altDescr, urlRegular });
        onOpenModal();
      }}
    >
      <img className={styles.img} src={urlSmall} alt={altDescr} />
      <div className={styles.wrapper}>
        <p>📅 {`${day}.${month}.${year}`}</p>
        <p>❤{like}</p>
      </div>
    </li>
  );
};

export default ImageCard;

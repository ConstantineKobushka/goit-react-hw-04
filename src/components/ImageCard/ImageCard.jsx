import styles from './ImageCard.module.css';

const ImageCard = ({ urlSmall, altDescr, dateCreated, like }) => {
  const date = new Date(dateCreated);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return (
    <>
      <img className={styles.galleryImg} src={urlSmall} alt={altDescr} />
      <div className={styles.galleryWrapper}>
        <p>📅 {`${day}.${month}.${year}`}</p>
        <p>❤{like}</p>
      </div>
    </>
  );
};

export default ImageCard;

import ImageCard from '../ImageCard/ImageCard';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onModalData, onOpenModal }) => {
  return (
    <ul className={styles.galleryList}>
      {Array.isArray(images) &&
        images.map(({ id, alt_description, urls, created_at, likes }) => (
          <li
            className={styles.galleryItem}
            key={id}
            onClick={() => {
              onModalData({
                urlRegular: urls.regular,
                altDescr: alt_description,
              });
              onOpenModal();
            }}
          >
            <ImageCard
              urlSmall={urls.small}
              altDescr={alt_description}
              dateCreated={created_at}
              like={likes}
            />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;

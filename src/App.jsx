import { useEffect, useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

import { getImagesByQuery } from './services/api';

const App = () => {
  const [images, setImages] = useState(null);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState({ isError: false, errorMessage: '' });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { data } = await getImagesByQuery(query, page);
        setTotalPage(data.total_pages);
        if (page === 1) {
          setImages(data.results);
        } else {
          setImages(prevState => {
            return [...prevState, ...data.results];
          });
        }
      } catch (error) {
        setError(prevState => {
          return {
            ...prevState,
            isError: true,
            errorMessage: error.message,
          };
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const setSearchValue = searchValue => {
    setImages([]);
    setQuery(searchValue);
    setPage(1);
  };

  const onLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
  };

  const getModalData = data => {
    setModalData(data);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={setSearchValue} />
      {error.isError ? (
        <ErrorMessage>{error.errorMessage}</ErrorMessage>
      ) : (
        <ImageGallery
          images={images}
          onModalData={getModalData}
          onOpenModal={openModal}
        />
      )}
      {isLoading && <Loader />}
      {Array.isArray(images) && page < totalPage && !error.isError && (
        <LoadMoreBtn onLoadMore={onLoadMoreClick} />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalData={modalData}
      />
    </>
  );
};

export default App;

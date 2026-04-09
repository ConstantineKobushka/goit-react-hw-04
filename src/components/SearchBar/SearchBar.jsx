import toast, { Toaster } from 'react-hot-toast';

import styles from './SearchBar.module.css';

const notify = () =>
  toast.error('Write a word to search for', {
    duration: 3000,
    position: 'top-right',
  });

const SearchBar = ({ onSubmit }) => {
  const onFormSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.search.value
      .trim()
      .toLowerCase();
    if (searchValue === '') {
      notify();
      return;
    }
    onSubmit(searchValue);
    event.currentTarget.reset();
  };
  return (
    <header className={styles.searchHeader}>
      <form className={styles.searchForm} onSubmit={onFormSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          name="search"
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        />
        <button className={styles.searchBtn} type="submit">
          🔎
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;

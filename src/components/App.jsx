import { useState, useEffect } from 'react'
import SearchBar from './SearchBar/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMore from './LoadMoreBtn/LoadMoreBtn';
import fetchPhotos from '../photo-api';
import ErrorMessage from './ErrorMessage/ErrorMessage';



function App() {
const [photos, setPhotos]=useState([]);
const [query, setQuery] = useState('');
const [page, setPage] = useState(1);
const [error, setError] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [loadMore, setLoadMore]= useState(false);

const handleSearch = (newQuery) => {
  setQuery(newQuery)
  setPage(1);
};

const handleLoadMore = () => {
  setPage(page + 1);
}

useEffect(()=>{
  if(query.trim() === ''){
    return;
  }
  async function getPhotos () {
    try {
      setIsLoading(true);
      setLoadMore(false);
      const data = await fetchPhotos(query, page);
      setPhotos((prevState)=>{
        return [...prevState, ...data];
      });
      setLoadMore(true);
    } catch (error) {
      setError(true);
      setLoadMore(false);
    }
    finally {
      setIsLoading(false);
    }
  };
  getPhotos();
},[query, page])


  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      {error && <ErrorMessage/>}
      {photos.length >0 && <ImageGallery itemList={photos}/>}
      {isLoading && <Loader/>}
      {loadMore && <LoadMore onClick={handleLoadMore}/>}
    </>
  )
}

export default App

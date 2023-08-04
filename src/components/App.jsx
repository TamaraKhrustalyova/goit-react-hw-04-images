import { useState, useEffect } from 'react';
import {Container} from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Button} from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

import { getImagesByQuery } from '../Api/images';

export function App () {

  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');

  const handleFormSubmit = (searchItem) => {

    setQuery(searchItem);
    setImages([]);
    setPage(1);
  }

  useEffect(() => {
    if(!query) return;

    async function handleSearch () {
    try{
        setLoading(true) 
        const data = await getImagesByQuery(query, page)
        setImages((prev) => [...prev, ...data.hits]);
        setShowBtn (page < (data.totalHits / 12));
        setLoading (false);
    } catch {
    }
   }
    handleSearch()
    }, [query, page])

  const onButtonClick = () => {
    setPage(prev => prev + 1);
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const onImageClick = (largeImageUrl) => {
    setShowModal(true);
    setLargeImageUrl(largeImageUrl);
  }
  
    return (
      <Container>
        <Searchbar onFormSubmit={handleFormSubmit}/>
        {loading && <Loader/>}
        <ImageGallery imagesToRender={images} onImageClick={onImageClick}/>
        {showBtn && <Button onClick={onButtonClick}/>}
        {showModal && <Modal onClose={toggleModal}><img src={largeImageUrl} alt=''></img></Modal>}
      </Container> 
    )
};
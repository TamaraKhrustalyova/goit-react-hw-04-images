import React, { Component } from 'react';
import {Container} from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Button} from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

import { getImagesByQuery } from '../Api/images';


export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    showBtn: false,
    showModal: true,
    loading: false,
    largeImageUrl: '',
  }

  handleFormSubmit = searchItem => {
    this.setState({query: searchItem, images: [], page: 1})
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const newQuery = this.state.query;
    if(prevQuery !== newQuery || prevState.page !== this.state.page)  {
        this.handleSearch();
}}

handleSearch = async() => {
  const {query, page} = this.state;
    try{
        this.setState({loading: true}) 
        const data = await getImagesByQuery(query, page)
        this.setState((prev) => ({images: [...prev.images, ...data.hits], showBtn: page < (data.totalHits / 12), loading: false}))
    } catch {

    }
}

onButtonClick = () => {
  this.setState((prev) => ({ page: prev.page + 1}))
}

toggleModal = () => {
  this.setState(({showModal}) => ({
    showModal: !showModal,
  }))
}

onImageClick = (largeImageUrl) => {
  this.setState({showModal: true, largeImageUrl})
}

render () {

    const {images, showBtn, showModal, largeImageUrl, loading} = this.state;
  
    return (
      <Container>
        <Searchbar onFormSubmit={this.handleFormSubmit}/>
        {loading && <Loader/>}
        <ImageGallery imagesToRender={images} onImageClick={this.onImageClick}/>
        {showBtn && <Button onClick={this.onButtonClick}/>}
        {showModal && <Modal onClose={this.toggleModal}><img src={largeImageUrl} alt=''></img></Modal>}
      </Container> 
    )
  }
};

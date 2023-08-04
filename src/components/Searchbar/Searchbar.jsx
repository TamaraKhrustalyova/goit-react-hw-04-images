import { useState } from "react";
import {TbPhotoSearch} from 'react-icons/tb'
import { Container, SearchForm, SearchFormInput, SearchFormBbutton } from "./Searchbar.styled";
import PropTypes from 'prop-types';

export function Searchbar ({onFormSubmit}) {
    const [searchItem, setSearchItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if (searchItem.trim() === '') {
            alert('Please enter valid search item');
            return;
        }

        onFormSubmit(searchItem);
        setSearchItem('');
    }

   const  handleItemChange = e => {
        setSearchItem(e.currentTarget.value.toLowerCase());
    }

   
        return (
            <Container>
                <SearchForm role="search" onSubmit={handleSubmit}>
                    <SearchFormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={searchItem}
                        onChange={handleItemChange}
                    />
                    <SearchFormBbutton type="submit">
                        <TbPhotoSearch style={{ marginRight: 8 }}/>
                       Search
                    </SearchFormBbutton>
                </SearchForm>
            </Container>
      
        )
    }


Searchbar.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
}
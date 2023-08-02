import { Component } from "react";
import {TbPhotoSearch} from 'react-icons/tb'
import { Container, SearchForm, SearchFormInput, SearchFormBbutton } from "./Searchbar.styled";
import PropTypes from 'prop-types';

export class Searchbar extends Component {
    state = {
        searchItem: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.state.searchItem.trim() === '') {
            alert('Please enter valid search item');
            return;
        }

        this.props.onFormSubmit(this.state.searchItem);
        this.setState({searchItem: ''});
    }

    handleItemChange = e => {
        this.setState({searchItem: e.currentTarget.value.toLowerCase()});
    }

    render() {
        return (
            <Container>
                <SearchForm role="search" onSubmit={this.handleSubmit}>
                    <SearchFormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searchItem}
                        onChange={this.handleItemChange}
                    />
                    <SearchFormBbutton type="submit">
                        <TbPhotoSearch style={{ marginRight: 8 }}/>
                       Search
                    </SearchFormBbutton>
                </SearchForm>
            </Container>
      
        )
    }
}

Searchbar.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
}
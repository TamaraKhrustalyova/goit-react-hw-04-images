
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from "./ImageGallery.styled";
import PropTypes from 'prop-types';

export const ImageGallery = ({imagesToRender, onImageClick}) => {
    return (
        <ImageGalleryList>
            {imagesToRender.map(({id ,webformatURL, largeImageURL, tags}) =>   
            <ImageGalleryItem 
                id={id}
                src={webformatURL}
                alt={tags}
                onClick={() => onImageClick(largeImageURL)}
            />    
            )}
        </ImageGalleryList>    
)
}

ImageGallery.propTypes = {
    onImageClick: PropTypes.func.isRequired,
    imagesToRender: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          webformatURL: PropTypes.string.isRequired,
          largeImageURL: PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
        })
      ),
};
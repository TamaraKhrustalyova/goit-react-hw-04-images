import { ImageGalleryElem, ImageGalleryItemImage } from "./ImageGalleryItem.styled"; 
import PropTypes from 'prop-types';

const ImageGalleryItem = ({id, src, alt, onClick}) => {
    return (
        <ImageGalleryElem key={id} onClick={onClick}>
        <ImageGalleryItemImage 
            src={src}
            alt={alt}
        />
        </ImageGalleryElem>      
    )
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};
import PropTypes from 'prop-types';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ inputData }) => {  


    return (
      <>
        <ul className="ImageGallery">
          {inputData && <ImageGalleryItem inputData={inputData} />}
        </ul>
      </>
    );
  
}

ImageGallery.propTypes = {
    inputData: PropTypes.arrayOf(
        PropTypes.shape({
            webformatURL: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            tags: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        }))
};
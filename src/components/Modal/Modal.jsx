import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, img, alt }) => {
    
   useEffect(()=>{add()
  return remove()
})

function add() {
  window.addEventListener('keydown', onKeyDown)
}
    function remove() {
        window.addEventListener('keydown', onKeyDown)
    }


    const onKeyDown = (e) => {
        if (e.code === 'Escape') {
            onClose();
         }
    }
 
     const handleClick = (e) => { 
        if (e.target === e.currentTarget) {
            onClose();
        }
    }
    
        return createPortal(
        <div className="Overlay" onClick={handleClick}>
        <div className="Modal">
          <img src={img} alt={alt} />
        </div>
      </div>,
      modalRoot
    )
}

    Modal.propTypes = {
        img: PropTypes.string,
        alt: PropTypes.string,
        onClose: PropTypes.func,
}

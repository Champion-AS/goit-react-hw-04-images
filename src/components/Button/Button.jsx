import PropTypes from 'prop-types';


export const Button =({handleClick})=> {
 
 const onClickEvent = e => {
    handleClick(e);
  };

  
    return (
      <div type="button" className="Button" onClick={onClickEvent}>
        Load more
      </div>
    );
  
}
Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
}

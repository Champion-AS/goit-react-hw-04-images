import PropTypes from 'prop-types';
import  {SearchForm} from '../SearchForm/SearchForm';

export const SearchBar =({onSub})=> {
    
    return (
      <header className="header">
        <SearchForm onSub={onSub} />
      </header>
    );
  
}

SearchBar.propTypes = {
    onSub: PropTypes.func.isRequired,
}


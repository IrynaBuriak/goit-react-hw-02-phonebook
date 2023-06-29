import propTypes from 'prop-types';
import css from './FilteredContact.module.css';

export const FilteredContact = ({ filter, handleOnChange }) => (
  <div>
    <label className={css.label}>Find contacts by Name</label>
    <input
      className={css.input}
      type="text"
      name="filter"
      placeholder="Filter"
      value={filter}
      onChange={handleOnChange}
    ></input>
  </div>
);

FilteredContact.propTypes = {
  filter: propTypes.string.isRequired,
  handleOnChange: propTypes.func.isRequired,
};

import propTypes from 'prop-types';
import css from './DeleteContact.module.css';

export const DeleteContact = ({ contacts, handleOnDelete }) => (
  <div className={css.wraperContactList}>
    <ul className={css.contactList}>
      {contacts.map((contact, id) => (
        <li key={id} className={css.contactListItem}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.contactListItemBtn}
            onClick={() => handleOnDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

DeleteContact.propTypes = {
  contact: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.number.isRequired,
    })
  ),
  handleOnDelete: propTypes.func.isRequired,
};

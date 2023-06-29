import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FilteredContact } from './FilteredContact/FilteredContact';
import { Phonebook } from './Phonebook/Phonebook';
import { DeleteContact } from './DeleteContact/DeleteContact';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleOnSubmit = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsList = this.state.contacts;

    if (contactsList.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState({ contacts: contactsList });
    }

    contactsList.push({ name, id, number });
  };

  handleOnDelete = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

  getFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filterContactsList;
  };

  render() {
    const { filter } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <Phonebook handleOnSubmit={this.handleOnSubmit} />
        <h2> Contacts</h2>
        <FilteredContact filter={filter} handleOnChange={this.handleOnChange} />
        <DeleteContact
          contacts={this.getFilteredContacts()}
          handleOnDelete={this.handleOnDelete}
        />
      </div>
    );
  }
}

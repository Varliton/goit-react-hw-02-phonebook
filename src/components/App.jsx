import { Component } from 'react';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContact = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name.value} is already in contacts`);
      return;
    }
    this.addNewContact(newContact);
  };
  addNewContact = newContact => {
    this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.addContact}>
          <label htmlFor="">
            Name:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <button type='submit'>Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul>
            <li><p>name</p>
            <p>number</p></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}

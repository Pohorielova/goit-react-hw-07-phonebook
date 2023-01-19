import { useDispatch, useSelector } from 'react-redux';
import {
  changeFilterValue,
  getLoad,
  getError,
  getFilter,
  getItems,
} from '../redux/appSlice';
import { Box } from './Box';
import shortid from 'shortid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';

import {
  addContact,
  fetchContacts,
  deleteContact,
} from './../redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  const isLoading = useSelector(getLoad);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addName = data => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    const contactName = [];

    items.forEach(contact => items.push(contact.name));

    contactName.includes(contact.name)
      ? alert(`${contact.name} is already in contacts.`)
      : dispatch(
          addContact({
            data,
            ...contact,
          })
        );
  };

  const changeFilter = e => {
    dispatch(changeFilterValue(e.currentTarget.value));
  };

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(visibleContacts);
  return (
    <Box as="div" p={15}>
      <Box as="h1" color="white" textAlign="center">
        PhoneBook:
      </Box>
      <Box as="div" display="flex" alignItems="center">
        <Box as="div" display="flex" flexDirection="column" width={320}>
          <Form onSubmitForm={addName} contacts={visibleContacts} />
          <Filter value={filter} onChange={changeFilter} />
        </Box>
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={removeContact}
        />
      </Box>
    </Box>
  );
}

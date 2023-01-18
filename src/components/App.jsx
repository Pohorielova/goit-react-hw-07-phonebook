import { useDispatch, useSelector } from 'react-redux';
import {
  add,
  remove,
  setFilter,
  getContacts,
  getFilter,
} from '../redux/appSlice';
import { Box } from './Box';
import shortid from 'shortid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  // console.log(contacts);
  const addName = data => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    const contactName = [];

    contacts.forEach(contact => contactName.push(contact.name));

    contactName.includes(contact.name)
      ? alert(`${contact.name} is already in contacts.`)
      : // : setContacts(prevState => [contact, ...prevState]);
        dispatch(
          add({
            data,
            ...contact,
          })
        );
  };

  const changeFilter = e => {
    // setFilter(e.currentTarget.value);
    dispatch(setFilter(e.currentTarget.value));
  };

  const deleteContact = contactId => {
    // setContacts(prevState =>
    //   prevState.filter(contact => contact.id !== contactId)
    // );

    dispatch(remove(contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

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
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Box>
    </Box>
  );
}

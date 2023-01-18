import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Input, Label, Btn, Container } from './Form.styled';

export default function Form({ onSubmitForm }) {
  const [data, setData] = useState({ name: '', number: '' });

  const handelInputChange = e => {
    const { value, name } = e.currentTarget;
    setData(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = data;
    onSubmitForm({ name, number });
    setData({ name: '', number: '' });
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Label>Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handelInputChange}
        value={data.name}
      />

      <Label>Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handelInputChange}
        value={data.number}
      />

      <Btn type="submit">Add contact</Btn>
    </Container>
  );
}
Form.propType = {
  onSubmitForm: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

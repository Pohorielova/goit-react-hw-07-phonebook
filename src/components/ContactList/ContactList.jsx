import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Btn, ContactsEl } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <Box
    as="ul"
    display="flex"
    flexWrap="wrap"
    justifyContent="center"
    alignContent="flex-start"
    ml={45}
    gridGap={10}
  >
    {contacts.map(({ id, name, number }) => (
      <ContactsEl key={id}>
        {name}: {number}
        <Btn type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Btn>
      </ContactsEl>
    ))}
  </Box>
);

export default ContactList;
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

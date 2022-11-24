import React from 'react';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { ContactListButton, ContactListLi } from './ContactListItem.styled';

export const ContactListItem = ({ name, phone, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <ContactListLi>
      {`${name}: ${phone}`}
      <ContactListButton
        type="button"
        id={id}
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        Delete
      </ContactListButton>
    </ContactListLi>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { ContactListButton, ContactListLi } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  return (
    <ContactListLi>
      {`${name}: ${phone}`}
      <ContactListButton
        type="button"
        id={id}
        onClick={() => dispatch(deleteContact(id))}
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

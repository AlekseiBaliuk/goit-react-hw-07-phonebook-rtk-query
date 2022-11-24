import React from 'react';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactListUl } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <>
      {contacts.length > 0 ? (
        <ContactListUl>
          {visibleContacts.map(({ id, name, phone }) => (
            <ContactListItem key={id} id={id} name={name} phone={phone} />
          ))}
        </ContactListUl>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};

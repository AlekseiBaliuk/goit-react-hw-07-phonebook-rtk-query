import React from 'react';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import { Container, PhonebookTitle, ContactsTitle } from './App.styled';

export const App = () => {
  const { error, isFetching } = useFetchContactsQuery();

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
      {isFetching && !error && <Loader />}
    </Container>
  );
};

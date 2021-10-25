import React, { useEffect, useState } from 'react';
import { Cards } from '../cards/cards';
import CreateForm from '../create-form/create-form';
import SearchBar from '../search-bar/search-bar';
import ContactService from '../../services/contacts.service';

const MainPage = () => {
  const [contacts, setContacts] = useState([]);
  const [value, setValue] = useState('');
  const [searchedContacts, setSearchedContacts] = useState([]);
  const [updateContacts, setUpdateContacts] = useState(false);

  useEffect(async () => {
    const allContacts = await ContactService.getAll();
    setContacts(allContacts);
    setUpdateContacts(false);
  }, [updateContacts]);

  useEffect(async () => {
    if (value) {
      const contact = await ContactService.getByName(value);
      if (contact.length) setSearchedContacts(contact);
      else setSearchedContacts([]);
    }
  }, [value]);

  return (
    <div>
      <SearchBar
        placeholder="search"
        value={value}
        onChange={(val) => setValue(val)}
      />
      {searchedContacts.length ? (
        <Cards
          data={searchedContacts}
        />
      )
        : (
          <>
            <CreateForm
              update={setUpdateContacts}
            />
            <Cards
              data={contacts}
            />
          </>
        )}
    </div>
  );
};

export default MainPage;

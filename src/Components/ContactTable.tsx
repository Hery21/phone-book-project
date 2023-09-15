import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_GET_CONTACT_LIST, ADD_CONTACT_WITH_PHONES } from '../queries/queries';
import styled from '@emotion/styled';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  input[type='text'] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button[type='submit'] {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }

  input[type='text']::placeholder {
    color: #ccc;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input[type='text'] {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-left: 10px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  padding: 15px;
  background-color: #007bff;
  color: #fff;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 15px;
  text-align: left;
`;

const ActionButton = styled.button`
  background-color: transparent;
  color: #007bff;
  border: none;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

interface Contact {
  created_at: string; // You can use a more specific date type if needed
  first_name: string;
  id: number;
  last_name: string;
  phones: {
    number: string;
  }[];
}

const ContactTable: React.FC = () => {
  const limit: number = 10
  const [offset, setOffset] = useState(0);

  const [searchQuery, setSearchQuery] = useState('');
  const { loading, error, data } = useQuery(QUERY_GET_CONTACT_LIST, {
    variables: {
      limit,
      offset,
      searchQuery, 
    },
  });

  const [addContactWithPhones] = useMutation(ADD_CONTACT_WITH_PHONES, {
    refetchQueries: [{ query: QUERY_GET_CONTACT_LIST }],
  });

  const [regularContacts, setRegularContacts] = useState<Contact[]>([])
  const [favoriteContacts, setFavoriteContacts] = useState<any[] | undefined>([])
  const [addContact, setAddContact] = useState<any | undefined>({
    first_name: '',
    last_name: '',
    phoneNumbers: [''],
  })


  useEffect(() => {
    if (!loading && !error && data) {
      setRegularContacts(data.contact);
    }
  }, [loading, error, data, addContactWithPhones]);

  const handleFavorite = (contact: any) => {
    const updatedFavoriteContacts = [...(favoriteContacts || []), contact];
    setFavoriteContacts(updatedFavoriteContacts);
    setRegularContacts((prevState) => prevState?.filter((c) => c.id !== contact.id))
  };

  const handleDelete = (contact: any) => {
    setRegularContacts((prevState) => prevState?.filter((c) => c.id !== contact.id))
  };

  const handleAdd = (e: any) => {
    e.preventDefault()

    let isDuplicatePhoneNumber = false;

    for (const contact of regularContacts) {
      for (const existingPhone of contact.phones) {
        if (addContact.phoneNumbers.includes(existingPhone)) {
          isDuplicatePhoneNumber = true;
          break;
        }
      }

      if (isDuplicatePhoneNumber) {
        break;
      }
    }

    if (isDuplicatePhoneNumber) {
      alert('A contact with this phone number already exists');
      return;
    }

    const phones = addContact.phoneNumbers.map((phoneNumber: any) => ({ number: phoneNumber }));

    addContactWithPhones({
      variables: {
      first_name: addContact.first_name,
      last_name: addContact.last_name,
      phones: phones
      },
    })

    // setRegularContacts([...regularContacts, newContactData]);

    setAddContact({ first_name: '', last_name: '', phoneNumbers: [''] });
  }

  const addPhoneNumberInput = () => {
    setAddContact({ ...addContact, phoneNumbers: [...addContact.phoneNumbers, ''] });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    if (name === 'phoneNumbers') {
      const updatedPhoneNumbers = [...addContact.phoneNumbers];
      updatedPhoneNumbers[index] = value;
      setAddContact({ ...addContact, phoneNumbers: updatedPhoneNumbers });
    } else {
      setAddContact({ ...addContact, [name]: value });
    }
  };

  const handleNextPage = () => {
    setOffset(offset + limit);
  };

  const handlePrevPage = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
    }
  };

  const filteredPhones = searchQuery
  ? data?.phone?.filter((phone: any) => {
      if (!phone.contact) return false;
      const search = searchQuery.toLowerCase();
      const contactFirstName = phone.contact.first_name.toLowerCase();
      const contactLastName = phone.contact.last_name.toLowerCase();

      return (
        contactFirstName.includes(search) ||
        contactLastName.includes(search) ||
        phone.number.includes(search)
      );
    })
  : data?.phone;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <FormContainer onSubmit={handleAdd}>
        <label>
          First Name<br />
          <input
            type='text'
            name="first_name"
            value={addContact.first_name}
            onChange={(e) => handleInput(e, -1)}/>
        </label><br />
        <label>
          Last Name<br />
          <input
            type='text'
            name="last_name"
            value={addContact.last_name}
            onChange={(e) => handleInput(e, -1)}/>
        </label><br />
        <div>
          Phone Numbers:<br />
          {addContact.phoneNumbers.map((phoneNumber: string, index: number) => (
            <div key={index}>
              <input
                type="text"
                name="phoneNumbers"
                value={phoneNumber}
                onChange={(e) => handleInput(e, index)}
                required
              />
              {index === addContact.phoneNumbers.length - 1 && (
                <button type="button" onClick={addPhoneNumberInput}>
                  Add Phone Number
                </button>
              )}
            </div>
          ))}
        </div>
        <button type="submit">Add Contact</button>
      </FormContainer><br />
      <SearchContainer>
        <label>
          Search
        <input
          type="text"
          placeholder="Search by phone or contact name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        </label>
      </SearchContainer>
      <button onClick={() => setSearchQuery('')}>Clear</button>
      <h2>Favorite Contacts</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Phone</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredPhones?.length > 0 ? (
            filteredPhones.map((phone: any) => (
              <tr key={phone.id}>
                <td>
                  {phone.contact.first_name} {phone.contact.last_name}
                </td>
                <td>{phone.number}</td>
                <td>
                  <button onClick={() => handleFavorite(phone.contact)}>Favorite</button>
                  <button onClick={() => handleDelete(phone.contact)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No contacts found.</td>
            </tr>
          )}
        </tbody>
      </Table>
      <h2>Contacts</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchQuery === '' ? (
            regularContacts.map((contact: any) => (
              <tr key={contact.id}>
                <td>{contact.first_name} {contact.last_name}</td>
                <td>
                  <ul>
                    {contact.phones?.map((phone: any, index: number) => (
                      <li key={index}>{phone.number}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <button onClick={() => handleFavorite(contact)}>Favorite</button>
                  <button onClick={() => handleDelete(contact)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            filteredPhones?.length > 0 ? (
              filteredPhones.map((phone: any) => (
                <tr key={phone.id}>
                  <td>
                    {phone.contact.first_name} {phone.contact.last_name}
                  </td>
                  <td>{phone.number}</td>
                  <td>
                    <button onClick={() => handleFavorite(phone.contact)}>Favorite</button>
                    <button onClick={() => handleDelete(phone.contact)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No contacts found.</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
      <div>
        <button onClick={handlePrevPage} disabled={offset === 0}>
          Previous Page
        </button>
        <button onClick={handleNextPage}>
          Next Page
        </button>
      </div>
      
    </Container>
  );
}

export default ContactTable
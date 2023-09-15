import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_GET_CONTACT_LIST, ADD_CONTACT_WITH_PHONES } from '../queries/queries'

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
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const { loading, error, data } = useQuery(QUERY_GET_CONTACT_LIST, {
    variables: {
      limit,
      offset,
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <form onSubmit={handleAdd}>
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
      </form>
      <h2>Favorite Contacts</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {favoriteContacts?.map((contact: any) => (
            <tr key={contact.id}>
              <td>{contact.first_name} {contact.last_name}</td>
              <td>
                <ul>
                  {contact.phones?.map((phone: any, index: number) => (
                    <li key={index}>{phone.number}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Contacts</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {regularContacts?.map((contact: any) => (
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
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrevPage} disabled={offset === 0}>
          Previous Page
        </button>
        <button onClick={handleNextPage}>
          Next Page
        </button>
      </div>
    </>
  );
}

export default ContactTable
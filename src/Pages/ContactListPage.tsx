import React from 'react'
import ContactTable from '../Components/ContactTable';
import styled from '@emotion/styled';

const ContactListContainer = styled.div`
  padding: 20px;
`;

const ContactListPage: React.FC = () => {
  return (
    <ContactListContainer>
      <ContactTable />
    </ContactListContainer>
  )
}

export default ContactListPage;

import React from 'react';
import ContactListPage from './Pages/ContactListPage';
import { Global, css } from '@emotion/react';

const globalStyles = css`
  /* Add global styles here */
  body {
    font-family: Arial, sans-serif;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <div className="App">
        <ContactListPage />
      </div>
    </>
  );
}

export default App;

import React from 'react';
import Routes from "./routes"
import { ContactListProvider } from "./context/contactListContext"
function App() {
  return (
    <>
      <ContactListProvider>
        <Routes />
      </ContactListProvider>

    </>
  );
}

export default App;

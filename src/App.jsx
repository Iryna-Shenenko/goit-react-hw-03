import users from "./users.json";
import ContactList from "./components/ContactList/ContactList";
import Searchbox from "./components/SearchBox/Searchbox";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>

      <Searchbox value={searchTerm} onChange={setSearchTerm} />
      <ContactList users={filteredUsers} />
    </div>
  );
};

export default App;

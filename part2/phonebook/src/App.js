import { useState, useEffect } from "react";
import axios from "axios";
import { PersonForm } from "./components/PersonForm";
import { Filter } from "./components/Filter";
import { Persons } from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const namesToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (event) => {
    const filterString = event.target.value;
    setFilter(filterString);
  };

  const handleNameAdd = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberAdd = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find((person) => person.name === newName);
    if (!existingPerson) {
      axios
        .post("http://localhost:3001/persons", {
          name: newName,
          number: newPhoneNumber,
        })
        .then((response) => {
          setPersons(persons.concat(response.data));
        });
    } else {
      alert(`${newName} is already added to the phonebook`);
    }
    setNewName("");
    setNewPhoneNumber("");
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} filterHandler={handleFilterChange} />
      <h2>Add a new person</h2>
      <PersonForm
        name={newName}
        number={newPhoneNumber}
        nameChanger={handleNameAdd}
        numberHandler={handlePhoneNumberAdd}
        submitAction={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={namesToShow} />
    </div>
  );
};

export default App;

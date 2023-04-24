import { useState, useEffect } from "react";
import personService from "./services/persons";
import { PersonForm } from "./components/PersonForm";
import { Filter } from "./components/Filter";
import { Persons } from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
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
      const newPerson = {
        name: newName,
        number: newPhoneNumber,
      };
      personService
        .create(newPerson)
        .then((returnedPerson) => setPersons(persons.concat(returnedPerson)));
    } else {
      alert(`${newName} is already added to the phonebook`);
    }
    setNewName("");
    setNewPhoneNumber("");
  };

  const handlePersonDelete = (currentPerson) => {
    if (window.confirm(`Delete ${currentPerson.name}?`)) {
      personService.deletePerson(currentPerson.id).then((returnedDelete) => {
        setPersons(persons.filter((person) => person.id !== currentPerson.id));
      });
    }
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
      <Persons persons={namesToShow} deleteFunction={handlePersonDelete} />
    </div>
  );
};

export default App;

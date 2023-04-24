export const Persons = ({ persons, deleteFunction }) => {
  return persons.map((person) => (
    <p key={person.name}>
      {person.name} {person.number}{" "}
      <button onClick={() => deleteFunction(person)}>delete</button>
    </p>
  ));
};

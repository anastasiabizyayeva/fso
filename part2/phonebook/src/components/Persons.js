export const Persons = ({ persons }) => {
  return persons.map((person) => (
    <p key={person.name}>
      {person.name} {person.phoneNumber}
    </p>
  ));
};

export const PersonForm = ({
  name,
  number,
  nameChanger,
  numberHandler,
  submitAction,
}) => {
  return (
    <form onSubmit={submitAction}>
      <div>
        name: <input value={name} onChange={nameChanger} />
      </div>
      <br />
      <div>
        number: <input value={number} onChange={numberHandler} />
      </div>
      <br />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

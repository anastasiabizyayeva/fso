export const Filter = ({ filter, filterHandler }) => {
  return (
    <div>
      find countries <input value={filter} onChange={filterHandler}></input>
    </div>
  );
};

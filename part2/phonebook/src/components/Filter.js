export const Filter = ({ filter, filterHandler }) => {
  return (
    <div>
      filter shown with <input value={filter} onChange={filterHandler} />
    </div>
  );
};

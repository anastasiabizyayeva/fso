import { Filter } from "./components/Filter";
import countriesService from "./services/countries";
import { useEffect, useState } from "react";
import { Countries } from "./components/Countries";

const App = () => {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countriesService.getCountries(filter).then((countries) => {
      setCountries(countries);
    });
  }, [filter]);

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
  };

  return (
    <>
      <Filter filter={filter} filterHandler={handleFilterChange} />
      <Countries countries={countries} />
    </>
  );
};

export default App;

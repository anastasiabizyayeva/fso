const CountryFlag = ({ flag }) => {
  return <img src={flag.png} alt={flag.alt}></img>;
};

const LanguageList = ({ languages }) => {
  const languageValues = Object.values(languages);

  return (
    <>
      <h2>Languages</h2>
      <ul>
        {languageValues.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
    </>
  );
};

const MultiCountry = ({ countries }) => {
  return countries.map((country) => (
    <ul>
      <li key={country.name}>{country.name.common}</li>
    </ul>
  ));
};

const SoloCountryStats = ({ country }) => {
  return (
    <>
      <h1 key={country.name}>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <LanguageList languages={country.languages} />
      <br />
      <CountryFlag flag={country.flags} />
    </>
  );
};

export const Countries = ({ countries }) => {
  if (countries.length > 1) {
    return <MultiCountry countries={countries} />;
  } else {
    return <SoloCountryStats country={countries[0]} />;
  }
};

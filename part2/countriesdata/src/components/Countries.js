import { useState, useEffect } from "react";
import weatherService from "../services/weather";

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

const CapitalWeather = ({ capital }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    weatherService.getLongitudeLatitude(capital).then((dimensions) => {
      const cityLatitude = dimensions[0];
      const cityLongitude = dimensions[1];

      setLatitude(cityLatitude);
      setLongitude(cityLongitude);
    });
  }, [capital]);

  const temperature = 0;
  const wind = 0;

  return (
    <>
      <h1>Weather in {capital}</h1>
      <p> Here's some shit </p>
      <p>Latitude {latitude}</p>
      <p>Longitude {longitude}</p>
      <br />
      <p>temperature {temperature} Celsius</p>
      <p>Icon</p>
      <p>wind {wind} m/s</p>
    </>
  );
};

const MultiCountry = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleShowClick = (country) => {
    setSelectedCountry(country);
  };

  const handleBackClick = () => {
    setSelectedCountry(null);
  };

  if (selectedCountry) {
    return (
      <>
        <button onClick={handleBackClick}>Back</button>
        <SoloCountryStats country={selectedCountry} />
      </>
    );
  } else {
    return countries.map((country) => (
      <p key={country.name.common}>
        {country.name.common}{" "}
        <button onClick={() => handleShowClick(country)}>show</button>
      </p>
    ));
  }
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
      <CapitalWeather capital={country.capital[0]} />
    </>
  );
};

export const Countries = ({ countries }) => {
  if (countries.length < 1) {
    return <p>No countries found</p>;
  } else if (countries.length > 1 && countries.length <= 10) {
    return <MultiCountry countries={countries} />;
  } else if (countries.length === 1) {
    return <SoloCountryStats country={countries[0]} />;
  } else {
    return <p>Too many matches, specify another filter</p>;
  }
};

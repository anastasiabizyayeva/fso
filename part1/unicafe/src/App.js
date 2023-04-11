import { useState } from "react";

/* Heading */

const Heading = ({ text }) => <h1>{text}</h1>;

/* Button */

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

/* Individual Stat */

const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

/* Stat */

const Statistics = ({ variables }) => {
  if (variables.all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <StatisticLine text="good" value={variables.good} />
      <StatisticLine text="neutral" value={variables.neutral} />
      <StatisticLine text="bad" value={variables.bad} />
      <StatisticLine text="all" value={variables.all} />
      <StatisticLine text="average" value={variables.average} />
      <StatisticLine text="positive" value={variables.positive} />
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const variables = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: average,
    positive: positive,
  };

  const handleGoodClick = () => {
    const newGood = good + 1;
    setGood(newGood);
    setAll(newGood + neutral + bad);
    setAverage((newGood - bad) / (newGood + bad + neutral));
    setPositive((newGood / (newGood + bad + neutral)) * 100);
  };

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    setAll(good + newNeutral + bad);
    setAverage((good - bad) / (good + bad + newNeutral));
    setPositive((good / (good + bad + newNeutral)) * 100);
  };

  const handleBadClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
    setAll(good + neutral + newBad);
    setAverage((good - newBad) / (good + newBad + neutral));
    setPositive((good / (good + newBad + neutral)) * 100);
  };

  return (
    <div>
      <Heading text="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Heading text="statistics" />
      <Statistics variables={variables} />
    </div>
  );
};

export default App;

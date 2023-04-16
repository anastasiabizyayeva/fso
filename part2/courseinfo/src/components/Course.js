const Header = ({ courseName }) => <h1>{courseName}</h1>;

const Total = ({ parts }) => (
  <p>
    <b>
      Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
    </b>
  </p>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

export const Course = ({ course }) => {
  const name = course.name;
  const parts = course.parts;

  return (
    <div>
      <Header courseName={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

const findTheOldest = require('./findTheOldest')

describe('getAge', () => {
  test('gets age for dead person', () => {
    const person =
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    };
    expect(findTheOldest.getAge(person)).toBe(28);
  });
  test('gets age for alive person', () => {
    const person =
    {
      name: "Carly",
      yearOfBirth: 1923
    };
    expect(findTheOldest.getAge(person)).toBe(100);
  });
});

describe('findTheOldest', () => {
  test('finds the person with the greatest age!', () => {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    expect(findTheOldest.findTheOldest(people).name).toBe('Ray');
  });
  test('finds the person with the greatest age if someone is still living', () => {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    expect(findTheOldest.findTheOldest(people).name).toBe('Ray');
  });
  test('finds the person with the greatest age if the OLDEST is still living', () => {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    expect(findTheOldest.findTheOldest(people).name).toBe('Carly');
  });
});

// Задание 7.1

function printInfo() {
  console.log("Name: " + this.name + ", Age: " + this.age);
}

const person = {
  name: "Иван",
  age: 35,
};

printInfo.call(person);

//----------------------------------------------------------------

// Задание 7.2

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}
const obj = {
  a: 2,
  b: 3,
  operator: "+",
};

const values = [obj.a, obj.b, obj.operator];

const result = calculate.apply(null, values);

console.log(result);

//----------------------------------------------------------------

// Задание 7.3

const persons = [
  { name: "Алексей", age: 25 },
  { name: "Мария", age: 17 },
  { name: "Иван", age: 32 },
  { name: "Елена", age: 18 },
  { name: "Петр", age: 15 },
];

const adultPersons = persons.filter((person) => person.age >= 18);

const adultPersonNames = adultPersons.map((person) => person.name);

console.log("Имена 18+:", adultPersonNames);


//-----------------------------------------------------------------

// Задание 7.4

const persons = [
  { name: "Алексей", age: 25 },
  { name: "Мария", age: 17 },
  { name: "Иван", age: 32 },
  { name: "Елена", age: 18 },
  { name: "Петр", age: 15 }
];

function setFullName(fullName) {
  this.fullName = fullName;
}

const person = persons[0];

const setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

console.log(person);
console.log(persons);


//-----------------------------------------------------------------

// Задание 7.5

function uniqueSort(nums) {
  const uniqueNumbersSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    uniqueNumbersSet.add(nums[i]);
  }

  const uniqueNumbersArray = [];
  for (let num of uniqueNumbersSet) {
    uniqueNumbersArray.push(num);
  }
  uniqueNumbersArray.sort(function (a, b) {
    return a - b;
  });
  return uniqueNumbersArray;
}

const numbers = [5, 2, 8, 5, 1, 9, 2, 4, 1];
const uniqueSorted = uniqueSort(numbers);

console.log(uniqueSorted);

//------------------------------------------------------------------
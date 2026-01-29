// Задание 6.1

const word = "Довод";
const lowerWord = word.toLowerCase();

let reversedWord = "";

for (let i = lowerWord.length - 1; i >= 0; i-=1) {
  reversedWord += lowerWord[i];
}

if (lowerWord === reversedWord) {
  console.log(`Слово ${word} является палиндромом`);
} else {
  console.log(`Слово ${word} не является палиндромом`);
}

const word1 = "Сантимент";
const lowerWord1 = word1.toLowerCase();

let reversedWord1 = "";

for (let i = lowerWord.length - 1; i >= 0; i-=1) {
  reversedWord += lowerWord[i];
}

if (lowerWord === reversedWord) {
  console.log(`Слово ${word1} является палиндромом`);
} else {
  console.log(`Слово ${word1} не является палиндромом`);
}
//------------------------------------------------------

// Задание 6.2

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', "don't", 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
const uniqueSet = new Set(arr);
const uniqueArr = Array.from(uniqueSet);
console.log(uniqueArr);

//------------------------------------------------------

// Задание 6.3

const input = prompt("Введите любое число:");
const num = +input;
const resultArray = [];

for (let i = 0; i <= num; i += 1) {
  resultArray.push(i);
}
console.log(resultArray);

//------------------------------------------------------

// Задание 6.4

const size = 3;

for (let i = 0; i < size; i += 1) {
  let row = "";
  for (let j = 0; j < size; j += 1) {
    if ((i + j) % 2 === 0) {
      row += "x ";
    } else {
      row += "o ";
    }
  }
  console.log(row);
}
//------------------------------------------------------

//Задание 6.5

const obj = {
  some: "some",
  dom: "text",
  arr: [1, 2, 3, 4, 5],
  tom: "there",
};

const arrValues = [];

for (const key in obj) {
  const value = obj[key];

  if (Array.isArray(value)) {
    arrValues.push(...value);
  } else {
    arrValues.push(value);
  }
}

console.log(arrValues);

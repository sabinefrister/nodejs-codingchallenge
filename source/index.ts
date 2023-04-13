// notes:
// * You can find task 1 in the task1.ts
//      * it is not working as expected, so I left it out of this file.
// * I run the file in my console using this command: npx ts-node source/index.ts (ts-node should be installed)
// * You can find the endpoint with the solution word in file server.ts. I started it with nodemon.
//      * I haven't had time to add the ssl to the endpoint

const fsNode = require("fs");

const filePath = "clear_smaller.txt";
const file = fsNode.readFileSync(filePath).toString();

function countNumbers(file: string) {
  const fileCharacterArray = file.split("");
  let sumNumbers = 0;

  fileCharacterArray.forEach((character) => {
    const convertedCharacter = Number(character);
    if (!isNaN(convertedCharacter)) {
      sumNumbers += convertedCharacter;
    }
  });
  console.log(
    "The solution for task 2 is the result of the counted numbers: ",
    sumNumbers
  );
  return sumNumbers;
}

function countVowels(file: string) {
  const fileCharacterArray = file.split("");
  let sumVowels = 0;

  const vowels = ["a", "e", "i", "o", "u"];

  fileCharacterArray.forEach((character) => {
    if (vowels.includes(character)) {
      if (character === "a") {
        sumVowels += 2;
      } else if (character === "e") {
        sumVowels += 4;
      } else if (character === "i") {
        sumVowels += 8;
      } else if (character === "o") {
        sumVowels += 16;
      } else if (character === "u") {
        sumVowels += 32;
      }
    }
  });
  console.log("This is the result of the counted vowels: ", sumVowels);
  return sumVowels;
}

function findTop10Sentences(file: string) {
  const sentenceArray = file.split(".");
  // if there where other character like "!" and "?" at the end of a sentence, this could be a solution for that:
  // const sentenceArray = file.split(/[.?!]\s/);

  let sentenceArrayWithLength: number[] = [];
  sentenceArray.forEach((sentence: string) => {
    sentenceArrayWithLength.push(sentence.length);
  });

  const originalSentenceArrayWithLength = [...sentenceArrayWithLength];

  const sortedArrayWithLength = sentenceArrayWithLength
    .sort((a, b) => a - b)
    .reverse();

  const top10Sentences = sortedArrayWithLength.slice(0, 10);
  const top10Indexes: number[] = [];
  top10Sentences.forEach(function (sentence) {
    const index = originalSentenceArrayWithLength.indexOf(sentence);
    top10Indexes.push(index);
  });
  top10Indexes.sort((a, b) => a - b);

  console.log(
    "This is part of the solution for Task 4. The indexes of the longest sentences in this text are the following: ",
    top10Indexes
  );
}

const countedNumbers = countNumbers(file);
const countedVowels = countVowels(file);
const sumCountedNumbersAndVowels = countedNumbers + countedVowels;
console.log(
  "The solution for task 3 is the sum of numbers and vowels: ",
  sumCountedNumbersAndVowels
);

findTop10Sentences(file);

// My solution is the following, which is probably wrong, because in ASCII it doesn't make sense: [26, 29, 61,  64,  96, 99, 99, 99, 169, 239]
// It probably is REDMEDICAL, right? :-)

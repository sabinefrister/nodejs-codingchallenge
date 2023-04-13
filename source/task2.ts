const fsNode = require("fs");

const filePath = "clear_smaller.txt";
const file = fsNode.readFileSync(filePath).toString();

function countNumbers(file) {
  const fileCharacterArray = file.split("");
  let sumNumbers = 0;

  fileCharacterArray.forEach((character) => {
    const convertedCharacter = Number(character);
    if (!isNaN(convertedCharacter)) {
      sumNumbers += convertedCharacter;
    }
  });
  console.log("Result Numbers: ", sumNumbers);
}

countNumbers(file);

function countVowels(file) {
  const fileCharacterArray = file.split("");
  let sumVowels = 0;

  //   a = 2
  //   e = 4
  //   i = 8
  //   o = 16
  //   u = 32

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
  console.log("Result Vowels: ", sumVowels);
}

countVowels(file);

// TODO count sumVowels and sumNumbers together!!!

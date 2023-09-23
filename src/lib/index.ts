export const shuffleWord = (
  word: string,
  itteration: number,
  lettersArray: string[]
): string => {
  return word
    .split("")
    .map((word, index) => {
      if (index < itteration) {
        return word;
      } else {
        let numberInArray = Math.floor(Math.random() * lettersArray.length);
        return lettersArray[numberInArray];
      }
    })
    .join("");
};

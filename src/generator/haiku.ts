import dict from './passwords.json';

const getWord = (syllables: number): string => {
  const words = dict[syllables as unknown as keyof typeof dict];
  const word = words[Math.floor(Math.random() * words.length)];
  // if (!word) {
  //   getWord(syllables);
  // }
  // console.log('word', word);
  return word;
};

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getLine = (syllables: number): Array<string> => {
  let syllablesAdded = 0;
  const words = [];

  while (syllablesAdded < syllables) {
    const syllableRand = getRandomInt(1, Math.min(syllables - syllablesAdded, 5));
    syllablesAdded += syllableRand;
    let word = getWord(syllableRand);
    // let counter = 0; // shouldn't be needed but just in case
    // while (!word && counter < 200) {
    //   console.log('word', syllableRand, word);
    //   word = getWord(syllableRand);
    //   counter ++;
    // }
    if (!word) {
      word = getWord(syllableRand);
    }
    words.push(word);
  }
  return words;
};

const getHaiku = (): Array<string> => {
  const lines = [getLine(5), getLine(7), getLine(5)];
  const formattedLines: string[] = [];
  lines.forEach((line) => {
    const words = line.join(' ');
    formattedLines.push(words.charAt(0).toUpperCase() + words.slice(1));
  });
  // console.log({ formattedLines });
  return formattedLines;
};

export default getHaiku;

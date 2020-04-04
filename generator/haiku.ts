import zlib from 'zlib';
import dict from './passwords.json';

interface Haiku extends Array<string> {
  [index: number]: string;
}

const getWord = (syllables: number): string => {
  const words = dict[syllables as unknown as keyof typeof dict];
  const word = words[Math.floor(Math.random() * words.length)];

  return word;
};

const getRandomInt = (min: number, max: number): number => {
  const mmin = Math.ceil(min);
  const mmax = Math.floor(max);
  return Math.floor(Math.random() * (mmax - mmin + 1)) + min;
};

const getLine = (syllables: number): {syllables: number; word: string}[] => {
  let syllablesAdded = 0;
  const line = [];

  while (syllablesAdded < syllables) {
    const syllableRand = getRandomInt(1, Math.min(syllables - syllablesAdded, 5));
    syllablesAdded += syllableRand;
    let word = getWord(syllableRand);
    if (!word) {
      word = getWord(syllableRand);
    }
    line.push({ syllables: syllableRand, word });
  }
  return line;
};

const getHaiku = (lineShape = [5, 7, 5]): Haiku => {
  const textLines: string[][] = [];
  // const shareLines = [];
  lineShape.forEach((lineSyllables) => {
    const line = getLine(lineSyllables);
    const textWords: string[] = [];
    // const shareWords = []
    // console.log({syllable, line});
    // linesText.push(word);
    // shareData[syllables] = [];
    line.forEach(({ word }) => {
      // console.log(syllable);
      // console.log('word', word);
      // linesText.push(word);
      textWords.push(word);
      // shareWords.push([syllables, dict[syllables].indexOf(word)]);
    });
    textLines.push(textWords);
    // shareLines.push(shareWords);
  });
  // console.log({textLines, shareLines});
  const formattedLines: string[] = [];
  textLines.forEach((line) => {
    const words = line.join(' ');
    formattedLines.push(words.charAt(0).toUpperCase() + words.slice(1));
  });
  // console.log({ formattedLines });


  return formattedLines;
};

const getShareSlug = (haiku: Haiku): string => {
  const compressed = zlib.deflateSync(haiku.toString()).toString('base64');
  const path = encodeURIComponent(compressed);
  // const url = (process.env.NODE_ENV === 'development') ? `http://localhost:3000/h/${path}` : `http://localhost:3000/h/${path}`;
  return path;
};

const getHaikuFromShareSlug = (slug: string): Haiku => {
  const decompressed = zlib.inflateSync(Buffer.from(slug, 'base64')).toString();
  // console.log('decomp', decompressed);
  return decompressed.split('\n');
};

export { getHaiku, getShareSlug, getHaikuFromShareSlug };
export type { Haiku };

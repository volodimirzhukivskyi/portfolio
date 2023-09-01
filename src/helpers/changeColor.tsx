import RandomColorItem from "../components/RandomColorItem/RamdomColorItem";

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const getColorComponent = (word: string, splitVal = '') => {
  const splWord = word.split(splitVal);
 return splWord.map((letter) => <RandomColorItem>{letter}</RandomColorItem>);
};

import { TSong } from '../types';

export const getRandomTracks = (
  arrayLength: number,
  data: TSong[],
): TSong[] => {
  const itemsArray: TSong[] = [];

  while (itemsArray.length < arrayLength) {
    const randomTrack = getRandomTrack(data);

    if (!itemsArray.includes(randomTrack)) {
      itemsArray.push(randomTrack);
    }
  }

  return itemsArray;
};

const getRandomTrack = (data: TSong[]): TSong => {
  const item = data[Math.floor(Math.random() * data.length)];
  return item;
};

export default getRandomTracks;

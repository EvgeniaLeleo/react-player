import { Track } from '../types';

export const getRandomTracks = (
  arrayLength: number,
  data: Track[],
): Track[] => {
  const itemsArray: Track[] = [];

  while (itemsArray.length < arrayLength) {
    const randomTrack = getRandomTrack(data);

    if (!itemsArray.includes(randomTrack)) {
      itemsArray.push(randomTrack);
    }
  }

  return itemsArray;
};

const getRandomTrack = (data: Track[]): Track => {
  const item = data[Math.floor(Math.random() * data.length)];
  return item;
};

export default getRandomTracks;

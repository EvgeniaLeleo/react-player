import { SongType } from '../types';

export const getRandomTracks = (
  arrayLength: number,
  data: SongType[],
): SongType[] => {
  const itemsArray = [];
  for (let i = 0; i < arrayLength; i += 1) {
    itemsArray.push(getRandomTrack(data));
  }
  return itemsArray;
};

const getRandomTrack = (data: SongType[]): SongType => {
  const item = data[Math.floor(Math.random() * data.length)];
  return item;
};

export default getRandomTracks;

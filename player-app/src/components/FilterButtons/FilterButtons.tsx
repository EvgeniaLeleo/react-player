import { cn } from '@bem-react/classname';
import { Box } from '@mui/material';
import { FC } from 'react';
import { FilterButton } from '../FilterButton/FilterButton';
import { TEXT } from '../../constants';
import { useAppSelector } from '../../hook';
import { TLanguages } from '../../types';

import './FilterButtons.css';

const cnFilterButtons = cn('FilterButtons');

type FilterButtonsProps = { lang: TLanguages; textColor: string };

export const FilterButtons: FC<FilterButtonsProps> = ({ lang, textColor }) => {
  const checkedArtists = useAppSelector((state) => state.sortedArrays.artists);
  const checkedYears = useAppSelector((state) => state.sortedArrays.years);
  const checkedGenres = useAppSelector((state) => state.sortedArrays.genres);

  return (
    <Box className={cnFilterButtons('Filters')} style={{ color: textColor }}>
      <span className={cnFilterButtons('Filters-Text')}>
        {TEXT.search.searchBy[lang]}
      </span>
      <FilterButton
        buttonName="checkedArtists"
        buttonText={TEXT.search.artist[lang]}
        rows={3}
        checkItems={checkedArtists}
      ></FilterButton>
      <FilterButton
        buttonName="checkedYears"
        buttonText={TEXT.search.release[lang]}
        rows={3}
        checkItems={checkedYears}
      ></FilterButton>
      <FilterButton
        buttonName="checkedGenres"
        buttonText={TEXT.search.genre[lang]}
        rows={2}
        checkItems={checkedGenres}
      ></FilterButton>
    </Box>
  );
};

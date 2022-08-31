import { cn } from '@bem-react/classname';
import { Box } from '@mui/material';
import { FC } from 'react';
import { FilterButton } from '../../../components/FilterButton/FilterButton';
import { text } from '../../../constants';
import { TLanguages } from '../../../types';

import './FilterButtons.css';

const cnFilterButtons = cn('FilterButtons');

type FilterButtonsProps = { lang: TLanguages; textColor: string };

export const FilterButtons: FC<FilterButtonsProps> = ({ lang, textColor }) => {
  return (
    <Box className={cnFilterButtons('Filters')} style={{ color: textColor }}>
      <span className={cnFilterButtons('Filters-Text')}>
        {text.search.searchBy[lang]}
      </span>
      <FilterButton
        buttonText={text.search.artist[lang]}
        rows={3}
        checkItems={
          JSON.parse(localStorage.getItem('sortedArtistsArray') || '[]') || []
        }
      ></FilterButton>
      <FilterButton
        buttonText={text.search.release[lang]}
        rows={2}
        checkItems={
          JSON.parse(localStorage.getItem('sortedYearsArray') || '[]') || []
        }
      ></FilterButton>
      <FilterButton
        buttonText={text.search.genre[lang]}
        rows={1}
        checkItems={
          JSON.parse(localStorage.getItem('sortedGenreArray') || '[]') || []
        }
      ></FilterButton>
    </Box>
  );
};

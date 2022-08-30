import { cn } from '@bem-react/classname';
import { Box } from '@mui/material';
import { FC } from 'react';
import { FilterButton } from '../../../components/FilterButton/FilterButton';
import {
  filterItems1,
  filterItems2,
  filterItems3,
  text,
} from '../../../constants';
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
        checkItems={filterItems1}
      ></FilterButton>
      <FilterButton
        buttonText={text.search.release[lang]}
        checkItems={filterItems2}
      ></FilterButton>
      <FilterButton
        buttonText={text.search.genre[lang]}
        checkItems={filterItems3}
      ></FilterButton>
    </Box>
  );
};

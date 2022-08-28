import { styled } from '@mui/material';
import { COLOR_DARK, COLOR_HOVER } from '../../constants';

// const bgColor = useAppSelector((state) => state.colorTheme.bgColor);

// localStorage.setItem('textColor', textColor);

export const SpanChangeColor = styled('span')`
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${COLOR_HOVER};
  }

  &:active {
    color: ${COLOR_DARK};
  }
`;

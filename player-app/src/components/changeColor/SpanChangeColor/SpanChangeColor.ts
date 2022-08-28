import { styled } from '@mui/material';

export const SpanChangeColor = styled('span')<{
  colorHover: string;
  colorActive: string;
}>`
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${(p) => p.colorHover};
  }

  &:active {
    color: ${(p) => p.colorActive};
  }
`;

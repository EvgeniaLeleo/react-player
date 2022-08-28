import { styled } from '@mui/material';

export const DivChangeColor = styled('div')<{
  color?: string;
  colorHover: string;
  colorActive: string;
}>`
  color: ${(p) => p.color};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${(p) => p.colorHover};
  }

  &:active {
    color: ${(p) => p.colorActive};
  }
`;

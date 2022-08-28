import { styled } from '@mui/material';

export const ButtonChangeColor = styled('button')<{
  color: string;
  colorHover: string;
  colorActive: string;
  borderColor: string;
}>`
  color: ${(p) => p.color};
  border-color: ${(p) => p.color};

  &:hover {
    border-color: ${(p) => p.colorHover};
    color: ${(p) => p.colorHover};
  }

  &:active {
    border-color: ${(p) => p.colorActive};
    color: ${(p) => p.colorActive};
  }
`;

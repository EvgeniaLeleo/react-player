import { styled } from '@mui/material'

export const PlayerWrapper = styled('div')<{
  progressсolor: string
}>`
  .rhap_progress-filled,
  .rhap_volume-bar {
    background-color: ${(p) => p.progressсolor};
  }
`

export const PlayerControlsWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 25px;
  .css-78trlr-MuiButtonBase-root-MuiIconButton-root {
    color: rgb(255 2 2 / 55%);
  }
`

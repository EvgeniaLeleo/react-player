import { FC } from 'react'
import { TextField } from '@mui/material'

import './Input.css'

type Props = {
  inputPlaceholder: 'Логин' | 'Пароль' | 'Повторите пароль'
  marginBottom: string
  inputType: string
}

export const Input: FC<Props> = ({
  inputPlaceholder,
  inputType,
  marginBottom,
}) => {
  return (
    <TextField
      fullWidth
      label={inputPlaceholder}
      type={inputType}
      variant="standard"
      sx={{ marginBottom: marginBottom }}
    />
  )
}

import { RootState } from '..'

export const textColorSelector = (state: RootState) =>
  state.colorTheme.textColor

export const decorativeColorSelector = (state: RootState) =>
  state.colorTheme.decorativeColor

export const bgColorSelector = (state: RootState) => state.colorTheme.bgColor

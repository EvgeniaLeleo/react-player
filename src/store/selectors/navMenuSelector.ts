import { RootState } from '..'

export const navMenuSelector = (state: RootState) => state.navMenu.isOpen

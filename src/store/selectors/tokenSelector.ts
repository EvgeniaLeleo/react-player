import { RootState } from '..'

export const accessTokenSelector = (state: RootState) => state.token.access

export const refreshTokenSelector = (state: RootState) => state.token.refresh

export const tokensSelector = (state: RootState) => state.token

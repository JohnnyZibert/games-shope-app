import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import gameDetailsReducer from './getGameDetails/GameDetailsSlice'
import gamesReducer from './getGames/GamesSlice'
import searchGameSlice from './searchGame/SearchGameSlice'

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    gameDetails: gameDetailsReducer,
    searchGame: searchGameSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

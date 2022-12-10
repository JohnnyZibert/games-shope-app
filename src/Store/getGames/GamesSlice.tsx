import { createSlice } from '@reduxjs/toolkit'

import { IGamesData } from '../../types'
import { getGamesRequest } from './GamesRequest'

const initialState: IGamesData = {
  popular: [],
  newGames: [],
  upcoming: [],
  isLoad: true,
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGamesRequest.pending, (state) => {
      state.isLoad = true
    })
    builder.addCase(getGamesRequest.fulfilled, (state, { payload }) => {
      state.popular = payload.popular.results
      state.newGames = payload.newGames.results
      state.upcoming = payload.upcoming.results
      state.isLoad = false
    })
    builder.addCase(getGamesRequest.rejected, (state) => {
      state.isLoad = true
    })
  },
})

// export const {} = gamesSlice.actions

export default gamesSlice.reducer

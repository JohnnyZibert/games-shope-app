import { createSlice } from '@reduxjs/toolkit'

import { IGamesData } from '../../types'
import { getGamesRequest } from './GamesRequest'

const initialState: IGamesData = {
  popular: [],
  newGames: [],
  upcoming: [],
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getGamesRequest.pending, (state) => {})
    builder.addCase(getGamesRequest.fulfilled, (state, { payload }) => {
      state.popular = payload.popular.results
      state.newGames = payload.newGames.results
      state.upcoming = payload.upcoming.results
    })
    // builder.addCase(getGamesRequest.rejected, (state) => {})
  },
})

// export const {} = gamesSlice.actions

export default gamesSlice.reducer

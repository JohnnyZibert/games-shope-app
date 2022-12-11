import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IFetchGameData, IGamesData } from '../../types'
import { getGamesRequest } from './GamesRequest'

const initialState: IGamesData = {
  results: {
    popular: [],
    newGames: [],
    upcoming: [],
  },
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
    builder.addCase(
      getGamesRequest.fulfilled,
      (state, { payload }: PayloadAction<IFetchGameData>) => {
        state.results.popular = payload.popular
        state.results.newGames = payload.newGames
        state.results.upcoming = payload.upcoming
        state.isLoad = false
      }
    )
    builder.addCase(getGamesRequest.rejected, (state) => {
      state.isLoad = true
    })
  },
})

// export const {} = gamesSlice.actions

export default gamesSlice.reducer

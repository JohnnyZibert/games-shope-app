import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ISearch, ISearchGameData } from '../../types'
import { searchGameRequest } from './SearchGameRequest'

const initialState: ISearch = {
  results: {
    searchGames: [],
  },
  isLoading: true,
}

const searchGameSlice = createSlice({
  name: 'searchGameSlice',
  initialState,
  reducers: {
    clearGames: (state, { payload }) => {
      state.results.searchGames = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchGameRequest.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      searchGameRequest.fulfilled,
      (state, { payload }: PayloadAction<ISearchGameData>) => {
        state.results.searchGames = payload.searchGames
        state.isLoading = false
      }
    )
    builder.addCase(searchGameRequest.rejected, (state) => {
      state.isLoading = true
    })
  },
})

export const { clearGames } = searchGameSlice.actions

export default searchGameSlice.reducer

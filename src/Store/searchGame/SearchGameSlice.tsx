import { createSlice } from '@reduxjs/toolkit'

import { searchGameRequest } from './SearchGameRequest'

export interface ISearch {
  searchGames: []
  isLoading: boolean
}

const initialState: ISearch = {
  searchGames: [],
  isLoading: true,
}

const searchGameSlice = createSlice({
  name: 'searchGameSlice',
  initialState,
  reducers: {
    clearGames: (state, { payload }) => {
      state.searchGames = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchGameRequest.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(searchGameRequest.fulfilled, (state, { payload }) => {
      state.searchGames = payload.results
      state.isLoading = false
    })
    builder.addCase(searchGameRequest.rejected, (state) => {
      state.isLoading = true
    })
  },
})

export const { clearGames } = searchGameSlice.actions

export default searchGameSlice.reducer

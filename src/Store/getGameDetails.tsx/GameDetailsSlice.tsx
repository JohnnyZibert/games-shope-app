import { createSlice } from '@reduxjs/toolkit'

import { getGameDetailsRequest } from './GameDetailsRequest'

export interface IGame {
  name: string
  rating: string
  background_image: string
  description_raw: string
  platforms: IPlatform[]
}
export interface IPlatform {
  platform: {
    id: string
    name: string
  }
}
// export interface IScreenshotsResults {
//
// }
export interface IGameDetails {
  game: IGame
  screenshots: {
    results: {
      id: string
      image: string
    }[]
  }
  isLoading: boolean
}

const initialState: IGameDetails = {
  game: {
    name: '',
    rating: '',
    background_image: '',
    description_raw: '',
    platforms: [],
  },
  screenshots: { results: [] },
  isLoading: false,
}

const gameDetailsSlice = createSlice({
  name: 'gameDetailsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGameDetailsRequest.pending, (state) => {
      state.isLoading = false
    })
    builder.addCase(getGameDetailsRequest.fulfilled, (state, { payload }) => {
      state.game = payload.game
      state.screenshots = payload.screenshots
      state.isLoading = true
    })
    builder.addCase(getGameDetailsRequest.rejected, (state) => {
      state.isLoading = false
    })
  },
})

// export const {} = gamesSlice.actions

export default gameDetailsSlice.reducer

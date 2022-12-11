import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  IGameDetailContent,
  IGameDetails,
  IScreenshotsResults,
} from '../../types'
import { getGameDetailsRequest } from './GameDetailsRequest'

export interface IGameDetailsState {
  game: IGameDetailContent
  screenshots: {
    results: IScreenshotsResults[]
  }
  isLoading: boolean
}

const initialState: IGameDetailsState = {
  game: {
    name: '',
    rating: 0,
    background_image: '',
    description_raw: '',
    platforms: [],
  },
  screenshots: { results: [] },
  isLoading: true,
}

const gameDetailsSlice = createSlice({
  name: 'gameDetailsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGameDetailsRequest.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      getGameDetailsRequest.fulfilled,
      (state, { payload }: PayloadAction<IGameDetails>) => {
        state.game = payload.game
        state.screenshots = payload.screenshots
        state.isLoading = false
      }
    )
    builder.addCase(getGameDetailsRequest.rejected, (state) => {
      state.isLoading = true
    })
  },
})

// export const {} = gamesSlice.actions

export default gameDetailsSlice.reducer

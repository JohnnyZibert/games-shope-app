import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { gameDetailsUrl, gameScreenshotUrl } from '../../api'

export const getGameDetailsRequest = createAsyncThunk(
  'gameDetailsSlice/getGameDetailsRequest',
  async (id: number) => {
    const detailData = await axios.get(gameDetailsUrl(id))
    const screenshotsData = await axios.get(gameScreenshotUrl(id))
    return {
      game: detailData.data,
      screenshots: screenshotsData.data,
    }
  }
)

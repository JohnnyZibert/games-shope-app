import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { searchGameUrl } from '../../api'

export const searchGameRequest = createAsyncThunk(
  'searchGameSlice/searchGameRequest',
  async (textInput: string) => {
    const searchData = await axios.get(searchGameUrl(textInput))
    return searchData.data
  }
)

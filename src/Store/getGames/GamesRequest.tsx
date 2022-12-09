import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { newGamesUrl, popularGamesUrl, upcomingGamesUrl } from '../../api'

export const getGamesRequest = createAsyncThunk(
  'games/getGamesRequest',
  async () => {
    const popularGameData = await axios.get(popularGamesUrl())
    const newGamesData = await axios.get(newGamesUrl())
    const upcomingGameData = await axios.get(upcomingGamesUrl())
    return {
      popular: popularGameData.data,
      newGames: newGamesData.data,
      upcoming: upcomingGameData.data,
    }
  }
)

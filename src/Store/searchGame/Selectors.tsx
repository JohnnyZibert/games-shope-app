import { RootState } from '../store'

export const searchGameSelector = (state: RootState) => state.searchGame.results

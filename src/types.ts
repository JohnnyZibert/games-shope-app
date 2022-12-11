//game data
export interface IFetchGameData {
  popular: []
  newGames: []
  upcoming: []
}

export interface IGamesData {
  results: IFetchGameData
  isLoad: boolean
}
//card game
export interface IGame {
  name: string
  id?: string
  released: string
  background_image: string
}

//game details
export interface IGameDetails {
  game: IGameDetailContent
  screenshots: {
    results: IScreenshotsResults[]
  }
}

export interface IPlatform {
  platform: {
    id: string
    name: string
  }
}
export interface IScreenshotsResults {
  id: string
  image: string
}
export interface IGameDetailContent {
  name: string
  rating: number
  background_image: string
  description_raw: string
  platforms: IPlatform[]
}

//search data
export interface ISearchGameData {
  searchGames: []
}
export interface ISearch {
  results: ISearchGameData
  isLoading: boolean
}

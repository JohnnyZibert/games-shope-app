export interface IGamesData {
  popular: []
  newGames: []
  upcoming: []
}

export interface IGame {
  name: string
  id?: number
  released: string
  background_image: string
}

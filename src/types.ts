export interface IGamesData {
  popular: []
  newGames: []
  upcoming: []
}

export interface IGame {
  name: string
  id?: string
  released: string
  background_image: string
}

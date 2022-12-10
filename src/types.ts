export interface IGamesData {
  popular: []
  newGames: []
  upcoming: []
  isLoad: boolean
}
export interface IGame {
  name: string
  id?: string
  released: string
  background_image: string
}

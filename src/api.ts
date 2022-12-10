const base_url = `https://api.rawg.io/api/`
export const api_key = '1fcca65ebc864371bd741c993d292941&dates'

const getCurrenMonth = () => {
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}

const getCurrenDay = () => {
  const day = new Date().getDay()
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrenMonth()
const currentDay = getCurrenDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

const popular_games = `games?key=${api_key}${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?key=${api_key}${currentDate}${nextYear}&ordering=-added&page_size=10`
const newGames = `games?key=${api_key}${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesUrl = () => `${base_url}${popular_games}`
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`
export const newGamesUrl = () => `${base_url}${newGames}`
export const gameDetailsUrl = (id: string) =>
  `${base_url}games/${id}?key=${api_key}`
export const gameScreenshotUrl = (id: string) =>
  `${base_url}games/${id}/screenshots?key=${api_key}`

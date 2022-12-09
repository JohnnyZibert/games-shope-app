import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { GameCardBlocks } from '../Components/GameCardBloks'
import { getGamesRequest } from '../Store/getGames/GamesRequest'
import { AppDispatch, RootState } from '../Store/store'
import { GameDetails } from './GameDetails'

export const Home = () => {
  const dispatch: AppDispatch = useDispatch()
  const location = useLocation()
  const upcomingGame = useSelector((state: RootState) => state.games.upcoming)
  const newGame = useSelector((state: RootState) => state.games.newGames)
  const popularGame = useSelector((state: RootState) => state.games.popular)

  useEffect(() => {
    dispatch(getGamesRequest())
  }, [dispatch])

  return (
    <GamesList>
      {location.pathname[2] && <GameDetails />}
      <GameCardBlocks games={upcomingGame} blockName={'Upcoming Game'} />
      <GameCardBlocks games={popularGame} blockName={'Popular Games'} />
      <GameCardBlocks games={newGame} blockName={'New Games'} />
    </GamesList>
  )
}

const GamesList = styled(motion.div)`
  padding: 0 5rem;
  h1 {
    padding: 2rem 0;
  }
  h2 {
    padding: 5rem 0;
  }
`

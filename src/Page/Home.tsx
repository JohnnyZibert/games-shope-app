import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
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
  const { upcoming, popular, newGames } = useSelector(
    (state: RootState) => state.games
  )
  const { searchGames } = useSelector((state: RootState) => state.searchGame)

  const pathId = location.pathname.split('/')[2]

  useEffect(() => {
    dispatch(getGamesRequest())
  }, [dispatch])

  return (
    <GamesList>
      <AnimateSharedLayout
        // @ts-ignore
        type="crossfade"
      >
        <AnimatePresence>
          {pathId && <GameDetails pathId={pathId} />}
        </AnimatePresence>
        {searchGames.length > 0 && (
          <GameCardBlocks games={searchGames} blockName={'Searched Game'} />
        )}
        <GameCardBlocks games={upcoming} blockName={'Upcoming Game'} />
        <GameCardBlocks games={popular} blockName={'Popular Games'} />
        <GameCardBlocks games={newGames} blockName={'New Games'} />
      </AnimateSharedLayout>
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

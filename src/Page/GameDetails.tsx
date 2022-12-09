import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IPlatform } from '../Store/getGameDetails.tsx/GameDetailsSlice'
import { getGamesRequest } from '../Store/getGames/GamesRequest'
import { RootState, useAppDispatch } from '../Store/store'

export const GameDetails = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getGamesRequest())
  }, [dispatch])
  const { game, screenshots, isLoading } = useSelector(
    (state: RootState) => state.gameDetails
  )
  return (
    <CardShadow>
      <Detail>
        <Stats>
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <Info>
            <h3>Platforms:</h3>
            <Platforms>
              {isLoading &&
                game.platforms.map((data: IPlatform) => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <img src={game.background_image} alt="image" />
        </Media>
        <Description>{game.description_raw}</Description>
        <div className="gallery">
          {isLoading &&
            screenshots.results.map((screen: any) => (
              <img src={screen.image} alt="image" key={screen.id} />
            ))}
        </div>
      </Detail>
    </CardShadow>
  )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Info = styled(motion.div)`
  text-align: center;
`
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  h3 {
    padding: 0 0.5rem;
  }
  img {
    margin-left: 3rem;
  }
`
const Media = styled(motion.div)`
  img {
    width: 100%;
  }
`
const Description = styled(motion.div)`
  margin: 5rem 0;
`

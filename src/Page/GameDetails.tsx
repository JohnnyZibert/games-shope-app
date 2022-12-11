import { motion } from 'framer-motion'
import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import apple from '../assets/images/apple.svg'
import gamePade from '../assets/images/gamepad.svg'
import { image } from '../assets/images/images'
import nintendo from '../assets/images/nintendo.svg'
import playstation from '../assets/images/playstation.svg'
import steam from '../assets/images/steam.svg'
import xbox from '../assets/images/xbox.svg'
import { gameDetailsSelector } from '../Store/getGameDetails/Selectors'
import { getGamesRequest } from '../Store/getGames/GamesRequest'
import { useAppDispatch } from '../Store/store'
import { IPlatform, IScreenshotsResults } from '../types'

interface IProps {
  pathId: string
}

export const GameDetails: FC<IProps> = ({ pathId }) => {
  const navigate = useNavigate()

  const { game, screenshots, isLoading } = useSelector(gameDetailsSelector)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getGamesRequest())
  }, [dispatch])

  const exitDetailHandler = (event: MouseEvent) => {
    const element = event.target
    document.body.style.overflow = ''
    navigate('/')
  }

  const gamePlatform = (platform: string) => {
    switch (platform) {
      case 'Xbox One':
        return xbox
      case 'Playstation 4':
        return playstation
      case 'PC':
        return steam
      case 'iOS':
        return apple
      case 'Nintendo Switch':
        return nintendo
      default:
        return gamePade
    }
  }
  const getStars = () => {
    const stars = []
    const rating = Math.floor(game.rating)
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <img src={image.star_full} key={i} alt="image.star_full"></img>
        )
      } else {
        stars.push(
          <img src={image.star_empty} key={i} alt="image.star_empty"></img>
        )
      }
    }
    return stars
  }

  return (
    <CardShadow
      className="shadow"
      // @ts-ignore
      onClick={exitDetailHandler}
    >
      {!isLoading && (
        <Detail layoutId={pathId}>
          <Stats>
            <div className="rating">
              <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
              <p>Rating: {game.rating}</p>
              {getStars()}
            </div>
            <Info>
              <h3>Platforms:</h3>
              <Platforms>
                {game.platforms.map((data: IPlatform) => (
                  <img
                    alt={data.platform.name}
                    key={data.platform.id}
                    src={gamePlatform(data.platform.name)}
                  />
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <motion.img
              layoutId={`image ${pathId}`}
              src={game.background_image}
              alt="image"
            />
          </Media>
          <Description>{game.description_raw}</Description>
          <div className="gallery">
            {screenshots.results.map((screen: IScreenshotsResults) => (
              <img src={screen.image} alt="image" key={screen.id} />
            ))}
          </div>
        </Detail>
      )}
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
  z-index: 5;
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
  z-index: 10;
  img {
    width: 100%;
  }
`
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
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

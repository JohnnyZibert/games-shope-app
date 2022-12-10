import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { cardGame } from '../animation'
import { getGameDetailsRequest } from '../Store/getGameDetails/GameDetailsRequest'
import { useAppDispatch } from '../Store/store'

interface IProps {
  name?: string
  released?: string
  img?: string
  id?: string
}

export const Game = ({ name, released, img, id }: IProps) => {
  const dispatch = useAppDispatch()
  const loadDetailsHandler = () => {
    if (id) {
      dispatch(getGameDetailsRequest(id))
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <StyledGame
      onClick={loadDetailsHandler}
      layoutId={id}
      variants={cardGame}
      initial="hidden"
      animate="show"
    >
      <Link to={`details-game/${id}`}>
        <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img src={img} alt="games-img" layoutId={`image ${id}`} />
      </Link>
    </StyledGame>
  )
}
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

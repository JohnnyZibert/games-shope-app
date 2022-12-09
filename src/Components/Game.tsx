import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { getGameDetailsRequest } from '../Store/getGameDetails.tsx/GameDetailsRequest'
import { useAppDispatch } from '../Store/store'

interface IProps {
  name?: string
  released?: string
  img?: string
  id?: number
}

export const Game = ({ name, released, img, id }: IProps) => {
  const dispatch = useAppDispatch()
  const loadDetailsHandler = () => {
    id && dispatch(getGameDetailsRequest(id))
  }

  return (
    <StyledGame onClick={loadDetailsHandler}>
      <Link to={`details-game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={img} alt="games-img" />
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

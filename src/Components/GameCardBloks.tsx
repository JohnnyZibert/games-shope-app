import { motion } from 'framer-motion'
import styled from 'styled-components'

import { IGame } from '../types'
import { Game } from './Game'

interface IProps {
  games: []
  blockName: string
}

export const GameCardBlocks = ({ games, blockName }: IProps) => {
  return (
    <>
      <h2>{blockName}</h2>
      <Games>
        {games.map((game: IGame) => (
          <Game
            name={game.name}
            key={game.id}
            released={game.released}
            img={game.background_image}
            id={game.id}
          />
        ))}
      </Games>
    </>
  )
}
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`

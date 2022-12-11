import { motion } from 'framer-motion'
import { FC } from 'react'
import styled from 'styled-components'

import { fadeIn } from '../animation'
import { IGame } from '../types'
import { Game } from './Game'

interface IProps {
  games: []
  blockName: string
}

export const GameCardBlocks: FC<IProps> = ({ games, blockName }) => {
  return (
    <motion.div>
      <h2>{blockName}</h2>
      <Games variants={fadeIn} initial="hidden" animate="show">
        {games.map((game: IGame) => (
          <Game
            name={game.name}
            key={game.id}
            released={game.released}
            background_image={game.background_image}
            id={game.id}
          />
        ))}
      </Games>
    </motion.div>
  )
}
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`

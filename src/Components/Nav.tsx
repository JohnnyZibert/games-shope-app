import { motion } from 'framer-motion'
import { ChangeEvent, MouseEventHandler, useState } from 'react'
import styled from 'styled-components'

import { fadeIn } from '../animation'
import logo from '../assets/images/logo.svg'
import { searchGameRequest } from '../Store/searchGame/SearchGameRequest'
import { clearGames } from '../Store/searchGame/SearchGameSlice'
import { useAppDispatch } from '../Store/store'

export const Nav = () => {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState<string>('')

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInputValue(e.target.value)
  }
  const onClickSearch = (
    e: MouseEvent & MouseEventHandler<HTMLButtonElement>
  ) => {
    e.preventDefault()
    dispatch(searchGameRequest(inputValue))
  }

  const clearSearchedGames = () => {
    dispatch(clearGames([]))
    setInputValue('')
  }

  return (
    <NavStyled variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearchedGames}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input type="text" value={inputValue} onChange={changeHandler} />

        <button
          type="submit"
          // @ts-ignore
          onClick={onClickSearch}
        >
          Search
        </button>
      </form>
    </NavStyled>
  )
}

const NavStyled = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`

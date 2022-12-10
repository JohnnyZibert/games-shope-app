import styled from 'styled-components'

import spin from '../assets/images/spin.gif'

export const Loader = () => {
  return (
    <Spinner>
      <img src={spin} alt="spinner" />
    </Spinner>
  )
}

const Spinner = styled.div`
  width: 8rem;
`

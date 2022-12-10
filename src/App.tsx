import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { GlobalStyle } from './Components/GlobalStyle'
import { Home } from './Page/Home'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        {['/details-game/:id', '/'].map((path) => (
          <Route path={path} element={<Home />} key={path} />
        ))}
      </Routes>
      {/*  <Route path={'/details-game/:id'} element={<GameDetails />} />*/}
    </div>
  )
}

export default App

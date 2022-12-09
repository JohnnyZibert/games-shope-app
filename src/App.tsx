import React from 'react'

import { GlobalStyle } from './Components/GlobalStyle'
import { Home } from './Page/Home'

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Home />
      {/*<Routes>*/}
      {/*  <Route path='/*' element={<Home />} />*/}
      {/*  <Route path={'/details-game/:id'} element={<GameDetails />} />*/}
      {/*</Routes>*/}
    </div>
  )
}

export default App

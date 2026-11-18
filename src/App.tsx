import { BrowserRouter, Route, Routes } from "react-router-dom"
import BattleField from "./pages/BattleField"
import CharacterSelection from "./pages/CharacterSelection"
import Win from "./pages/Win"
import Lose from "./pages/Lose"

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterSelection />} />
          <Route path="/battle" element={<BattleField/>} />
          <Route path="/win" element={<Win/>} />
          <Route path="/lose" element={<Lose/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
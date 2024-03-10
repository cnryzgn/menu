import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import MenuPage from './components/MenuPage/MenuPage'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<MenuPage />} />
      </Routes>
    </Router>
  )
}

export default App

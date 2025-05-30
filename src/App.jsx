
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Story from './pages/Story'
import EventInfo from './pages/EventInfo'
import Photos from './pages/Photos'
import RSVP from './pages/RSVP'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/story' element={<Story />}></Route>
          <Route path='/photos' element={<Photos />}></Route>
          <Route path='/event' element={<EventInfo />}></Route>
          <Route path='/rsvp' element={<RSVP />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App

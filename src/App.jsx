
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Story from './pages/Story'
import EventInfo from './pages/EventInfo'
import Photos from './pages/Photos'
import RSVP from './pages/RSVP'

function App() {
  let Component
  switch(window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/story":
      Component = Story
      break
    case "/photos":
      Component = Photos
      break
    case "/event":
      Component = EventInfo
      break
    case "/rsvp":
      Component = RSVP
      break
  }


  return (
    <>
      <Navbar />
      <div className="container">
        <Component />
      </div>
    </>
  )
}

export default App

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { SocketProvider } from './providers/SocketProvider'
import RoomPage from './pages/Room'

function App() {

  return (
    <>
    <div className="App">
      <SocketProvider>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/room/:roomId" element={<RoomPage/>} />
      </Routes>
      </SocketProvider>
    </div>
    </>
  )
}

export default App

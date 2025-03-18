import { Toaster } from 'sonner'
import './App.css'
import VideoPlayer from './components/player/videoPlayer'

function App() {
 
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <VideoPlayer />
        <Toaster />
      </div>
    </>
  )
}

export default App

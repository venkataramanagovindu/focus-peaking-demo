import './App.css'
import VideoPlayer from './components/player/videoPlayer'
import { Button } from './components/ui/button'

function App() {
 
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Click me</Button>
        <VideoPlayer />
      </div>
    </>
  )
}

export default App

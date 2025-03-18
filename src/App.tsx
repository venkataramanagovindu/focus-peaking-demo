import { Toaster } from 'sonner'
import './App.css'
import VideoPlayer from './components/player/videoPlayer'
import { Card, CardHeader } from "@/components/ui/card";

function App() {
 
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
      <Card className="w-full max-w-lg shadow-lg p-4">
          <CardHeader className="text-center text-xl font-bold">
            Focus Peaking Application
          </CardHeader>
        </Card>
        <VideoPlayer />
        <Toaster />
      </div>
    </>
  )
}

export default App

import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";

export default function FocusPeakingApp() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [focusPeaking, setFocusPeaking] = useState<boolean>(false);
  const [videoReady, setVideoReady] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      if (canvasRef.current && video.videoWidth > 0 && video.videoHeight > 0) {
        canvasRef.current.width = 600;
        canvasRef.current.height = 337.5;
        setVideoReady(true);
      }
    };

    video.addEventListener("loadeddata", handleLoadedData);
    return () => video.removeEventListener("loadeddata", handleLoadedData);
  }, []);

  useEffect(() => {
    if (videoReady) {
      if (focusPeaking) {
        processVideo();
      } else {
        clearCanvas();
      }
    }
  }, [focusPeaking, videoReady]);

  const processVideo = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.videoWidth === 0 || video.videoHeight === 0) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const processFrame = () => {
      if (!focusPeaking) return;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      let frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let data = frame.data;

      for (let i = 0; i < data.length; i += 4) {
        let r = data[i];
        let g = data[i + 1];
        let b = data[i + 2];
        let brightness = (r + g + b) / 3;

        if (brightness > 200) {
          data[i] = 255;
          data[i + 1] = 0;
          data[i + 2] = 0;
        }
      }

      ctx.putImageData(frame, 0, 0);
      requestAnimationFrame(processFrame);
    };

    processFrame();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div >
      <div >
        <video
          ref={videoRef}
          src="/exploreHD-Focus.mp4"
          controls
          onLoadedData={() => setVideoReady(true)}
          style={{ display: focusPeaking ? "none" : "block", width: "100%" , maxWidth: "600px"}}   
        ></video>
        <canvas
          ref={canvasRef}
          style={{ display: focusPeaking ? "block" : "none" }}
        />
      </div>
      <Button
        style={{ marginTop: "16px", padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}
        onClick={() => setFocusPeaking(!focusPeaking)}
        disabled={!videoReady}
      >
        {focusPeaking ? "Disable" : "Enable"} Focus Peaking
      </Button>
    </div>
  );
}

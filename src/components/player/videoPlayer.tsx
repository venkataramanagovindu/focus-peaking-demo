import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner"

export default function FocusPeakingApp() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [focusPeaking, setFocusPeaking] = useState<boolean>(false);
  const [videoReady, setVideoReady] = useState<boolean>(false);
  const [highlightColor, setHighlightColor] = useState<string>("red");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      if (canvasRef.current && video.videoWidth > 0 && video.videoHeight > 0) {
        canvasRef.current.width = 640;
        canvasRef.current.height = 360;
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
  }, [focusPeaking, videoReady, highlightColor]);

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
      
      const colorMap: { [key: string]: [number, number, number] } = {
        red: [255, 0, 0],
        green: [0, 255, 0],
        blue: [0, 0, 255],
        yellow: [255, 255, 0],
      };

      const [rVal, gVal, bVal] = colorMap[highlightColor] || [255, 0, 0];

      for (let i = 0; i < data.length; i += 4) {
        let r = data[i];
        let g = data[i + 1];
        let b = data[i + 2];
        let brightness = (r + g + b) / 3;

        if (brightness > 200) {
          data[i] = rVal;
          data[i + 1] = gVal;
          data[i + 2] = bVal;
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
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", padding: "16px" }}>
      <div style={{ position: "relative", width: "100%", maxWidth: "640px" }}>
        <video
          ref={videoRef}
          src="/exploreHD-Focus.mp4"
          controls
          onLoadedData={() => setVideoReady(true)}
          style={{display: focusPeaking ? "none" : "block" }}
        ></video>
        <canvas
          ref={canvasRef}
          style={{ display: focusPeaking ? "block" : "none" }}
        />
      </div>
      <div style={{ marginTop: "16px" }}>
        <Button onClick={() => setFocusPeaking(!focusPeaking)} disabled={!videoReady} style={{ margin: "4px", padding: "8px 16px", cursor: "pointer" }}>
          {focusPeaking ? "Disable" : "Enable"} Focus Peaking
        </Button>
        <Button className="focus-peaking-btn" onClick={() => setHighlightColor("red")} style={{ background: "red"}} disabled={!focusPeaking} >Red</Button>
        <Button className="focus-peaking-btn" onClick={() => setHighlightColor("green")} style={{ background: "green"}}  disabled={!focusPeaking}>Green</Button>
        <Button className="focus-peaking-btn" onClick={() => setHighlightColor("blue")} style={{background: "blue"}}  disabled={!focusPeaking}>Blue</Button>
        <Button className="focus-peaking-btn" onClick={() => setHighlightColor("yellow")} style={{ background: "yellow", color: "black" }}  disabled={!focusPeaking}>Yellow</Button>
        <Button
      onClick={() =>
        toast("Event has been created", {
          description: "This a react app using vite, tailwindcss, and Shadcn/ui",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Details
    </Button>
      </div>
    </div>
  );
}
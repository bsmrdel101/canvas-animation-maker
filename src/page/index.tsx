import { useEffect } from "react";
import { initCanvas, toggleFramesPlaying, togglePreviewPlaying } from "../scripts/canvas";
import './index.css';


export default function Index() {
  useEffect(() => {
    initCanvas();
  }, []);


  return (
    <>
      <div className="top-bar">
        <label>
          Sprite Sheet
          <input
            type="file"
          />
        </label>
        <button onClick={toggleFramesPlaying}>Test</button>
        <button onClick={togglePreviewPlaying}>Preview</button>
      </div>

      <div style={{ marginTop: '25rem', position: 'relative' }}>
        <canvas id="bg-canvas"></canvas>
        <canvas id="px-canvas"></canvas>
        <canvas id="fr-canvas"></canvas>
        <canvas id="vid-canvas"></canvas>
      </div>
    </>
  );
}

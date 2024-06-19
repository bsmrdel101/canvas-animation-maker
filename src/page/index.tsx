import { useEffect } from "react";
import { initCanvas, toggleAnimPlaying } from "../scripts/canvas";
import './index.css';


export default function Index() {
  useEffect(() => {
    initCanvas();
  }, []);


  return (
    <div>
      <label>
        Sprite Sheet
        <input
          type="file"
        />
      </label>
      <button onClick={toggleAnimPlaying}>Test</button>

      <canvas id="bg-canvas"></canvas>
      <canvas id="px-canvas"></canvas>
      <canvas id="fr-canvas"></canvas>
    </div>
  );
}

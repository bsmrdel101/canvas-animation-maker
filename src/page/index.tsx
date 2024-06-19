import { useEffect } from "react";
import { initCanvas } from "../scripts/canvas";
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

      <canvas id="bg-canvas"></canvas>
      <canvas id="px-canvas"></canvas>
    </div>
  );
}

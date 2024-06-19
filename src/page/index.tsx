import { useEffect } from "react";
import './index.css';
import { initCanvas } from "../scripts/canvas";


export default function Index() {
  useEffect(() => {
    initCanvas();
  }, []);


  return (
    <>
      <canvas id="bg-canvas"></canvas>
      <canvas id="px-canvas"></canvas>
    </>
  );
}

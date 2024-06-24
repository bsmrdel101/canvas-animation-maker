import { useEffect, useState } from "react";
import { initCanvas, playCanvas, toggleFramesPlaying, togglePreviewPlaying } from "../scripts/canvas";
import './index.css';


export default function Index() {
  const initAnim = {
    image: null,
    url: '',
    frameX: 0,
    frameY: 12,
    frameW: 58,
    frameH: 35,
    gap: 20,
    frameCount: 11,
    currentFrame: 1,
    frameDelay: 800,
    previewDelay: 60,
  };
  const [animData, setAnimData] = useState(initAnim);
  const [exported, setExported] = useState(false);

  useEffect(() => {
    initCanvas(animData);
  }, [animData]);

  const exportAnim = () => {
    const output = document.getElementById('output');
    if (exported) {
      setExported(false);
      output.innerHTML = '';
    } else {
      setExported(true);
      output.innerHTML = `<pre>
        class Anim {
          image = ${animData.image};
          startFrameX = ${animData.frameX};
          startFrameY = ${animData.frameY};
          frameX = ${animData.frameX};
          frameY = ${animData.frameY};
          frameW = ${animData.frameW};
          frameH = ${animData.frameH};
          gap = ${animData.gap};
          frameCount = ${animData.frameCount};
          private currentFrame = ${animData.currentFrame};
          frameDelay = ${animData.previewDelay};
          paused = false;
          pixel = true;


          playAnim() {
            if (!this.paused) {
              this.currentFrame += 1;
              this.frameX += this.frameW + this.gap;
              if (this.currentFrame > this.frameCount) {
                this.currentFrame = 1;
                this.frameX = this.startFrameX;
                this.frameY = this.startFrameY;
              }
              this.drawFrame();
              setTimeout(() => window.requestAnimationFrame(this.playAnim), this.previewDelay);
            }
          }

          private drawFrame() {
            if (this.pixel) {
              pxCtx.drawImage(this.image, this.frameX, this.frameY, this.frameW, this.frameH, 0, 0, this.frameW, this.frameH);
            } else {
              smCtx.drawImage(this.image, this.frameX, this.frameY, this.frameW, this.frameH, 0, 0, this.frameW, this.frameH);
            }
          }
        }</pre>`;
    }
  };


  return (
    <>
      <div className="top-bar">
        <label>
          Sprite Sheet
          <input
            type="file"
            onChange={(e) => setAnimData({ ...animData, image: e.target.files[0], url: `/images/animations/UNNAMED_ANIM/${e.target.files[0].name}` })}
          />
        </label>
        <button onClick={playCanvas}>Start</button>
        <button onClick={toggleFramesPlaying}>Test</button>
        <button onClick={togglePreviewPlaying}>Preview</button>
        <button onClick={exportAnim}>Export</button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '1rem' }}>
        <label>
          Url/Filepath
          <input style={{ width: '10rem' }} value={animData.url} onChange={(e) => setAnimData({ ...animData, url: e.target.value })} />
        </label>
        <label>
          Frame X
          <input style={{ width: '5rem' }} type="number" value={animData.frameX} onChange={(e) => setAnimData({ ...animData, frameX: Number(e.target.value) })} />
        </label>
        <label>
          Frame Y
          <input style={{ width: '5rem' }} type="number" value={animData.frameY} onChange={(e) => setAnimData({ ...animData, frameY: Number(e.target.value) })} />
        </label>
        <label>
          Frame W
          <input style={{ width: '5rem' }} type="number" value={animData.frameW} onChange={(e) => setAnimData({ ...animData, frameW: Number(e.target.value) })} />
        </label>
        <label>
          Frame H
          <input style={{ width: '5rem' }} type="number" value={animData.frameH} onChange={(e) => setAnimData({ ...animData, frameH: Number(e.target.value) })} />
        </label>
        <label>
          Gap
          <input style={{ width: '5rem' }} type="number" value={animData.gap} onChange={(e) => setAnimData({ ...animData, gap: Number(e.target.value) })} />
        </label>
        <label>
          Frame Count
          <input style={{ width: '5rem' }} type="number" value={animData.frameCount} onChange={(e) => setAnimData({ ...animData, frameCount: Number(e.target.value) })} />
        </label>
        <label>
          Current Frame
          <input style={{ width: '5rem' }} type="number" value={animData.currentFrame} onChange={(e) => setAnimData({ ...animData, currentFrame: Number(e.target.value) })} />
        </label>
        <label>
          Frame Delay
          <input style={{ width: '5rem' }} type="number" value={animData.frameDelay} onChange={(e) => setAnimData({ ...animData, frameDelay: Number(e.target.value) })} />
        </label>
        <label>
          Preview Delay
          <input style={{ width: '5rem' }} type="number" value={animData.previewDelay} onChange={(e) => setAnimData({ ...animData, previewDelay: Number(e.target.value) })} />
        </label>
      </div>

      <div style={{ marginTop: '25rem', position: 'relative' }}>
        <canvas id="bg-canvas"></canvas>
        <canvas id="px-canvas"></canvas>
        <canvas id="fr-canvas"></canvas>
        <canvas id="vid-canvas"></canvas>
      </div>

      <div id="output"></div>
    </>
  );
}

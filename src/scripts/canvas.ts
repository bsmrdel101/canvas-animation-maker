let pxCanvas: HTMLCanvasElement;
let pxCtx: CanvasRenderingContext2D;
let bgCanvas: HTMLCanvasElement;
let bgCtx: CanvasRenderingContext2D;

export const initCanvas = () => {
  pxCanvas = document.getElementById('px-canvas') as HTMLCanvasElement;
  pxCtx = pxCanvas.getContext('2d') as CanvasRenderingContext2D;
  bgCanvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
  bgCtx = bgCanvas.getContext('2d') as CanvasRenderingContext2D;
  bgCtx.fillStyle = '#40444a';
  window.requestAnimationFrame(drawFrame);
};


const drawFrame = () => {
  bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
  window.requestAnimationFrame(drawFrame);
};

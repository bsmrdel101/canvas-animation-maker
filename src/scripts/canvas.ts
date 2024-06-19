let pxCanvas: HTMLCanvasElement;
let pxCtx: CanvasRenderingContext2D;
let bgCanvas: HTMLCanvasElement;
let bgCtx: CanvasRenderingContext2D;
let frCanvas: HTMLCanvasElement;
let frCtx: CanvasRenderingContext2D;
let image = new Image();
let frameX = 0;
let frameY = 12;
let frameW = 58;
let frameH = 35;
let gap = 20;
let frameCount = 1;
let frameDelay = 800;
let playAnim = false;

export const initCanvas = () => {
  pxCanvas = document.getElementById('px-canvas') as HTMLCanvasElement;
  pxCtx = pxCanvas.getContext('2d') as CanvasRenderingContext2D;
  bgCanvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
  bgCtx = bgCanvas.getContext('2d') as CanvasRenderingContext2D;
  frCanvas = document.getElementById('fr-canvas') as HTMLCanvasElement;
  frCtx = frCanvas.getContext('2d') as CanvasRenderingContext2D;
  bgCtx.fillStyle = '#40444a';
  frCtx.fillStyle = '#b5b4b0';
  changeImage();
  window.requestAnimationFrame(drawFrame);
};

export const toggleAnimPlaying = () => {
  playAnim = !playAnim;
};

export const changeImage = () => {
//   const input = document.querySelector('[type="file"]') as HTMLInputElement;
//   image = input.files[0];
  image.src = '/images/idle.png';
};

const drawFrame = () => {
  bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
  drawSprites();
  drawBoxes();
  setTimeout(() => window.requestAnimationFrame(drawFrame), frameDelay);
};

const drawSprites = () => {
  pxCanvas.width = image.width;
  pxCanvas.height = image.height;
  pxCtx.drawImage(image, 0, 0, pxCanvas.width, pxCanvas.height);
};

const drawBoxes = () => {
  frCanvas.width = image.width;
  frCanvas.height = image.height;

  if (!playAnim) {
    frCtx.strokeRect(frameX, frameY, frameW, frameH);
    return;
  }

  for (let i = 0; i < frameCount; i++) {
    frCtx.strokeRect(frameX, frameY, frameW, frameH);
    frameX += frameW + gap;
  }
};

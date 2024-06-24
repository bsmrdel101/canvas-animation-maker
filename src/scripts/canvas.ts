let pxCanvas: HTMLCanvasElement;
let pxCtx: CanvasRenderingContext2D;
let bgCanvas: HTMLCanvasElement;
let bgCtx: CanvasRenderingContext2D;
let frCanvas: HTMLCanvasElement;
let frCtx: CanvasRenderingContext2D;
let vidCanvas: HTMLCanvasElement;
let vidCtx: CanvasRenderingContext2D;
let image = new Image();
let frameX = 0;
let frameY = 12;
let frameW = 58;
let frameH = 35;
let gap = 20;
let frameCount = 11;
let currentFrame = 1;
let frameDelay = 800;
let previewDelay = 60;
let playFrames = false;
let playPreview = false;
let data = null;

const setAnimData = (animData) => {
  frameX = animData.frameX;
  frameY = animData.frameY;
  frameW = animData.frameW;
  frameH = animData.frameH;
  gap = animData.gap;
  frameCount = animData.frameCount;
  currentFrame = animData.currentFrame;
  frameDelay = animData.frameDelay;
  previewDelay = animData.previewDelay;
  data = animData;
};


export const initCanvas = (animData) => {
  pxCanvas = document.getElementById('px-canvas') as HTMLCanvasElement;
  pxCtx = pxCanvas.getContext('2d') as CanvasRenderingContext2D;
  bgCanvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
  bgCtx = bgCanvas.getContext('2d') as CanvasRenderingContext2D;
  frCanvas = document.getElementById('fr-canvas') as HTMLCanvasElement;
  frCtx = frCanvas.getContext('2d') as CanvasRenderingContext2D;
  vidCanvas = document.getElementById('vid-canvas') as HTMLCanvasElement;
  vidCtx = vidCanvas.getContext('2d') as CanvasRenderingContext2D;
  bgCtx.fillStyle = '#40444a';
  frCtx.fillStyle = '#b5b4b0';
  setAnimData(animData);
  changeImage();
};

export const playCanvas = () => {
  window.requestAnimationFrame(drawFrame);
};

export const toggleFramesPlaying = () => {
  playFrames = !playFrames;
};

export const togglePreviewPlaying = () => {
  playPreview = !playPreview;
};

export const changeImage = () => {
//   image = e.target.files[0];
  image.src = '/images/idle.png';
};

const drawFrame = () => {
  bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
  if (playPreview) {
    pxCtx.clearRect(0, 0, pxCanvas.width, pxCanvas.height);
    frCtx.clearRect(0, 0, frCanvas.width, frCanvas.height);
    drawPreview();
  } else {
    vidCtx.clearRect(0, 0, frCanvas.width, frCanvas.height);
    drawSprites();
    drawBoxes();
  }

  if (playFrames || playPreview) {
    currentFrame += 1;
    frameX += frameW + gap;
  }
  if (currentFrame > frameCount) {
    currentFrame = 1;
    frameX = data.frameX;
    frameY = data.frameY;
  }
  setTimeout(() => window.requestAnimationFrame(drawFrame), playPreview ? previewDelay : frameDelay);
};

const drawSprites = () => {
  pxCanvas.width = image.width;
  pxCanvas.height = image.height;
  pxCtx.drawImage(image, 0, 0, pxCanvas.width, pxCanvas.height);
};

const drawBoxes = () => {
  frCanvas.width = image.width;
  frCanvas.height = image.height;
  frCtx.strokeRect(frameX, frameY, frameW, frameH);
};

const drawPreview = () => {
  vidCanvas.width = frameW;
  vidCanvas.height = frameH;
  vidCtx.drawImage(image, frameX, frameY, frameW, frameH, 0, 0, frameW, frameH);
};

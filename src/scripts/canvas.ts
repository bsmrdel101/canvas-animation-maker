let pxCanvas: HTMLCanvasElement;
let pxCtx: CanvasRenderingContext2D;
let bgCanvas: HTMLCanvasElement;
let bgCtx: CanvasRenderingContext2D;
let image = new Image();

export const initCanvas = () => {
  pxCanvas = document.getElementById('px-canvas') as HTMLCanvasElement;
  pxCtx = pxCanvas.getContext('2d') as CanvasRenderingContext2D;
  bgCanvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
  bgCtx = bgCanvas.getContext('2d') as CanvasRenderingContext2D;
  bgCtx.fillStyle = '#40444a';
  changeImage();
  window.requestAnimationFrame(drawFrame);
};

export const changeImage = () => {
//   const input = document.querySelector('[type="file"]') as HTMLInputElement;
//   image = input.files[0];
  image.src = '/images/idle.png';
};

const drawFrame = () => {
  bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
  drawSprites();
  window.requestAnimationFrame(drawFrame);
};

const drawSprites = () => {
  pxCanvas.width = image.width;
  pxCanvas.height = image.height;
  pxCtx.drawImage(image, 0, 0, pxCanvas.width, pxCanvas.height);
};

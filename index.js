const body = document.querySelector('body')
const canvas = document.createElement('canvas')
body.appendChild(canvas)
const ctx = canvas.getContext('2d')
class CanVas
const init = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.requestAnimationFrame(draw);
}
const draw = () => {
    ctx.fillStyle = 'black';
    let x = 1 + x;
    ctx.fillRect(10, 10, 55, 50);
  
    window.requestAnimationFrame(draw);
}

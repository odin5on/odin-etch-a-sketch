function generateCanvas(x){
  const canvas = document.querySelector('.canvas');
  
  canvas.innerHTML = '';

  for(let i = 0; i<x; i++){
    const row = document.createElement('div');
    row.classList.add('row')
    for(let j = 0; j<x; j++){
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.addEventListener('mouseover', (e) => {
        if(e.buttons == 1){
          e.target.classList.add('black');
        }
      });
      pixel.addEventListener('mousedown', (e) => {
        e.target.classList.add('black');
      })
      row.appendChild(pixel);
    }
    canvas.appendChild(row);
  }
}

function drawPixel(){
  this.classList.add('black');
}
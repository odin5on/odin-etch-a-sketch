function generateCanvas(){
  const canvas = document.querySelector('.canvas');
  
  for(let i = 0; i<16; i++){
    const row = document.createElement('div');
    row.classList.add('row')
    for(let j = 0; j<16; j++){
      const pixel = document.createElement('div');
      // const mouseoverEvent = new Event('mouseover');
      // pixel.dispatchEvent(mouseoverEvent);
      pixel.classList.add('pixel');
      pixel.addEventListener('mouseover', (e) => {
        if(e.buttons == 1){
          e.target.classList.add('black');
        }
      });
      row.appendChild(pixel);
    }
    canvas.appendChild(row);
  }
}

function drawPixel(){
  this.classList.add('black');
}
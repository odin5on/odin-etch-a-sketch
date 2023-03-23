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
          if(document.querySelector('#colors').checked){
            console.log('colorful value selected');
            let backgroundColor = 'rgb(' + (Math.random()*255) + ', ' + Math.random()*255 + ', ' + Math.random()*255+')'
            e.target.style.backgroundColor = backgroundColor;
          } else {
            e.target.classList.add('black');
          }
        }
      });
      pixel.addEventListener('mousedown', (e) => {
        if(document.querySelector('#colors').checked){
          console.log('colorful value selected');
          let backgroundColor = 'rgb(' + (Math.random()*255) + ', ' + Math.random()*255 + ', ' + Math.random()*255+')'
          e.target.style.backgroundColor = backgroundColor;
        } else {
          e.target.classList.add('black');
        }
      })
      row.appendChild(pixel);
    }
    canvas.appendChild(row);
  }
}

function drawPixel(){
  this.classList.add('black');
}
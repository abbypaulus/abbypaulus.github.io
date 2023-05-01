const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
  })
  
c.rect(200,200,200,200);
c.fill(255,00,0);


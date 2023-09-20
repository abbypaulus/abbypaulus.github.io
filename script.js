const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
  })
  
c.rect(200,200,200,200);
c.fill(255,0,0);

var countdown = new Date("June 1,2024 0:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countdown - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = days +'Days' + hours + 'Hours' + minutes + 'Minutes' + seconds + 'Seconds';

    if (distance < 0) {
      clearInterval(x);
      document.getElementById('countdown').innerHTML = 'Expired';
    }

}, 1000);

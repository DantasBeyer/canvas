//the link to my canvas in index.html
const canvas = document.querySelector ('canvas');
const ctx = canvas.getContext ('2d');

//the size of my canvas
canvas.width = 800;
canvas.height = 800;

// ctx.fillRect( x axis , y axis , width , height ); 

//some objects in one array 
/* let defenders =  
let carvajal = ctx.fillRect(50,100,50,50);
pepe = ctx.fillRect(250,100,50,50),
ramos = ctx.fillRect(450,100,50,50),
marcelo = ctx.fillRect(650,100,50,50),
casemiro = ctx.fillRect(350,300,50,50)
 ]; */

 /* Line
 ctx.beginPath();
 ctx.moveTo(100 , 500);
 ctx.lineTo(700,000);
 ctx.lineTo(700,700);
 ctx.strokeStyle = 'white';
 ctx.stroke(); */

//Animation 1 Circle


// loop throught the animate function 
let x = 200;
let y = 200;
let sx = 10; // X speed
let sy = 10; // Y speed
let radius = 30;
function animate () {
    requestAnimationFrame(animate);

    ctx.clearRect(0,0,innerWidth, innerHeight);
    ctx.beginPath();
    ctx.arc ( x, 100, radius,0, Math.PI * 2, false);
    ctx.strokeStyle = 'White';
    ctx.stroke();

    if ( x + radius > innerWidth || x - radius < 0 ){
        sx = -sx;
    }
    
    x += sx;
}

animate();


 
 
 







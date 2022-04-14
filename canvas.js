//the link to my canvas in index.html
const canvas = document.querySelector ('canvas');
const ctx = canvas.getContext ('2d');

//size of my canvas
canvas.width = 800;
canvas.height = 700;

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
function Circle (x, y, spX, spY, radius) {
    this.x = x;
    this.y = y;
    this.spX = spX;
    this.spY = spY;
    this.radius = radius;
    

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
// collision border
    this.updade = function(){
        if( this.x + this.radius > canvas.width || this.x - this.radius < 0){
            this.spX = -this.spX;
        }
        if( this.y + this.radius > canvas.height || this.y - this.radius < 0){
            this.spY = -this.spY;
        }    
        this.x += this.spX;
        this.y += this.spY;

    this.draw();

    }
}
// four cirlces moving randomly throught the canvas - inside the canvas 
let circleArray = [];
for (let i = 0; i < 4; i++){
    let radius = 50; 
    let x = Math.random() * (canvas.width - radius * 2) + radius;
    let y = Math.random() * (canvas.height - radius * 2) + radius;
    let spX = (Math.random() - 0.5) * 10; // X speed
    let spY = (Math.random() - 0.5) * 10; // Y speed
    
    circleArray.push(new Circle (x,y,spX,spY,radius));
    
}

 console.log(circleArray); 

    

// loop throught the animate function 
function animate () {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].updade();
    }

}

animate();


 
 
 







import { snake } from "../../declarations/snake";


const canvas=document.getElementById('game');
const ctx=canvas.getContext('2d');

var background = new Image();
background.src = "./favicon.ico";

// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(background,400,400);   
}
//increase snake size 
class snakePart{
constructor(x, y){
    this.x=x;
    this.y=y;
}

}

let speed=5;
let tileCount=25; 

let tileSize=canvas.clientWidth/tileCount-2;
let headX=10;
let headY=10;
console.log(canvas.clientWidth);
console.log(tileSize);
// array for snake parts
const snakeParts=[];
let tailLength=0;

//initialize the speed of snake
let xvelocity=0;
let yvelocity=0;

//draw apple
let appleX=5;
let appleY=5;

//scores
let score=0;

// create game loop-to continously update screen
function drawGame(){
    changeSnakePosition();
    // game over logic
    let result=isGameOver();
    if(result){// if result is true
        return;
    }
    clearScreen();
    drawBG();
    drawSnake();
    drawApple();
  
    checkCollision()
    drawScore();
    setTimeout(drawGame, 1000/speed);//update screen 7 times a second
}
//Game Over function
function isGameOver(){
    let gameOver=false; 
    //check whether game has started
    if(yvelocity===0 && xvelocity===0){
        //console.log("case 1");
        return false;
    }
    if(headX<0){//if snake hits left wall
        //console.log("case 2");
        gameOver=true;
    }
    else if(headX===tileCount){//if snake hits right wall
        //console.log("case 3");
        gameOver=true;
    }
    else if(headY<0){//if snake hits wall at the top
        //console.log("case 4");
        gameOver=true;
    }
    else if(headY===tileCount){//if snake hits wall at the bottom
        //console.log("case 5");
        gameOver=true;
    }

    //stop game when snake crush to its own body

     for(let i=0; i<snakeParts.length;i++){
         let part=snakeParts[i];
         if(part.x===headX && part.y===headY){//check whether any part of snake is occupying the same space
             gameOver=true;
             break; // to break out of for loop
         }
     }
    

    //display text Game Over
    if(gameOver){
     ctx.fillStyle="white";
     ctx.font="50px verdana";
     ctx.fillText("Game Over! ", canvas.clientWidth/6.5, canvas.clientHeight/2);//position our text in center
    }

    return gameOver;// this will stop execution of drawgame method
}

// score function
function drawScore(){
ctx.fillStyle="white"// set our text color to white
ctx.font="10px verdena"//set font size to 10px of font family verdena
ctx.fillText("Score: " +score, canvas.clientWidth-50,10);// position our score at right hand corner 

}

// clear our screen
 function clearScreen(){

ctx.fillStyle= 'black'// make screen black
ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)// black color start from 0px left, right to canvas width and canvas height

 }
 function drawSnake(){
    
    ctx.fillStyle="pink";
    //loop through our snakeparts array
    for(let i=0;i<snakeParts.length;i++){
        //draw snake parts
        let part=snakeParts[i]
         ctx.fillRect(part.x *tileCount, part.y *tileCount, tileSize,tileSize)
    }
    //add parts to snake --through push
    snakeParts.push(new snakePart(headX,headY));//put item at the end of list next to the head
    if(snakeParts.length>tailLength){
        snakeParts.shift();//remove furthest item from  snake part if we have more than our tail size

    }
    ctx.fillStyle="magenta";
    ctx.fillRect(headX* tileCount,headY* tileCount, tileSize,tileSize)


 }
 function changeSnakePosition(){
     headX=headX + xvelocity;
     headY=headY+ yvelocity;
     
 }
 function drawApple(){
    //console.log("being called");
     ctx.fillStyle="red";
     
     ctx.fillRect(appleX*tileCount, appleY*tileCount, tileSize, tileSize)
 }
 // check for collision and change apple position
 function checkCollision(){
     if(appleX==headX && appleY==headY){
        console.log("hey");
         appleX=Math.floor(Math.random()*tileCount);
         appleY=Math.floor(Math.random()*tileCount);
         tailLength++;
         score++; //increase our score value

     }
 }
 //add event listener to our body
 //document.body.addEventListener('keydown', keyDown);

 document.body.addEventListener('keydown', (e) => {
  
  const key = e.key;
  const code = e.code;
  console.log(`keydown key: ${key}, code: ${code}`);
  //up
  if(e.code=="ArrowUp"){
    //prevent snake from moving in opposite direcction
    if(yvelocity==1)
    return;
    yvelocity=-1;
    xvelocity=0;
    
}
//down
if(e.code=="ArrowDown"){
    if(yvelocity==-1)
    return;
    yvelocity=1;
    xvelocity=0;
}

//left
if(e.code=="ArrowLeft"){
    if(xvelocity==1)
    return;
    yvelocity=0;
    xvelocity=-1;
}
//right
if(e.code=="ArrowRight"){
    if(xvelocity==-1)
    return;
    yvelocity=0;
    xvelocity=1;
}
    
});

function reloadSnake(){
  window.location.reload();
}
window.reloadSnake = reloadSnake;

function drawBG(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(background,400,400);   
}
window.drawBG = drawBG;

 drawGame(); 
 
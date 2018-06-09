function loadImages(){
    pokemonImage = new Image();
    enemyImage = new Image();
    goalImage = new Image();
    
    pokemonImage.src = 'images/pika.png';
    
    enemyImage.src = 'images/onix.png';
    
    goalImage.src = 'images/ball.png';
    
    
}

function init(){
     canvas = document.getElementById('mycanvas');


     pen =
    canvas.getContext('2d');

     WIDTH = canvas.width;
     HEIGHT = canvas.height;
     GAME_OVER = false;

    pen.fillStyle = "#fcf";
    
    pokemon = {
        x: 0,
        y:HEIGHT/2,
        w:100,
        h:100,
        speed:5,
        moving:false,
    };
    
    goal = {
        x:WIDTH-100,
        y:HEIGHT/2,
        w:100,
        h:100,
    };    
    enemies =[
        {
        x:150,
        y:100,
        w:100,
        h:100,
        speed:5,
        color:"orange"
        },
        {
        x:400,
        y:300,
        w:100,
        h:100,
        speed:-5,
        color:"blue",
        },
        {
        x:550,
        y:200,
        w:100,
        h:100,
        speed:5,
        color:"green",
        }
        
    ];
    
    
    
    document.addEventListener('keydown',function(e){
        if(e.key=="ArrowRight"){
            pokemon.x += pokemon.speed;
        }
        if(e.key=="ArrowLeft"){
            pokemon.x -= pokemon.speed;
        }
        if(e.key=="ArrowUp"){
            pokemon.y -= pokemon.speed;
        }
        if(e.key=="ArrowDown"){
                pokemon.y += pokemon.speed;
        }
        console.log(e);
    });
    
    document.addEventListener('mousedown',function(e){
        //pokemon.x += pokemon.speed;
        pokemon.moving = true;
    });
    document.addEventListener('mouseup',function(e){
        //pokemon.x += pokemon.speed;
        pokemon.moving = false;
    });
    
}
function isColliding(box1,box2){
    
    x_axis = Math.abs(box1.x  - box2.x)<=box1.w;
    
    y_axis = Math.abs(box1.y  - box2.y)<=box1.w;
    
    return x_axis && y_axis;    
}

function draw(){
    //Erase the old screen
    pen.clearRect(0,0,WIDTH,HEIGHT);
    
    //Draw the pokemon
    pen.drawImage(pokemonImage,pokemon.x,pokemon.y,pokemon.w,pokemon.h);
    pen.drawImage(goalImage,goal.x,goal.y,goal.w,goal.h);
   
   for(var i=0;i<enemies.length;i++){
        pen.fillStyle = enemies[i].color;
       pen.drawImage(enemyImage,enemies[i].x,enemies[i].y,enemies[i].w,enemies[i].h); 
   }
    
}
function update(){
    
    for(var i=0;i< enemies.length;i++){
    
        
    enemies[i].y += enemies[i].speed;
    
    if(enemies[i].y>=(HEIGHT-enemies[i].h)||enemies[i].y<=0){
        enemies[i].speed *= -1;
        }
    }
    if(pokemon.moving==true){
        pokemon.x += pokemon.speed;
    }
    if( isColliding(pokemon,goal)){
        alert("You Won");
        startGame();
    }
    enemies.forEach(function(enemy){
        if(isColliding(enemy,pokemon)){
            alert("Game Over");
            GAME_OVER = true;
        } 
    });
}

function render(){
    draw();
    update();
   
   console.log("In Render");
    if(GAME_OVER==false){
        window.requestAnimationFrame(render);
    }
    else{
        startGame();
    }
}

loadImages();
function startGame(){
    init();
    render();
}
startGame();

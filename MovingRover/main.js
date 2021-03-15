canvas = document.getElementById("myCanvas");
ctx = canvas.getContext ("2d");
rover_width = 160;
rover_height = 140;
background_image = "mars.jpg";
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
function add(){
    background_drawing = new Image();
    background_drawing.onload = backgroundrawer;
    background_drawing.src = background_image;

    rover_drawing = new Image();
    rover_drawing.onload = roverdrawer;
    rover_drawing.src = rover_image; 
};

function roverdrawer(){
    ctx.drawImage(rover_drawing, rover_x, rover_y, rover_width, rover_height);
    console.log("roverdrawer");
};
function backgroundrawer() {
    ctx.drawImage(background_drawing, 0, 0, canvas.width, canvas.height);
    console.log("backgroundrawer");
};

window.addEventListener("keydown", myKeydown);
function myKeydown(e) {
    keystroke = e.keyCode;
    console.log(keystroke);
    if(keystroke == '40'){
        down();
        console.log("Down");
    };
    if(keystroke == '38'){
        up();
        console.log("Up");
    };
    if(keystroke == '39'){
        right();
        console.log("Right");
    };
    if(keystroke == '37'){
        left();
        console.log("Left");
    };
};
function down(){
    if(rover_y <= 700){
        rover_y = rover_y + 10;
        console.log("Down Arrow Key x=" + rover_x + " y= " + rover_y);
        roverdrawer();
        backgroundrawer();                
    }; 
};
function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("Up Arrow Key x=" + rover_x + "   y= " + rover_y);
        roverdrawer();
        backgroundrawer();
    };
};
function right(){
    if(rover_x <=840){
        rover_x = rover_x + 10;
        console.log("Right Arrow Key x=" + rover_x + " y= " + rover_y);
        roverdrawer();
        backgroundrawer();
    };
};
function left(){
    if(rover_x >=0){
        rover_x = rover_x - 10;
        console.log("Left Arrow Key x=" + rover_x + " y= " + rover_y);
        roverdrawer();
        backgroundrawer();
    };
};
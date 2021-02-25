var Canvas=new fabric.Canvas("myCanvas");
var block_image_width=30;
var block_image_height=30;
car1_x=10;
car1_y=10;
car1_object="";
car2_x=10;
car2_y=10;
car2_object="";

function player_update()
{
    fabric.Image.fromURL("car1.png", function(Img){
        player_object=Img

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
if(e.shiftKey==true&&keypressed=='80')
{
    console.log("p & shift Keypressed together");
    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;

}

if(e.shiftKey==true&&keypressed=='77')
{
    console.log("m & shift Keypressed together");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if(keypressed=='38'){
    car1_Up();
    console.log("Up")
}
if(keypressed=='40'){
    car1_down();
    console.log("down")
}
if(keypressed=='37'){
    car1_left();
    console.log("left")
}
if(keypressed=='39'){
    car1_right();
    console.log("right")
}
if(keypressed=='65'){
    car2_a();
    console.log("a")
}
if(keypressed=='66'){
    car2_b();
    console.log("b")
}
if(keypressed=='67'){
    car2_c();
    console.log("c")
}
if(keypressed=='68'){
    car2_d();
    console.log("d")
}

}

function Up(){

    if(car1_y >=0){

        car1_y=car1_y-10;
        console.log("when up arrow is pressed, x="+car1_x+",y="+car1_y);
       uploadbacground()
       uploadcar1()
       uploadcar2()
    }
}

function down(){

    if(car1_y <=500){

        car1_y=car1_y+10;
        console.log("when down arrow is pressed, x="+car1_x+",y="+car1_y);
       uploadbacground()
       uploadcar1()
       uploadcar2()
    }
}

function left(){

    if(car1_y >=0){

        car_y=car_y-10;
        console.log("when left arrow is pressed, x="+car1_x+",y="+car1_y);
       uploadbacground()
       uploadcar1()
       uploadcar2()
    }
}

function right(){

    if(car1_y <=500){

        car_y=car_y+10;
        console.log("when right arrow is pressed, x="+car1_x+",y="+car1_y);
       uploadbacground()
       uploadcar1()
       uploadcar2()
    }
}

function a(){

    if(car2_y >=0){

        car2_y=car2_y-10;
        console.log("when a letter is pressed, x="+car2_x+",y="+car2_y);
       uploadbacground()
       uploadcar1()
       uploadcar2()
    }
}

function b(){

    if(car2_y <=500){

        car2_y=car2_y+10;
        console.log("when b letter is pressed, x="+car2_x+",y="+car2_y);
       uploadbacground()
       uploadcar1()
       uploadcar2()
    }
}

function c(){

    if(car2_y >=0){

        car2_y=car2_y-10;
        console.log("when c letter is pressed, x="+car2_x+",y="+car2_y);
       uploadbacground()
       uploadcar1()
       uploadcar2()
    }
}

function d(){

    if(car2_y <=500){

        car2_y=car2_y+10;
        console.log("when d letter is pressed, x="+car2_x+",y="+car2_y);
       uploadbacground()
       uploadcar1()
       uploadcar2()
    }
}
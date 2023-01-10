canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
nasa_images= ["mars.jpg","download-5.jpg", "download-6.jpg", "images-1.jpg" ]
random_number=Math.floor(Math.random()*4)
bg_image=nasa_images[random_number-1]
rover_image="rover.png"
rover_x=10
rover_y=10
rover_width=100
rover_height=100
function add(){
    background_imageTag= new Image()
    background_imageTag.onload=uploadBackground
    background_imageTag.src=bg_image
    rover_imageTag= new Image()
    rover_imageTag.onload=uploadRover
    rover_imageTag.src=rover_image
}
function uploadBackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height)
}
function uploadRover(){
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
keyPressed=e.keyCode
if (keyPressed=="38"){
up()
}
if (keyPressed=="40") {
down()
}
if (keyPressed=="39") {
right()
}
if (keyPressed=="37") {
 left()
}
}
function up(){
    if (rover_y>0){

    
    rover_y=rover_y-10
    uploadBackground()
    uploadRover()
    }
}
function down(){
    if (rover_y<=500){

    
        rover_y=rover_y+10
        uploadBackground()
        uploadRover()
        }
}
function left(){
    if (rover_x>0){

    
        rover_x=rover_x-10
        uploadBackground()
        uploadRover()
        }
}
function right(){
    if (rover_x<=700){

    
        rover_x=rover_x+10
        uploadBackground()
        uploadRover()
        }
}




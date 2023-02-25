let fullScreen=document.getElementById("fullScreen");
let fullImage=document.getElementById("fullImage");

function openFullScreen(photo){
    fullScreen.style.display="flex";
    fullImage.src=photo;
}

function closeFullScreen(){
    fullScreen.style.display="none";
}
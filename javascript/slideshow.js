var img_array = ["./images/silly-little-guy.jpeg", "./images/placeholder2.png"];

var index = 0;

function upindex() {
    index++;
    if (index > img_array.length - 1) {
        index = 0;
    }
    img_change();
}

function downindex() {
    index--;
    if (index < 0) {
        index = img_array.length - 1;
    }
    img_change();
}

function img_change() {
    //from https://www.geeksforgeeks.org/how-to-smoothly-transition-css-background-images-using-jquery/

    var image = new Image(); 
  
    image.src = img_array[index]; 

    image.onload = function () { 
        $("#slideshow").css("background-image",  "url('" + image.src + "')"); 
    };
}

setInterval(upindex, 10000);
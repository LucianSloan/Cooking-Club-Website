var img_array = ["url(../images/silly-little-guy.jpeg)", "url(../images/placeholder2.png)"];

var index = 0;

function upindex() {
    index++;
    if (index > img_array.length()) {
        index = 0;
    }
    img_change();
}

function downindex() {
    index--;
    if (index < 0) {
        index = img_array.length() - 1;
    }
    img_change();
}

function img_change() {
    document.getElementById("slideshow").style.backgroundImage = img_array[index];
}

setInterval(upindex, 10000);
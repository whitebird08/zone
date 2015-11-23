// $(document).ready(function() {
//   console.log("The document is ready!");

var images = [
              "",
               // "http://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Blacksquirrelrev.jpg/250px-Blacksquirrelrev.jpg",
              "./img/testSample.png"
              ];
var clicks = 0;

$(document).ready(start);

function start(){
   $("#image").click(changeImage);
}

function changeImage(){
   clicks++;
   img = images[clicks % images.length];
   $("#image").attr("src", img);
}

// });
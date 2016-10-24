if (hasGetUserMedia()) {
  //Good
} else {
  alert('getUserMedia() is not supported in your browser');
}

//Search for the first file type element founded
var input = document.querySelector('input[type=file]');
//Show image when a file is selected from input form
input.onchange = function() {
  var file = input.files[0]; //Choose the first element of the list o files selected
  //upload(file);
  drawOnCanvas(file);
  Avatar();
  //displayAsImage(file);
  //loadSVG(file);
};

//
function upload(file) {
  var form = new FormData();
      xhr = new XMLHttpRequest();
  form.append('image', file);
  xhr.open('post', 'server.php', true);
  xhr.send(form);
}

//
function drawOnCanvas(file) {
  var reader = new FileReader();
  reader.onload = function(e) { //Event handler
    var dataURL = e.target.result, //Return the element that triggered the event
        c = document.querySelector('canvas'), //Search for the first canvas element founded
        ctx = c.getContext('2d'),
        img = createImage();
    img.onload = function() {
      c.width = img.width;
      c.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = dataURL;
  };
  reader.readAsDataURL(file);
}

function displayAsImage(file) {
  var imgURL = URL.createObjectURL(file),
      img = document.createElement('img');
  img.onload = function() {
    URL.revokeObjectURL(imgURL);
  };
  img.src = imgURL;
  document.body.appendChild(img);
}

function hasGetUserMedia() {
  return !!(navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||msGetUserMedia);
}
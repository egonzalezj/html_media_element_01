function setup() {
  var Joints = 10;
}

function draw() {
  
}

function Avatar() { // Avatar class ver. 0.5 (albertochiwas)

  init();

  function init () {
    getCanvasSize();
    this.puppet = loadShape(svgFile);
    this.cx = puppet.width / 2.0; //Puppet center
    this.cy = puppet.height / 2.0;
    this.x = width / 2 - this.cx; //Distance between puppet center and screen certer point
    this.y = height / 2 - this.cy;
    alert("width:"+this.width+" height:"+this.height);
  }

  function getCanvasSize() {
    var c = document.querySelector('canvas');
    this.width = c.width;
    this.height = c.height;
  }
}
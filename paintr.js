function Color (r,g,b,transparency) {
  var self = this;

  this.r = r;
  this.g = g;
  this.b = b;
  if (typeof(transparency) === "undefined") {
    this.transparency = 1;
  }
  else {
    this.transparency = transparency;
  }

  this.rgb = r + "," + g + "," + b;
}

Color.prototype.returnRGBCode = function () {
  console.log(this.rgb);
  return this.rgb
};

function randomizeHalfGrid (grid) {
  var map = grid;
  for (var i = 0; i < 2; i++) {
    map[i] = [];
    for (var j = 0; j < 5; j++) {
      map[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return map;
};

function randomizeCenterGrid (){
  var center = [];
  for (var i = 0; i < 5; i++) {
    center.push(Math.floor(Math.random() * 2));
  }
  return center;
};

var red = new Color (200,0,0);
var green = new Color (0,200,0);
var blue = new Color (0,0,200);

function randomizeRGB(color) {
  if (typeof(color) === "undefined") {
    color = Object;
    color.r = Math.floor((Math.random() * 200) + 0);
    color.g = Math.floor((Math.random() * 200) + 0);
    color.b = Math.floor((Math.random() * 200) + 0);
  }

  return color;
}

function drawAll () {
  var grid = [];

  var grid = randomizeHalfGrid(grid);
  var center = randomizeCenterGrid();

  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var drw = canvas.getContext("2d");
    var color = randomizeRGB();
    console.log(color);
    drw.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";

    var coordx = 0, coordy = 0;

    for (var i = 0; i < 2; i++) {
      for (var j = 0; j < 5; j++) {
        console.log("Drawing normal " + grid[i][j] + " at " + coordx + "," +coordy);
        if (grid[i][j]) {
          drw.fillRect (coordx, coordy, 20, 20);
        };
        coordy += 20;
      };
      coordx += 20;
      coordy = 0;
    };

    for (var i = 0; i < 5; i++) {
      console.log("Drawing center " + center[i] + " at " + coordx + "," +coordy);
      if (center[i]) {
        drw.fillRect (coordx, coordy, 20, 20);
      };
      coordy += 20;
    };

    coordx += 20;
    coordy = 0;
    //Print the grid in reverse column order
    var ireverse = 1;
    for (var k = 0; k < 2 ; k++) {
      for (var z = 0; z < 5; z++) {
        console.log("Drawing reverse " + grid[ireverse][z] + " at " + coordx + "," +coordy);
        if (grid[ireverse][z]) {
          drw.fillRect (coordx, coordy, 20, 20);
        };
        coordy += 20;
      };
      ireverse-= 1;
      coordx += 20;
      coordy = 0;
    };

  };
};

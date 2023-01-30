class Wall{
  constructor(x0, y0, x1, y1){
    this.p1 = createVector(x0, y0);
    this.p2 = createVector(x1, y1);
  }
}

class Ray{
  constructor(x, y, angle){
    this.p = createVector(x, y);
    this.dir = createVector(cos(angle), sin(angle));
    this.dir.normalize();
  }

  lookTo(x, y){
    this.dir.x = x - this.p.x;
    this.dir.y = y - this.p.y;
    this.dir.normalize();
  }

  // Cast the ray toward a wall
  cast(wall){
    // Check if a line and another line are intersecting
    // Calculate T and U
    // There will be an intersection if 0 ≤ t ≤ 1 and 0 ≤ u (Ray is infinite)

    const x1 = wall.p1.x;
    const y1 = wall.p1.y;
    const x2 = wall.p2.x;
    const y2 = wall.p2.y;

    const x3 = this.p.x;
    const y3 = this.p.y;
    const x4 = this.p.x + this.dir.x;
    const y4 = this.p.y + this.dir.y;

    // Denominator
    let d = (x1 - x2)*(y3-y4) - (y1-y2)*(x3-x4);

    if(d == 0){
      return;
    }

    let t = ((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/d;
    let u = ((x1-x3)*(y1-y2)-(y1-y3)*(x1-x2))/d;

    if(t >= 0 && t <= 1 && u > 0){
      // Intersection is true
      // Calculate intersection point
      const pt = createVector(x3 + u*(x4 - x3), y3 + u*(y4 - y3));
      return pt;
    }
    return;
  }

  draw(){
    stroke(255);
    push();
    translate(this.p.x, this.p.y);
    line(0, 0, this.dir.x*8, this.dir.y*8);
    pop();
  }
}

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("demo");
  background(0, 0, 0);
  // JS is slow and we're calculating a lot
  frameRate(30);

  // The moving orb of magical light is called:
  this.entity = createVector(100, 200);

  // Angle that tracks current location of magical entity on it's path around a circle
  this.a = 0;

  // Arrays for boundaries and the actual rays that we cast
  this.rays = [];
  this.walls = [];

  // Mouse Control Vars
  this.dragStart = null; // For dragging
  this.mouseMode = 1; // 0 - Place a line for walls, 1 is draw boundaries
  this.drawDistance = 50; // Distance between points to add another one (Draw boundary mode only)

  
  for(let i = 0; i < 360; i++){
    this.rays[i] = new Ray(this.entity.x, this.entity.y, radians(i));
  }
  
  // Add the 4 outer walls
  addBoundaries();

  // Adds my name because I'm shameless and proud of my accomplishments
  addStartupWalls();

}

function addBoundaries(){
  walls.push(new Wall(width-10, 10, width-10, height-10))
  walls.push(new Wall(10, 10, width-10, 10))
  walls.push(new Wall(10, height-10, width-10, height-10))
  walls.push(new Wall(10, 10, 10, height-10))
}

function addRandomWall(){
  // Create a new random wall
  walls.push(new Wall(Math.floor(Math.random() * width), Math.floor(Math.random() * height),Math.floor(Math.random() * width), Math.floor(Math.random() * height) ));
}

function addStartupWalls(){
  walls.push(new Wall(55.9666748046875, 92.05000305175781, 170.9666748046875, 91.05000305175781));
  walls.push(new Wall(118.9666748046875, 92.05000305175781, 118.9666748046875, 185.0500030517578));
  walls.push(new Wall(118.9666748046875, 184.0500030517578, 53.9666748046875, 184.0500030517578));

  walls.push(new Wall(144.9666748046875 ,  124.05000305175781 ,  142.9666748046875 ,  182.0500030517578));
  walls.push(new Wall(142.9666748046875 ,  182.0500030517578 ,  199.9666748046875 ,  183.0500030517578));
  walls.push(new Wall(199.9666748046875 ,  183.0500030517578 ,  198.9666748046875 ,  123.05000305175781));
  walls.push(new Wall(198.9666748046875 ,  123.05000305175781 ,  142.9666748046875 ,  123.05000305175781));
  walls.push(new Wall(216.9666748046875 ,  182.0500030517578 ,  215.9666748046875 ,  90.05000305175781));
  walls.push(new Wall(215.9666748046875 ,  90.05000305175781 ,  250.9666748046875 ,  181.0500030517578));
  walls.push(new Wall(250.9666748046875 ,  181.0500030517578 ,  252.9666748046875 ,  87.05000305175781));


  walls.push(new Wall(207.9666748046875 ,  222.0500030517578 ,  147.9666748046875 ,  221.0500030517578));
  walls.push(new Wall(147.9666748046875 ,  221.0500030517578 ,  147.9666748046875 ,  305.0500030517578));
  walls.push(new Wall(147.9666748046875 ,  305.0500030517578 ,  211.9666748046875 ,  307.0500030517578));
  walls.push(new Wall(216.9666748046875 ,  308.0500030517578 ,  233.9666748046875 ,  251.0500030517578));
  walls.push(new Wall(233.9666748046875 ,  251.0500030517578 ,  260.9666748046875 ,  309.0500030517578 ));
  walls.push(new Wall(220.9666748046875 ,  285.0500030517578 ,  248.9666748046875 ,  284.0500030517578 ));
  walls.push(new Wall(251.9666748046875 ,  222.0500030517578 ,  287.9666748046875 ,  304.0500030517578 ));
  walls.push(new Wall(287.9666748046875 ,  304.0500030517578 ,  318.9666748046875 ,  224.0500030517578));
}

function updateLocation(x, y){
  for(let i = 0; i < 360; i++){
    rays[i].p.x = x;
    rays[i].p.y = y;
  }
}

function update(){
  a+=0.025;
  if(a >= 360){
    a = 0;
  }
  updateLocation(width/3*cos(a) + width/2, height/3*sin(a)+height/2);
}

function mousePressed() {
  dragStart = createVector(mouseX, mouseY);
}

function mouseDragged() {
  // Draw boundary mode
  console.log("Moved");
  if(dragStart && mouseMode == 1) {

    // Check sqr distance (performance)
    let sqrDistanceMin = drawDistance*drawDistance;
    let xDist = dragStart.x - mouseX;
    xDist *= xDist;
    let yDist = dragStart.y - mouseY;
    yDist *= yDist;

    let sqrDistance = xDist + yDist;

    if(sqrDistance >= sqrDistanceMin) {
      // Add a wall
      walls.push(new Wall(dragStart.x, dragStart.y, mouseX, mouseY));
      // Reset drag start position to new mouse coords
      dragStart = createVector(mouseX, mouseY);
    }
  }
}

function mouseReleased() {

  if(mouseMode == 0) {
    walls.push(new Wall(dragStart.x, dragStart.y, mouseX, mouseY));
    dragStart = null;
  } else {
    // Check dis
    walls.push(new Wall(dragStart.x, dragStart.y, mouseX, mouseY));
    dragStart = null;
  }
}

function keyPressed(){
  // When 'r' key is pressed
  if(keyCode == 82){
    addRandomWall();
  }

  // When 'c' key is pressed
  if(keyCode == 67){
    // Clear walls
    walls = [];   
    addBoundaries();
  }
  // When 'd' key is pressed
  if(keyCode == 68){
    // Remove last wall  
    walls.pop();
  }
  // When 'q' is pressed (Toggle add wall mode)
  if(keyCode == 81){
    mouseMode = !mouseMode;
  }
}

function mouseWheel(event) {
  mouseMode = !mouseMode;
}

function drawUiText() {
  if(mouseMode == 0) {
    text('Mouse Line Mode', 20, 30);
  } else {
    text('Mouse Draw Mode', 20, 30);
  }
  
}

function draw() {
  // CLS black
  background(0, 0, 0);

  // Draw walls
  stroke(255);
  for(let j = 0; j < walls.length; j++)
  {
    line(walls[j].p1.x, walls[j].p1.y, walls[j].p2.x, walls[j].p2.y);
  }

  // Create 720 rays
  for(let i = 0; i < 360; i++){
    rays[i].draw();
    let closestDist = Infinity;
    let closestPt = null;
    for(let j = 0; j < walls.length; j++)
    {
      
      let pt = rays[i].cast(walls[j]);
      if(pt)
      {
        let dist = rays[i].p.dist(pt);
        if(dist < closestDist){
          closestDist = dist;
          closestPt = pt;
        }
      }
    }
    if(closestPt){
      stroke(40, 170, 238, 127)
      line(rays[i].p.x, rays[i].p.y, closestPt.x, closestPt.y);
      fill(40, 170, 238, 255)
      stroke(40, 170, 238)
      ellipse(closestPt.x, closestPt.y, 3, 3);
    }
  }

  // If a line is being created, draw it
  if(dragStart){
    stroke(153, 153, 151, 150);
    line(dragStart.x, dragStart.y, mouseX, mouseY);
  }

  drawUiText();

  // Moves light in a circle 
  update();
}

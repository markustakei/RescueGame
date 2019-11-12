// Populate a global variable for the spaceship
function InitializePolice() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  POLICE_MAN = {
    x : 300,
    y : 150,
    health : 3,
    latest : {
        x : POLICE_MAN.x,
        y : POLICE_MAN.y,
    },
    scale : 5,
    speed : 3,
    initialized : true,
    bullets : [5]
  }
}
/**  RenderSpaceship
 *
 *  Renders all spaceship points after adjusting them for the rotation and position
 *    in space
 */
function RenderPolice(context) {
  if (!POLICE_MAN.initialized) {
    return;
  }
  context.moveTo(POLICE_MAN.x, POLICE_MAN.y);
  POLICE_MAN.latest.x = POLICE_MAN.x;
  POLICE_MAN.latest.y = POLICE_MAN.y;
  // Move to the point where drawing will start


  // Begin rendering the space ship points (rotating them each time)
  context.beginPath();
  context.rect(POLICE_MAN.x, POLICE_MAN.y, 50, 50);
  context.fillStyle = "blue";
  context.fill();
  context.closePath();

}

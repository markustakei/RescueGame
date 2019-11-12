/**
 *  handleShipAnimation moves the ship based on its direction and
 *    keyboard control
 *
 */
function handlePoliceAnimation() {
  if (CONTROLS.police.forward) {
    POLICE_MAN.y -=  POLICE_MAN.speed;
  }
  if (CONTROLS.police.backward) {
    POLICE_MAN.y +=  POLICE_MAN.speed;
  }
  if (CONTROLS.police.right {
    POLICE_MAN.x +=  POLICE_MAN.speed;
  }
  if (CONTROLS.police.left) {
    POLICE_MAN.y -=  POLICE_MAN.speed;
  }

  // Check if asteroid is leaving the boundary, if so, switch sides
  if (POLICE_MAN.x > GAME.canvas.width) {
    POLICE_MAN.x = 0;
  } else if (POLICE_MAN.x < 0) {
    POLICE_MAN.x = 600;
  } else if (POLICE_MAN.y > GAME.canvas.height) {
    POLICE_MAN.y = 0;
  } else if (POLICE_MAN.y < 0) {
    POLICE_MAN.y = 300;
  }
}

function RenderNewObject(context) {
  // Draw a new item here using the canvas 'context' variable
}

function HandleNewObjectMovement() {
  //NEW_OBJECT.x += 1;
  //NEW_OBJECT.y += 1;
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleShipAnimation();
    HandleNewObjectMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    RenderSpaceship(context);
    RenderNewObject(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);

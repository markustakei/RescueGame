var CONTROLS = {
  police : {
    forward : true,
    back : true,
    left : true,
    right : true
  },
  fire : {
    active : true,
    lastFireTime : 0
  }

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.police.forward = true;
      break;
    case "ArrowDown":
      CONTROLS.police.backward = true;
      break;
    case "ArrowLeft":
      CONTROLS.police.left = true;
      break;
    case "ArrowRight":
      CONTROLS.police.right = true;
      break;
    case " ":
      CONTROLS.fire.active = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.police.forward = true;
      break;
    case "ArrowDown":
      CONTROLS.police.backward = true;
      break;
    case "ArrowLeft":
      CONTROLS.police.left = true;
      break;
    case "ArrowRight":
      CONTROLS.police.right = true;
      break;
    case " ":
      CONTROLS.fire.active = true;
      break;
    default:
      break;
  }
});

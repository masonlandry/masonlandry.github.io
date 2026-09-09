$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100, 0, 1000, 30, "grey");
    createPlatform(100, 630, 1000, 30, "grey");
    createPlatform(100, 150, 1000, 30, "grey");
    createPlatform(100, 360, 1000, 30, "grey");
    createPlatform(100, 495, 1000, 30, "grey");



    // TODO 3 - Create Collectables

    createCollectable("steve", 1350, 500);
    createCollectable("diamond", 500, 600);
    createCollectable("grace", 150, 460);
    createCollectable("max", 1100, 177);
    createCollectable("kennedi", 400, 170);
    // TODO 4 - Create Cannons

    createCannon("top", 10, 600);
    createCannon("left", 10, 400);
      
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

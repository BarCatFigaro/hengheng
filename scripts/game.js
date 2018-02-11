let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    Graphics = PIXI.Graphics,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle;

let app = new Application({
  width: 25,        
  height: 25,        
  antialias: true,    
  transparent: false, 
  resolution: 1 
});

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.backgroundColor = 0x42c5f4;


document.body.appendChild(app.renderer.view);

let stage = new PIXI.Container();

loader
  .load("blob", "/GraphicsRF/Characters/blue_stand/blue_stand.png")
  .load("road", "/GraphicsRF/Assets/Road.png")
  .load(setup)

function setup() {
  
}


/*
* In Game UI
*/

//Title screen

function titleScreen() {
  //Menu
  let startMenu = new Graphics();
  var menuX = window.innerWidth / 3;
  var menuY = 50;
  var menuWidth = window.innerWidth / 3
  var menuHeight = window.innerHeight - 100;

  startMenu.beginFill(0xe2db8c);
  startMenu.lineStyle(4, 0x706704, 2);
  startMenu.drawRect(menuX, menuY, menuWidth, menuHeight);
  startMenu.endFill();
  //
  
  //Title
  let titleStyle = new TextStyle({
    fontFamily: "Airal",
    fontSize: 35,
    fill: "blue",
    stroke: '#ff3300',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
  });

  let title = new Text("Yip's Wetdream",titleStyle);
  title.position.set( menuX + getCenteredX(menuWidth, title.width), menuY + menuHeight / 12);
  //

  // Options:
  let optionStyle = new TextStyle({
    fontFamily: "Arial",
    fontSize: 35,
    fill: "blue",
    stroke: '#ff3300',
    strokeThickness: 4,
    dropShadow: false
  });

  //Start
  let startBox = new Graphics();
  var strWidth = menuWidth / 1.5;
  var strHeight = menuHeight / 8;
  var strX = menuX + getCenteredX(menuWidth, strWidth);
  var strY = menuY + menuHeight / 2;
  var strRadius = strWidth - 4;
  startBox.beginFill(0xe2db8c);
  startBox.lineStyle(4, 0x706704, 2);
  startBox.drawRect(strX, strY, strWidth, strHeight, strRadius);
  startBox.endFill();
  
  let start = new Text("Start", optionStyle);
  start.position.set(strX + getCenteredX(strWidth, start.width), strY + getCenteredX(strHeight, start.height));
  
  //When u hit start

  startMenu.interactive = true;
  startMenu.hitArea = new PIXI.Rectangle(start.x, start.y, start.width, start.height);
  startMenu.on('mousedown', beginGame);
  
  function beginGame() {
    app.stage.removeChild(startMenu);
    app.stage.removeChild(title);
    app.stage.removeChild(startBox);
    app.stage.removeChild(start);
    startGame();
  }
  //

  app.stage.addChild(startMenu);
  app.stage.addChild(title);
  app.stage.addChild(startBox);
  app.stage.addChild(start);
}

//
//
function startGame() {
  makeScoreBox();
}


//Score Box mechanics
//
function makeScoreBox() {
  let scoreBox = new Graphics();
  var scoreB_Width = window.innerWidth / 12;
  var scoreB_Height = window.innerHeight / 14;
  var scoreB_X = window.innerWidth - scoreB_Width + scoreB_Width / 2;
  var scoreB_Y = window.innerHeight + scoreB_Height + scoreB_Height / 2;
  scoreBox.beginFill(0xf2f7f3);
  scoreBox.lineStyle(4, 0x000000, 2);
  scoreBox.drawRect(scoreB_X, scoreB_Y, scoreB_Width, scoreB_Height);
  scoreBox.endFill();
  app.stage.addChild(scoreBox);


}

//Updating score
function updateScore() {
  let scoreStyle = new TextStyle({
    fontFamily: "Airal",
    fontSize: 25,
    fill: "black",
  });

  var scoreX = scoreB_X + 2;
  var scoreY = scoreB_Y + 2;
  let score = new Text(getScore(), scoreStyle);
  score.position.set(scoreX, scoreY);
}
//

//Check if the game can continue
function checkDeath(player) {
  if (!player.isAlive) {
    endGame();
  }
}
//

//Ending when player died
function endGame() {
  //TODO
}
//


/**/

/*
* Utility
*/
function getCenteredX(bigWidth, smallWidth) {
  return bigWidth/2 - smallWidth / 2;
}

/**/


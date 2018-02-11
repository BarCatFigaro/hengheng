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
  .load(setup)

function setup() {
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
    fontFamily: "Comic Sans",
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
    fontFamily: "Times New Roman",
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
  
  function beginGame(e) {
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

/*
* Utility
*/

function startGame() {
  app.renderer.backgroundColor = 0x11111;

  let ggStyle = new TextStyle({
    fontFamily: "Times New Roman",
    fontSize: 100,
    fill: "White",
    stroke: '#ff3300',
    strokeThickness: 4,
    dropShadow: false
  });

  let startFrame = new Text("JOHN QU IS AMD TRAITOR", ggStyle);
  startFrame.position.set(getCenteredX(window.innerWidth,startFrame.width), getCenteredX(window.innerHeight, startFrame.height));

  app.stage.addChild(startFrame);
}
function getCenteredX(bigWidth, smallWidth) {
  return bigWidth/2 - smallWidth / 2;
}

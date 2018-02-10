// create a new Sprite from an image path
var fung = PIXI.Sprite.fromImage('../GraphicsRF/Assets/car.png')

// center the sprite's anchor point
fung.anchor.set(0.5);

// move the sprite to the center of the screen
fung.x = app.screen.width / 2;
fung.y = app.screen.height / 2;

app.stage.addChild(fung);

// Listen for animate update
app.ticker.add(function(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    fung.rotation += 0.1 * delta;
});
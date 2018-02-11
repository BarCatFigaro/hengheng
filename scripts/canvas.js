

   

    app.stage.filters = [new PIXI.filters.VoidFilter()];
    app.stage.filterArea = new PIXI.Rectangle(0, 0, window.innerWidth, window.innerHeight);

    var blobArray = [];
    var numBlobs = 10;
    let background = PIXI.Sprite.fromImage('../GraphicsRF/Assets/Road.png');

    function displayRoad() {
        background.width = window.innerWidth;
        background.height = window.innerHeight;
        app.stage.addChild(background);
    }

    function getRandomShang(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function loadBlobs(arr, num) {
        blobNames = ["blue_stand", "blue_walk", "green_stand", "green_walk", "red_stand", "red_walk", "white_stand", "white_walk"];
        for (var i = 0; i < num; i++) {
            var name = blobNames[getRandomShang(7)];
            var blob = PIXI.Sprite.fromImage('../GraphicsRF/Characters/' + name + '/' + name + '.png');
            blob.anchor.set(0.5);
            blob.scale.set(0.8 + Math.random() * 0.3);
    
            blob.position.x = Math.floor(Math.random() * app.renderer.width);
            blob.position.y = Math.floor(Math.random() * app.renderer.height);
    
            blob.blendMode = Math.random()>0.5? PIXI.BLEND_MODES.OVERLAY:PIXI.BLEND_MODES.HARD_LIGHT;
            blob.direction = Math.random() * Math.PI * 2;
            blob.turningSpeed = Math.random() - 0.8;
            blob.speed = 2 + Math.random() * 2;

            blob.interactive = true;
            blob.on('mouseDown', hit(blob));
            blob.hitArea = new PIXI.Circle(blob.x, blob.y, blob.width);
            arr.push(blob);
            app.stage.addChild(blob);
        }

        requestAnimationFrame(blobAnime);
    }

    
    function blobAnime() {
        for (var i = 0; i < blobArray.length; i++) {
            var blob = blobArray[i];
            blob.direction = blob.turningSpeed * 0.01;
            blob.position.x += Math.sin(blob.direction) * blob.speed;
            blob.position.y += Math.cos(blob.direction) * blob.speed;
            blob.rotation = -blob.direction - Math.PI / 2;
            blob.hitArea.x = blob.x;
            blob.hitArea.y = blob.y;
        }

        requestAnimationFrame(blobAnime);
    }

    function hit(hitBlob) {
        app.stage.removeChild(hitBlob);
    }

    displayRoad();
    loadBlobs(blobArray, numBlobs);


   


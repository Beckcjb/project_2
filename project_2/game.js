var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(700, 101, {backgroundColor: 0x330033});
gameport.appendChild(renderer.view);

/* 	Creste Stage, home, turoiral, play, credits containers,
	Create buttons and background objects */
	
//allocate memory for variables. 


PIXI.loader
	.add('assets.json')
	.load(ready)
 // Ready method creates sprite movie clips 

var johnRun;
var home;
var desertlvl; 
var credits;
var tutorial;
var creditsPage;
var loseScreen;
var winScreen;
var losetext;
var wintext;
var homeButton;
var homeButtonS;
var homeButtonM;
var title;
var playButton;
var creditsButton;
var tutorialButton;
var tutorialPage;
var desert ;
var cloudS;
var cloudM ;
var count;
var cityBox;
var cactusBox;
var woodBox;
var cityBox2;
var cactusBox2;
var woodBox2;
var cityBox3;
var cactusBox3;
var woodBox3;

function ready() {

  var frames = [];

  for (var i=1; i<=4; i++) {
    frames.push(PIXI.Texture.fromFrame('john' + i + '.png'));

  }

  
  
  johnRun = new PIXI.extras.MovieClip(frames);
  johnRun.anchor.x = .5;
  johnRun.anchor.y = 0;
  johnRun.position.x = 80;
  johnRun.position.y = 50;
  johnRun.animationSpeed = .13;
  
	
	creditsPage = new PIXI.Sprite(PIXI.Texture.fromFrame("creditsPage.png"));
	homeButton = new PIXI.Sprite(PIXI.Texture.fromFrame("homeButton.png"));
	homeButtonS = new PIXI.Sprite(PIXI.Texture.fromFrame("homeButtonS.png"));
	homeButtonM = new PIXI.Sprite(PIXI.Texture.fromFrame("homeButtonM.png"));
	title = new PIXI.Sprite(PIXI.Texture.fromFrame("title.png"));
	playButton = new PIXI.Sprite(PIXI.Texture.fromFrame("playButton.png"));
	creditsButton = new PIXI.Sprite(PIXI.Texture.fromFrame("creditsButton.png"));
	tutorialButton = new PIXI.Sprite(PIXI.Texture.fromFrame("tutorialButton.png"));
	tutorialPage = new PIXI.Sprite(PIXI.Texture.fromFrame("tutorialPage.png"));
	desert = new PIXI.Sprite(PIXI.Texture.fromFrame("longDesertBG.png"));
	cloudS = new PIXI.Sprite(PIXI.Texture.fromFrame("cloudSmall.png"));
	cloudM = new PIXI.Sprite(PIXI.Texture.fromFrame("cloudMed.png"));
	cityBox = new PIXI.Sprite(PIXI.Texture.fromFrame("citBox.png"))
	cactusBox = new PIXI.Sprite(PIXI.Texture.fromFrame("cactusBox.png"))
	woodBox = new PIXI.Sprite(PIXI.Texture.fromFrame("woodBox.png"))
	cityBox2 = new PIXI.Sprite(PIXI.Texture.fromFrame("citBox.png"))
	cactusBox2 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactusBox.png"))
	woodBox2 = new PIXI.Sprite(PIXI.Texture.fromFrame("woodBox.png"))
	cityBox3 = new PIXI.Sprite(PIXI.Texture.fromFrame("citBox.png"))
	cactusBox3 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactusBox.png"))
	woodBox3 = new PIXI.Sprite(PIXI.Texture.fromFrame("woodBox.png"))
	losetext = new PIXI.Sprite(PIXI.Texture.fromFrame("loseScreen.png"))
	wintext = new PIXI.Sprite(PIXI.Texture.fromFrame("winScreen.png"))
	count = 0;
	
	// Set sprites to interactive
	playButton.interactive = true;
	creditsButton.interactive = true;
	tutorialButton.interactive = true;
	homeButton.interactive = true;
	homeButtonS.interactive = true;
	homeButtonM.interactive = true;
	cityBox.interactive = true;
	cactusBox.interactive = true;
	woodBox.interactive = true;
	cityBox2.interactive = true;
	cactusBox2.interactive = true;
	woodBox2.interactive = true;
	cityBox3.interactive = true;
	cactusBox3.interactive = true;
	woodBox3.interactive = true;
	
	// Handle mousedown event on interactives
	tutorialButton.on('mousedown', mouseClickTutorial)
	playButton.on('mousedown', mouseClickPlay);
	homeButton.on('mousedown', mouseClickHome);
	creditsButton.on('mousedown', mouseClickCredits);
	homeButtonS.on('mousedown', mouseClickHome);
	homeButtonM.on('mousedown', mouseClickHome);
 	cityBox.on('mousedown', moveCi);
	cityBox2.on('mousedown', moveCi);
	cityBox3.on('mousedown', moveCi);
	
	cactusBox.on('mousedown', moveC1_C3);
	cactusBox2.on('mousedown', moveC2);
	cactusBox3.on('mousedown', moveC1_C3);
	woodBox.on('mousedown', moveW);
	woodBox2.on('mousedown', moveW1_W2);
	woodBox3.on('mousedown', moveW1_W3); 
	titleScreen();
	
  }
	
	
home = new PIXI.Container();
desertlvl = new PIXI.Container();
credits = new PIXI.Container();
tutorial = new PIXI.Container();
loseScreen = new PIXI.Container();
winScreen = new PIXI.Container();
var stage = new PIXI.Container();

//add Home to stage

// =================================================================================
// Set title position
	var song;
	song = new Audio('titleSong.wav');
	var move;
	move = new Audio('hit.wav');
	
	var won;
	won = new Audio('win.wav');
	
	var lost;
	lost	= new Audio('lose.wav');
	
function titleScreen(){
	
	stage.addChild(home);
	song.play();
	home.alpha = 1;
	title.anchor.x = 0.5;
	title.anchor.y = 0.5;
	title.position.x = 350;
	title.position.y = 50;


	// Set button positions
	playButton.position.x = 315;
	playButton.position.y = 60;

	creditsButton.position.x = 449;
	creditsButton.position.y = 60;

	tutorialButton.position.x = 179;
	tutorialButton.position.y = 60;

	// Add sprites to Home page
	home.addChild(title);
	home.addChild(tutorialButton);
	home.addChild(playButton);
	home.addChild(creditsButton);
		
}
function creditsScreen(){
	// Add sprites to Credits Page
	credits.addChild(creditsPage);
	credits.addChild(homeButton);
	
	homeButton.position.x = 500;
	homeButton.position.y = 10;
	stage.addChild(credits);

}
function playScreen(){
	desert.position.x = 0;
	desert.position.y = 0;
	desertlvl.addChild(desert);
	stage.addChild(desertlvl);
	song.pause();
	song.currentTime = 0
	desertlvl.addChild(johnRun);
	var count =1;
	//add score text
	var player = new PIXI.Text('Score:'+ count +"");

	// Position the text
	player.scale.x = .5;
	player.scale.y = .5;
	player.x = 5;
	player.y = 5;

	// Add Score Text to the desertlvl
	desertlvl.addChild(player);


	// add timer
	var timerText = new PIXI.Text('00:00');

	// Position timer
	timerText.anchor.x = 0.5;
	timerText.scale.x = .5;
	timerText.scale.y = .5;
	timerText.x = renderer.width / 2;
	timerText.y = 5;

	// Add timer text to the desertlvl
	desertlvl.addChild(timerText);
	desertlvl.addChild(homeButtonS);


	//position clouds 

	var _y = Math.floor(Math.random() * 15) + 0;

	cloudS.position.x = 720;
	cloudS.position.y = _y;
	cloudM.position.x = 650;
	cloudM.position.y = _y;
	
	homeButtonS.scale.x = .25;
	homeButtonS.scale.y = .25;
	homeButtonS.position.x = 650;
	homeButtonS.position.y = 5;

	// add clouds to desert lvl
	desertlvl.addChild(cloudS);
	desertlvl.addChild(cloudM);
	
	

	cactusBox.anchor.y = 0;
	cactusBox2.anchor.y = 0;
	cactusBox3.anchor.y = .0;
	woodBox.anchor.y = 0;
	woodBox2.anchor.y = 0;
	woodBox3.anchor.y = 0;

	cactusBox.position.x = 200;
	cactusBox.position.y = 50;
	cactusBox2.position.x = 300;
	cactusBox2.position.y = 50;
	cactusBox3.position.x = 400;
	cactusBox3.position.y = 50;
	woodBox.position.x = 250;
	woodBox.position.y = 50;
	woodBox2.position.x = 350;
	woodBox2.position.y = 50;
	woodBox3.position.x = 450;
	woodBox3.position.y = 50;
	
	desertlvl.addChild(cactusBox);
	desertlvl.addChild(cactusBox2);
	desertlvl.addChild(cactusBox3);
	desertlvl.addChild(woodBox);
	desertlvl.addChild(woodBox2);
	desertlvl.addChild(woodBox3);
}

function tutorialSceen(){
	stage.addChild(tutorial);
	tutorial.addChild(tutorialPage);
	tutorial.addChild(homeButtonM);
	tutorial.addChild(johnRun);
	homeButtonM.scale.x = .25;
	homeButtonM.scale.y = .25;
	homeButtonM.position.x = 650;
	homeButtonM.position.y = 5;
	song.pause();
	song.currentTime = 0;
	
	cityBox.anchor.y = 0;
	cityBox2.anchor.y = 0;
	cityBox3.anchor.y	= 0;

	cityBox.position.x = 350;
	cityBox.position.y = 50;
	cityBox2.position.x = 400;
	cityBox2.position.y = 50;
	cityBox3.position.x = 450;
	cityBox3.position.y = 50;
	
	tutorial.addChild(cityBox);
	tutorial.addChild(cityBox2);
	tutorial.addChild(cityBox3);
	
	}
function lose(){
	stage.addChild(loseScreen);
	loseScreen.addChild(losetext);
	loseScreen.addChild(homeButtonM);
	losetext.position.x = 0;
	losetext.position.y = 0;
	homeButtonM.scale.x = .25;
	homeButtonM.scale.y = .25;
	homeButtonM.position.x = 650;
	homeButtonM.position.y = 5;
	lost.play();

	}
function win(){
	stage.addChild(winScreen);
	winScreen.addChild(wintext);
	winScreen.addChild(homeButtonM);
	wintext.position.x = 0;
	wintext.position.y = 0;
	homeButtonM.scale.x = .25;
	homeButtonM.scale.y = .25;
	homeButtonM.position.x = 660;
	homeButtonM.position.y = 5;
	won.play();
	
	}
	
// Handle Mouse Click on Credits
function mouseClickCredits(e) {
	credits.alpha = 1;
	home.alpha = 0;
	stage.addChild(credits);
	creditsScreen();
	
	}

// Handle Mouse Click on Home	
function mouseClickHome(e) {
	credits.alpha = 0;
	home.alpha = 1;
	desertlvl.alpha = 0;
	tutorial.aplha = 0;
	lose.alpha = 0;
	win.aplha = 0;
	titleScreen();
	ready();
	}

// Handle Mouse Click on Play 	
function mouseClickPlay(e) {
	desertlvl.alpha = 1;
	home.alpha = 0;
	playScreen();

	}	
	
function mouseClickTutorial(e) {
	credits.alpha = 0;
	home.alpha = 0;
	desertlvl.alpha = 0;
	tutorial.alpha = 1;
	tutorialSceen();

	}

function moveCi(){
	move.play();
	createjs.Tween.get(cityBox.position).to({y: -25}, 1000, createjs.Ease.linear);		
	createjs.Tween.get(cityBox2.position).to({y: -25}, 1000, createjs.Ease.linear);		
	createjs.Tween.get(cityBox3.position).to({y: -25}, 1000, createjs.Ease.linear);		

}

function moveC1_C3(){
		move.play();

	createjs.Tween.get(cactusBox.position).to({y: -25}, 1000, createjs.Ease.linear);		
	createjs.Tween.get(cactusBox3.position).to({y: -25}, 1000, createjs.Ease.linear);
	
}

function moveW (){
		move.play();

	createjs.Tween.get(cactusBox.position).to({y: 50}, 1000, createjs.Ease.linear);		
	createjs.Tween.get(woodBox.position).to({y: -25}, 1000, createjs.Ease.linear);
}

function moveC2(){
		move.play();

	createjs.Tween.get(cactusBox2.position).to({y:-25}, 1000, createjs.Ease.linear);		

}
function moveW1_W3(){
		move.play();

	createjs.Tween.get(woodBox.position).to({y: 50}, 1000, createjs.Ease.linear);		
	createjs.Tween.get(woodBox3.position).to({y: -25}, 1000, createjs.Ease.linear);	
	createjs.Tween.get(cactusBox.position).to({y: -25}, 1000, createjs.Ease.linear);
}
function moveW1_W2(){
		move.play();

	createjs.Tween.get(woodBox.position).to({y: -25}, 1000, createjs.Ease.linear);		
	createjs.Tween.get(woodBox2.position).to({y: -25}, 1000, createjs.Ease.linear);
}

document.addEventListener("keydown", onKeyDown), false;

// Keydown handler for character movement
function onKeyDown(key) {
	

	var x = johnRun.position.x;
	
	if (key.keyCode === 65 ) { // left
		if(johnRun.position.x != 0){
	createjs.Tween.get(johnRun.position).to({x: x - 4}, 10, createjs.Ease.linear);		
	johnRun.scale.x = -1;
		johnRun.play();}
    }
	if (key.keyCode === 65 && key.keyCode === 87 ) { // left
		if(johnRun.position.x != 0){
		createjs.Tween.get(johnRun.position).to({x: x - 4 }, 10, createjs.Ease.linear);
			johnRun.scale.x = -1;
				johnRun.play();
				audio.play();}
    }
	if (key.keyCode === 68 && key.keyCode === 87  ) { // right
		if(johnRun.position.x != 0){
        createjs.Tween.get(johnRun.position).to({x: x + 4}, 10,createjs.Ease.linear);
		johnRun.scale.x = -1;
		johnRun.play();
		audio.play();}
    }
    if (key.keyCode === 68 ) { // right
	
	
		createjs.Tween.get(johnRun.position).to({x: x + 4}, 10,createjs.Ease.linear);			
		johnRun.scale.x = 1;
			johnRun.play();
			if(johnRun.position.x === 680){
				win();
			}

        }
    
}

document.addEventListener("keyup", onKeyRelease), false;

// KeydReleaseown handler for character movement
function onKeyRelease(key) {
	
	//if(key.keyCode === 87 ){
		
	//}

    if (key.keyCode === 65 ) { // left
		johnRun.gotoAndStop(1); 
		}
  
    if (key.keyCode === 68 ) { // right

		johnRun.gotoAndStop(1);
        }
    
}

 
// function for testing hits with rectangles
function hitRectangle(r1, r2) {
	
	// Variables needed to test if there is a hit
	var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
	
	// Hit or not
	hit = false;
	
	// Finds the center of the rectangular sprites (only works with rectangles/boxes)
	r1.centerX = r1.x + r1.width / 2;
	r1.centerY = r1.y + r1.height / 2;
	r2.centerX = r2.x + r2.width / 2;
	r2.centerY = r2.y + r2.height / 2;
	
	// Divides the Height and Width by two and stores the values.
	r1.halfWidth = r1.width / 2;
	r1.halfHeight = r1.height / 2;
	r2.halfWidth = r2.width / 2;
	r2.halfHeight = r2.height / 2;
	
	// Checks the distances between centers on X and Y axis
	vx = r1.centerX - r2.centerX;
	vy = r1.centerY - r2.centerY;
	
	// Combination of sprite width's and heights
	combinedHalfWidths = r1.halfWidth + r2.halfWidth;
	combinedHalfHeights = r1.halfHeight + r2.halfHeight;
	
	// Collision on the x axis ?
	if (Math.abs(vx) < combinedHalfWidths) {
		// Collision on the y axis ?
		if (Math.abs(vy) < combinedHalfHeights) {
			  // Collision!
			  hit = true;
		} else {
			// No Collision
			hit = false;
    }
	} else {
		// No collision
		hit = false;
  }
	// Return true if hit
	return hit;
};

//function detects hit if true
function checkHit(){
	if(hitRectangle(cityBox, johnRun) === true || hitRectangle(cityBox2, johnRun) === true || hitRectangle(cityBox3, johnRun) === true){
		lose();
		
	}
	if(hitRectangle(cactusBox, johnRun) === true || hitRectangle(cactusBox2, johnRun) === true || hitRectangle(cactusBox3, johnRun) === true){
		lose();
		

	}
	if(hitRectangle(woodBox, johnRun) === true || hitRectangle(woodBox2, johnRun) === true || hitRectangle(woodBox3, johnRun) === true){
		lose();
		

	}
} 

//update the page
function animate() {
  requestAnimationFrame(animate);
  	var _x = Math.floor(Math.random() * 2) + 0;
	
	checkHit();

	
	cloudM.position.x -= _x
	createjs.Ticker.setFPS(60);
  renderer.render(stage);
  
}
animate();





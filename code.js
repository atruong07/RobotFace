var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var eyes = 70;
var ears = 60;
var spot = 70;
var l = 3
var small = 40
var y = randomNumber(150,230)

strokeWeight(5)
fill(randomNumber(96,225),randomNumber(113,161), randomNumber(170,180));
rect(40,100,300,200);

fill(randomNumber(80,200),randomNumber(100,150), randomNumber(170,190));
rect(60,115,260,170);

fill("white");
noStroke()
ellipse(110,y,eyes,eyes);
ellipse(270,y,eyes,eyes);

stroke("w")
line(154, 182, 178, 203);
line(178, 203, 188,185);
line(188,185,202,200);
line(202,200,222,177);


stroke("black")
fill(randomNumber(96,225),randomNumber(113,161), randomNumber(170,180));
regularPolygon(90,spot, l, ears);
regularPolygon(285,spot, l, ears);


noStroke()
fill(randomNumber(80,200),randomNumber(100,150), randomNumber(170,190));
regularPolygon(285,spot, l, small);
regularPolygon(90,spot, l, small);



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

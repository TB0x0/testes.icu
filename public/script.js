

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Canvas constants
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// Sprite constants
const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for(let j=0; j<state.frames; j++){
        let positionX = j * SPRITE_WIDTH;
        let positionY = index * SPRITE_HEIGHT;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

// Animation variables
let gameFrame = 0;
const staggerFrames = 5; // Controls animation speed

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations['jump'].loc.length;
    let frameX = SPRITE_WIDTH * position;
    let frameY = spriteAnimations["jump"].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY, SPRITE_WIDTH, SPRITE_HEIGHT, 0, 0, SPRITE_WIDTH, SPRITE_HEIGHT);

    gameFrame++;
    requestAnimationFrame(animate);
};

animate();

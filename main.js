// 게임 메인 로직 코드

const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 500;
const ctx = canvas.getContext("2d");

let gameStarted = false;
let bgX = 0;
let score = 0;
let gameOver = false;
let jump = false;
let jumpSpeed = 7;
let scoreText = document.getElementById("score");

const BG_MOVING_SPEED = 5;
let timer = 0;


/** 3-1 배경 화면 그리기 */
function backgroundImg(bgX) {
    ctx.drawImage(bgImage, bgX, 0, canvas.width, canvas.height);
}
// 시작 화면 그리기
function drawStartScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    backgroundImg(0);
    const imageWidth = 473;
    const imageHeight = 316;
    const imageX = canvas.width / 2 - imageWidth / 2;
    const imageY = canvas.height / 2 - imageHeight / 2;
    ctx.drawImage(startImage, imageX, imageY, imageWidth, imageHeight);
}

// 게임 오버 화면 그리기
function drawGameOverScreen() {
    ctx.drawImage(
        gameoverImage,
        canvas.width / 2 - 100,
        canvas.height / 2 - 50,
        200,
        100
    );
    ctx.drawImage(
        restartImage,
        canvas.width / 2 - 50,
        canvas.height / 2 + 50,
        100,
        50
    );
}

//이미지 로딩 완료 시 게임 시작 화면 그리기
let bgImageLoaded = new Promise((resolve) => {
    bgImage.onload = resolve;
});

let startImageLoaded = new Promise((resolve) => {
    startImage.onload = resolve;
});

Promise.all([bgImageLoaded, startImageLoaded]).then(drawStartScreen);
/** end of 3-1 게임 시작 화면을 그리는 함수 */


function animate() {
    
    InitSound();
    
    if (gameOver) {
        drawGameOverScreen();
        bgmSound.pause();
        bgmSound.currentTime=0;
        return;
    }
    bgmSound.play();
    

    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    timer++;

    backgroundImg(bgX);
    backgroundImg(bgX + canvas.width);
    bgX -= BG_MOVING_SPEED;
    if (bgX < -canvas.width) bgX = 0;
    const randbox = [30]
    const selected = randbox[Math.floor(Math.random() * randbox.length)];
    if (timer % selected === 0) {
        generateObstacles();
    }
    updateObstacles();

    rtan.draw();
    if (jump) {
        rtan.y -= jumpSpeed;
        if (rtan.y < 0) rtan.y = 0;
    } else if (rtan.y < 450) {
        rtan.y += jumpSpeed;
        if (rtan.y > 450) rtan.y = 450;
    }
    
}

function backgroundImg(bgX) {
    ctx.drawImage(bgImage, bgX, 0, canvas.width, canvas.height);
}

function drawGameOverScreen() {
    ctx.drawImage(gameoverImage, 150, 100, 500, 200);
    ctx.drawImage(restartImage, canvas.width / 2 - 50, canvas.height / 2 + 50, 100, 50);
}

function restartGame() 
{
    obstacleArray = [];
    score = 0;
    scoreText.innerHTML = "현재점수: " + score;
    gameOver = false;
    timer = 0;
    animate();
}


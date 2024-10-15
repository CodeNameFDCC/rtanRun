
/** 3-1 배경 화면 그리기 */
function backgroundImg(bgX) {
    ctx.drawImage(bgImage, bgX, 0, canvas.width, canvas.height);
}
// 시작 화면 그리기
function drawStartScreen() {
    // 배경 이미지 그리기
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    backgroundImg(0);
    // 시작 이미지 그리기
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
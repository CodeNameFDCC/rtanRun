const images = [rtanAImage, rtanBImage, rtanCImage, rtanDImage, rtanEImage];
const frameInterval = 3; // 각 이미지가 표시될 프레임 수


const rtan = {
    x: 10,
    y: 450,
    width: 50,
    height: 50,
    draw() {
        if (gameOver) {
            defeatSound.play();
            ctx.drawImage(rtanCrashImage, this.x, this.y, this.width, this.height);
        } else {
            const imageIndex = Math.floor(timer / frameInterval) % images.length;
            ctx.drawImage(images[imageIndex], this.x, this.y, this.width, this.height);
        }
    }
};

function collision(rtan, obstacle) {
    return !(
        rtan.x > obstacle.x + obstacle.width ||
        rtan.x + rtan.width < obstacle.x ||
        rtan.y > obstacle.y + obstacle.height ||
        rtan.y + rtan.height < obstacle.y
    );
}
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    rtan.x = event.clientX - rect.left -30;
    rtan.y = event.clientY - rect.top -30;
    if(rtan.y <= 20) rtan.y = 20;
});
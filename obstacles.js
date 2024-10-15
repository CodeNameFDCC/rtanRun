// 장애물 관리 코드

const obstacleTypes = [

    { width: 10, height: 10, speed: 5, image: obstacleImage1,},
    { width: 20, height: 200, speed: 5, image: obstacleImage1 },
    { width: 10, height: 10, speed: 5, image: obstacleImage1 },
    { width: 10, height: 300, speed: 5, image: obstacleImage1 },
    { width: 25, height: 25, speed: 5, image: obstacleImage1 },
    { width: 10, height: 15, speed: 5, image: obstacleImage1 },
    { width: 400, height: 10, speed: 5, image: obstacleImage1 },
    { width: 10, height: 10, speed: 5, image: obstacleImage1 },
    { width: 30, height: 10, speed: 5, image: obstacleImage1 },
    { width: 200, height: 10, speed: 5, image: obstacleImage1 },
    { width: 10, height: 30, speed: 5, image: obstacleImage1 },
    { width: 15, height: 15, speed: 10, image: obstacleImage2 },
    { width: 25, height: 25, speed: 9, image: obstacleImage2 },
    { width: 30, height: 30, speed: 8, image: obstacleImage2 },
    { width: 40, height: 40, speed: 7, image: obstacleImage2 },
    { width: 50, height: 50, speed: 6, image: obstacleImage2 },
    { width: 100, height: 100, speed: 6, image: obstacleImage2 },
    { width: 50, height: 100, speed: 6, image: obstacleImage2 },
    { width: 100, height: 50, speed: 6, image: obstacleImage2 },
    { width: 200, height: 50, speed: 6, image: obstacleImage2 },
    { width: 50, height: 200, speed: 6, image: obstacleImage2 },
    { width: 200, height: 200, speed: 6, image: obstacleImage2 }
];

class Obstacle {
    constructor(type) {
        this.width = type.width;
        this.height = type.height;
        this.speed = type.speed + Math.sin(timer)*timer%10;
        this.image = type.image;
        this.x = canvas.width;
        this.y = Math.floor(Math.random() * (canvas.height - this.height - 30)) + 30;
    }

    draw() {
        ctx.drawImage(this.image, this.x + Math.cos(timer / 10) * 10, this.y + Math.sin(timer / 10) * 10, this.width, this.height);
    }

    move() {
        this.x -= this.speed;
    }
}

let obstacleArray = [];

function generateObstacles() {
    const randomType = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)];
    const newObstacle = new Obstacle(randomType);
    obstacleArray.push(newObstacle);
}


function updateObstacles() {
    obstacleArray.forEach((obstacle, index) => {
        obstacle.move();
        obstacle.draw();

        if (obstacle.x + obstacle.width < 0) {
            obstacleArray.splice(index, 1);
            scoreSound.currentTime = 0;
            score += 10;
            scoreText.innerHTML = "현재점수: " + score;
            scoreSound.play();
        }

        if (collision(rtan, obstacle)) {
            gameOver = true;
        }
    });
}

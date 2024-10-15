// 이벤트 처리 코드


//키가 내려갔다 무엇이? 
document.addEventListener("keydown", function (e) {
    if (e.code === "Space") {//그것은 바로 공간 키
        jumpSound.currentTime = 0; //사운드 실행 길이를 즉시 초기화 함으로 소리 끊김 현상 즉결처형
        jumpSound.play(); //드랍더 비트!
    }
    if (e.code === "Space" && !jump) {
        jump = true; //나 지금 점프 중이야

    }
});

//키가 올라갔다 무엇이? 
document.addEventListener("keyup", function (e) {
    if (e.code === "Space") {//그것은 바로 공간 키
        jump = false;
    }
});

canvas.addEventListener("click", function (e) {//누가 마우스 클릭 소리를 내었는가?
    const rect = canvas.getBoundingClientRect();//사각형
    const x = e.clientX - rect.left; //x 좌표와 사각형의 왼쪽
    const y = e.clientY - rect.top; //y 좌표와 사각형의 위쪽

    if (!gameStarted && x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) { //게임이 실행중이 아니고 x초기값부터 켄버스의 크기까지 그리고 y도 포함하여 사각형 크기 이내에 있을경우
        gameStarted = true;//게임을 시작하지
        animate();//애니메이션 함수 호출
    }

    if (gameOver && x >= canvas.width / 2 - 50 && x <= canvas.width / 2 + 50 && //게임 종료일경우 마우스가 켄버스 이내일경우 
        y >= canvas.height / 2 + 50 && y <= canvas.height / 2 + 100) {
        restartGame();//게임을 다시 시작하지
    }
});

canvas.addEventListener("mousemove", function (e) {//마우스 이동시
    const rect = canvas.getBoundingClientRect(); //공간 감지
    const x = e.clientX - rect.left;//수평
    const y = e.clientY - rect.top;//수직

    if (gameOver && x >= canvas.width / 2 - 50 && x <= canvas.width / 2 + 50 && //게임 종료 상태일경우 그리고 좌표의 수평이 +-50 만큼 이내일경우
        y >= canvas.height / 2 + 50 && y <= canvas.height / 2 + 100) {//수직좌표 중심으로부터 50 과 100 이내일경우
        canvas.style.cursor = "pointer";//마우스의 상태는 포인터
    } else if (!gameStarted && x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) { //게임 시작이 아닐경우 수평의 좌표 0보다 크거나 켄버스의 크기 이내일경우 수직의 좌표가 0보다 크거나 같고 켄버스 크기 이내일경우
        canvas.style.cursor = "pointer"; //마우스의 스타일은 포인터
    } else {//그 이외
        canvas.style.cursor = "default";// 마우스는 기본스타일
    }
});

audioVolume.addEventListener("change", function(e) 
    {
        let temp =this.value/10;
        bgmSound.volume = temp;
        jumpSound.volume = temp;
        defeatSound.volume = temp;
        scoreSound.volume = temp;
        console.log(this.value/10);
    })

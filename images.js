// 이미지 로딩 코드

const bgImage = new Image(); // BackgroundImage 배경 이미지는 이미지 할당
bgImage.src = "./images/background2.jpg";// 주소 할당

const startImage = new Image();//시작 이미지
startImage.src = "./images/gamestart.png";

const gameoverImage = new Image();//게임 종료 이미지
gameoverImage.src = "./images/gameover.png";

const restartImage = new Image();//다시 시작 이미지
restartImage.src = "./images/restart.png";

const rtanAImage = new Image();//주인공의 A이미지
rtanAImage.src = "./images/rtan_running_a.png";

const rtanBImage = new Image();//숫자로 처리해도 되지만
rtanBImage.src = "./images/rtan_running_b.png";

const rtanCImage = new Image();//그냥 기존의 형태로 진행
rtanCImage.src = "./images/rtan_running_c.png";

const rtanDImage = new Image();//음 엄청 흥미롭다.
rtanDImage.src = "./images/rtan_running_d.png";

const rtanEImage = new Image();// 여기까지 주인공의 E 이미지
rtanEImage.src = "./images/rtan_running_e.png";

const rtanCrashImage = new Image();// 주인공 르탄 게임오버시 이미지
rtanCrashImage.src = "./images/rtan_crash.png";

const obstacleImage1 = new Image();// 방해물체 공룡 멸종으로 순서가 살짝 묘하다
obstacleImage1.src = "./images/obstacle2.png";

const obstacleImage2 = new Image();//방해물체 공룡이 사라진 이때
obstacleImage2.src = "./images/obstacle3.png";

const obstacleImage3 = new Image();//방해물체 공룡을 빼버려서 그러하다
obstacleImage3.src = "./images/obstacle4.png";

const obstacleImage4 = new Image();//방해물체 뭔가 명칭이 이상하지만
obstacleImage4.src = "./images/obstacle5.png";

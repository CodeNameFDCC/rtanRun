/** 오디오 객체 생성 및 설정 */
const jumpSound = new Audio(); // 점프 소리
jumpSound.src = "./sounds/jump.mp3";
const bgmSound = new Audio(); // 배경 음악
bgmSound.src = "./sounds/bgm.mp3";
const scoreSound = new Audio(); // 점수 획득 소리
scoreSound.src = "./sounds/score.mp3";
const defeatSound = new Audio(); // 게임 오버 소리
defeatSound.src = "./sounds/defeat1.mp3";

const audioVolume = document.getElementById('volume-control');



function Mute() {
    bgmSound.muted = !bgmSound.muted;
    jumpSound.muted = !jumpSound.muted;
    scoreSound.muted = !scoreSound.muted;
    defeatSound.muted = !defeatSound.muted;
    document.getElementById('mute_state').textContent = bgmSound.muted
}

let soundInit = false;

function InitSound() {
    if(soundInit) return;
    soundInit = true;
    console.log("소리의 크기는 줄어들었다.");
    bgmSound.volume == .5;
    jumpSound.volume == .5;
    scoreSound.volume == .5;
    defeatSound.volume == .5;
}
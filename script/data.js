// =========================
// SCORE SYSTEM (Updated)
// =========================
const SCORE_MAP = {
    easy: 1,
    medium: 2,
    hard: 3,
    expert: 4
};

// ดึงชื่อผู้ใช้ปัจจุบัน
function getCurrentUser() {
    return localStorage.getItem("loggedInUser") || "Guest";
}

// โหลดคะแนนเฉพาะของคนที่ Login อยู่
function loadScore() {
    const user = getCurrentUser();
    return parseInt(localStorage.getItem(`score_${user}`)) || 0;
}

// บันทึกคะแนนแยกตามชื่อผู้ใช้
function saveScore(score) {
    const user = getCurrentUser();
    localStorage.setItem(`score_${user}`, score);
}

function updateScoreUI() {
    const scoreEl = document.getElementById("scoreTitle");
    if (scoreEl) {
        scoreEl.innerText = `${getCurrentUser()} | Score: ${loadScore()}`;
    }
}

function addScore(difficulty) {
    let score = loadScore();
    score += SCORE_MAP[difficulty];
    saveScore(score);
    updateScoreUI();
}

function resetScore() {
    const user = getCurrentUser();
    localStorage.setItem(`score_${user}`, 0);
    updateScoreUI();
}
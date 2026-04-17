// =========================================
// SCORE SYSTEM (Synced with User Database)
// =========================================
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

// โหลดคะแนนเฉพาะของคนที่ Login อยู่จากฐานข้อมูล users
function loadScore() {
    const username = getCurrentUser();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(function(u) {
        return u.username === username;
    });
    return user && user.score ? user.score : 0;
}

// บันทึกคะแนนกลับเข้าไปในฐานข้อมูล users
function saveScore(newScore) {
    const username = getCurrentUser();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userIndex = users.findIndex(function(u) {
        return u.username === username;
    });
    
    if (userIndex !== -1) {
        users[userIndex].score = newScore;
        localStorage.setItem("users", JSON.stringify(users));
    }
}

// อัปเดตข้อความบนหน้าจอ (โชว์ชื่อผู้ใช้ + คะแนน)
function updateScoreUI() {
    const scoreEl = document.getElementById("scoreTitle");
    if (scoreEl) {
        scoreEl.innerText = `${getCurrentUser()} | Score: ${loadScore()}`;
    }
}

// ฟังก์ชันเพิ่มคะแนนเมื่อตอบถูก
function addScore(difficulty) {
    let currentScore = loadScore();
    let pointsToAdd = SCORE_MAP[difficulty] || 1;
    currentScore += pointsToAdd;
    
    saveScore(currentScore);
    updateScoreUI();
}

function resetScore() {
    // ปิดการรีเซ็ตคะแนนรวม เพื่อป้องกันไม่ให้คะแนนโปรไฟล์/Leaderboard ของผู้เล่นหาย
    console.log("Global score reset disabled to protect user data.");
}
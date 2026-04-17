const ITEMS_PER_PAGE = 10; // แสดงทีละ 10 คน
let currentlyShowing = ITEMS_PER_PAGE; 
let players = [];

function loadLeaderboard() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    players = users.map(u => ({
        name: u.username,
        score: u.score !== undefined ? u.score : 0
    }));
    // เรียงลำดับจากคะแนนมากไปน้อย
    players.sort((a, b) => b.score - a.score);
}

function renderBoard() {
    let board = document.getElementById("board");
    if (!board) return;
    board.innerHTML = "";

    if (players.length === 0) {
        board.innerHTML = "<p style='color: var(--subtext); padding: 20px;'>ยังไม่มีข้อมูล</p>";
        updatePaginationButtons();
        return;
    }

    // แสดงผลเท่ากับจำนวน currentlyShowing
    players.slice(0, currentlyShowing).forEach((p, index) => {
        let row = document.createElement("div");
        row.className = "row " + getTopClass(index);
        row.innerHTML = `
            <div>${index + 1}</div>
            <div class="player">${p.name}</div>
            <div>${p.score}</div>
        `;
        board.appendChild(row);
    });

    // อัปเดตปุ่มโชว์เพิ่ม/ลด
    updatePaginationButtons();
}

// ฟังก์ชันสำหรับจัดการปุ่ม Show More / Show Less
function updatePaginationButtons() {
    let container = document.querySelector(".leaderboard-container");
    
    // หากล่องหุ้มปุ่ม ถ้าไม่มีให้สร้างใหม่
    let btnWrapper = document.getElementById("paginationWrapper");
    if (!btnWrapper) {
        btnWrapper = document.createElement("div");
        btnWrapper.id = "paginationWrapper";
        btnWrapper.className = "pagination-wrapper";
        container.appendChild(btnWrapper);
    }

    // ล้างปุ่มเก่าออกก่อน
    btnWrapper.innerHTML = "";

    // 1. ปุ่ม Show Less (โชว์เมื่อแสดงมากกว่า 10 คน)
    if (currentlyShowing > ITEMS_PER_PAGE) {
        let lessBtn = document.createElement("button");
        lessBtn.innerText = "↑ Show Less";
        lessBtn.className = "show-more-btn";
        lessBtn.onclick = () => {
            // ลบจำนวนที่โชว์ลง 10 แต่ต้องไม่ต่ำกว่าค่าเริ่มต้น (10)
            currentlyShowing = Math.max(ITEMS_PER_PAGE, currentlyShowing - ITEMS_PER_PAGE);
            renderBoard();
        };
        btnWrapper.appendChild(lessBtn);
    }

    // 2. ปุ่ม Show More (โชว์เมื่อยังมีคนเหลือให้แสดง)
    if (currentlyShowing < players.length) {
        let moreBtn = document.createElement("button");
        moreBtn.innerText = "Show More ↓";
        moreBtn.className = "show-more-btn";
        moreBtn.onclick = () => {
            // เพิ่มจำนวนที่โชว์อีก 10
            currentlyShowing += ITEMS_PER_PAGE;
            renderBoard();
        };
        btnWrapper.appendChild(moreBtn);
    }

    // ถ้าไม่มีปุ่มอะไรเลย ให้ลบกล่องหุ้มทิ้ง
    if (btnWrapper.innerHTML === "") {
        btnWrapper.remove();
    }
}

function getTopClass(index) {
    if (index === 0) return "top1";
    if (index === 1) return "top2";
    if (index === 2) return "top3";
    return "";
}

document.addEventListener('DOMContentLoaded', () => {
    loadLeaderboard();
    renderBoard();
});
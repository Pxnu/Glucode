const MAX_PLAYERS = 10;
let players = [];

function loadLeaderboard() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    players = users.map(u => ({
        name: u.username,
        score: u.score || Math.floor(Math.random() * 1000) // ตัวอย่างดึงคะแนน
    }));
}

function renderBoard() {
    let board = document.getElementById("board");
    if (!board) return;
    board.innerHTML = "";

    if (players.length === 0) {
        board.innerHTML = "<p style='color: var(--subtext); padding: 20px;'>ยังไม่มีข้อมูล</p>";
        return;
    }

    players.sort((a, b) => b.score - a.score);

    players.slice(0, MAX_PLAYERS).forEach((p, index) => {
        let row = document.createElement("div");
        row.className = "row " + getTopClass(index);
        row.innerHTML = `
            <div>${index + 1}</div>
            <div class="player">${p.name}</div>
            <div>${p.score}</div>
        `;
        board.appendChild(row);
    });
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
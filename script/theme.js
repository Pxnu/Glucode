// --- script/theme.js ---
function applyTheme() {
    let savedTheme = localStorage.getItem("theme") || "light";
    document.body.className = ""; // ล้างคลาสเดิม
    if (savedTheme !== "light") {
        document.body.classList.add(savedTheme);
    }
}

// โหลดธีมทันทีที่เปิดหน้าเว็บ
document.addEventListener('DOMContentLoaded', applyTheme);
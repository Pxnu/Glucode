// --- welcome.js ---

document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const welcomeOverlay = document.getElementById("welcomeOverlay");
    const welcomeName = document.getElementById("welcomeName");

    // ถ้าไม่มี Element พวกนี้ หรือไม่ได้ล็อกอิน ให้ข้ามไปเลย
    if (!welcomeOverlay || !welcomeName || !loggedInUser) return;

    // เช็คว่าเคยโชว์ Welcome ไปหรือยัง
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");

    if (!hasSeenWelcome) {
        // ถ้ายังไม่เคยดู ให้ใส่ชื่อ User และแสดงแอนิเมชัน
        welcomeName.textContent = loggedInUser;
        
        setTimeout(() => {
            welcomeOverlay.classList.add("hide");
            sessionStorage.setItem("hasSeenWelcome", "true"); 
        }, 2500);
    } else {
        // ถ้าเคยดูแล้ว ซ่อนทันที
        welcomeOverlay.style.display = "none";
    }
});
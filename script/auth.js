// --- Glucode/script/auth.js ---
const loggedInUser = localStorage.getItem('loggedInUser');

/**
 * ฟังก์ชันช่วยคำนวณหาเส้นทางไปหน้า Login.html ให้ถูกต้องจากทุกหน้า
 */
function getLoginPath() {
    const currentPath = window.location.pathname.toLowerCase();
    // ถ้าอยู่ในโฟลเดอร์ย่อย (Game, Quest, LeaderBoard) ให้ถอยกลับไป 1 ชั้นแล้วเข้าโฟลเดอร์ Glucode
    if (currentPath.includes("game") || currentPath.includes("quest") || currentPath.includes("leaderboard")) {
        return "../Login.html";
    }
    // ถ้าอยู่ที่หน้า Home หรือหน้าอื่นๆ ในโฟลเดอร์ Glucode อยู่แล้ว
    return "./Login.html";
}

const loginPath = getLoginPath();

// ตรวจสอบว่าล็อกอินหรือยัง ถ้ายังให้ส่งไปหน้า Login
if (!loggedInUser) {
    window.location.href = loginPath;
}

// ใช้ Event Delegation เพื่อดักจับการคลิกปุ่ม Logout ที่สร้างจาก ui.js
document.addEventListener('click', (e) => {
    // ค้นหาว่าสิ่งที่คลิกคือปุ่มที่มี id เป็น logoutBtn หรือไม่
    const logoutBtn = e.target.closest('#logoutBtn');
    
    if (logoutBtn) {
        e.preventDefault();
        
        // แสดงสถานะกำลัง Logout
        document.body.style.cursor = "wait";
        logoutBtn.style.cursor = "wait";
        logoutBtn.style.pointerEvents = "none";
        logoutBtn.textContent = "Logging out...";

        setTimeout(() => {
            document.body.style.cursor = "default";
            // ล้างข้อมูลการเข้าสู่ระบบ
            localStorage.removeItem("loggedInUser");
            sessionStorage.removeItem("hasSeenWelcome");
            
            // ส่งกลับหน้า Login ตาม Path ที่คำนวณได้
            window.location.href = loginPath;
        }, 800);
    }
});
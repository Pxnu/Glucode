// --- auth.js ---

// 1. ตรวจสอบสถานะการล็อกอินทันที
const loggedInUser = localStorage.getItem('loggedInUser');

if (!loggedInUser) {
    // ถ้าไม่มีข้อมูลล็อกอิน เตะกลับหน้า Login
    window.location.href = './Login.html';
}

// 2. ระบบ Logout (ใช้ Event Delegation เพื่อจับการคลิกปุ่มที่ถูกสร้างผ่าน JS)
document.addEventListener('click', (e) => {
    // เช็คว่าสิ่งที่คลิกคือปุ่ม Logout หรือไม่
    if (e.target && e.target.id === 'logoutBtn') {
        e.preventDefault();
        
        const logoutBtn = e.target;

        // เปลี่ยนเมาส์เป็นรูปกำลังโหลด
        document.body.style.cursor = "wait";
        logoutBtn.style.cursor = "wait";
        logoutBtn.style.pointerEvents = "none"; 
        logoutBtn.textContent = "Logging out..."; 

        // หน่วงเวลา 1 วินาทีเพื่อจำลองการโหลด
        setTimeout(() => {
            document.body.style.cursor = "default";
            localStorage.removeItem("loggedInUser"); 
            sessionStorage.removeItem("hasSeenWelcome"); 
            window.location.href = "./Login.html"; 
        }, 800); 
    }
});
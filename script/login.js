document.addEventListener('DOMContentLoaded', () => {
    const toggleModeBtn = document.getElementById('toggleModeBtn');
    const toggleText = document.getElementById('toggleText');
    const title = document.getElementById('title');
    const emailGroup = document.getElementById('emailGroup');
    const mainBtn = document.getElementById('mainBtn');
    const message = document.getElementById('message');

    let isLoginMode = true;

    // ==========================================
    // 1. ระบบสลับโหมด Login / Register
    // ==========================================
    toggleModeBtn.addEventListener('click', () => {
        isLoginMode = !isLoginMode;
        message.textContent = ''; // ล้างข้อความแจ้งเตือน
        
        // ล้างช่องกรอกข้อมูล
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('email').value = '';

        if (isLoginMode) {
            title.textContent = 'Login';
            emailGroup.classList.add('hidden');
            mainBtn.textContent = 'Login';
            toggleText.textContent = "Don't have an account?";
            toggleModeBtn.textContent = 'SIGN UP';
        } else {
            title.textContent = 'Register';
            emailGroup.classList.remove('hidden');
            mainBtn.textContent = 'Register';
            toggleText.textContent = "Already have an account?";
            toggleModeBtn.textContent = 'SIGN IN';
        }
    });

    // ==========================================
    // 2. จัดการเมื่อกดปุ่ม Login / Register
    // ==========================================
    mainBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const email = document.getElementById('email').value.trim();
        
        // ดึงข้อมูลผู้ใช้ทั้งหมดจาก localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // ตรวจสอบว่ากรอกข้อมูลครบไหม
        if (!username || !password || (!isLoginMode && !email)) {
            showMessage('⚠️ กรุณากรอกข้อมูลให้ครบถ้วน', '#ef4444');
            return;
        }

        if (isLoginMode) {
            // ---------------------------------
            // โหมด: LOGIN (เข้าสู่ระบบ)
            // ---------------------------------
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                showMessage('✅ เข้าสู่ระบบสำเร็จ! กำลังไปยังหน้าแรก...', '#22c55e');
                
                // บันทึกว่าใครกำลังล็อกอินอยู่
                localStorage.setItem('loggedInUser', username);
                
                // หน่วงเวลา 1 วินาทีแล้วเด้งไปหน้า Home (ใช้ Path './Home.html')
                setTimeout(() => {
                    window.location.href = './Home.html'; 
                }, 1000);
            } else {
                showMessage('❌ Username หรือ Password ไม่ถูกต้อง', '#ef4444');
            }
        } else {
            // ---------------------------------
            // โหมด: REGISTER (สมัครสมาชิก)
            // ---------------------------------
            if (users.find(u => u.username === username)) {
                showMessage('⚠️ Username นี้ถูกใช้งานแล้ว กรุณาใช้ชื่ออื่น', '#ef4444');
                return;
            }

            // สร้าง User ใหม่ พร้อมเซ็ตค่าเริ่มต้นให้รองรับระบบเกม, Quest, ถ้วยรางวัล
            users.push({
                username: username,
                email: email,
                password: password,
                score: 0,             // คะแนนสำหรับ Leaderboard
                coins: 0,             // เหรียญสำหรับซื้อของ
                achievements: [],     // ถ้วยรางวัลที่ปลดล็อก
                quests: {},           // ความคืบหน้าเควส
                claimedQuests: []     // เควสที่กดรับรางวัลไปแล้ว
            });

            // บันทึกข้อมูลกลับไปที่ localStorage
            localStorage.setItem('users', JSON.stringify(users));
            showMessage('🎉 สมัครสมาชิกสำเร็จ! กรุณาล็อกอิน', '#22c55e');
            
            // สลับกลับมาหน้าล็อกอินอัตโนมัติหลังจากสมัครเสร็จ
            setTimeout(() => {
                toggleModeBtn.click();
            }, 1500);
        }
    });

    // ฟังก์ชันช่วยแสดงข้อความแจ้งเตือน
    function showMessage(text, color) {
        message.textContent = text;
        message.style.color = color;
        message.style.fontWeight = "bold";
        message.style.marginTop = "10px";
    }
});
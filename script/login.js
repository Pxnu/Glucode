document.addEventListener('DOMContentLoaded', () => {
    const toggleModeBtn = document.getElementById('toggleModeBtn');
    const toggleText = document.getElementById('toggleText');
    const title = document.getElementById('title');
    const emailGroup = document.getElementById('emailGroup');
    const mainBtn = document.getElementById('mainBtn');
    const message = document.getElementById('message');

    let isLoginMode = true;

    toggleModeBtn.addEventListener('click', () => {
        isLoginMode = !isLoginMode;
        message.textContent = '';
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

    mainBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const email = document.getElementById('email').value.trim();
        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (!username || !password || (!isLoginMode && !email)) {
            showMessage('⚠️ กรุณากรอกข้อมูลให้ครบถ้วน', '#ef4444');
            return;
        }

        if (isLoginMode) {
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                showMessage('✅ เข้าสู่ระบบสำเร็จ!', '#22c55e');
                localStorage.setItem('loggedInUser', username);

                // 🔥 เช็คว่า User คนนี้เคยดู Tutorial หรือยัง
                setTimeout(() => {
                    if (user.hasSeenTutorial) {
                        window.location.href = './Home.html';
                    } else {
                        // ถ้ายังไม่เคยดู ให้ไปหน้า Tutorial (ปรับ Path ตามจริง)
                        window.location.href = '../Glucode tutorial/tutorial.html';
                    }
                }, 1000);
            } else {
                showMessage('❌ Username หรือ Password ไม่ถูกต้อง', '#ef4444');
            }
        } else {
            if (users.find(u => u.username === username)) {
                showMessage('⚠️ Username นี้ถูกใช้งานแล้ว', '#ef4444');
                return;
            }

            users.push({
                username: username,
                email: email,
                password: password,
                score: 0,
                coins: 0,
                achievements: [],
                quests: {},
                claimedQuests: [],
                hasSeenTutorial: false // 🔥 ตั้งค่าเริ่มต้นเป็นยังไม่เคยดู
            });

            localStorage.setItem('users', JSON.stringify(users));
            showMessage('🎉 สมัครสมาชิกสำเร็จ! กรุณาล็อกอิน', '#22c55e');
            setTimeout(() => { toggleModeBtn.click(); }, 1500);
        }
    });

    function showMessage(text, color) {
        message.textContent = text;
        message.style.color = color;
        message.style.fontWeight = "bold";
    }
});
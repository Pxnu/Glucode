document.addEventListener('DOMContentLoaded', () => {
    let saved = localStorage.getItem("theme") || "light";
    const themeSelect = document.getElementById("themeSelect");
    if (themeSelect) themeSelect.value = saved;

    themeSelect.addEventListener('change', (e) => {
        localStorage.setItem("theme", e.target.value);
        applyTheme();
    });

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let isLogin = true;

    document.getElementById('toggleModeBtn').addEventListener('click', () => {
        isLogin = !isLogin;
        let title = document.getElementById("title");
        let btn = document.getElementById("mainBtn");
        let emailGroup = document.getElementById("emailGroup");
        let text = document.getElementById("toggleText");

        if (isLogin) {
            title.innerText = "Login"; btn.innerText = "Login";
            emailGroup.classList.add("hidden"); text.innerText = "Don't have an account?";
        } else {
            title.innerText = "Register"; btn.innerText = "Register";
            emailGroup.classList.remove("hidden"); text.innerText = "Already have an account?";
        }
        document.getElementById("message").innerText = "";
    });

    document.getElementById('mainBtn').addEventListener('click', () => {
        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let msg = document.getElementById("message");

        if (isLogin) {
            let user = users.find(u => (u.username === username || u.email === username) && u.password === password);
            if (user) {
                msg.innerText = "Login successful!"; msg.style.color = "green";
                localStorage.setItem("loggedInUser", user.username);
                sessionStorage.removeItem('hasSeenWelcome');
                // แก้ไข Path ตรงนี้ให้เป็นโฟลเดอร์เดียวกัน
                setTimeout(() => { window.location.href = "./Home.html"; }, 800);
            } else {
                msg.innerText = "Invalid email or password"; msg.style.color = "red";
            }
        } else {
            if (!username || !email || !password) { msg.innerText = "Fill all fields"; msg.style.color = "orange"; return; }
            users.push({ username, email, password, coins: 0 });
            localStorage.setItem("users", JSON.stringify(users));
            msg.innerText = "Registration successful!"; msg.style.color = "green";
            setTimeout(() => document.getElementById('toggleModeBtn').click(), 1000);
        }
    });
});
const loggedInUser = localStorage.getItem('loggedInUser');

// คำนวณ Path กลับหน้า Login อัตโนมัติ
let loginPath = "./Login.html";
const currentPath = window.location.pathname.toLowerCase();
if (currentPath.includes("quest") || currentPath.includes("game") || currentPath.includes("leaderboard")) {
    loginPath = "../Glucode/Login.html";
}

if (!loggedInUser) {
    window.location.href = loginPath;
}

document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'logoutBtn') {
        e.preventDefault();
        const logoutBtn = e.target;
        document.body.style.cursor = "wait";
        logoutBtn.style.cursor = "wait";
        logoutBtn.style.pointerEvents = "none";
        logoutBtn.textContent = "Logging out...";

        setTimeout(() => {
            document.body.style.cursor = "default";
            localStorage.removeItem("loggedInUser");
            sessionStorage.removeItem("hasSeenWelcome");
            window.location.href = loginPath;
        }, 800);
    }
});
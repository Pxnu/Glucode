// --- ui.js ---

document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) return; // ป้องกัน Error หากไม่มียูสเซอร์

    // 1. ดึงข้อมูลเหรียญ
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = users.find(u => u.username === loggedInUser);
    let userCoins = currentUser && currentUser.coins !== undefined ? currentUser.coins : 0;

    // 2. จัดการ Navbar (ซ่อน Sign Up / Sign In)
    const navLinks = document.querySelectorAll('nav ul li a');
    const navList = document.querySelector('nav ul');

    navLinks.forEach(link => {
        if(link.textContent === 'Sign Up' || link.textContent === 'Sign In') {
            link.parentElement.style.display = 'none';
        }
    });

    // 3. สร้าง Dropdown สำหรับ Leader Board ด้วย JS (เพิ่มใหม่)
    const leaderBoardLink = Array.from(navLinks).find(link => link.textContent.trim() === 'Leader Board');
    if (leaderBoardLink) {
        const leaderBoardLi = leaderBoardLink.parentElement;
        leaderBoardLi.classList.add('user-dropdown-container');
        
        // แทนที่ปุ่มเดิมด้วยโครงสร้าง Dropdown
        leaderBoardLi.innerHTML = `
            <a href="#" class="user-dropdown-btn">
                Leader Board <i id="leaderboardIcon" class="fa-solid fa-angle-down"></i>
            </a>
            <div class="user-dropdown-menu" style="left: 50%; transform: translateX(-50%); text-align: center;">
                <a href="./leader board.HTML" class="dropdown-item">Duo</a>
                <a href="./leader_board_jigsaws.html" class="dropdown-item">Jigsaws</a> 
            </div>
        `;

        // เพิ่ม Event เช็ค Hover เพื่อเปลี่ยนไอคอนของ Leader Board
        const leaderboardIcon = document.getElementById('leaderboardIcon');
        leaderBoardLi.addEventListener('mouseenter', () => {
            leaderboardIcon.classList.remove('fa-angle-down');
            leaderboardIcon.classList.add('fa-angle-up');
        });
        leaderBoardLi.addEventListener('mouseleave', () => {
            leaderboardIcon.classList.remove('fa-angle-up');
            leaderboardIcon.classList.add('fa-angle-down');
        });
    }

    // 4. สร้าง Dropdown Menu ของ User
    const userLi = document.createElement('li');
    userLi.classList.add('user-dropdown-container');

    userLi.innerHTML = `
        <a href="#" id="dropdownToggleBtn" class="user-dropdown-btn">
            ${loggedInUser} <i id="dropdownIcon" class="fa-solid fa-angle-down"></i>
        </a>
        <div class="user-dropdown-menu" id="dropdownMenu">
            <div class="dropdown-item coin-display">
                <span>Coins: <strong>${userCoins}</strong></span>
            </div>
            <hr class="dropdown-divider">
            <a href="./Profile.html" class="dropdown-item">Profile</a>
            <a href="./Shop.html" class="dropdown-item">Shop</a>
            <a href="./Quests.html" class="dropdown-item">Quests</a>
            <a href="#" id="logoutBtn" class="dropdown-item">Logout</a>
        </div>
    `;
    
    navList.appendChild(userLi);

    // 5. แทร็ก CSS ลงในหน้าเว็บ
    const style = document.createElement('style');
    style.innerHTML = `
        .user-dropdown-btn { font-weight: bold; color: #333; }
        .user-dropdown-btn:hover { color: #ff7518; }
        .user-dropdown-container { position: relative; display: inline-block; }
        
        .user-dropdown-menu {
            display: none; 
            position: absolute;
            top: calc(100% + 10px); /* ดันลงมา 10px */
            right: 0;
            background-color: #ffffff;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.15);
            z-index: 1000;
            border-radius: 8px;
            overflow: visible; 
            text-align: left;
            padding: 0;
        }

        /* สะพานโปร่งใส กันเมาส์ตกหลุมอากาศ */
        .user-dropdown-menu::before {
            content: "";
            position: absolute;
            top: -10px;
            left: 0;
            width: 100%;
            height: 10px;
            background-color: transparent; 
        }

        .user-dropdown-container:hover .user-dropdown-menu { display: block; }
        
        .dropdown-item {
            color: #333 !important;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            font-size: 1.25rem;
            transition: background-color 0.2s ease;
            font-weight: normal !important;
            transform: none !important;
        }

        .dropdown-item:hover { background-color: #f0f0f0 !important; }
        .coin-display { background-color: #fffaf0; color: #d4a017 !important; cursor: default; font-weight: bold !important; }
        .dropdown-divider { margin: 0; border: 0; border-top: 1px solid #eee; }
    `;
    document.head.appendChild(style);

    // 6. ระบบเช็ค Hover เพื่อเปลี่ยน Icon ขึ้น/ลง ของ User
    const dropdownIcon = document.getElementById('dropdownIcon');
    userLi.addEventListener('mouseenter', () => {
        dropdownIcon.classList.remove('fa-angle-down');
        dropdownIcon.classList.add('fa-angle-up');
    });
    userLi.addEventListener('mouseleave', () => {
        dropdownIcon.classList.remove('fa-angle-up');
        dropdownIcon.classList.add('fa-angle-down');
    });

    // 7. อัปเดตข้อมูลในหน้า Home (Hero Greeting)
    const heroGreeting = document.querySelector('.header h2 span');
    if(heroGreeting) {
        heroGreeting.textContent = loggedInUser;
    }
});
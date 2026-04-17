/* ==========================================
   BOXGAME JS - FULL VERSION (Persistence & Skip)
========================================== */

// --- ข้อมูลด่าน (Easy, Medium, Hard, Expert) ---
const easyLevels = [
    { question: "สร้างหัวข้อหลัก (Main Heading)", correct: ["<h1>", "My Website", "</h1>"], choices: ["</h1>", "<h1>", "My Website"] },
    { question: "สร้างย่อหน้าเนื้อหา", correct: ["<p>", "This is a paragraph.", "</p>"], choices: ["</p>", "This is a paragraph.", "<p>"] },
    { question: "ทำให้ข้อความเป็นตัวหนา", correct: ["<b>", "Warning", "</b>"], choices: ["Warning", "</b>", "<b>"] },
    { question: "สร้างตัวเอียง", correct: ["<i>", "Italic Text", "</i>"], choices: ["</i>", "<i>", "Italic Text"] },
    { question: "ขีดเส้นใต้คำ", correct: ["<u>", "Underline", "</u>"], choices: ["Underline", "</u>", "<u>"] },
    { question: "สร้างหัวข้อรองระดับ 2", correct: ["<h2>", "Topic", "</h2>"], choices: ["Topic", "</h2>", "<h2>"] },
    { question: "ใช้ Tag Strong", correct: ["<strong>", "Alert!", "</strong>"], choices: ["<strong>", "Alert!", "</strong>"] },
    { question: "สร้างข้อความตัวเล็ก", correct: ["<small>", "Copyright", "</small>"], choices: ["</small>", "<small>", "Copyright"] },
    { question: "แสดง Code", correct: ["<code>", "print('Hi')", "</code>"], choices: ["<code>", "print('Hi')", "</code>"] },
    { question: "สร้างหัวข้อระดับ 3", correct: ["<h3>", "Title", "</h3>"], choices: ["Title", "</h3>", "<h3>"] }
];

const mediumLevels = [
    { question: "สร้างลิงก์ไป Google", correct: ['<a href="https://google.com">', "Google", "</a>"], choices: ["</a>", "Google", '<a href="https://google.com">'] },
    { question: "สร้างรายการ (List Item)", correct: ["<li>", "Item 1", "</li>"], choices: ["</li>", "Item 1", "<li>"] },
    { question: "สร้างปุ่ม Submit", correct: ["<button>", "Click Me", "</button>"], choices: ["Click Me", "</button>", "<button>"] },
    { question: "สร้างกล่อง Div", correct: ["<div>", "Content", "</div>"], choices: ["</div>", "Content", "<div>"] },
    { question: "สร้างแถวตาราง (tr)", correct: ["<tr>", "Data", "</tr>"], choices: ["</tr>", "Data", "<tr>"] },
    { question: "สร้างหัวตาราง (th)", correct: ["<th>", "Name", "</th>"], choices: ["</th>", "<th>", "Name"] },
    { question: "สร้างช่องรับตัวเลข", correct: ['<input type="number">'], choices: ['<input type="number">'] },
    { question: "สร้างฟอร์ม (Form)", correct: ["<form>", "Form Content", "</form>"], choices: ["</form>", "Form Content", "<form>"] },
    { question: "สร้างคำพูดอ้างอิง", correct: ["<blockquote>", "Quote", "</blockquote>"], choices: ["<blockquote>", "Quote", "</blockquote>"] },
    { question: "สร้างรายการแบบตัวเลข (ol)", correct: ["<ol>", "Item", "</ol>"], choices: ["</ol>", "<ol>", "Item"] }
];

const hardLevels = [
    { question: "สร้างหัวข้อ (h1) และปุ่มต่อกัน", correct: ["<h1>", "Title", "</h1>", "<button>", "OK", "</button>"], choices: ["</button>", "<h1>", "OK", "Title", "</h1>", "<button>"] },
    { question: "สร้างลิงก์ที่หุ้มรูปภาพ", correct: ['<a href="#">', '<img src="pic.jpg">', "</a>"], choices: ["</a>", '<img src="pic.jpg">', '<a href="#">'] },
    { question: "สร้างย่อหน้าที่มีตัวหนาข้างใน", correct: ["<p>", "Hi", "<b>", "User", "</b>", "</p>"], choices: ["</b>", "<p>", "Hi", "User", "</p>", "<b>"] },
    { question: "สร้างรายการแบบ ul > li", correct: ["<ul>", "<li>", "Info", "</li>", "</ul>"], choices: ["</li>", "<ul>", "Info", "</ul>", "<li>"] },
    { question: "สร้าง header > nav", correct: ["<header>", "<nav>", "Menu", "</nav>", "</header>"], choices: ["</nav>", "<header>", "Menu", "</header>", "<nav>"] },
    { question: "สร้างฟอร์มที่มีรหัสผ่านและปุ่ม", correct: ["<form>", '<input type="password">', "<button>", "Go", "</button>", "</form>"], choices: ["<form>", "Go", "</button>", '<input type="password">', "</form>", "<button>"] },
    { question: "สร้างกล่องที่มีเส้นคั่น (div > hr)", correct: ["<div>", "Text", "<hr>", "</div>"], choices: ["<hr>", "<div>", "</div>", "Text"] },
    { question: "สร้างตารางย่อ (table > tr > td)", correct: ["<table>", "<tr>", "<td>", "Val", "</td>", "</tr>", "</table>"], choices: ["</td>", "<table>", "</tr>", "<td>", "Val", "<tr>", "</table>"] },
    { question: "สร้าง Footer พร้อมตัวเล็ก", correct: ["<footer>", "<small>", "Copy", "</small>", "</footer>"], choices: ["<footer>", "</small>", "Copy", "</footer>", "<small>"] },
    { question: "สร้าง Label คู่กับช่องเลือกสี", correct: ["<label>", "Color", "</label>", '<input type="color">'], choices: ["Color", "</label>", '<input type="color">', "<label>"] }
];

const expertLevels = [
    { question: "สร้างโครงสร้างบทความ (Article)", correct: ["<article>", "<h2>", "Title", "</h2>", "<p>", "Text", "</p>", "</article>"], choices: ["<p>", "</article>", "<h2>", "Title", "</h2>", "Text", "<article>", "</p>"] },
    { question: "สร้างแถบด้านข้าง (Aside)", correct: ["<aside>", "<ul>", "<li>", "<a>", "Link", "</a>", "</li>", "</ul>", "</aside>"], choices: ["<li>", "</a>", "<ul>", "<a>", "Link", "</aside>", "<aside>", "</li>", "</ul>"] },
    { question: "สร้าง Figure พร้อมคำบรรยาย", correct: ["<figure>", '<img src="img.jpg">', "<figcaption>", "Caption", "</figcaption>", "</figure>"], choices: ["<figcaption>", "Caption", "</figure>", '<img src="img.jpg">', "</figcaption>", "<figure>"] },
    { question: "สร้างแบบฟอร์ม Fieldset", correct: ["<fieldset>", "<legend>", "Login", "</legend>", "<input>", "</fieldset>"], choices: ["<input>", "<legend>", "</fieldset>", "<fieldset>", "Login", "</legend>"] },
    { question: "สร้าง Main และ Section", correct: ["<main>", "<section>", "<h1>", "Hi", "</h1>", "</section>", "</main>"], choices: ["</main>", "<h1>", "<section>", "<main>", "Hi", "</h1>", "</section>"] },
    { question: "สร้างตาราง thead และ tbody", correct: ["<table>", "<thead>", "<tr>", "<th>", "ID", "</th>", "</tr>", "</thead>", "<tbody>", "</tbody>", "</table>"], choices: ["<thead>", "</th>", "<tbody>", "<table>", "<tr>", "ID", "</th>", "</tr>", "</thead>", "<th>", "</table>", "<tbody>"] },
    { question: "สร้าง nav ที่มีป้ายชื่อ label", correct: ["<nav>", "<label>", "Menu", "</label>", "<ul>", "<li>", "Home", "</li>", "</ul>", "</nav>"], choices: ["</nav>", "<li>", "<label>", "Home", "</li>", "<nav>", "Menu", "</label>", "<ul>", "</ul>"] },
    { question: "สร้างส่วน Details", correct: ["<details>", "<summary>", "Read More", "</summary>", "<p>", "Content", "</p>", "</details>"], choices: ["<details>", "</summary>", "Content", "</details>", "<p>", "<summary>", "Read More", "</p>"] },
    { question: "สร้างฟอร์ม Label ผูกกับ Input", correct: ["<form>", "<label>", "Username", "</label>", '<input type="text">', "<button>", "Send", "</button>", "</form>"], choices: ["<button>", "<label>", "Username", "</label>", "Send", "</form>", "<form>", '<input type="text">', "</button>"] },
    { question: "สร้าง Video พร้อมไฟล์สำรอง", correct: ["<video>", '<source src="v.mp4">', '<source src="v.webm">', "Error", "</video>"], choices: ["<video>", "Error", '<source src="v.webm">', "</video>", '<source src="v.mp4">'] }
];

/* =========================
   GAME STATE
========================= */
const MAX_PLAYED_PER_DIFF = 5;
let currentDifficulty = "easy";
let currentLevel = 0;
let answerList = [];
let isSubmitting = false;

let easyPlayed = [];
let mediumPlayed = [];
let hardPlayed = [];
let expertPlayed = [];

/* =========================
   💾 ระบบจดจำสถานะ (Persistence)
========================= */
function saveGameState() {
    const state = {
        currentDifficulty: currentDifficulty,
        currentLevel: currentLevel,
        easyPlayed: easyPlayed,
        mediumPlayed: mediumPlayed,
        hardPlayed: hardPlayed,
        expertPlayed: expertPlayed
    };
    localStorage.setItem('boxgame_persistence', JSON.stringify(state));
}

function loadGameState() {
    const saved = localStorage.getItem('boxgame_persistence');
    if (saved) {
        const state = JSON.parse(saved);
        currentDifficulty = state.currentDifficulty || "easy";
        currentLevel = state.currentLevel || 0;
        easyPlayed = state.easyPlayed || [];
        mediumPlayed = state.mediumPlayed || [];
        hardPlayed = state.hardPlayed || [];
        expertPlayed = state.expertPlayed || [];
        return true;
    }
    return false;
}

/* =========================
   🚀 ระบบ Skip (ใช้ Coins x1)
========================= */
function skipLevel() {
    if (isSubmitting) return;

    let cost = 0;
    if (currentDifficulty === "easy") cost = 10;
    else if (currentDifficulty === "medium") cost = 20;
    else if (currentDifficulty === "hard") cost = 30;
    else if (currentDifficulty === "expert") cost = 40;

    const loggedInUser = localStorage.getItem('loggedInUser');
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userIndex = users.findIndex(u => u.username === loggedInUser);

    if (userIndex !== -1 && users[userIndex].coins >= cost) {
        isSubmitting = true;
        users[userIndex].coins -= cost;
        localStorage.setItem('users', JSON.stringify(users));

        // อัปเดต UI เหรียญบน Navbar
        const coinDisplay = document.querySelector('.coin-display strong');
        if (coinDisplay) coinDisplay.innerText = users[userIndex].coins;

        document.getElementById("result").innerText = `ข้ามด่านสำเร็จ! (-${cost} Coins)`;
        document.getElementById("result").style.color = "#f59e0b";

        setTimeout(() => {
            let next = getRandomLevelByDifficulty();
            if (next === -1) {
                if (currentDifficulty === "easy") currentDifficulty = "medium";
                else if (currentDifficulty === "medium") currentDifficulty = "hard";
                else if (currentDifficulty === "hard") currentDifficulty = "expert";
                else { showFinishPopup(); isSubmitting = false; return; }
                currentLevel = getRandomLevelByDifficulty();
            } else {
                currentLevel = next;
            }
            loadLevel();
            document.getElementById("result").innerText = "";
            isSubmitting = false;
        }, 800);
    } else {
        document.getElementById("result").innerText = `เหรียญไม่พอ! (ต้องการ ${cost} Coins)`;
        document.getElementById("result").style.color = "#ef4444";
        document.getElementById("answerArea").classList.add("wrong");
        setTimeout(() => {
            document.getElementById("answerArea").classList.remove("wrong");
        }, 400);
    }
}

/* =========================
   CORE LOGIC
========================= */
function getRandomLevelByDifficulty() {
    let pool, played;
    if (currentDifficulty === "easy") { pool = easyLevels; played = easyPlayed; }
    else if (currentDifficulty === "medium") { pool = mediumLevels; played = mediumPlayed; }
    else if (currentDifficulty === "hard") { pool = hardLevels; played = hardPlayed; }
    else { pool = expertLevels; played = expertPlayed; }

    if (played.length >= MAX_PLAYED_PER_DIFF) return -1;

    let rand;
    do { rand = Math.floor(Math.random() * pool.length); } while (played.includes(rand));
    played.push(rand);
    return rand;
}

function getCurrentLevelData() {
    if (currentDifficulty === "easy") return easyLevels[currentLevel];
    if (currentDifficulty === "medium") return mediumLevels[currentLevel];
    if (currentDifficulty === "hard") return hardLevels[currentLevel];
    return expertLevels[currentLevel];
}

function loadLevel() {
    const area = document.getElementById('answerArea');
    if (area) area.classList.remove("correct", "wrong");
    answerList = [];

    const level = getCurrentLevelData();
    const totalPlayed = easyPlayed.length + mediumPlayed.length + hardPlayed.length + expertPlayed.length;

    document.getElementById("levelTitle").innerText = `Level: ${totalPlayed} / 20`;
    document.getElementById("question").innerText = level.question;

    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    let displayChoices = [...new Set(level.choices)].sort(() => Math.random() - 0.5);

    displayChoices.forEach(choice => {
        let btn = document.createElement("div");
        btn.className = "block";
        btn.innerText = choice;
        btn.onclick = () => addAnswer(choice);
        choicesDiv.appendChild(btn);
    });

    renderAnswer();
    saveGameState(); // บันทึกทุกครั้งที่โหลดด่าน
}

function renderAnswer() {
    let area = document.getElementById("answerArea");
    area.innerHTML = "";
    answerList.forEach((value, index) => {
        let block = document.createElement("div");
        block.className = "block add";
        block.innerText = value;
        block.onclick = () => removeAt(index);
        area.appendChild(block);
    });
}

function addAnswer(value) {
    let level = getCurrentLevelData();
    if (answerList.length >= level.correct.length) return;
    if (answerList.includes(value)) return;
    answerList.push(value);
    renderAnswer();
}

function removeLast() { answerList.pop(); renderAnswer(); }
function removeAt(index) { answerList.splice(index, 1); renderAnswer(); }
function resetBoard() { answerList = []; renderAnswer(); }

function submitAnswer() {
    if (isSubmitting) return;
    isSubmitting = true;

    let level = getCurrentLevelData();
    let result = document.getElementById("result");
    let answerArea = document.getElementById("answerArea");

    if (JSON.stringify(answerList) === JSON.stringify(level.correct)) {
        result.style.color = "#10B981";
        result.innerText = "ถูกต้อง!";
        answerArea.classList.add("correct");

        setTimeout(() => {
            let next = getRandomLevelByDifficulty();
            if (next === -1) {
                if (currentDifficulty === "easy") currentDifficulty = "medium";
                else if (currentDifficulty === "medium") currentDifficulty = "hard";
                else if (currentDifficulty === "hard") currentDifficulty = "expert";
                else { showFinishPopup(); isSubmitting = false; return; }
                currentLevel = getRandomLevelByDifficulty();
            } else {
                currentLevel = next;
            }
            loadLevel();
            result.innerText = "";
            isSubmitting = false;
        }, 800);
    } else {
        result.style.color = "#ef4444";
        result.innerText = "ยังไม่ถูก ลองใหม่";
        answerArea.classList.add("wrong");
        setTimeout(() => { answerArea.classList.remove("wrong"); isSubmitting = false; }, 400);
    }
}

function showFinishPopup() {
    const popup = document.getElementById("finishPopup");
    popup.style.display = "flex";
    localStorage.removeItem('boxgame_persistence'); // จบเกมให้ล้างค่าที่เซฟไว้
}

function playAgain() {
    localStorage.removeItem('boxgame_persistence');
    location.reload();
}

function goHome() { window.location.href = "../Home.html"; }
function closePopup() { document.getElementById("finishPopup").style.display = "none"; }

window.onload = () => {
    if (!loadGameState()) {
        currentLevel = getRandomLevelByDifficulty();
    }
    loadLevel();
};
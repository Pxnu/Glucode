/* =========================
   LEVEL DATA
========================= */
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
   FUNCTIONS
========================= */

function getRandomLevelByDifficulty(){
    let pool, played;
    if(currentDifficulty === "easy") { pool = easyLevels; played = easyPlayed; } 
    else if(currentDifficulty === "medium") { pool = mediumLevels; played = mediumPlayed; } 
    else if(currentDifficulty === "hard") { pool = hardLevels; played = hardPlayed; }
    else { pool = expertLevels; played = expertPlayed; }

    if(played.length >= MAX_PLAYED_PER_DIFF) return -1;

    let rand;
    do { rand = Math.floor(Math.random() * pool.length); } while(played.includes(rand));
    played.push(rand);
    return rand;
}

function getCurrentLevelData(){
    if(currentDifficulty === "easy") return easyLevels[currentLevel];
    if(currentDifficulty === "medium") return mediumLevels[currentLevel];
    if(currentDifficulty === "hard") return hardLevels[currentLevel];
    return expertLevels[currentLevel];
}

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateLevelColor(total){
    const el = document.getElementById("levelTitle");

    if(total <= 5) {
        el.style.background = "#22c55e";
    }
    else if(total <= 10) {
        el.style.background = "#eab308";
    }
    else if(total <= 15) {
        el.style.background = "#f97316";
    }
    else {
        el.style.background = "#ef4444";
    }

    el.style.color = "white";
}

function loadLevel(){
    let answerArea = document.getElementById('answerArea');

    answerArea.classList.remove("correct","wrong");
    answerList = [];

    let level = getCurrentLevelData();
    let totalPlayed =
        easyPlayed.length +
        mediumPlayed.length +
        hardPlayed.length +
        expertPlayed.length;

    document.getElementById("levelTitle").innerText =
        `Level: ${totalPlayed} / 20`;

    updateLevelColor(totalPlayed);
    if (typeof updateScoreUI === "function") updateScoreUI();

    document.getElementById("question").innerText = level.question;

    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    let displayChoices = [...new Set(level.choices)];
    shuffle(displayChoices);

    displayChoices.forEach(choice => {
        let btn = document.createElement("div");
        btn.className = "block";
        btn.innerText = choice;
        btn.onclick = () => addAnswer(choice);
        choicesDiv.appendChild(btn);
    });

    renderAnswer();
}

function renderAnswer(){
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

function addAnswer(value){
    let level = getCurrentLevelData();
    if(answerList.length >= level.correct.length) return;
    if(answerList.includes(value)) return;

    answerList.push(value);
    renderAnswer();
}

function removeLast(){
    answerList.pop();
    renderAnswer();
}
    
function removeAt(index) {
    answerList.splice(index, 1);
    renderAnswer();
}

function resetBoard(){
    answerList = [];
    renderAnswer();

    let answerArea = document.getElementById("answerArea");
    let result = document.getElementById("result");

    result.innerText = "";
    answerArea.classList.remove("correct", "wrong");
}

function submitAnswer(){
    if(isSubmitting) return;

    isSubmitting = true;

    let level = getCurrentLevelData();
    let result = document.getElementById("result");
    let answerArea = document.getElementById("answerArea");

    answerArea.classList.remove("wrong", "correct");

    if(JSON.stringify(answerList) === JSON.stringify(level.correct)){
        result.style.color = "green";
        result.innerText = "ถูกต้อง!";
        answerArea.classList.add("correct");

        if (typeof addScore === "function") addScore(currentDifficulty);

        setTimeout(() => {
            let next = getRandomLevelByDifficulty();

            if(next === -1){
                if(currentDifficulty === "easy") {
                    currentDifficulty = "medium";
                }
                else if(currentDifficulty === "medium") {
                    currentDifficulty = "hard";
                }
                else if(currentDifficulty === "hard") {
                    currentDifficulty = "expert";
                }
                else {
                    showFinishPopup();
                    answerArea.classList.remove("correct");
                    isSubmitting = false;
                    return;
                }
                currentLevel = getRandomLevelByDifficulty();
            } else {
                currentLevel = next;
            }

            loadLevel();
            result.innerText = "";
            isSubmitting = false;

        }, 800);

    } else {
        result.style.color = "red";
        result.innerText = "ยังไม่ถูก ลองใหม่";
        answerArea.classList.add("wrong");

        setTimeout(() => {
            answerArea.classList.remove("wrong");
            isSubmitting = false;
        }, 400);
    }
}
    
/* =========================
THEME SYSTEM
========================= */
function setTheme(theme) {
    document.body.className = "";
    if (theme !== "light") {
        document.body.classList.add(theme);
    }
    localStorage.setItem("theme", theme);
}

function applyTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    const selector = document.getElementById("themeSelect");
    if (selector) selector.value = savedTheme;
}

/* =========================
USER SYSTEM
========================= */
function showFinishPopup() {
    const user = typeof getCurrentUser === "function" ? getCurrentUser() : "Guest";
    const finalScore = typeof loadScore === "function" ? loadScore() : 0;
    
    document.getElementById("finishPopup").querySelector("h2").innerText = `🎉 ยินดีด้วยคุณ ${user}!`;
    document.getElementById("finalScoreText").innerText = `คะแนนรวมทั้งหมดของคุณคือ: ${finalScore}`;
    document.getElementById("finishPopup").style.display = "flex";
}

function playAgain(){
    if (typeof resetScore === "function") resetScore();

    currentDifficulty = "easy";
    easyPlayed = [];
    mediumPlayed = [];
    hardPlayed = [];
    expertPlayed = [];

    answerList = [];
    isSubmitting = false;

    currentLevel = getRandomLevelByDifficulty();
    loadLevel();

    document.getElementById("finishPopup").style.display = "none";
}

function goHome(){
    window.location.href = "../Home.html";
}

function closePopup(){
    document.getElementById("finishPopup").style.display = "none";

    document.addEventListener("keydown", function(event){
        if(event.key === "Escape"){
            closePopup();
        }
    });

    document.getElementById("finishPopup").addEventListener("click", function(event){
        if(event.target === this){
            closePopup();
        }
    });
}
    
function skipToFinish(){
    if (typeof saveScore === "function") saveScore(50);
    if (typeof updateScoreUI === "function") updateScoreUI();
    showFinishPopup();
}

/* =========================
   START GAME
========================= */
window.onload = () => {
    applyTheme();
    if (typeof updateScoreUI === "function") updateScoreUI();
    currentLevel = getRandomLevelByDifficulty();
    loadLevel();
};
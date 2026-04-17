document.addEventListener('DOMContentLoaded', () => {
    let currentUser = localStorage.getItem("loggedInUser");

    let currentStage = 1;
    let maxStage = 10;
    let correctAnswer = "";
    let isSubmitting = false;
    let totalScore = 0;

    // --- ตัวแปรสำหรับ Achievement ---
    let duoCorrectTotal = 0;
    let duoStreak = 0;
    let questionStartTime = 0;

    // --- ข้อมูลโจทย์ (แบบเต็มครบทุกข้อ) ---
    const quizData = {
        level1: [
            { tags: ["<h1>", "Welcome", "</h1>"], hint: "สร้างหัวเรื่องใหญ่ 'Welcome'" },
            { tags: ["<p>", "Hello World", "</p>"], hint: "สร้างย่อหน้าข้อความ 'Hello World'" },
            { tags: ["<button>", "Submit", "</button>"], hint: "สร้างปุ่ม 'Submit'" },
            { tags: ["<div>", "Box", "</div>"], hint: "สร้างกล่องที่มีข้อความ 'Box'" },
            { tags: ["<span>", "Text", "</span>"], hint: "สร้าง span ที่มี 'Text'" },
            { tags: ["<h2>", "Title", "</h2>"], hint: "สร้างหัวข้อย่อย 'Title'" },
            { tags: ["<a href='#'>", "Link", "</a>"], hint: "สร้างลิงก์ที่มีข้อความ 'Link'" },
            { tags: ["<img src='img.jpg'>"], hint: "เพิ่มรูปภาพ 'img.jpg'" },
            { tags: ["<ul>", "<li>Item 1</li>", "<li>Item 2</li>", "</ul>"], hint: "สร้างรายการไม่เรียงลำดับ 2 รายการ" },
            { tags: ["<ol>", "<li>First</li>", "<li>Second</li>", "</ol>"], hint: "สร้างรายการเรียงลำดับ 2 รายการ" },
            { tags: ["<strong>", "Bold", "</strong>"], hint: "ข้อความตัวหนา 'Bold'" },
            { tags: ["<em>", "Italic", "</em>"], hint: "ข้อความตัวเอียง 'Italic'" },
            { tags: ["<input type='text'>"], hint: "สร้างช่องกรอกข้อความ" },
            { tags: ["<input type='password'>"], hint: "สร้างช่องกรอกรหัสผ่าน" },
            { tags: ["<form>", "<input>", "</form>"], hint: "สร้างฟอร์มง่าย ๆ" },
            { tags: ["<hr>"], hint: "สร้างเส้นคั่น" },
            { tags: ["<br>"], hint: "ขึ้นบรรทัดใหม่" },
            { tags: ["<footer>", "My Footer", "</footer>"], hint: "สร้างส่วนท้าย 'My Footer'" },
            { tags: ["<header>", "My Header", "</header>"], hint: "สร้างส่วนหัว 'My Header'" },
            { tags: ["<section>", "Content", "</section>"], hint: "สร้าง section 'Content'" }
        ],
        level2: [
            { tags: ["<table>", "<tr><td>1</td><td>2</td></tr>", "</table>"], hint: "สร้างตาราง 1 แถว 2 คอลัมน์" },
            { tags: ["<div class='box'>", "Hello", "</div>"], hint: "สร้าง div พร้อม class 'box'" },
            { tags: ["<a href='https://example.com'>", "Go", "</a>"], hint: "สร้างลิงก์ไป example.com" },
            { tags: ["<input type='checkbox'>"], hint: "สร้าง checkbox" },
            { tags: ["<input type='radio'>"], hint: "สร้าง radio button" },
            { tags: ["<label for='id1'>", "Name", "</label>"], hint: "สร้าง label ให้ input id='id1'" },
            { tags: ["<textarea>", "Write here", "</textarea>"], hint: "สร้าง textarea พร้อมข้อความ" },
            { tags: ["<select>", "<option>Option 1</option>", "<option>Option 2</option>", "</select>"], hint: "สร้าง dropdown 2 ตัวเลือก" },
            { tags: ["<img src='pic.jpg' alt='Picture'>"], hint: "เพิ่มรูปพร้อม alt" },
            { tags: ["<meta charset='UTF-8'>"], hint: "กำหนด charset UTF-8" },
            { tags: ["<link rel='stylesheet' href='style.css'>"], hint: "เชื่อมไฟล์ CSS" },
            { tags: ["<nav>", "Menu", "</nav>"], hint: "สร้าง navigation bar" },
            { tags: ["<article>", "Article Content", "</article>"], hint: "สร้าง article" },
            { tags: ["<aside>", "Sidebar", "</aside>"], hint: "สร้าง sidebar" },
            { tags: ["<main>", "Main Content", "</main>"], hint: "สร้าง main content" },
            { tags: ["<strong>", "Important", "</strong>"], hint: "ข้อความสำคัญ" },
            { tags: ["<em>", "Note", "</em>"], hint: "ข้อความหมายเหตุ" },
            { tags: ["<small>", "Fine print", "</small>"], hint: "ข้อความตัวเล็ก" },
            { tags: ["<mark>", "Highlight", "</mark>"], hint: "ข้อความเน้นสี" }
        ],
        level3: [
            { tags: ["<div id='container'>", "<p>Nested</p>", "</div>"], hint: "div ภายในมี p" },
            { tags: ["<ul>", "<li><a href='#'>Link1</a></li>", "<li><a href='#'>Link2</a></li>", "</ul>"], hint: "ul กับ li ที่มีลิงก์" },
            { tags: ["<form action='/submit' method='post'>", "<input type='text'>", "</form>"], hint: "ฟอร์ม POST" },
            { tags: ["<table>", "<tr><th>Name</th><th>Age</th></tr>", "<tr><td>Alice</td><td>20</td></tr>", "</table>"], hint: "ตารางชื่อและอายุ" },
            { tags: ["<section>", "<article>", "Content", "</article>", "</section>"], hint: "section ภายในมี article" },
            { tags: ["<div class='grid'>", "<div>1</div>", "<div>2</div>", "</div>"], hint: "div แบบ grid" },
            { tags: ["<audio controls>", "<source src='audio.mp3' type='audio/mpeg'>", "</audio>"], hint: "เพิ่ม audio player" },
            { tags: ["<video controls>", "<source src='video.mp4' type='video/mp4'>", "</video>"], hint: "เพิ่ม video player" },
            { tags: ["<iframe src='https://example.com'></iframe>"], hint: "ฝัง iframe" },
            { tags: ["<canvas id='myCanvas'></canvas>"], hint: "สร้าง canvas" },
            { tags: ["<blockquote>", "Quote", "</blockquote>"], hint: "สร้าง blockquote" },
            { tags: ["<code>", "let x = 10;", "</code>"], hint: "เขียนโค้ด snippet" },
            { tags: ["<pre>", "Preformatted", "</pre>"], hint: "ข้อความ preformatted" },
            { tags: ["<details>", "<summary>More</summary>", "Extra info", "</details>"], hint: "details/summary" },
            { tags: ["<dl>", "<dt>Term</dt>", "<dd>Definition</dd>", "</dl>"], hint: "definition list" },
            { tags: ["<figure>", "<img src='img.jpg'>", "<figcaption>Caption</figcaption>", "</figure>"], hint: "figure + caption" },
            { tags: ["<mark>", "Highlight Text", "</mark>"], hint: "เน้นข้อความ" },
            { tags: ["<b>", "Bold Text", "</b>"], hint: "ตัวหนาแบบเก่า" },
            { tags: ["<i>", "Italic Text", "</i>"], hint: "ตัวเอียงแบบเก่า" },
            { tags: ["<s>", "Strikethrough", "</s>"], hint: "ขีดฆ่าข้อความ" }
        ]
    };

    function addScoreToUser(points) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let userIndex = users.findIndex(u => u.username === currentUser);

        if (userIndex !== -1) {
            if (!users[userIndex].score) {
                users[userIndex].score = 0;
            }
            users[userIndex].score += points;
            localStorage.setItem("users", JSON.stringify(users));
        }
    }

    function getScoreByStage(stage) {
        if (stage >= 1 && stage <= 3) return 4;
        if (stage >= 4 && stage <= 6) return 8;
        if (stage >= 7 && stage <= 10) return 11;
        return 0;
    }

    function getLevelByStage(stage) {
        if (stage >= 1 && stage <= 3) return 'level1';
        if (stage >= 4 && stage <= 6) return 'level2';
        if (stage >= 7 && stage <= 10) return 'level3';
        return 'level1';
    }

    function generateQuiz() {
        document.getElementById("userInput").value = "";
        document.getElementById("userInput").disabled = false;
        document.getElementById("resultMessage").innerHTML = "";
        document.getElementById("resultMessage").className = "";

        let level = getLevelByStage(currentStage);
        const levelArray = quizData[level];
        const randomIndex = Math.floor(Math.random() * levelArray.length);
        const currentItem = levelArray[randomIndex];

        correctAnswer = currentItem.tags.join('');
        document.getElementById("hintText").textContent = `Stage ${currentStage}: ${currentItem.hint}`;
        document.getElementById("levelDisplay").textContent = `Level: ${currentStage} / ${maxStage}`;

        // เริ่มจับเวลาเมื่อโจทย์แสดง
        questionStartTime = Date.now();
    }

    function normalizeAnswer(str) {
        return str.trim().replace(/\s+/g, '').toLowerCase();
    }

    function checkAnswer() {
        if (isSubmitting) return;
        isSubmitting = true;

        let answerField = document.getElementById("userInput");
        let resultDisplay = document.getElementById("resultMessage");
        let submitBtn = document.getElementById("submitBtn");
        let userTyped = answerField.value.trim();

        if (userTyped === "") {
            resultDisplay.textContent = "⚠️ กรุณากรอกคำตอบ";
            resultDisplay.className = "error";
            isSubmitting = false;
            return;
        }

        if (normalizeAnswer(userTyped) === normalizeAnswer(correctAnswer)) {
            let earnedScore = getScoreByStage(currentStage);
            totalScore += earnedScore;
            addScoreToUser(earnedScore);
            document.getElementById("scoreDisplay").textContent = `${currentUser} - Score: ${totalScore}`;
            resultDisplay.textContent = `🎉 ถูกต้องเก่งมาก! +${earnedScore} คะแนน`;
            resultDisplay.className = "success";

            submitBtn.disabled = true;
            answerField.disabled = true;

            // 🏆 ===== ระบบเช็ค ACHIEVEMENT ===== 🏆
            let timeTaken = (Date.now() - questionStartTime) / 1000;
            duoCorrectTotal++;
            duoStreak++;

            if (typeof window.unlockAchievement === "function") {
                window.unlockAchievement("quiz-first");
                if (duoCorrectTotal >= 3) window.unlockAchievement("quiz-3");
                if (duoCorrectTotal >= 10) {
                    window.unlockAchievement("quiz-10");
                    window.unlockAchievement("quiz-master");
                }
                if (duoStreak >= 5) window.unlockAchievement("quiz-5");
                if (timeTaken <= 5) window.unlockAchievement("quiz-speed");
            }
            // ===================================

            if (currentStage < maxStage) {
                currentStage++;
                setTimeout(() => {
                    generateQuiz();
                    submitBtn.disabled = false;
                    answerField.disabled = false;
                    isSubmitting = false;
                }, 1500);
            } else {
                resultDisplay.innerHTML = `🏆 ยินดีด้วย! คุณผ่านทุกสเตจแล้ว!<br>คะแนนรวม: ${totalScore} คะแนน`;
                submitBtn.disabled = true;
                answerField.disabled = true;
                isSubmitting = false;
            }
        } else {
            resultDisplay.textContent = "❌ ยังไม่ถูก ลองอีกครั้งนะ";
            resultDisplay.className = "error";
            isSubmitting = false;

            // โดนตัด Streak เมื่อตอบผิด
            duoStreak = 0;
        }
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.username === currentUser);
    totalScore = user && user.score ? user.score : 0;

    document.getElementById("hintTitle").textContent = "Glucode ૮₍'˶• . • ⑅ ₎ა";
    document.getElementById("scoreDisplay").textContent = `${currentUser} - Score: ${totalScore}`;

    generateQuiz();

    document.getElementById("submitBtn").addEventListener("click", checkAnswer);

    document.getElementById("userInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            if (!isSubmitting) {
                checkAnswer();
            }
        }
    });
});
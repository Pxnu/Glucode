let step = 0;
let autoTimer = null;

const content = document.getElementById("content");
const cursor = document.getElementById("cursor");

function render() {
    clearTimeout(autoTimer);

    if (step === 0) {
        content.innerHTML = `
      <h1>Welcome to Glucode</h1>
      <p>เริ่มต้นการเรียนรู้การเขียนโค้ดแบบเกม</p>
    `;
    }
    else if (step === 1) {
        content.innerHTML = `
      <h1>Glucode System</h1>
      <p>
        Glucode เป็นเว็บเกมที่ช่วยฝึกเขียนโค้ด<br>
        โดยใช้เกมทำให้เรียนง่ายและสนุก
      </p>
      <p>
        มี 2 รูปแบบ:
        <br>🧩 ต่อจิ๊กซอ
        <br>💻 พิมพ์โค้ด
      </p>
    `;
    }
    else if (step === 2) {
        content.innerHTML = `
      <h1>🧩 Jigsaw Mode</h1>
      <p>ลากโค้ดมาต่อให้ถูกต้องตามลำดับ</p>
      <video autoplay muted loop playsinline style="
        width: 900px;
        max-width: 95%;
        border-radius: 20px;
        margin-top: 20px;
        box-shadow: 0 15px 40px rgba(0,0,0,0.25);
      ">
        <source src="../Glucode VdoTutorial/2.mp4" type="video/mp4">
      </video>
    `;

        autoTimer = setTimeout(() => {
            step++;
            render();
        }, 8000); // ⏱️ ปรับเวลาได้
    }
    else if (step === 3) {
        content.innerHTML = `
      <h1>💻 Code Mode</h1>
      <p>พิมพ์โค้ดให้ถูกต้องตามโจทย์</p>
      <video autoplay muted loop playsinline style="
        width: 900px;
        max-width: 95%;
        border-radius: 20px;
        margin-top: 20px;
        box-shadow: 0 15px 40px rgba(0,0,0,0.25);
      ">
        <source src="../Glucode VdoTutorial/1.mp4" type="video/mp4">
      </video>
    `;

        autoTimer = setTimeout(() => {
            step++;
            render();
        }, 8000);
    }
    else if (step === 4) {
        content.innerHTML = `
      <h1>Ready?</h1>
      <p>คลิกขวาเพื่อเริ่ม</p>
    `;
    }
    else if (step === 5) {
        // ✅ จำว่าดู tutorial แล้ว
        localStorage.setItem("hasSeenTutorial", "true");

        // 🔥 บอกว่า "รอบนี้ไม่ต้องโชว์ welcome"
        sessionStorage.setItem("skipWelcomeOnce", "true");

        // กลับไปที่หน้า Home
        window.location.href = "../Home.html";
    }
}

/* cursor */
document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const mid = window.innerWidth / 2;

    cursor.style.left = x + "px";
    cursor.style.top = e.clientY + "px";

    cursor.innerHTML = x < mid
        ? '<i class="fa-solid fa-angle-left"></i>'
        : '<i class="fa-solid fa-angle-right"></i>';
});

/* click (ข้ามได้ทันที) */
document.addEventListener("click", (e) => {
    const x = e.clientX;
    const mid = window.innerWidth / 2;

    // 🔥 หยุด auto ก่อน
    if (step === 2 || step === 3) {
        clearTimeout(autoTimer);
    }

    if (x < mid) step--;
    else step++;

    if (step < 0) step = 0;
    if (step > 5) step = 5;

    render();
});

// เริ่มต้นเรียกใช้งานตอนโหลดไฟล์
render();
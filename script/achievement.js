// เก็บ achievement ที่ปลดล็อกแล้ว
let unlocked = [];

// ฟังก์ชันปลดล็อก Achievement
function unlockAchievement(key) {
  if (unlocked.includes(key)) return;

  unlocked.push(key);

  const item = document.querySelector(`[data-achievement="${key}"]`);
  if (item) {
    item.textContent = item.textContent.replace("🔒", "✅");
  }

  showPopup(item ? item.textContent : key);
}

// ฟังก์ชันแสดง Popup
function showPopup(text) {
  const popup = document.getElementById("achievement-popup");
  const popupText = document.getElementById("popup-text");

  popupText.textContent = "🏆 " + text;

  popup.style.display = "block";
  popup.style.opacity = "1";

  // แสดง 4 วินาที
  setTimeout(() => {
    popup.style.opacity = "0";

    // รอให้ fade ก่อนค่อยซ่อน
    setTimeout(() => {
      popup.style.display = "none";
    }, 500);

  }, 4000);
}

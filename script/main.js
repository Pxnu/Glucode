document.addEventListener('DOMContentLoaded', () => {
    // ดึง Element ที่ต้องใช้มาเก็บไว้ในตัวแปร
    const learnBtn = document.querySelector('#LearnBtn');
    const choiceOverlay = document.querySelector('#choiceOverlay');
    const closeChoiceBtn = document.querySelector('#closeChoiceBtn');
    const choiceDuo = document.querySelector('.choice-btn-duo')
    const choiceJigsaws = document.querySelector('.choice-btn-jigsaws')

    // 1. เมื่อกดปุ่ม "Let Learn" ให้โชว์ Overlay (โดยเอาคลาส hide ออก)
    if (learnBtn && choiceOverlay) {
        learnBtn.addEventListener('click', () => {
            choiceOverlay.classList.remove('hide');
        });
    }

    // 2. เมื่อกดปุ่ม "X" ให้ซ่อน Overlay (โดยใส่คลาส hide กลับเข้าไป)
    if (closeChoiceBtn) {
        closeChoiceBtn.addEventListener('click', () => {
            choiceOverlay.classList.add('hide');
        });
    }

    // 3. (แถม) ถ้าผู้ใช้คลิกพื้นที่สีดำ (นอกกล่องเนื้อหา) ก็ให้ปิด Overlay ด้วยเพื่อความสะดวก
    if (choiceOverlay) {
        choiceOverlay.addEventListener('click', (e) => {
            // เช็คว่าจุดที่คลิกคือตัวพื้นหลังสีดำจริงๆ ไม่ใช่เผลอไปโดนกล่องสีขาว
            if (e.target === choiceOverlay) {
                choiceOverlay.classList.add('hide');
            }
        });
    }

    if(choiceDuo) {
        choiceDuo.addEventListener('click' , (e) => {
            document.body.style.cursor = 'wait'
            choiceDuo.style.cursor = 'wait'

            choiceDuo.style.pointerEvents = 'none'
            choiceDuo.textContent = 'Loading....'

            setTimeout(() => {
               document.body.style.cursor = 'default'
               window.location.href = './game/duo/Duo.html'
            }, 800);
        })
    }
});


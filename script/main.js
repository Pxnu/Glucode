document.addEventListener('DOMContentLoaded', () => {
    const learnBtn = document.querySelector('#LearnBtn');
    const choiceOverlay = document.querySelector('#choiceOverlay');
    const closeChoiceBtn = document.querySelector('#closeChoiceBtn');
    const choiceDuo = document.querySelector('.choice-btn-duo');
    const choiceBoxGame = document.querySelector('.choice-btn-box-game');

    if (learnBtn && choiceOverlay) {
        learnBtn.addEventListener('click', () => { choiceOverlay.classList.remove('hide'); });
    }

    if (closeChoiceBtn) {
        closeChoiceBtn.addEventListener('click', () => { choiceOverlay.classList.add('hide'); });
    }

    if (choiceOverlay) {
        choiceOverlay.addEventListener('click', (e) => {
            if (e.target === choiceOverlay) { choiceOverlay.classList.add('hide'); }
        });
    }

    if(choiceDuo) {
        choiceDuo.addEventListener('click' , (e) => {
            document.body.style.cursor = 'wait';
            choiceDuo.style.cursor = 'wait';
            choiceDuo.style.pointerEvents = 'none';
            choiceDuo.textContent = 'Loading....';

            setTimeout(() => {
               document.body.style.cursor = 'default';
               window.location.href = '../Glucode Game/duo.html'; // ลิงก์ไปหน้าเกม
            }, 800);
        });
    }

    if(choiceBoxGame) {
        choiceBoxGame.addEventListener('click' , (e) => {
            document.body.style.cursor = 'wait'
            choiceBoxGame.style.cursor =  'wait'
            choiceBoxGame.style.pointerEvents = 'none'
            choiceBoxGame.textContent = 'Loading....'

            setTimeout(() => {
                document.body.style.cursor = 'default'
                window.location.href = '../Glucode Game/BoxGame.html'
            }, 800);
        })
    }
});
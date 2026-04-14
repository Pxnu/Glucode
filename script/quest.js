let userStats = JSON.parse(localStorage.getItem('userStats')) || {
    coins: 0
};

let gameRecords = JSON.parse(localStorage.getItem('gameRecords')) || [];

let quests = [
    {
        id: 1,
        title: "Milestone: Rookie Coder",
        desc: "เล่นเกมจิ๊กซอว์ให้ครบ 30 เกม",
        target: 30,
        type: "milestone",
        difficulty: "easy",
        reward: 100
    },
    {
        id: 2,
        title: "Language Master",
        desc: "เรียนรู้ภาษาโค้ดได้ 5 ครั้ง",
        target: 5,
        type: "lesson",
        difficulty: "amateur",
        reward: 150
    },
    {
        id: 3,
        title: "Challenger: Expert",
        desc: "ชนะเกมระดับ Expert โดยไม่ใช้คำใบ้",
        target: 10,
        type: "challenger",
        difficulty: "expert",
        reward: 450
    }
];

let claimedRewards = JSON.parse(localStorage.getItem('claimedRewards')) || {};


function recordGame(gameData) {
    gameRecords.push({
        ...gameData,
        playedAt: new Date().toISOString()
    });

    localStorage.setItem('gameRecords', JSON.stringify(gameRecords));
    updateUI();
}

function getQuestProgress(quest) {
    let count = 0;

    gameRecords.forEach(game => {
        if (quest.type === "milestone" && game.type === "puzzle") {
            count++;
        }

        if (quest.type === "lesson" && game.type === "lesson") {
            count++;
        }

        if (
            quest.type === "challenger" &&
            game.difficulty === "expert" &&
            game.isWin &&
            !game.usedHint
        ) {
            count++;
        }
    });

    return count;
}

function updateUI() {
    document.getElementById('user-coins').innerText = userStats.coins.toLocaleString();
    renderQuests();
}

function renderQuests() {
    const listElement = document.getElementById('quest-list');
    listElement.innerHTML = '';

    quests.forEach(quest => {
        const current = getQuestProgress(quest);
        const isCompleted = current >= quest.target;
        const isClaimed = claimedRewards[quest.id];
        const progressPercent = Math.min((current / quest.target) * 100, 100);
        const color = getDifficultyColor(quest.difficulty);

        const card = `
            <div class="quest-card">
                <div class="quest-header">
                    <div>
                        <h3 style="margin:0">${quest.title}</h3>
                        <p class="subtext" style="margin: 5px 0">${quest.desc}</p>
                        <div class="reward-text">รางวัล: 💰 ${quest.reward}</div>
                    </div>
                    <span class="badge" style="background: ${color}">${quest.difficulty}</span>
                </div>
                
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${progressPercent}%; background: ${color}"></div>
                </div>
                
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 10px;">
                    <span>ความคืบหน้า</span>
                    <span>${current} / ${quest.target}</span>
                </div>
                
                <button class="btn-action"
                    ${isCompleted && !isClaimed ? `onclick="claimReward(${quest.id})"` : ''}
                    style="${
                        isClaimed
                            ? 'background: gray;'
                            : isCompleted
                            ? 'background: #4caf50;'
                            : ''
                    }">
                    ${
                        isClaimed
                            ? 'รับแล้ว'
                            : isCompleted
                            ? 'รับรางวัล'
                            : 'เล่นเลย'
                    }
                </button>
            </div>
        `;
        listElement.innerHTML += card;
    });
}

window.claimReward = function (questId) {
    const quest = quests.find(q => q.id === questId);
    const current = getQuestProgress(quest);

    if (current < quest.target) {
        alert("ยังไม่ครบเงื่อนไข!");
        return;
    }

    if (claimedRewards[questId]) {
        alert("คุณรับรางวัลไปแล้ว!");
        return;
    }

    userStats.coins += quest.reward;
    claimedRewards[questId] = true;

    localStorage.setItem('userStats', JSON.stringify(userStats));
    localStorage.setItem('claimedRewards', JSON.stringify(claimedRewards));

    alert(`ยินดีด้วย! คุณได้รับ 💰 ${quest.reward} เหรียญ`);
    updateUI();
};

function getDifficultyColor(level) {
    switch (level) {
        case 'easy': return 'var(--easy)';
        case 'amateur': return 'var(--medium)';
        case 'difficult': return 'var(--hard)';
        case 'expert': return 'var(--expert)';
        default: return '#888';
    }
}

document.addEventListener('DOMContentLoaded', updateUI);

window.playPuzzle = () => {
    recordGame({ type: "puzzle" });
};

window.learnLesson = () => {
    recordGame({ type: "lesson" });
};

window.winExpert = () => {
    recordGame({
        difficulty: "expert",
        isWin: true,
        usedHint: false
    });
};
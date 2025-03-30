document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navButtons = document.querySelectorAll('#main-nav button[data-section]');
    const statusBar = {
        teamName: document.getElementById('team-name'),
        budget: document.getElementById('budget'),
        reputation: document.getElementById('reputation'),
        gameDate: document.getElementById('game-date'),
        seasonYear: document.getElementById('season-year'),
    };
    const newsList = document.getElementById('news-list');
    const advanceDayBtn = document.getElementById('advance-day-btn');
    const saveGameBtn = document.getElementById('save-game-btn');
    const resetGameBtn = document.getElementById('reset-game-btn');
    const managerNameDisplay = document.getElementById('manager-name-display');

    const squadList = document.getElementById('squad-list');
    const formationSelect = document.getElementById('formation-select');
    const mentalitySelect = document.getElementById('mentality-select');
    const saveTacticsBtn = document.getElementById('save-tactics-btn');
    const startTrainingBtn = document.getElementById('start-training-btn');
    const trainingResult = document.getElementById('training-result');
    const trainingFacilityLevel = document.getElementById('training-facility-level');
    const copaDelReyStatus = document.getElementById('copa-del-rey-status');
    const compLeaguePos = document.querySelector('.comp-league-pos');
    const compLeaguePts = document.querySelector('.comp-league-pts');

    const transferMarketList = document.getElementById('transfer-market-list');
    const sellPlayerList = document.getElementById('sell-player-list');

    const fixturesList = document.getElementById('fixtures-list');
    const matchSimulationSection = document.getElementById('match-simulation');
    const matchResultSection = document.getElementById('match-result');
    const matchInfo = document.getElementById('match-info');
    const matchScore = document.getElementById('match-score');
    const matchEventsList = document.querySelector('#match-events ul');
    const simulateMatchBtn = document.getElementById('simulate-match-btn');
    const finalScore = document.getElementById('final-score');
    const matchSummary = document.getElementById('match-summary');
    const backToFixturesBtn = document.getElementById('back-to-fixtures');
    const nextOpponentInfo = document.getElementById('next-opponent');
    const simMatchCompetition = document.getElementById('sim-match-competition');
    const resMatchCompetition = document.getElementById('res-match-competition');

    const financeBudget = document.getElementById('finance-budget');
    const weeklyIncome = document.getElementById('weekly-income');
    const weeklyExpenses = document.getElementById('weekly-expenses');
    const ticketPriceInput = document.getElementById('ticket-price');
    const setTicketPriceBtn = document.getElementById('set-ticket-price-btn');

    const stadiumLevel = document.getElementById('stadium-level');
    const stadiumCapacity = document.getElementById('stadium-capacity');
    const stadiumUpgradeCost = document.getElementById('stadium-upgrade-cost');
    const upgradeStadiumBtn = document.getElementById('upgrade-stadium-btn');
    const trainingLevelDisplay = document.getElementById('training-level-display');
    const trainingUpgradeCost = document.getElementById('training-upgrade-cost');
    const upgradeTrainingBtn = document.getElementById('upgrade-training-btn');

     const pressSituation = document.getElementById('press-situation');
     const pressOptions = document.getElementById('press-options');
     const pressResult = document.getElementById('press-result');
     const fanSentiment = document.getElementById('fan-sentiment');
     const pressResponseButtons = document.querySelectorAll('#press-options button');

    const leagueTableBody = document.querySelector('#league-table-display tbody');
    const currentLeaguePos = document.getElementById('current-league-pos');

    const teamSelectionOverlay = document.getElementById('team-selection-overlay');
    const teamSelectDropdown = document.getElementById('team-select-dropdown');
    const managerNameInput = document.getElementById('manager-name-input');
    const confirmTeamSelectionBtn = document.getElementById('confirm-team-selection');

    const sectionTabs = document.querySelectorAll('.tabs');

    const LA_LIGA = {
        id: 'ESP1',
        name: 'الدوري الإسباني (La Liga)',
        teams: [
            { id: 'RMA', name: 'ريال مدريد', strength: 90, budget: 150000000, reputation: 95, facilities: { stadium: 4, training: 5 } },
            { id: 'BAR', name: 'برشلونة', strength: 88, budget: 100000000, reputation: 92, facilities: { stadium: 5, training: 5 } },
            { id: 'ATM', name: 'أتلتيكو مدريد', strength: 85, budget: 80000000, reputation: 88, facilities: { stadium: 3, training: 4 } },
            { id: 'SEV', name: 'إشبيلية', strength: 82, budget: 50000000, reputation: 80, facilities: { stadium: 3, training: 3 } },
            { id: 'VIL', name: 'فياريال', strength: 80, budget: 40000000, reputation: 78, facilities: { stadium: 2, training: 3 } },
            { id: 'BET', name: 'ريال بيتيس', strength: 79, budget: 35000000, reputation: 76, facilities: { stadium: 2, training: 3 } },
            { id: 'RSO', name: 'ريال سوسيداد', strength: 81, budget: 45000000, reputation: 79, facilities: { stadium: 2, training: 4 } },
            { id: 'ATH', name: 'أتلتيك بيلباو', strength: 78, budget: 30000000, reputation: 75, facilities: { stadium: 3, training: 3 } },
             { id: 'VAL', name: 'فالنسيا', strength: 77, budget: 25000000, reputation: 72, facilities: { stadium: 3, training: 2 } },
             { id: 'GET', name: 'خيتافي', strength: 74, budget: 15000000, reputation: 65, facilities: { stadium: 1, training: 2 } },
             { id: 'ESP', name: 'إسبانيول', strength: 73, budget: 18000000, reputation: 68, facilities: { stadium: 2, training: 2 } },
             { id: 'OSA', name: 'أوساسونا', strength: 72, budget: 12000000, reputation: 64, facilities: { stadium: 1, training: 2 } },
             { id: 'CAD', name: 'قادش', strength: 70, budget: 10000000, reputation: 60, facilities: { stadium: 1, training: 1 } },
             { id: 'ELC', name: 'إلتشي', strength: 69, budget: 9000000, reputation: 58, facilities: { stadium: 1, training: 1 } },
             { id: 'MAL', name: 'مايوركا', strength: 71, budget: 11000000, reputation: 62, facilities: { stadium: 1, training: 1 } },
             { id: 'RAY', name: 'رايو فاليكانو', strength: 70, budget: 10000000, reputation: 61, facilities: { stadium: 1, training: 1 } },
             { id: 'VLD', name: 'بلد الوليد', strength: 68, budget: 8000000, reputation: 57, facilities: { stadium: 1, training: 1 } },
             { id: 'ALM', name: 'ألميريا', strength: 67, budget: 7000000, reputation: 55, facilities: { stadium: 1, training: 1 } },
             { id: 'GIR', name: 'جيرونا', strength: 69, budget: 9500000, reputation: 59, facilities: { stadium: 1, training: 1 } },
             { id: 'CEL', name: 'سيلتا فيغو', strength: 76, budget: 20000000, reputation: 70, facilities: { stadium: 2, training: 2 } },

        ]
    };

    let gameState = {};
    let gameInitialized = false;

    function generatePlayer(id, teamId, position, skillRange, potentialRange, ageRange, valueRange, wageRange) {
        const skill = Math.floor(Math.random() * (skillRange[1] - skillRange[0] + 1)) + skillRange[0];
        const potential = Math.min(99, Math.max(skill, Math.floor(Math.random() * (potentialRange[1] - potentialRange[0] + 1)) + potentialRange[0]));
        const age = Math.floor(Math.random() * (ageRange[1] - ageRange[0] + 1)) + ageRange[0];
        const morale = Math.floor(Math.random() * 40) + 50;
        const fitness = Math.floor(Math.random() * 11) + 90;
        const value = (Math.floor(Math.random() * (valueRange[1] - valueRange[0] + 1)) + valueRange[0]) * 1000;
        const wage = (Math.floor(Math.random() * (wageRange[1] - wageRange[0] + 1)) + wageRange[0]) * 100;
        const contractYears = Math.floor(Math.random() * 4) + 1;

        const name = `${position} ${teamId} ${id}`;

        return { id, name, teamId, position, skill, potential, age, morale, fitness, value, wage, status: 'active', contractYears };
    }

    function generateInitialSquad(teamData) {
        const players = [];
        let playerIdCounter = Date.now();

        const baseSkill = Math.max(50, teamData.strength - 15);
        const squadTemplate = [
            { pos: 'GK', count: 3, skillR: [baseSkill, baseSkill + 15], potR: [70, 90], ageR: [20, 32], valR: [500, 6000], wageR: [30, 200] },
            { pos: 'DEF', count: 8, skillR: [baseSkill, baseSkill + 15], potR: [70, 90], ageR: [19, 33], valR: [400, 8000], wageR: [25, 250] },
            { pos: 'MID', count: 8, skillR: [baseSkill, baseSkill + 18], potR: [70, 95], ageR: [18, 34], valR: [600, 10000], wageR: [35, 300] },
            { pos: 'FWD', count: 6, skillR: [baseSkill, baseSkill + 20], potR: [70, 95], ageR: [18, 34], valR: [700, 12000], wageR: [40, 350] },
        ];

        squadTemplate.forEach(template => {
            for (let i = 0; i < template.count; i++) {
                 players.push(generatePlayer(playerIdCounter++, teamData.id, template.pos, template.skillR, template.potR, template.ageR, template.valR, template.wageR));
             }
        });
        return players;
    }

     function generateTransferMarket(count) {
         const players = [];
         let playerIdCounter = Date.now() + 100000;
         const positions = ['GK', 'DEF', 'DEF', 'DEF', 'MID', 'MID', 'MID', 'MID', 'FWD', 'FWD'];
         for(let i = 0; i < count; i++) {
             const pos = positions[Math.floor(Math.random() * positions.length)];
             players.push(generatePlayer(playerIdCounter++, 'TM', pos, [65, 85], [75, 95], [19, 30], [1000, 15000], [50, 400]));
         }
         return players;
     }

    function initGame() {
        if (gameInitialized) return;
        console.log("Initializing game...");

        const savedGame = localStorage.getItem('footballManagerSave_v2');
        if (savedGame) {
            try {
                gameState = JSON.parse(savedGame);
                gameState.currentDate = new Date(gameState.currentDate);
                if (gameState.players) {
                    gameState.players.forEach(p => ensurePlayerDataNumbers(p));
                }
                 if (gameState.transferMarket) {
                    gameState.transferMarket.forEach(p => ensurePlayerDataNumbers(p));
                 }
                 if (gameState.leagueTable) {
                     Object.values(gameState.leagueTable).forEach(teamStats => {
                         teamStats.p = Number(teamStats.p) || 0;
                         teamStats.w = Number(teamStats.w) || 0;
                         teamStats.d = Number(teamStats.d) || 0;
                         teamStats.l = Number(teamStats.l) || 0;
                         teamStats.gf = Number(teamStats.gf) || 0;
                         teamStats.ga = Number(teamStats.ga) || 0;
                         teamStats.gd = Number(teamStats.gd) || 0;
                         teamStats.pts = Number(teamStats.pts) || 0;
                     });
                 }

                console.log("Game loaded.");
                hideTeamSelection();
                gameInitialized = true;
                setupInitialUI();
                navigateToSection('dashboard');
            } catch (error) {
                 console.error("Failed to parse saved game:", error);
                 localStorage.removeItem('footballManagerSave_v2');
                 showTeamSelection();
             }
        } else {
            console.log("No saved game found or starting fresh.");
            showTeamSelection();
        }
    }

    function ensurePlayerDataNumbers(p) {
        if (!p) return;
        p.skill = Number(p.skill) || 60;
        p.potential = Number(p.potential) || p.skill;
        p.age = Number(p.age) || 24;
        p.morale = Number(p.morale) || 50;
        p.fitness = Number(p.fitness) || 75;
        p.value = Number(p.value) || 100000;
        p.wage = Number(p.wage) || 1000;
        p.contractYears = Number(p.contractYears) || 1;
    }


    function showTeamSelection() {
        console.log("Showing team selection...");
        teamSelectionOverlay.style.display = 'flex';
        teamSelectDropdown.innerHTML = '';
        LA_LIGA.teams.forEach(team => {
            const option = document.createElement('option');
            option.value = team.id;
            option.textContent = team.name;
            teamSelectDropdown.appendChild(option);
        });
        document.getElementById('game-container').style.display = 'none';
    }

    function hideTeamSelection() {
        teamSelectionOverlay.style.display = 'none';
         document.getElementById('game-container').style.display = 'block';
    }

    confirmTeamSelectionBtn.addEventListener('click', () => {
         const selectedTeamId = teamSelectDropdown.value;
         const managerName = managerNameInput.value.trim() || "المدرب";
         const selectedTeamData = LA_LIGA.teams.find(t => t.id === selectedTeamId);

         if (selectedTeamData && !gameInitialized) {
             console.log(`Team selected: ${selectedTeamData.name}, Manager: ${managerName}`);
             const initialPlayers = generateInitialSquad(selectedTeamData);
             gameState = {
                 teamId: selectedTeamId,
                 teamName: selectedTeamData.name,
                 managerName: managerName,
                 budget: selectedTeamData.budget,
                 reputation: selectedTeamData.reputation,
                 currentDate: new Date(2024, 6, 1),
                 seasonYear: "2024/2025",
                 players: initialPlayers,
                 squad: {
                     starting: initialPlayers.slice(0, 11).map(p => p.id),
                     subs: initialPlayers.slice(11, 18).map(p => p.id)
                 },
                 tactics: {
                     formation: "4-3-3",
                     mentality: "balanced",
                 },
                 finances: {
                     ticketPrice: 25,
                     sponsors: [],
                     weeklyWageBill: 0,
                 },
                 facilities: {
                     stadiumLevel: selectedTeamData.facilities.stadium,
                     stadiumCapacity: 10000 * Math.pow(1.5, selectedTeamData.facilities.stadium -1),
                     stadiumUpgradeCost: 5000000 * Math.pow(2.5, selectedTeamData.facilities.stadium -1),
                     trainingLevel: selectedTeamData.facilities.training,
                     trainingUpgradeCost: 2000000 * Math.pow(2, selectedTeamData.facilities.training -1),
                 },
                 transferMarket: generateTransferMarket(50),
                 schedule: [],
                 leagueTable: {},
                 competitions: {
                     'ESP1': { name: 'La Liga', status: 'active' },
                     'CDR': { name: 'Copa del Rey', status: 'upcoming', currentRound: 0, eliminated: false },
                 },
                 newsFeed: [`مرحباً أيها المدرب ${managerName}! تم تعيينك مدرباً لفريق ${selectedTeamData.name}.`, "الموسم على وشك البدء."],
                 currentMatchIndex: -1,
                 matchOutcomePending: null,
                 endOfSeasonProcessed: false,
             };
             gameState.facilities.stadiumCapacity = Math.floor(gameState.facilities.stadiumCapacity / 1000) * 1000;
             gameState.facilities.stadiumUpgradeCost = Math.floor(gameState.facilities.stadiumUpgradeCost / 100000) * 100000;
             gameState.facilities.trainingUpgradeCost = Math.floor(gameState.facilities.trainingUpgradeCost / 100000) * 100000;


             initializeLeagueTable();
             generateSeasonSchedule();
             calculateWeeklyWageBill();

             console.log("New game started with selected team.");
             hideTeamSelection();
             gameInitialized = true;
             setupInitialUI();
             navigateToSection('dashboard');
         } else if (gameInitialized) {
             console.log("Game already initialized.");
             hideTeamSelection();
         } else {
            console.error("Selected team data not found.");
            alert("خطأ في اختيار الفريق، الرجاء المحاولة مرة أخرى.");
         }
    });


     function setupInitialUI() {
         if (managerNameDisplay) managerNameDisplay.textContent = gameState.managerName;
         updateUI();
     }

    function saveGame() {
        if (!gameInitialized) {
             addNews("لا يمكن حفظ اللعبة قبل أن تبدأ!");
             return;
        }
        localStorage.setItem('footballManagerSave_v2', JSON.stringify(gameState));
        addNews("تم حفظ اللعبة بنجاح.");
        console.log("Game saved.");
        updateUI();
    }

     function resetGame() {
         if (confirm("هل أنت متأكد أنك تريد بدء لعبة جديدة؟ سيتم حذف التقدم الحالي.")) {
             localStorage.removeItem('footballManagerSave_v2');
             gameInitialized = false;
             location.reload();
         }
     }

    function updateUI() {
        if (!gameInitialized) return;

        statusBar.teamName.textContent = gameState.teamName;
        statusBar.budget.textContent = `€${gameState.budget.toLocaleString()}`;
        statusBar.reputation.textContent = gameState.reputation;
        statusBar.gameDate.textContent = formatDate(gameState.currentDate);
        statusBar.seasonYear.textContent = gameState.seasonYear;

        const activeSectionId = document.querySelector('.active-section')?.id;
        if (activeSectionId) {
            const sectionName = activeSectionId.replace('-section', '');
            switch (sectionName) {
                case 'dashboard': renderDashboard(); break;
                case 'team-management': renderTeamManagement(); break;
                case 'transfers': renderTransfers(); break;
                case 'fixtures': renderFixtures(); break;
                case 'league-table': renderLeagueTable(); break;
                case 'finances': renderFinances(); break;
                case 'facilities': renderFacilities(); break;
                case 'media': renderMedia(); break;
            }
        }
         renderNextMatchInfo();
         updateCompetitionStatusDisplay();
    }

    function renderDashboard() {
        renderNewsFeed();
        renderNextMatchInfo();
         renderLeaguePositionSummary();
    }

    function renderNewsFeed() {
        if (!newsList) return;
        newsList.innerHTML = '';
        const latestNews = gameState.newsFeed.slice(-10).reverse();
        latestNews.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            newsList.appendChild(li);
        });
    }

    function renderNextMatchInfo() {
         if (!nextOpponentInfo) return;
        const nextMatch = findNextMatch();
        if (nextMatch) {
             const competitionName = getCompetitionName(nextMatch.competition);
             const opponentName = getTeamNameById(nextMatch.opponentId) || nextMatch.opponentId;
            nextOpponentInfo.textContent = `الخصم: ${opponentName} (${nextMatch.type === 'home' ? 'ملعبنا' : 'خارج الديار'}) | البطولة: ${competitionName} | التاريخ: ${formatDate(nextMatch.date)}`;
        } else {
            nextOpponentInfo.textContent = "لا يوجد مباريات قادمة في الجدول (نهاية الموسم؟).";
        }
    }

     function renderLeaguePositionSummary() {
        if (!currentLeaguePos || !gameState.leagueTable) return;
        const playerTeamStats = gameState.leagueTable[gameState.teamId];
        if (playerTeamStats) {
            const position = getLeaguePosition(gameState.teamId);
            currentLeaguePos.textContent = `المركز: ${position} | النقاط: ${playerTeamStats.pts}`;
        } else {
             currentLeaguePos.textContent = `المركز: - | النقاط: -`;
        }
     }

    function renderTeamManagement() {
        if (!squadList) return;
        squadList.innerHTML = '';

         validateSquadLists();

        const startingXI = gameState.players.filter(p => gameState.squad.starting.includes(p.id));
        const substitutes = gameState.players.filter(p => gameState.squad.subs.includes(p.id));
        const reserves = gameState.players.filter(p => !gameState.squad.starting.includes(p.id) && !gameState.squad.subs.includes(p.id));


        squadList.innerHTML += '<h4>التشكيلة الأساسية</h4>';
        startingXI.sort(comparePlayersByPosition).forEach(p => squadList.appendChild(createPlayerListItem(p, 'starting')));
        if (startingXI.length < 11) {
             squadList.innerHTML += `<p style="color: red;">تحتاج إلى ${11 - startingXI.length} لاعبين إضافيين في التشكيلة الأساسية!</p>`;
        }

        squadList.innerHTML += '<hr><h4>الاحتياط (حد أقصى 7)</h4>';
        substitutes.sort(comparePlayersByPosition).forEach(p => squadList.appendChild(createPlayerListItem(p, 'subs')));

        squadList.innerHTML += '<hr><h4>اللاعبون الآخرون</h4>';
        reserves.sort(comparePlayersByPosition).forEach(p => squadList.appendChild(createPlayerListItem(p, 'reserves')));

        formationSelect.value = gameState.tactics.formation;
        mentalitySelect.value = gameState.tactics.mentality;

        if (trainingFacilityLevel) trainingFacilityLevel.textContent = gameState.facilities.trainingLevel;

        updateCompetitionStatusDisplay();

         setTimeout(() => {
             const activeTabButton = document.querySelector('#team-management-section .tab-button.active');
             if (activeTabButton) {
                handleTabSwitch(activeTabButton);
             } else {
                 const firstTabButton = document.querySelector('#team-management-section .tab-button');
                 if (firstTabButton) {
                    firstTabButton.click();
                 }
             }
         }, 0);
    }

     function comparePlayersByPosition(a, b) {
         const posOrder = { 'GK': 1, 'DEF': 2, 'MID': 3, 'FWD': 4 };
         return (posOrder[a.position] || 9) - (posOrder[b.position] || 9);
     }

     function validateSquadLists() {
         const playerIds = gameState.players.map(p => p.id);
         gameState.squad.starting = gameState.squad.starting.filter(id => playerIds.includes(id));
         gameState.squad.subs = gameState.squad.subs.filter(id => playerIds.includes(id));
     }

     function createPlayerListItem(player, currentList) {
        const li = document.createElement('li');
        li.dataset.playerId = player.id;

        let statusText = '';
        if (player.status === 'injured') statusText = ` <span style="color:red;">(مصاب ${player.injuryDuration || '?'} ي)</span>`;
        if (player.status === 'suspended') statusText = ` <span style="color:orange;">(موقوف)</span>`;

        const playerInfo = document.createElement('div');
        playerInfo.classList.add('player-info');
        playerInfo.innerHTML = `
            <span><strong>${player.name}</strong> (${player.position})${statusText}</span>
            <span>مهارة: ${player.skill} ${player.potential ? '(Pot: ' + player.potential + ')' : ''}</span>
             <span>عمر: ${player.age || '?'}</span>
            <span>معنويات: ${player.morale}%</span>
            <span>لياقة: ${player.fitness}%</span>
            <span>قيمة: €${player.value.toLocaleString()}</span>
            <span>راتب: €${player.wage.toLocaleString()}/أ</span>
            <span>عقد: ${player.contractYears} س</span>
        `;
        li.appendChild(playerInfo);


        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('player-actions');

        const isActive = player.status === 'active';

        if (currentList !== 'starting' && gameState.squad.starting.length < 11) {
            const startBtn = document.createElement('button');
            startBtn.textContent = 'للأساسي';
            startBtn.disabled = !isActive;
            startBtn.title = isActive ? 'انقل للتشكيلة الأساسية' : 'اللاعب غير متاح';
            startBtn.onclick = () => movePlayer(player.id, 'starting');
            actionsDiv.appendChild(startBtn);
        }
        if (currentList !== 'subs' && gameState.squad.subs.length < 7) {
            const subBtn = document.createElement('button');
            subBtn.textContent = 'للاحتياط';
             subBtn.disabled = !isActive;
             subBtn.title = isActive ? 'انقل للاحتياط' : 'اللاعب غير متاح';
            subBtn.onclick = () => movePlayer(player.id, 'subs');
             actionsDiv.appendChild(subBtn);
        }
        if (currentList !== 'reserves') {
             const reserveBtn = document.createElement('button');
             reserveBtn.textContent = 'للخارج';
             reserveBtn.onclick = () => movePlayer(player.id, 'reserves');
             actionsDiv.appendChild(reserveBtn);
         }

        li.appendChild(actionsDiv);
        return li;
    }

    function movePlayer(playerId, targetList) {
         const player = getPlayerById(playerId);
         if (!player || player.status !== 'active') {
             addNews(`لا يمكن نقل اللاعب ${player?.name || 'غير المعروف'} لأنه غير متاح.`);
             return;
         }

         gameState.squad.starting = gameState.squad.starting.filter(id => id !== playerId);
         gameState.squad.subs = gameState.squad.subs.filter(id => id !== playerId);

         if (targetList === 'starting') {
            if (gameState.squad.starting.length < 11) {
                 gameState.squad.starting.push(playerId);
            } else {
                addNews("التشكيلة الأساسية ممتلئة (11 لاعبًا).");
            }
         } else if (targetList === 'subs') {
             if (gameState.squad.subs.length < 7) {
                gameState.squad.subs.push(playerId);
             } else {
                 addNews("قائمة الاحتياط ممتلئة (7 لاعبين).");
             }
         }

         renderTeamManagement();
    }

    function updateCompetitionStatusDisplay() {
        if (!gameInitialized) return;
         if (compLeaguePos && compLeaguePts) {
            const playerTeamStats = gameState.leagueTable[gameState.teamId];
             if(playerTeamStats) {
                 const position = getLeaguePosition(gameState.teamId);
                 compLeaguePos.textContent = position;
                 compLeaguePts.textContent = playerTeamStats.pts;
             } else {
                compLeaguePos.textContent = '-';
                compLeaguePts.textContent = '-';
             }
         }

         if (copaDelReyStatus) {
             const cdrData = gameState.competitions['CDR'];
             if (cdrData.eliminated) {
                 copaDelReyStatus.textContent = `تم الإقصاء (الدور ${cdrData.currentRound})`;
             } else if (cdrData.status === 'active') {
                 copaDelReyStatus.textContent = `نشط (الدور ${cdrData.currentRound})`;
             } else if (cdrData.status === 'upcoming') {
                 copaDelReyStatus.textContent = "لم تبدأ بعد";
             } else {
                 copaDelReyStatus.textContent = "غير معروف";
             }
         }
    }

    function renderTransfers() {
        if (!transferMarketList || !sellPlayerList) return;
         transferMarketList.innerHTML = '';
         if (!gameState.transferMarket || gameState.transferMarket.length === 0) {
            transferMarketList.innerHTML = '<li>لا يوجد لاعبون متاحون حالياً.</li>';
         } else {
            gameState.transferMarket.forEach(player => {
                 const li = document.createElement('li');
                 li.innerHTML = `
                    <span><strong>${player.name}</strong> (${player.position}) | عمر: ${player.age} | مهارة: ${player.skill} (Pot: ${player.potential}) | قيمة: €${player.value.toLocaleString()} | راتب: €${player.wage.toLocaleString()}/أ</span>
                    <button class="buy-btn" data-player-id="${player.id}" ${gameState.budget < player.value ? 'disabled title="الميزانية غير كافية"' : ''}>شراء</button>
                `;
                 transferMarketList.appendChild(li);
             });
            addBuyButtonListeners();
         }

        sellPlayerList.innerHTML = '';
        if (!gameState.players || gameState.players.length === 0) {
             sellPlayerList.innerHTML = '<li>لا يوجد لديك لاعبون حالياً.</li>';
        } else {
            gameState.players.forEach(player => {
                 const li = document.createElement('li');
                 const sellValue = Math.floor(player.value * 0.8);
                 li.innerHTML = `
                     <span><strong>${player.name}</strong> (${player.position}) | عمر: ${player.age} | مهارة: ${player.skill} (Pot: ${player.potential}) | قيمة: €${player.value.toLocaleString()}</span>
                     <button class="sell-btn" data-player-id="${player.id}">بيع (مقابل ~€${sellValue.toLocaleString()})</button>
                     `;
                 sellPlayerList.appendChild(li);
             });
            addSellButtonListeners();
        }

         setTimeout(() => {
            const activeTabButton = document.querySelector('#transfers-section .tab-button.active');
             if (activeTabButton) handleTabSwitch(activeTabButton);
             else {
                 const firstTabButton = document.querySelector('#transfers-section .tab-button');
                 if (firstTabButton) firstTabButton.click();
             }
         }, 0);
    }

     function addBuyButtonListeners() {
         document.querySelectorAll('.buy-btn').forEach(button => {
            button.replaceWith(button.cloneNode(true));
        });
         document.querySelectorAll('.buy-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                 const playerId = parseInt(e.target.dataset.playerId);
                 buyPlayer(playerId);
             });
         });
     }

      function addSellButtonListeners() {
          document.querySelectorAll('.sell-btn').forEach(button => {
             button.replaceWith(button.cloneNode(true));
         });
         document.querySelectorAll('.sell-btn').forEach(button => {
             button.addEventListener('click', (e) => {
                 const playerId = parseInt(e.target.dataset.playerId);
                 sellPlayer(playerId);
             });
         });
     }

    function renderFixtures() {
        if (!fixturesList) return;
        fixturesList.innerHTML = '';
        if (!gameState.schedule || gameState.schedule.length === 0) {
            fixturesList.innerHTML = '<li>لا يوجد مباريات مجدولة.</li>';
            return;
        }

        const upcomingMatches = gameState.schedule.filter(m => !m.played).slice(0, 10);
        const playedMatches = gameState.schedule.filter(m => m.played).slice(-5).reverse();

        if (upcomingMatches.length > 0) {
            fixturesList.innerHTML += '<h4>المباريات القادمة</h4>';
            upcomingMatches.forEach((match, indexInFullSchedule) => {
                 const originalIndex = gameState.schedule.findIndex(m => m.id === match.id);
                 fixturesList.appendChild(createFixtureListItem(match, originalIndex));
            });
        } else {
             fixturesList.innerHTML += '<h4>لا يوجد مباريات قادمة هذا الموسم</h4>';
        }

         if (playedMatches.length > 0) {
            fixturesList.innerHTML += '<hr><h4>المباريات الأخيرة</h4>';
            playedMatches.forEach(match => {
                 const originalIndex = gameState.schedule.findIndex(m => m.id === match.id);
                 fixturesList.appendChild(createFixtureListItem(match, originalIndex));
             });
         }

         matchSimulationSection.style.display = 'none';
         matchResultSection.style.display = 'none';
    }

    function createFixtureListItem(match, index) {
        const li = document.createElement('li');
        const matchDate = formatDate(match.date);
        const opponentName = getTeamNameById(match.opponentId) || match.opponentId;
        const competitionName = getCompetitionName(match.competition);
        const venue = match.type === 'home' ? '(H)' : '(A)';

        let resultText = '';
        let status = '';
        let outcomeClass = '';

        if (match.played) {
            resultText = ` ${match.score.home} - ${match.score.away} `;
             if (match.outcome === 'win') { status = ' (فوز)'; outcomeClass = 'match-win'; }
             else if (match.outcome === 'draw') { status = ' (تعادل)'; outcomeClass = 'match-draw'; }
             else if (match.outcome === 'loss') { status = ' (خسارة)'; outcomeClass = 'match-loss'; }
             if (outcomeClass) li.classList.add(outcomeClass);
        }

        li.innerHTML = `
            <span>${matchDate} ${venue} - ${opponentName}</span>
            <span class="fixture-details">${competitionName}${resultText}${status}</span>
            ${!match.played ? `<button data-match-index="${index}">خض المباراة</button>` : '<span>تم لعبها</span>'}
        `;

         if (!match.played) {
             const playButton = li.querySelector('button');
             const nextUnplayedIndex = findNextMatchIndex();
             const matchDateObj = new Date(match.date);
             const currentDateObj = gameState.currentDate;

             if (index === nextUnplayedIndex && currentDateObj.getFullYear() === matchDateObj.getFullYear() &&
                currentDateObj.getMonth() === matchDateObj.getMonth() &&
                currentDateObj.getDate() === matchDateObj.getDate())
             {
                 playButton.onclick = () => setupMatchSimulation(index);
             } else {
                 playButton.disabled = true;
                 if (gameState.currentDate < matchDateObj) {
                    playButton.title = "المباراة لم يحن موعدها بعد.";
                 } else if (index !== nextUnplayedIndex){
                     playButton.title = "يجب لعب المباريات السابقة أولاً.";
                 } else {
                     playButton.title = "لا يمكن لعب المباراة الآن.";
                 }
             }
         }

        return li;
    }

    function renderLeagueTable() {
         if (!leagueTableBody || !gameState.leagueTable) return;

         leagueTableBody.innerHTML = '';

         const tableArray = Object.entries(gameState.leagueTable).map(([teamId, stats]) => ({
             id: teamId,
             name: getTeamNameById(teamId) || teamId,
             ...stats
         }));

         tableArray.sort((a, b) => {
             if (b.pts !== a.pts) return b.pts - a.pts;
             if (b.gd !== a.gd) return b.gd - a.gd;
             if (b.gf !== a.gf) return b.gf - a.gf;
             return a.name.localeCompare(b.name);
         });

         tableArray.forEach((teamStats, index) => {
             const row = leagueTableBody.insertRow();
             row.innerHTML = `
                 <td>${index + 1}</td>
                 <td>${teamStats.name}</td>
                 <td>${teamStats.p}</td>
                 <td>${teamStats.w}</td>
                 <td>${teamStats.d}</td>
                 <td>${teamStats.l}</td>
                 <td>${teamStats.gf}</td>
                 <td>${teamStats.ga}</td>
                 <td>${teamStats.gd}</td>
                 <td>${teamStats.pts}</td>
             `;
             if (teamStats.id === gameState.teamId) {
                 row.classList.add('player-team');
             }
         });
     }

    function renderFinances() {
        if (!financeBudget) return;
        calculateWeeklyWageBill();
        financeBudget.textContent = `€${gameState.budget.toLocaleString()}`;

        let estimatedIncome = gameState.finances.sponsors.reduce((sum, s) => sum + s.weeklyAmount, 0);
         const homeGamesPerSeason = (LA_LIGA.teams.length - 1);
         const seasonWeeks = 45;
         if (homeGamesPerSeason > 0 && seasonWeeks > 0) {
            const avgAttendanceFactor = 0.4 + (gameState.reputation / 250);
            const avgTicketRevenuePerHomeGame = gameState.facilities.stadiumCapacity * avgAttendanceFactor * gameState.finances.ticketPrice;
             estimatedIncome += Math.floor((avgTicketRevenuePerHomeGame * homeGamesPerSeason) / seasonWeeks);
         }

        weeklyIncome.textContent = `€${estimatedIncome.toLocaleString()}`;
        weeklyExpenses.textContent = `€${gameState.finances.weeklyWageBill.toLocaleString()}`;
        ticketPriceInput.value = gameState.finances.ticketPrice;

         const sponsorList = document.getElementById('sponsor-list');
         if (sponsorList) {
            if (gameState.finances.sponsors.length === 0) {
                sponsorList.innerHTML = '<li>لا يوجد رعاة حاليًا.</li>';
            } else {
                sponsorList.innerHTML = '';
                gameState.finances.sponsors.forEach(s => {
                    const li = document.createElement('li');
                    li.textContent = `${s.name} - €${s.weeklyAmount.toLocaleString()}/أسبوع`;
                    sponsorList.appendChild(li);
                });
            }
         }
    }

    function renderFacilities() {
        if (!stadiumLevel) return;
         stadiumLevel.textContent = gameState.facilities.stadiumLevel;
         stadiumCapacity.textContent = Math.floor(gameState.facilities.stadiumCapacity).toLocaleString();
         stadiumUpgradeCost.textContent = `€${Math.floor(gameState.facilities.stadiumUpgradeCost).toLocaleString()}`;
         upgradeStadiumBtn.disabled = gameState.budget < gameState.facilities.stadiumUpgradeCost;
         upgradeStadiumBtn.title = upgradeStadiumBtn.disabled ? "الميزانية غير كافية" : "تطوير الملعب";

         trainingLevelDisplay.textContent = gameState.facilities.trainingLevel;
         trainingUpgradeCost.textContent = `€${Math.floor(gameState.facilities.trainingUpgradeCost).toLocaleString()}`;
         upgradeTrainingBtn.disabled = gameState.budget < gameState.facilities.trainingUpgradeCost;
         upgradeTrainingBtn.title = upgradeTrainingBtn.disabled ? "الميزانية غير كافية" : "تطوير مرافق التدريب";
    }

     function renderMedia() {
         if (!pressSituation) return;
         if (!gameState.matchOutcomePending) {
             pressSituation.textContent = "لا يوجد مؤتمر صحفي حاليًا.";
             pressOptions.style.display = 'none';
             pressResult.textContent = '';
         } else {
             const outcome = gameState.matchOutcomePending;
             const opponentName = getTeamNameById(outcome.opponentId) || outcome.opponentId;
             pressSituation.textContent = `بعد المباراة ضد ${opponentName} (${getCompetitionName(outcome.competition)}) التي انتهت ${outcome.score.home} - ${outcome.score.away}, الصحافة تريد رأيك.`;
             pressOptions.style.display = 'flex';
             pressResult.textContent = '';
         }

         let sentimentScore = gameState.reputation;
         if (sentimentScore > 75) fanSentiment.textContent = "الجماهير سعيدة جدًا بأداء الفريق ونتائجه!";
         else if (sentimentScore > 60) fanSentiment.textContent = "الجماهير راضية بشكل عام وتدعم الفريق.";
          else if (sentimentScore > 40) fanSentiment.textContent = "الجماهير تظهر بعض القلق وتأمل في تحسن الأداء.";
         else fanSentiment.textContent = "الجماهير غير راضية وتطالب بنتائج أفضل بشكل عاجل.";
     }

    function advanceDay() {
         if (!gameInitialized) return;

        gameState.currentDate.setDate(gameState.currentDate.getDate() + 1);
        gameState.endOfSeasonProcessed = false;

        recoverPlayerFitness();
        updatePlayerAge();
        handleRandomEvents();

        if (gameState.currentDate.getDay() === 1) {
            applyWeeklyFinances();
            updateMorale();
        }

        checkForMatchDay();

        if (isEndOfSeason() && !gameState.endOfSeasonProcessed) {
             processEndOfSeason();
             gameState.endOfSeasonProcessed = true;
         }

        gameState.matchOutcomePending = null;

        updateUI();
    }

    function checkForMatchDay() {
        const nextMatchIndex = findNextMatchIndex();
        if (nextMatchIndex !== -1) {
            const nextMatch = gameState.schedule[nextMatchIndex];
             const matchDateObj = new Date(nextMatch.date);
             const currentDateObj = gameState.currentDate;

            if (currentDateObj.getFullYear() === matchDateObj.getFullYear() &&
                currentDateObj.getMonth() === matchDateObj.getMonth() &&
                currentDateObj.getDate() === matchDateObj.getDate())
            {
                const opponentName = getTeamNameById(nextMatch.opponentId) || nextMatch.opponentId;
                const competitionName = getCompetitionName(nextMatch.competition);
                 addNews(`**يوم المباراة!** ${gameState.teamName} ${nextMatch.type === 'home' ? 'يستضيف' : 'يواجه'} ${opponentName} في ${competitionName}.`);
                navigateToSection('fixtures');
                 setTimeout(() => {
                    const matchItem = fixturesList.querySelector(`button[data-match-index="${nextMatchIndex}"]`)?.closest('li');
                    if(matchItem) {
                        matchItem.style.backgroundColor = 'var(--accent-color)';
                        matchItem.style.fontWeight = 'bold';
                        matchItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                 }, 100);
            }
        }
    }

    function recoverPlayerFitness() {
        gameState.players.forEach(player => {
             const recoveryRate = 3 + Math.floor(gameState.facilities.trainingLevel * 1.5);

            if (player.status === 'active' && player.fitness < 100) {
                player.fitness = Math.min(100, player.fitness + recoveryRate);
            }
             if (player.status === 'injured') {
                 player.injuryDuration = Math.max(0, (player.injuryDuration || 1) - 1);
                 if (player.injuryDuration <= 0) {
                     player.status = 'active';
                     player.fitness = Math.max(50, 100 - (Math.floor(Math.random()*20)+10));
                     addNews(`${player.name} تعافى من الإصابة وجاهز للمشاركة.`);
                     delete player.injuryDuration;
                 }
             }
             if (player.status === 'suspended') {
                 player.suspensionDuration = Math.max(0, (player.suspensionDuration || 1) - 1);
                 if(player.suspensionDuration <= 0) {
                    player.status = 'active';
                    addNews(`${player.name} أنهى فترة الإيقاف.`);
                     delete player.suspensionDuration;
                 }
             }
        });
    }

     function updatePlayerAge() {
         if (gameState.currentDate.getMonth() === 6 && gameState.currentDate.getDate() === 1) {
             let retirements = 0;
             gameState.players.forEach(p => {
                p.age = (p.age || 25) + 1;

                 if (p.age > 30 && p.potential) {
                     p.potential = Math.max(p.skill, p.potential - Math.floor(Math.random() * 2));
                 }
                 if (p.age > 32) {
                     let declineChance = (p.age - 32) * 0.1;
                     if (p.fitness < 70) declineChance += 0.1;
                     if (p.morale < 40) declineChance += 0.1;
                     if (Math.random() < declineChance) {
                         p.skill = Math.max(30, p.skill - 1);
                     }
                 }

                 let retireChance = 0;
                 if (p.age >= 35) retireChance = (p.age - 34) * 0.2;
                 if (p.contractYears <= 1 && p.age >= 34) retireChance += 0.1;
                 if (Math.random() < retireChance) {
                     addNews(`**اعتزال!** اللاعب ${p.name} (${p.age} عامًا) قرر تعليق حذائه.`);
                     p.status = 'retired';
                     retirements++;
                 }

                  p.contractYears = Math.max(0, p.contractYears - 1);
                  if (p.contractYears === 0 && p.status === 'active') {
                      addNews(`**عقد منتهي!** عقد اللاعب ${p.name} انتهى. يجب تجديده أو سيغادر!`);
                  }
             });

             const retiredCount = gameState.players.length;
             gameState.players = gameState.players.filter(p => p.status !== 'retired');
             if (retiredCount > gameState.players.length) {
                 validateSquadLists();
                 calculateWeeklyWageBill();
             }

             if (retirements > 0 || gameState.players.some(p => p.contractYears === 0)) {
                 renderTeamManagement();
             }
             addNews(`تقدم اللاعبون في العمر. عقود اللاعبين تم تحديثها.`);
         }
     }

    function handleRandomEvents() {
        const chance = Math.random();
        if (chance < 0.015) {
            const eventType = Math.random();
            const activePlayers = gameState.players.filter(p => p.status === 'active');
            if (eventType < 0.3 && activePlayers.length > 0) {
                const player = getRandomPlayer(activePlayers);
                if (player) {
                     player.status = 'injured';
                     player.injuryDuration = Math.floor(Math.random() * 10) + 5;
                     player.fitness = Math.max(10, player.fitness - 30);
                     addNews(`إصابة طفيفة للاعب ${player.name} في التدريب (سيغيب حوالي ${player.injuryDuration} أيام).`);
                     renderTeamManagement();
                 }
            } else if (eventType < 0.5 && activePlayers.length > 0) {
                 const player = getRandomPlayer(activePlayers);
                 if (player) {
                     const change = Math.random() > 0.5 ? (Math.floor(Math.random()*5)+3) : -(Math.floor(Math.random()*5)+3);
                     player.morale = Math.max(0, Math.min(100, player.morale + change));
                     addNews(`تغير في معنويات ${player.name} (${change > 0 ? '+' : ''}${change}%).`);
                 }
            } else if (eventType < 0.6) {
                 const amount = (Math.floor(Math.random() * 20) + 5) * 10000 * (Math.random() > 0.6 ? 1 : -1);
                 gameState.budget += amount;
                 addNews(`حدث مالي غير متوقع: ${amount > 0 ? 'دخل إضافي' : 'مصروف طارئ'} بقيمة €${Math.abs(amount).toLocaleString()}.`);
                 renderFinances();
            } else if (eventType < 0.7 && gameState.transferMarket.length > 2) {
                 const player = getRandomPlayer(gameState.transferMarket);
                 addNews(`إشاعة: نادي ${getRandomTeamName(gameState.teamId)} مهتم بالتعاقد مع ${player.name}.`);
            }
             else if (eventType < 0.8 && activePlayers.length > 0) {
                 const player = getRandomPlayer(activePlayers);
                 if (player && Math.random() > 0.5) {
                     player.skill = Math.min(player.potential || 99, player.skill + 1);
                     addNews(`تطور مفاجئ! ${player.name} أظهر تحسناً في المهارة.`);
                 } else if (player) {
                      player.morale = Math.max(0, player.morale - 5);
                      addNews(`مشكلة بسيطة في التدريب أثرت على معنويات ${player.name}.`);
                 }
             }
             else {
             }
        }
    }

     function updateMorale() {
         const recentMatches = gameState.schedule.filter(m => m.played && m.competition === 'ESP1').slice(-5);
         let performanceFactor = 0;
         recentMatches.forEach(m => {
             if (m.outcome === 'win') performanceFactor += 3;
             else if (m.outcome === 'draw') performanceFactor += 0;
             else performanceFactor -= 2;
         });

         const currentPos = getLeaguePosition(gameState.teamId);
         const expectedPos = getExpectedLeaguePosition(gameState.teamId);
         const positionDiff = expectedPos - currentPos;
         performanceFactor += Math.floor(positionDiff / 2);

         gameState.players.forEach(p => {
             let moraleChange = Math.floor(performanceFactor / recentMatches.length) || 0;
              if (gameState.squad.starting.includes(p.id)) moraleChange += 1;
              else if (!gameState.squad.subs.includes(p.id)) moraleChange -=1;
             moraleChange += Math.floor(Math.random() * 5) - 2;

             p.morale = Math.max(0, Math.min(100, p.morale + moraleChange));
         });
     }

    function applyWeeklyFinances() {
         calculateWeeklyWageBill();
         const wages = gameState.finances.weeklyWageBill;
         let income = gameState.finances.sponsors.reduce((sum, s) => sum + s.weeklyAmount, 0);

         const otherCosts = Math.floor(gameState.budget * 0.001 + gameState.facilities.stadiumLevel * 5000 + gameState.facilities.trainingLevel * 3000);

         const netChange = income - wages - otherCosts;
         gameState.budget += netChange;

         addNews(`المالية الأسبوعية: دخل €${income.toLocaleString()}, رواتب €${wages.toLocaleString()}, تكاليف أخرى €${otherCosts.toLocaleString()}. الميزانية: €${gameState.budget.toLocaleString()}.`);
         if (gameState.budget < 0) {
             addNews("🚨 تحذير: ميزانية النادي سلبية! قد تواجه عقوبات.");
             gameState.reputation = Math.max(0, gameState.reputation - 3);
         }
         renderFinances();
    }

    function calculateWeeklyWageBill() {
        gameState.finances.weeklyWageBill = gameState.players.reduce((sum, player) => sum + player.wage, 0);
    }

     function addNews(message) {
         console.log("News:", message);
         const timestamp = gameState.currentDate ? formatDate(gameState.currentDate) : '';
         gameState.newsFeed.push(`${timestamp}: ${message}`);
         if (gameState.newsFeed.length > 100) {
            gameState.newsFeed.shift();
         }
         if (document.getElementById('dashboard-section').classList.contains('active-section')) {
             renderNewsFeed();
         }
     }

     function initializeLeagueTable() {
         gameState.leagueTable = {};
         LA_LIGA.teams.forEach(team => {
             gameState.leagueTable[team.id] = {
                 p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0
             };
         });
         console.log("League table initialized.");
     }

     function generateSeasonSchedule() {
         gameState.schedule = [];
         const teams = LA_LIGA.teams.map(t => t.id);
         const startDate = new Date(gameState.currentDate);
         startDate.setDate(startDate.getDate() + (7 - startDate.getDay() + 5) % 7 + 7);
         let matchDate = new Date(startDate);
         let matchIdCounter = Date.now();

         const numTeams = teams.length;
         if (numTeams < 2) return;

          const rounds = [];
          const tempTeams = [...teams];
          if (numTeams % 2 !== 0) tempTeams.push("BYE");
          const teamsCount = tempTeams.length;

          for (let r = 0; r < teamsCount - 1; r++) {
              const roundMatches = [];
              for (let i = 0; i < teamsCount / 2; i++) {
                  const home = tempTeams[i];
                  const away = tempTeams[teamsCount - 1 - i];
                  if (home !== "BYE" && away !== "BYE") {
                      if ((r + i) % 2 === 0) {
                           roundMatches.push({ homeId: home, awayId: away });
                      } else {
                           roundMatches.push({ homeId: away, awayId: home });
                      }
                  }
              }
              rounds.push(roundMatches);
              tempTeams.splice(1, 0, tempTeams.pop());
          }

         rounds.forEach(round => {
             round.forEach(match => {
                 gameState.schedule.push({
                     id: matchIdCounter++,
                     date: new Date(matchDate),
                     competition: 'ESP1',
                     round: 0,
                     type: match.homeId === gameState.teamId ? 'home' : (match.awayId === gameState.teamId ? 'away' : 'neutral'),
                     homeTeamId: match.homeId,
                     awayTeamId: match.awayId,
                     opponentId: match.homeId === gameState.teamId ? match.awayId : match.homeId,
                     played: false,
                     score: { home: 0, away: 0 },
                     outcome: null,
                 });
             });
             matchDate.setDate(matchDate.getDate() + 7);
         });

          const midSeasonBreakDays = 14;
          matchDate.setDate(matchDate.getDate() + midSeasonBreakDays);

         rounds.forEach(round => {
             round.forEach(match => {
                 gameState.schedule.push({
                     id: matchIdCounter++,
                     date: new Date(matchDate),
                     competition: 'ESP1',
                     round: 0,
                     type: match.awayId === gameState.teamId ? 'home' : (match.homeId === gameState.teamId ? 'away' : 'neutral'),
                     homeTeamId: match.awayId,
                     awayTeamId: match.homeId,
                     opponentId: match.awayId === gameState.teamId ? match.homeId : match.awayId,
                     played: false,
                     score: { home: 0, away: 0 },
                     outcome: null,
                 });
             });
             matchDate.setDate(matchDate.getDate() + 7);
         });

         const cupRounds = 5;
         let cupRoundDate = new Date(gameState.currentDate);
         cupRoundDate.setMonth(cupRoundDate.getMonth() + 2);
         gameState.competitions['CDR'].status = 'active';
         gameState.competitions['CDR'].currentRound = 1;

         for (let round = 1; round <= cupRounds; round++) {
             if (gameState.competitions['CDR'].eliminated) break;

             cupRoundDate.setDate(cupRoundDate.getDate() + (7 - cupRoundDate.getDay() + 3) % 7);
             cupRoundDate.setDate(cupRoundDate.getDate() + (round > 1 ? 21 : 14));

             const potentialOpponents = LA_LIGA.teams
                 .map(t => t.id)
                 .filter(id => id !== gameState.teamId && !hasPlayedCupMatchAgainst(id, round));

             if (potentialOpponents.length === 0) break;

             const opponentId = getRandomPlayer(potentialOpponents);
             const type = Math.random() > 0.5 ? 'home' : 'away';

             gameState.schedule.push({
                 id: matchIdCounter++,
                 date: new Date(cupRoundDate),
                 competition: 'CDR',
                 round: round,
                 type: type,
                 homeTeamId: type === 'home' ? gameState.teamId : opponentId,
                 awayTeamId: type === 'home' ? opponentId : gameState.teamId,
                 opponentId: opponentId,
                 played: false,
                 score: { home: 0, away: 0 },
                 outcome: null,
             });
         }

         gameState.schedule.sort((a, b) => new Date(a.date) - new Date(b.date));

         addNews(`تم إنشاء جدول مباريات موسم ${gameState.seasonYear}.`);
         console.log("Season schedule generated:", gameState.schedule);
     }

     function hasPlayedCupMatchAgainst(opponentId, maxRound) {
         return gameState.schedule.some(m => m.competition === 'CDR' && m.opponentId === opponentId && m.round <= maxRound);
     }

     function isEndOfSeason() {
         const allMatchesPlayed = gameState.schedule.every(match => match.played);
         if (allMatchesPlayed && gameState.schedule.length > 0) {
             return true;
         }
          const seasonEndYear = parseInt(gameState.seasonYear.split('/')[1]);
          const endOfSeasonDate = new Date(seasonEndYear, 5, 1);
          if (gameState.currentDate >= endOfSeasonDate) {
              const lastMatch = gameState.schedule[gameState.schedule.length - 1];
              if (lastMatch && gameState.currentDate > new Date(lastMatch.date)) {
                 gameState.schedule.forEach(m => { if (!m.played) m.played = true; });
                 return true;
              }
          }
         return false;
     }

     function processEndOfSeason() {
         console.log("Processing end of season...");
         addNews(`**نهاية موسم ${gameState.seasonYear}!**`);

         renderLeagueTable();
         const finalPosition = getLeaguePosition(gameState.teamId);
         const champion = getTeamAtPosition(1);
         addNews(`البطل: ${champion.name}! فريقك (${gameState.teamName}) أنهى الموسم في المركز ${finalPosition}.`);

         const prizeMoney = Math.max(0, (LA_LIGA.teams.length - finalPosition + 1) * 2000000);
         gameState.budget += prizeMoney;
         addNews(`حصل النادي على جائزة مالية قدرها €${prizeMoney.toLocaleString()} لإنهاء الموسم في المركز ${finalPosition}.`);

          if (finalPosition <= 4) addNews("تأهل الفريق لدوري أبطال أوروبا الموسم القادم!");
          else if (finalPosition <= 6) addNews("تأهل الفريق للدوري الأوروبي الموسم القادم!");

         addNews("سيتم الإعلان عن جوائز اللاعبين قريبًا (ميزة قيد التطوير).");

         const currentYear = parseInt(gameState.seasonYear.split('/')[0]);
         gameState.seasonYear = `${currentYear + 1}/${currentYear + 2}`;
         gameState.currentDate = new Date(currentYear + 1, 6, 1);
         gameState.endOfSeasonProcessed = true;

          initializeLeagueTable();
          generateSeasonSchedule();

          gameState.competitions['CDR'].status = 'upcoming';
          gameState.competitions['CDR'].currentRound = 0;
          gameState.competitions['CDR'].eliminated = false;

          gameState.transferMarket = generateTransferMarket(50);

         const youthIntakeCount = Math.floor(Math.random() * 3) + 1 + Math.floor(gameState.facilities.trainingLevel / 2);
         addNews(`**دفعة جديدة من الشباب!** ${youthIntakeCount} لاعبين شباب انضموا للفريق.`);
         let youthIdCounter = Date.now() + 200000;
         for (let i = 0; i < youthIntakeCount; i++) {
             const pos = ['GK', 'DEF', 'DEF', 'MID', 'MID', 'FWD'][Math.floor(Math.random() * 6)];
              const youthPlayer = generatePlayer(youthIdCounter++, gameState.teamId, pos, [40, 55], [75, 90], [16, 18], [10, 100], [1, 5]);
              youthPlayer.contractYears = 3;
             gameState.players.push(youthPlayer);
             addNews(` - ${youthPlayer.name} (${youthPlayer.position}), Potential: ${youthPlayer.potential}`);
         }
         calculateWeeklyWageBill();

         addNews(`**بداية موسم ${gameState.seasonYear}!** حظاً موفقاً أيها المدرب.`);

         updateUI();
         navigateToSection('dashboard');
         saveGame();
     }

    function setupMatchSimulation(matchIndex) {
         const match = gameState.schedule[matchIndex];
         if (!match || match.played) return;

         if (gameState.squad.starting.length !== 11) {
             alert("يجب أن تحتوي التشكيلة الأساسية على 11 لاعبًا بالضبط لخوض المباراة!");
             navigateToSection('team-management');
             return;
         }
         const unavailableStarters = gameState.squad.starting.filter(playerId => {
             const player = getPlayerById(playerId);
             return !player || player.status !== 'active' || player.fitness < 30;
         });
         if (unavailableStarters.length > 0) {
            const unavailableNames = unavailableStarters.map(id => {
                const p = getPlayerById(id);
                return `${p?.name || 'Unknown'} (${p?.status !== 'active' ? p?.status : 'Low Fitness'})`;
            }).join(', ');
            alert(`لا يمكن بدء المباراة. اللاعبون التاليون في التشكيلة الأساسية غير متاحين: ${unavailableNames}`);
            navigateToSection('team-management');
            return;
         }

         gameState.currentMatchIndex = matchIndex;
         const playerTeamName = gameState.teamName;
         const opponentName = getTeamNameById(match.opponentId) || match.opponentId;
         const competitionName = getCompetitionName(match.competition);

          const homeTeamDisplay = match.homeTeamId === gameState.teamId ? playerTeamName : opponentName;
          const awayTeamDisplay = match.awayTeamId === gameState.teamId ? playerTeamName : opponentName;

         matchInfo.textContent = `${homeTeamDisplay} ضد ${awayTeamDisplay}`;
         matchScore.textContent = '0 - 0';
         matchEventsList.innerHTML = '<li>صافرة البداية!</li>';
         simMatchCompetition.textContent = competitionName;
         resMatchCompetition.textContent = competitionName;

         fixturesList.style.display = 'none';
         matchResultSection.style.display = 'none';
         matchSimulationSection.style.display = 'block';

         simulateMatchBtn.disabled = false;
    }

     function simulateMatch() {
         simulateMatchBtn.disabled = true;

         const matchIndex = gameState.currentMatchIndex;
         const match = gameState.schedule[matchIndex];
         if (!match || match.played) return;

          const playerTeamId = gameState.teamId;
          const opponentTeamId = match.opponentId;
          const playerTeamData = getTeamDataById(playerTeamId);
          const opponentTeamData = getTeamDataById(opponentTeamId);

          const playerStartingXI = gameState.players.filter(p => gameState.squad.starting.includes(p.id) && p.status === 'active');
          const playerTeamStrengthDetails = calculateTeamStrength(playerStartingXI, gameState.tactics);
          const opponentStrength = opponentTeamData ? opponentTeamData.strength : 60;
          const opponentTeamStrengthDetails = {
               overall: opponentStrength,
               attack: opponentStrength,
               midfield: opponentStrength,
               defence: opponentStrength - 5,
               goalkeeping: opponentStrength - 10
          };

         const homeTeamDetails = match.type === 'home' ? playerTeamStrengthDetails : opponentTeamStrengthDetails;
         const awayTeamDetails = match.type === 'home' ? opponentTeamStrengthDetails : playerTeamStrengthDetails;
         const homeTeamFullName = match.type === 'home' ? playerTeamData.name : opponentTeamData.name;
         const awayTeamFullName = match.type === 'home' ? opponentTeamData.name : playerTeamData.name;

         const homeAdvantageFactor = 1.05;

         let homeScore = 0;
         let awayScore = 0;
         const matchEvents = [];
         const minutesPerSegment = 5;
         let yellowCards = { home: 0, away: 0 };
         let redCards = { home: 0, away: 0 };
         let playerInjuries = 0;

          const currentStarters = [...playerStartingXI.map(p => p.id)];

         for (let minute = 1; minute <= 90; minute++) {
             const homeAttChance = (homeTeamDetails.attack / (homeTeamDetails.attack + awayTeamDetails.defence)) * 0.1;
             const awayAttChance = (awayTeamDetails.attack / (awayTeamDetails.attack + homeTeamDetails.defence)) * 0.1;
             const homeGoalProb = 0.15 * (homeTeamDetails.attack / (awayTeamDetails.defence + awayTeamDetails.goalkeeping));
             const awayGoalProb = 0.15 * (awayTeamDetails.attack / (homeTeamDetails.defence + homeTeamDetails.goalkeeping));

             const homeMultiplier = match.homeTeamId === (match.type === 'home' ? playerTeamId : opponentTeamId) ? homeAdvantageFactor : 1.0;
             const awayMultiplier = match.awayTeamId === (match.type === 'home' ? playerTeamId : opponentTeamId) ? homeAdvantageFactor : 1.0;

             if (Math.random() < homeAttChance * homeMultiplier) {
                 if (Math.random() < homeGoalProb) {
                    homeScore++;
                     matchEvents.push({ minute: minute, text: `⚽ هدف لـ ${homeTeamFullName}! (${homeScore}-${awayScore})` });
                 } else {
                     if (Math.random() < 0.3) matchEvents.push({ minute: minute, text: `⚡ تسديدة خطيرة من ${homeTeamFullName} يتصدى لها الحارس!` });
                 }
             } else if (Math.random() < awayAttChance * awayMultiplier) {
                 if (Math.random() < awayGoalProb) {
                     awayScore++;
                      matchEvents.push({ minute: minute, text: `⚽ هدف لـ ${awayTeamFullName}! (${homeScore}-${awayScore})` });
                 } else {
                     if (Math.random() < 0.3) matchEvents.push({ minute: minute, text: `🧤 الحارس يتألق وينقذ مرمى ${homeTeamFullName} من هدف محقق!` });
                 }
             }

             const foulChance = 0.015;
             if (Math.random() < foulChance) {
                 const foulByHome = Math.random() < 0.5;
                 const teamFouling = foulByHome ? homeTeamFullName : awayTeamFullName;
                 const cardChance = 0.15;
                 if (Math.random() < cardChance) {
                     const yellowCardProb = 0.9;
                     if (Math.random() < yellowCardProb) {
                         const currentYellows = foulByHome ? yellowCards.home : yellowCards.away;
                         matchEvents.push({ minute: minute, text: `🟨 بطاقة صفراء على لاعب من ${teamFouling}.` });
                          if(foulByHome) yellowCards.home++; else yellowCards.away++;
                          if (foulByHome && match.type === 'home' || !foulByHome && match.type === 'away') {
                              const playerToCard = getRandomPlayer(gameState.players.filter(p => currentStarters.includes(p.id)));
                              if(playerToCard) {
                              }
                          }
                     } else {
                         matchEvents.push({ minute: minute, text: `🟥 بطاقة حمراء مباشرة على لاعب من ${teamFouling}!` });
                         if(foulByHome) redCards.home++; else redCards.away++;
                         if (foulByHome && match.type === 'home' || !foulByHome && match.type === 'away') {
                             const playerToSuspend = getRandomPlayer(gameState.players.filter(p => currentStarters.includes(p.id)));
                             if(playerToSuspend) {
                                playerToSuspend.status = 'suspended';
                                playerToSuspend.suspensionDuration = 1;
                                addNews(`${playerToSuspend.name} حصل على بطاقة حمراء وسيتم إيقافه.`);
                                currentStarters = currentStarters.filter(id => id !== playerToSuspend.id);
                             }
                         }
                     }
                 } else {
                 }
             }

             const injuryChance = 0.001;
             if (match.type === 'home' && Math.random() < injuryChance && playerInjuries < 2) {
                 const playerToInjure = getRandomPlayer(gameState.players.filter(p => currentStarters.includes(p.id)));
                 if (playerToInjure && playerToInjure.fitness > 10) {
                     playerToInjure.status = 'injured';
                     playerToInjure.injuryDuration = Math.floor(Math.random() * 21) + 7;
                     playerToInjure.fitness = 10;
                      matchEvents.push({ minute: minute, text: `❗ إصابة للاعب فريقك ${playerToInjure.name}! سيغيب لعدة أسابيع.` });
                      currentStarters = currentStarters.filter(id => id !== playerToInjure.id);
                      playerInjuries++;
                 }
             }

             if (minute % 15 === 0 || minute === 45 || minute === 90) {
                matchScore.textContent = `${homeScore} - ${awayScore}`;
                renderMatchEvents(matchEvents);
                if (minute === 45) matchEvents.push({ minute: 45, text: `⏸️ نهاية الشوط الأول. ${homeTeamFullName} ${homeScore} - ${awayScore} ${awayTeamFullName}` });
             }
         }

          matchEvents.push({ minute: 90, text: `🏁 صافرة النهاية!` });
          matchScore.textContent = `${homeScore} - ${awayScore}`;

         match.played = true;
         match.score = { home: homeScore, away: awayScore };

          if (match.type === 'home') {
             if (homeScore > awayScore) match.outcome = 'win';
             else if (homeScore < awayScore) match.outcome = 'loss';
             else match.outcome = 'draw';
          } else {
              if (awayScore > homeScore) match.outcome = 'win';
              else if (awayScore < homeScore) match.outcome = 'loss';
              else match.outcome = 'draw';
          }

          const playersOnPitch = gameState.players.filter(p => currentStarters.includes(p.id));
          const baseFitnessDrop = 15;
          const randomFitnessDrop = 10;
          playersOnPitch.forEach(p => {
            p.fitness = Math.max(0, p.fitness - (baseFitnessDrop + Math.floor(Math.random() * randomFitnessDrop)));
             let moraleChange = 0;
             if(match.outcome === 'win') moraleChange = Math.floor(Math.random() * 4) + 3;
             else if(match.outcome === 'loss') moraleChange = -(Math.floor(Math.random() * 4) + 3);
             else moraleChange = Math.floor(Math.random() * 3) - 1;
             p.morale = Math.max(0, Math.min(100, p.morale + moraleChange));
         });

        const repChangeBase = (match.outcome === 'win' ? 2 : (match.outcome === 'loss' ? -1 : 0));
        const strengthDiffFactor = Math.max(-2, Math.min(2, Math.round((opponentTeamStrengthDetails.overall - playerTeamStrengthDetails.overall) / 10)));
         gameState.reputation = Math.max(10, Math.min(100, gameState.reputation + repChangeBase + strengthDiffFactor));

         if (match.type === 'home') {
            const recentWins = gameState.schedule.filter(m => m.played && m.outcome === 'win').slice(-3).length;
             const attendanceFactor = 0.3
                                + (gameState.reputation / 250)
                                + (recentWins * 0.05)
                                - (Math.max(0, gameState.finances.ticketPrice - 30) / 200);
            const attendance = Math.min(gameState.facilities.stadiumCapacity, Math.floor(gameState.facilities.stadiumCapacity * attendanceFactor));
            const ticketRevenue = attendance * gameState.finances.ticketPrice;
            gameState.budget += ticketRevenue;
            addNews(`دخل تذاكر المباراة ضد ${getTeamNameById(opponentTeamId)}: €${ticketRevenue.toLocaleString()} (حضور: ${attendance.toLocaleString()})`);
         }

         if (match.competition === 'ESP1') {
            updateLeagueTableEntry(gameState.teamId, match.outcome, match.score.home, match.score.away, true);
            updateLeagueTableEntry(opponentTeamId, match.outcome, match.score.home, match.score.away, false);
         } else if (match.competition === 'CDR') {
             if (match.outcome === 'loss') {
                 gameState.competitions['CDR'].eliminated = true;
                 addNews(`تم إقصاء الفريق من كأس الملك من الدور ${match.round}.`);
             } else {
                  gameState.competitions['CDR'].currentRound = match.round + (match.outcome === 'win' ? 1: 0);
                 addNews(`تأهل الفريق للدور التالي في كأس الملك!`);
             }
         }

         gameState.matchOutcomePending = {
             opponentId: match.opponentId,
             competition: match.competition,
             score: match.score,
             outcome: match.outcome
         };

          const finalHomeName = match.homeTeamId === gameState.teamId ? gameState.teamName : getTeamNameById(match.homeTeamId);
          const finalAwayName = match.awayTeamId === gameState.teamId ? gameState.teamName : getTeamNameById(match.awayTeamId);

         finalScore.textContent = `النتيجة النهائية: ${finalHomeName} ${match.score.home} - ${match.score.away} ${finalAwayName}`;
         let summaryText = '';
         if(match.outcome === 'win') summaryText = 'فوز رائع ومستحق!';
         else if(match.outcome === 'draw') summaryText = 'نتيجة تعادل مقبولة.';
         else summaryText = 'خسارة مؤسفة، يجب التعويض.';
         matchSummary.textContent = summaryText;
         matchSimulationSection.style.display = 'none';
         matchResultSection.style.display = 'block';

         addNews(`انتهت المباراة ضد ${getTeamNameById(opponentTeamId)} (${getCompetitionName(match.competition)}) بنتيجة ${match.score.home}-${match.score.away}. (${match.outcome})`);
         updateUI();
         saveGame();
     }

     function updateLeagueTableEntry(teamId, playerOutcome, homeScore, awayScore, isPlayerTeam) {
         if (!gameState.leagueTable[teamId]) {
             console.warn(`Team ID ${teamId} not found in league table for update.`);
             return;
         }

         const stats = gameState.leagueTable[teamId];
         stats.p += 1;

         let goalsFor, goalsAgainst, outcome;

         if (isPlayerTeam) {
            outcome = playerOutcome;
            goalsFor = teamId === gameState.schedule[gameState.currentMatchIndex].homeTeamId ? homeScore : awayScore;
            goalsAgainst = teamId === gameState.schedule[gameState.currentMatchIndex].homeTeamId ? awayScore : homeScore;
         } else {
             if (playerOutcome === 'win') outcome = 'loss';
             else if (playerOutcome === 'loss') outcome = 'win';
             else outcome = 'draw';
             goalsFor = teamId === gameState.schedule[gameState.currentMatchIndex].homeTeamId ? homeScore : awayScore;
             goalsAgainst = teamId === gameState.schedule[gameState.currentMatchIndex].homeTeamId ? awayScore : homeScore;
         }

         if (outcome === 'win') {
             stats.w += 1;
             stats.pts += 3;
         } else if (outcome === 'draw') {
             stats.d += 1;
             stats.pts += 1;
         } else {
             stats.l += 1;
         }

         stats.gf += goalsFor;
         stats.ga += goalsAgainst;
         stats.gd = stats.gf - stats.ga;
     }

     function getLeaguePosition(teamId) {
         const tableArray = Object.entries(gameState.leagueTable).map(([id, stats]) => ({ id, ...stats }));
         tableArray.sort((a, b) => {
             if (b.pts !== a.pts) return b.pts - a.pts;
             if (b.gd !== a.gd) return b.gd - a.gd;
             if (b.gf !== a.gf) return b.gf - a.gf;
             return (getTeamNameById(a.id) || a.id).localeCompare(getTeamNameById(b.id) || b.id);
         });
         const position = tableArray.findIndex(team => team.id === teamId);
         return position + 1;
     }

      function getTeamAtPosition(position) {
          const tableArray = Object.entries(gameState.leagueTable).map(([id, stats]) => ({
              id: id,
              name: getTeamNameById(id) || id,
              ...stats
          }));
          tableArray.sort((a, b) => {
              if (b.pts !== a.pts) return b.pts - a.pts;
              if (b.gd !== a.gd) return b.gd - a.gd;
              if (b.gf !== a.gf) return b.gf - a.gf;
              return a.name.localeCompare(b.name);
          });
          return tableArray[position - 1];
      }

      function getExpectedLeaguePosition(teamId) {
           const teamsSorted = [...LA_LIGA.teams].sort((a, b) => b.strength - a.strength);
           const rank = teamsSorted.findIndex(t => t.id === teamId);
           return rank + 1;
      }

    function calculateTeamStrength(playerList, tactics) {
        if (!playerList || playerList.length === 0) return { overall: 30, attack: 30, midfield: 30, defence: 30, goalkeeping: 30 };

        let totalSkill = 0;
        let attackSkill = 0, midSkill = 0, defSkill = 0, gkSkill = 0;
        let attackCount = 0, midCount = 0, defCount = 0, gkCount = 0;

         playerList.forEach(p => {
             const moraleFactor = 0.6 + (p.morale / 250);
             const fitnessFactor = 0.4 + (p.fitness / 167);
             const effectiveSkill = p.skill * moraleFactor * fitnessFactor;
             totalSkill += effectiveSkill;

             switch(p.position) {
                 case 'GK': gkSkill += effectiveSkill * 1.2; gkCount++; break;
                 case 'DEF': defSkill += effectiveSkill; defCount++; break;
                 case 'MID': midSkill += effectiveSkill; midCount++; break;
                 case 'FWD': attackSkill += effectiveSkill; attackCount++; break;
             }
         });

         let averageSkill = totalSkill / playerList.length;

         const avgAttack = attackCount > 0 ? attackSkill / attackCount : averageSkill * 0.8;
         const avgMid = midCount > 0 ? midSkill / midCount : averageSkill * 0.8;
         const avgDef = defCount > 0 ? defSkill / defCount : averageSkill * 0.8;
         const avgGk = gkCount > 0 ? gkSkill / gkCount : averageSkill * 0.6;

         const needs = getFormationNeeds(tactics.formation);
         let formationFitBonus = 0;
         if (Math.abs(needs.DEF - defCount) <= 1) formationFitBonus += 2;
         if (Math.abs(needs.MID - midCount) <= 1) formationFitBonus += 2;
         if (Math.abs(needs.FWD - attackCount) <= 1) formationFitBonus += 2;
         if (gkCount !== 1) formationFitBonus -= 10;

         let mentalityModifier = { attack: 0, mid: 0, def: 0 };
         switch(tactics.mentality) {
             case 'very_attacking': mentalityModifier = { attack: 5, mid: 2, def: -5 }; break;
             case 'attacking': mentalityModifier = { attack: 3, mid: 1, def: -3 }; break;
             case 'balanced': mentalityModifier = { attack: 0, mid: 0, def: 0 }; break;
             case 'defensive': mentalityModifier = { attack: -3, mid: -1, def: 3 }; break;
             case 'very_defensive': mentalityModifier = { attack: -5, mid: -2, def: 5 }; break;
         }

          const finalAttack = Math.max(10, Math.min(100, avgAttack + mentalityModifier.attack + formationFitBonus));
          const finalMid = Math.max(10, Math.min(100, avgMid + mentalityModifier.mid + formationFitBonus));
          const finalDef = Math.max(10, Math.min(100, avgDef + mentalityModifier.def + formationFitBonus));
          const finalGk = Math.max(10, Math.min(100, avgGk));

         const overall = Math.max(10, Math.min(100, (finalAttack * 0.25) + (finalMid * 0.3) + (finalDef * 0.25) + (finalGk * 0.2)));

         return {
             overall: overall,
             attack: finalAttack,
             midfield: finalMid,
             defence: finalDef,
             goalkeeping: finalGk
         };
     }

     function getFormationNeeds(formation) {
         switch (formation) {
             case '4-4-2': return { GK: 1, DEF: 4, MID: 4, FWD: 2 };
             case '4-3-3': return { GK: 1, DEF: 4, MID: 3, FWD: 3 };
             case '3-5-2': return { GK: 1, DEF: 3, MID: 5, FWD: 2 };
             case '5-3-2': return { GK: 1, DEF: 5, MID: 3, FWD: 2 };
             case '4-2-3-1': return { GK: 1, DEF: 4, MID: 5, FWD: 1 };
             case '4-1-4-1': return { GK: 1, DEF: 4, MID: 5, FWD: 1 };
             default: return { GK: 1, DEF: 4, MID: 4, FWD: 2 };
         }
     }

     function renderMatchEvents(events) {
         if (!matchEventsList) return;
         matchEventsList.innerHTML = '';
         const eventsToShow = events.slice(-20);
         eventsToShow.forEach(event => {
             const li = document.createElement('li');
             li.innerHTML = `<span>${event.minute}'</span> ${event.text}`;
             matchEventsList.appendChild(li);
         });
         matchEventsList.scrollTop = matchEventsList.scrollHeight;
     }

     function buyPlayer(playerId) {
         const playerIndex = gameState.transferMarket.findIndex(p => p.id === playerId);
         if (playerIndex === -1) return;

         const player = gameState.transferMarket[playerIndex];

         if (gameState.budget >= player.value) {
             if (gameState.players.length >= 40) {
                alert("لا يمكنك شراء المزيد من اللاعبين، لقد وصلت للحد الأقصى لحجم الفريق (40). قم ببيع لاعبين أولاً.");
                return;
             }

             gameState.budget -= player.value;
             const newPlayer = { ...player, id: generateNewPlayerId(), teamId: gameState.teamId };
              ensurePlayerDataNumbers(newPlayer);
             gameState.players.push(newPlayer);
             gameState.transferMarket.splice(playerIndex, 1);

             addNews(`تم شراء اللاعب ${player.name} مقابل €${player.value.toLocaleString()}. مرحباً بك في ${gameState.teamName}!`);
             calculateWeeklyWageBill();
             updateUI();
         } else {
             alert("الميزانية غير كافية لشراء هذا اللاعب.");
         }
     }

     function sellPlayer(playerId) {
         if (gameState.players.length <= 18) {
            alert("لا يمكن بيع اللاعب. يجب أن يحتوي الفريق على 18 لاعبًا على الأقل.");
            return;
         }

         const playerIndex = gameState.players.findIndex(p => p.id === playerId);
         if (playerIndex === -1) return;

         const player = gameState.players[playerIndex];

         if (player.position === 'GK' && gameState.players.filter(p => p.position === 'GK').length <= 2) {
            if (!confirm(`أنت على وشك بيع حارس مرمى أساسي (${player.name}). هل أنت متأكد؟ قد لا يكون لديك بديل كافٍ.`)) {
                return;
            }
         } else if (gameState.squad.starting.includes(playerId)) {
              if (!confirm(`اللاعب ${player.name} في التشكيلة الأساسية الحالية. هل أنت متأكد من بيعه؟`)) {
                 return;
             }
         }

         gameState.squad.starting = gameState.squad.starting.filter(id => id !== playerId);
         gameState.squad.subs = gameState.squad.subs.filter(id => id !== playerId);

         const sellValue = Math.floor(player.value * (0.7 + Math.random() * 0.2));
         gameState.budget += sellValue;

         gameState.players.splice(playerIndex, 1);

         addNews(`تم بيع اللاعب ${player.name} مقابل €${sellValue.toLocaleString()}.`);
         calculateWeeklyWageBill();
         updateUI();
     }

      function upgradeFacility(type) {
         const cost = (type === 'stadium') ? gameState.facilities.stadiumUpgradeCost : gameState.facilities.trainingUpgradeCost;
         const maxLevel = 5;

         if (type === 'stadium' && gameState.facilities.stadiumLevel >= maxLevel) {
             alert("لقد وصلت إلى أقصى مستوى تطوير للملعب!");
             return;
         }
          if (type === 'training' && gameState.facilities.trainingLevel >= maxLevel) {
              alert("لقد وصلت إلى أقصى مستوى تطوير لمرافق التدريب!");
              return;
          }

          if (gameState.budget >= cost) {
              gameState.budget -= cost;
              if (type === 'stadium') {
                 gameState.facilities.stadiumLevel++;
                 gameState.facilities.stadiumCapacity += (5000 * Math.pow(1.8, gameState.facilities.stadiumLevel - 2));
                 gameState.facilities.stadiumCapacity = Math.floor(gameState.facilities.stadiumCapacity / 1000) * 1000;
                 gameState.facilities.stadiumUpgradeCost = Math.floor(cost * 2.2);
                 addNews(`تم تطوير الملعب إلى المستوى ${gameState.facilities.stadiumLevel}! السعة الآن ${gameState.facilities.stadiumCapacity.toLocaleString()}.`);
              } else {
                 gameState.facilities.trainingLevel++;
                 gameState.facilities.trainingUpgradeCost = Math.floor(cost * 1.8);
                 addNews(`تم تطوير مرافق التدريب إلى المستوى ${gameState.facilities.trainingLevel}!`);
                 if (trainingFacilityLevel) trainingFacilityLevel.textContent = gameState.facilities.trainingLevel;
              }
              updateUI();
              saveGame();
          } else {
              alert("الميزانية غير كافية لهذا التطوير.");
          }
      }

      function handlePressConferenceResponse(responseType) {
        if (!gameState.matchOutcomePending) return;

        const lastMatch = gameState.matchOutcomePending;
        let reputationChange = 0;
        let moraleChange = 0;
        let newsMessage = '';

        const opponentStrength = getTeamDataById(lastMatch.opponentId)?.strength || 60;
        const playerStrength = getTeamDataById(gameState.teamId)?.strength || 60;
        const strengthDiff = playerStrength - opponentStrength;

         if (responseType === 'positive') {
            newsMessage = "المدرب بدا متفائلًا ومتحمساً في المؤتمر الصحفي.";
            if (lastMatch.outcome === 'win') {
                reputationChange = (strengthDiff < -10 ? 2 : 1);
                moraleChange = 2;
            } else if (lastMatch.outcome === 'draw') {
                reputationChange = (strengthDiff > 10 ? -1 : 0);
                moraleChange = 1;
            } else {
                reputationChange = -2;
                moraleChange = -1; newsMessage += " لكن البعض اعتبره غير واقعي.";
            }
         } else if (responseType === 'neutral') {
            newsMessage = "المدرب قدم ردودًا دبلوماسية وهادئة.";
            reputationChange = 0;
            if (lastMatch.outcome === 'win') moraleChange = 1;
            else if (lastMatch.outcome === 'draw') moraleChange = 0;
            else moraleChange = -1;
         } else {
             newsMessage = "المدرب انتقد الأداء وطالب بالمزيد.";
             if (lastMatch.outcome === 'win') {
                reputationChange = -1; moraleChange = -1; newsMessage += " مما أثار استغراب البعض بعد الفوز.";
             } else if (lastMatch.outcome === 'draw') {
                 reputationChange = (strengthDiff < -10 ? 1 : 0);
                 moraleChange = -2;
             } else {
                 reputationChange = (strengthDiff > 10 ? 1 : 0);
                 moraleChange = -3; newsMessage += " ووعد بتحسينات جذرية.";
             }
         }

        gameState.reputation = Math.max(10, Math.min(100, gameState.reputation + reputationChange));
        gameState.players.forEach(p => {
            p.morale = Math.max(0, Math.min(100, p.morale + moraleChange));
        });

        addNews(newsMessage + ` (تأثير المؤتمر: السمعة ${reputationChange > 0 ? '+' : ''}${reputationChange}, معنويات الفريق ${moraleChange > 0 ? '+' : ''}${moraleChange})`);

         gameState.matchOutcomePending = null;
         pressOptions.style.display = 'none';
         pressResult.textContent = `تأثير ردك: السمعة ${reputationChange}, معنويات اللاعبين ${moraleChange}.`;
         updateUI();
     }

     function startTraining() {
         if (!gameInitialized) return;
         trainingResult.textContent = "بدء التدريب...";
         let improvements = 0;
         let fitnessCostTotal = 0;
         let playersTrained = 0;

         const trainingIntensityFactor = 1.0;
         const baseImproveChance = 0.05;
         const facilityBonus = gameState.facilities.trainingLevel * 0.02;

         gameState.players.forEach(p => {
             if (p.status === 'active') {
                 playersTrained++;
                 const fitnessCost = Math.floor((Math.random() * 6) + 4) * trainingIntensityFactor;
                 p.fitness = Math.max(0, p.fitness - fitnessCost);
                 fitnessCostTotal += fitnessCost;

                 let improveChance = baseImproveChance + facilityBonus;
                 if (p.age < 23) improveChance *= 1.5;
                 else if (p.age > 29) improveChance *= 0.5;
                 if (p.potential && p.skill >= p.potential) improveChance = 0.01;
                 if (p.morale < 50) improveChance *= 0.7;

                 if (Math.random() < improveChance && p.skill < 99) {
                    p.skill++;
                    improvements++;
                    p.value = Math.floor(p.value * 1.01);
                 }
             }
         });
         const avgFitnessDrop = playersTrained > 0 ? (fitnessCostTotal / playersTrained).toFixed(1) : 0;
         trainingResult.textContent = `اكتمل التدريب. ${improvements} لاعب(ين) أظهروا تحسنًا. متوسط انخفاض اللياقة: ${avgFitnessDrop}%.`;
         addNews(`جلسة تدريبية مكتملة (${improvements} تحسن). تأكد من راحة اللاعبين قبل المباراة!`);
         renderTeamManagement();
     }

    function formatDate(date) {
        if (!(date instanceof Date) || isNaN(date)) {
             if (typeof date === 'string') {
                 date = new Date(date);
                 if (isNaN(date)) return "تاريخ غير صالح";
             } else {
                 console.error("Invalid date provided to formatDate:", date);
                 return "تاريخ غير صالح";
             }
         }
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    function findNextMatch() {
        if (!gameState.schedule) return null;
        return gameState.schedule.find(match => !match.played);
    }
     function findNextMatchIndex() {
         if (!gameState.schedule) return -1;
         return gameState.schedule.findIndex(match => !match.played);
     }

     function getPlayerById(id) {
         if (!gameState.players) return null;
         return gameState.players.find(p => p.id === id);
     }

      function getTeamDataById(id) {
         return LA_LIGA.teams.find(t => t.id === id);
     }
      function getTeamNameById(id) {
          if (id === gameState.teamId) return gameState.teamName;
          return getTeamDataById(id)?.name;
      }
       function getRandomTeamName(excludeId = null) {
           const possibleTeams = LA_LIGA.teams.filter(t => t.id !== excludeId);
           if (possibleTeams.length === 0) return "فريق غامض";
           return possibleTeams[Math.floor(Math.random() * possibleTeams.length)].name;
       }

      function getCompetitionName(compId) {
          return gameState.competitions[compId]?.name || compId;
      }

     function getRandomPlayer(playerArray) {
         if (!playerArray || playerArray.length === 0) return null;
         return playerArray[Math.floor(Math.random() * playerArray.length)];
     }

     function generateNewPlayerId() {
         const allPlayerIds = (gameState.players?.map(p => p.id) || [])
                             .concat(gameState.transferMarket?.map(p => p.id) || []);
        const maxId = allPlayerIds.length > 0 ? Math.max(0, ...allPlayerIds) : Date.now();
         return maxId + 1;
     }

    function navigateToSection(sectionId) {
        document.querySelectorAll('#main-content section').forEach(section => {
            section.classList.remove('active-section');
        });
        navButtons.forEach(button => {
            button.classList.remove('active');
        });

        const targetSection = document.getElementById(`${sectionId}-section`);
        if (targetSection) {
            targetSection.classList.add('active-section');
            const activeButton = document.querySelector(`#main-nav button[data-section="${sectionId}"]`);
            if (activeButton) {
                 activeButton.classList.add('active');
            }
             console.log("Navigated to:", sectionId);
            updateUI();
        } else {
            console.error("Target section not found:", sectionId);
             document.getElementById('dashboard-section')?.classList.add('active-section');
             document.querySelector('#main-nav button[data-section="dashboard"]')?.classList.add('active');
             updateUI();
        }
    }

     function handleTabSwitch(activeButton) {
         if (!activeButton || !activeButton.classList.contains('tab-button') || !activeButton.dataset.tab) return;

         const parentTabs = activeButton.closest('.tabs');
         if (!parentTabs) return;

         const targetTabId = activeButton.dataset.tab + '-tab';
         const sectionContainer = parentTabs.parentElement;

         if (!sectionContainer) return;

         parentTabs.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
         sectionContainer.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

         activeButton.classList.add('active');
         const targetContent = sectionContainer.querySelector(`#${targetTabId}`);
         if (targetContent) {
             targetContent.classList.add('active');
         } else {
             console.warn(`Tab content not found for ID: #${targetTabId}`);
         }
     }

    function addCoreEventListeners() {
        navButtons.forEach(button => {
             button.removeEventListener('click', navigateHandler);
             button.addEventListener('click', navigateHandler);
        });

        advanceDayBtn?.removeEventListener('click', advanceDay);
        advanceDayBtn?.addEventListener('click', advanceDay);

        saveGameBtn?.removeEventListener('click', saveGame);
        saveGameBtn?.addEventListener('click', saveGame);

        resetGameBtn?.removeEventListener('click', resetGame);
        resetGameBtn?.addEventListener('click', resetGame);

        saveTacticsBtn?.removeEventListener('click', saveTacticsHandler);
        saveTacticsBtn?.addEventListener('click', saveTacticsHandler);

        startTrainingBtn?.removeEventListener('click', startTraining);
        startTrainingBtn?.addEventListener('click', startTraining);

         simulateMatchBtn?.removeEventListener('click', simulateMatch);
         simulateMatchBtn?.addEventListener('click', simulateMatch);

         backToFixturesBtn?.removeEventListener('click', backToFixturesHandler);
         backToFixturesBtn?.addEventListener('click', backToFixturesHandler);

         setTicketPriceBtn?.removeEventListener('click', setTicketPriceHandler);
         setTicketPriceBtn?.addEventListener('click', setTicketPriceHandler);

         upgradeStadiumBtn?.removeEventListener('click', upgradeStadiumHandler);
         upgradeStadiumBtn?.addEventListener('click', upgradeStadiumHandler);

         upgradeTrainingBtn?.removeEventListener('click', upgradeTrainingHandler);
         upgradeTrainingBtn?.addEventListener('click', upgradeTrainingHandler);

        pressResponseButtons.forEach(button => {
             button.removeEventListener('click', pressResponseHandler);
             button.addEventListener('click', pressResponseHandler);
        });

         sectionTabs.forEach(tabGroup => {
             tabGroup.removeEventListener('click', tabClickHandler);
             tabGroup.addEventListener('click', tabClickHandler);
         });
    }

    function navigateHandler(e) {
         const sectionId = e.target.dataset.section;
         if (sectionId && gameInitialized) {
             navigateToSection(sectionId);
         } else if (!gameInitialized) {
             addNews("الرجاء اختيار فريق أولاً لبدء اللعبة.");
         }
    }
    function saveTacticsHandler() {
         gameState.tactics.formation = formationSelect.value;
         gameState.tactics.mentality = mentalitySelect.value;
         addNews(`تم تحديث التكتيكات: ${gameState.tactics.formation}, ${getMentalityName(gameState.tactics.mentality)}.`);
    }
     function getMentalityName(mentalityValue) {
        const names = { very_attacking: "هجومية بحتة", attacking: "هجومية", balanced: "متوازنة", defensive: "دفاعية", very_defensive: "دفاعية بحتة" };
        return names[mentalityValue] || mentalityValue;
     }
    function backToFixturesHandler() {
         matchResultSection.style.display = 'none';
         fixturesList.style.display = 'block';
         renderFixtures();
    }
    function setTicketPriceHandler() {
         const price = parseInt(ticketPriceInput.value);
         if (!isNaN(price) && price >= 5 && price <= 150) {
             gameState.finances.ticketPrice = price;
             addNews(`تم تحديد سعر التذكرة الجديد: €${price}`);
             renderFinances();
         } else {
             alert("الرجاء إدخال سعر تذكرة صالح بين 5 و 150.");
         }
    }
    function upgradeStadiumHandler() { upgradeFacility('stadium'); }
    function upgradeTrainingHandler() { upgradeFacility('training'); }
    function pressResponseHandler(e) { handlePressConferenceResponse(e.target.dataset.response); }
    function tabClickHandler(e) {
         if (e.target.classList.contains('tab-button')) {
             handleTabSwitch(e.target);
         }
     }

    addCoreEventListeners();
    initGame();

});
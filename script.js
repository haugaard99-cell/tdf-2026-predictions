// ============ DATA ============
const riders = [
    "Tadej Pogačar (UAE Team Emirates)","Jonas Vingegaard (Visma-Lease a Bike)","Remco Evenepoel (Soudal Quick-Step)",
    "Primož Roglič (Red Bull-BORA-hansgrohe)","Mathieu van der Poel (Alpecin-Deceuninck)","Wout van Aert (Visma-Lease a Bike)",
    "Jasper Philipsen (Alpecin-Deceuninck)","Biniam Girmay (Intermarché-Wanty)","Mads Pedersen (Lidl-Trek)",
    "Carlos Rodríguez (INEOS Grenadiers)","Juan Ayuso (UAE Team Emirates)","João Almeida (UAE Team Emirates)",
    "Adam Yates (UAE Team Emirates)","Enric Mas (Movistar)","Richard Carapaz (EF Education-EasyPost)",
    "Egan Bernal (INEOS Grenadiers)","Matteo Jorgenson (Visma-Lease a Bike)","Sepp Kuss (Visma-Lease a Bike)",
    "Tom Pidcock (Q36.5 Pro Cycling)","Julian Alaphilippe (Tudor Pro Cycling)","Romain Bardet (Picnic PostNL)",
    "David Gaudu (Groupama-FDJ)","Tobias Halland Johannessen (Uno-X)","Florian Lipowitz (Red Bull-BORA-hansgrohe)",
    "Isaac del Toro (UAE Team Emirates)","Arnaud De Lie (Lotto)","Olav Kooij (Visma-Lease a Bike)",
    "Tim Merlier (Soudal Quick-Step)","Dylan Groenewegen (Jayco AlUla)","Fabio Jakobsen (Picnic PostNL)"
];

const teams = [
    "UAE Team Emirates","Visma-Lease a Bike","Soudal Quick-Step","Red Bull-BORA-hansgrohe",
    "INEOS Grenadiers","Alpecin-Deceuninck","Lidl-Trek","Movistar","EF Education-EasyPost",
    "Groupama-FDJ","Bahrain Victorious","Jayco AlUla","Intermarché-Wanty","Cofidis",
    "Decathlon AG2R","Israel-Premier Tech","Tudor Pro Cycling","Q36.5 Pro Cycling",
    "Lotto","Picnic PostNL","Uno-X","Arkéa-B&B Hotels"
];

const stages = [
    { num: 1, date: "Sat 4 Jul", from: "Barcelona", to: "Barcelona", km: 19, type: "itt", icon: "⏱️", desc: "Opening time trial" },
    { num: 2, date: "Sun 5 Jul", from: "Tarragona", to: "Barcelona", km: 178, type: "hilly", icon: "⛰️", desc: "Punchy finish on Montjuïc" },
    { num: 3, date: "Mon 6 Jul", from: "Granollers", to: "Andorra la Vella", km: 195, type: "mountain", icon: "🏔️", desc: "First Pyrenees test" },
    { num: 4, date: "Tue 7 Jul", from: "Andorra", to: "Foix", km: 165, type: "mountain", icon: "🏔️", desc: "Second Pyrenean stage" },
    { num: 5, date: "Wed 8 Jul", from: "Pamiers", to: "Toulouse", km: 175, type: "flat", icon: "🏁", desc: "Sprinters' day" },
    { num: 6, date: "Thu 9 Jul", from: "Toulouse", to: "Carcassonne", km: 188, type: "flat", icon: "🏁", desc: "Bunch sprint likely" },
    { num: 7, date: "Fri 10 Jul", from: "Béziers", to: "Montpellier", km: 172, type: "flat", icon: "🏁", desc: "Coastal sprint stage" },
    { num: 8, date: "Sat 11 Jul", from: "Nîmes", to: "Mont Ventoux", km: 198, type: "mountain", icon: "🏔️", desc: "Iconic Mont Ventoux finish" },
    { num: 9, date: "Sun 12 Jul", from: "Avignon", to: "Gap", km: 184, type: "hilly", icon: "⛰️", desc: "Transitional hilly stage" },
    { num: 10, date: "Mon 13 Jul", from: "REST DAY", to: "Grenoble", km: 0, type: "rest", icon: "😴", desc: "First rest day" },
    { num: 11, date: "Tue 14 Jul", from: "Grenoble", to: "Alpe d'Huez", km: 152, type: "mountain", icon: "🏔️", desc: "Bastille Day on Alpe d'Huez" },
    { num: 12, date: "Wed 15 Jul", from: "Bourg d'Oisans", to: "Courchevel", km: 175, type: "mountain", icon: "🏔️", desc: "Queen stage in the Alps" },
    { num: 13, date: "Thu 16 Jul", from: "Albertville", to: "Saint-Étienne", km: 195, type: "hilly", icon: "⛰️", desc: "Breakaway opportunity" },
    { num: 14, date: "Fri 17 Jul", from: "Saint-Étienne", to: "Clermont-Ferrand", km: 38, type: "itt", icon: "⏱️", desc: "GC time trial" },
    { num: 15, date: "Sat 18 Jul", from: "Clermont", to: "Le Lioran", km: 168, type: "mountain", icon: "🏔️", desc: "Massif Central climbs" },
    { num: 16, date: "Sun 19 Jul", from: "Aurillac", to: "Limoges", km: 182, type: "flat", icon: "🏁", desc: "Sprint opportunity" },
    { num: 17, date: "Mon 20 Jul", from: "REST DAY", to: "Bordeaux", km: 0, type: "rest", icon: "😴", desc: "Second rest day" },
    { num: 18, date: "Tue 21 Jul", from: "Bordeaux", to: "Pau", km: 188, type: "flat", icon: "🏁", desc: "Final sprint before Pyrenees" },
    { num: 19, date: "Wed 22 Jul", from: "Pau", to: "Hautacam", km: 165, type: "mountain", icon: "🏔️", desc: "Hautacam summit finish" },
    { num: 20, date: "Thu 23 Jul", from: "Tarbes", to: "Col du Tourmalet", km: 158, type: "mountain", icon: "🏔️", desc: "Final mountain showdown" },
    { num: 21, date: "Sun 26 Jul", from: "Versailles", to: "Paris (Champs)", km: 125, type: "flat", icon: "🏆", desc: "Champs-Élysées finale" }
];

let db = null;
let firebaseReady = false;

async function initFirebase() {
    let tries = 0;
    while (!window.firebaseSDK && tries < 50) {
        await new Promise(r => setTimeout(r, 100));
        tries++;
    }
    if (!window.firebaseSDK) { console.error('Firebase SDK failed to load'); return false; }
    const { initializeApp, getFirestore } = window.firebaseSDK;
    const app = initializeApp(FIREBASE_CONFIG);
    db = getFirestore(app);
    firebaseReady = true;
    console.log('✅ Firebase connected');
    return true;
}

document.addEventListener('DOMContentLoaded', async () => {
    populateDropdowns();
    buildStagePredictions();
    setupTabs();
    setupForm();
    renderRouteStats();
    setupAdmin();
    await initFirebase();
    setupRealtimeUpdates();
    renderStages();
});

function setupRealtimeUpdates() {
    if (!firebaseReady) return;
    const { collection, onSnapshot, doc } = window.firebaseSDK;
    onSnapshot(collection(db, 'predictions'), () => { renderLeaderboard(); renderPredictionsList(); });
    onSnapshot(doc(db, 'results', 'current'), () => { renderStages(); recalculateAllScores(); });
}

function populateDropdowns() {
    const riderSelects = ['yellowJersey','greenJersey','polkaJersey','whiteJersey','podium1','podium2','podium3',
        'resultYellow','resultGreen','resultPolka','resultWhite','resultPodium1','resultPodium2','resultPodium3'];
    riderSelects.forEach(id => {
        const sel = document.getElementById(id);
        if (!sel) return;
        riders.forEach(r => { const opt = document.createElement('option'); opt.value = r; opt.textContent = r; sel.appendChild(opt); });
    });
    ['winningTeam','resultTeam'].forEach(id => {
        const sel = document.getElementById(id);
        if (!sel) return;
        teams.forEach(t => { const opt = document.createElement('option'); opt.value = t; opt.textContent = t; sel.appendChild(opt); });
    });
}

function buildStagePredictions() {
    const container = document.getElementById('stagePredictions');
    container.innerHTML = stages.filter(s => s.type !== 'rest').map(s => `
        <div class="stage-prediction-row">
            <div><div class="stage-label">S${s.num}</div><span class="stage-sub">${s.type}</span></div>
            <select id="stagePred${s.num}" required>
                <option value="">Winner of Stage ${s.num} (${s.from} → ${s.to})</option>
                ${riders.map(r => `<option value="${r}">${r}</option>`).join('')}
            </select>
        </div>
    `).join('');
}

async function renderStages() {
    const results = await getResults();
    document.getElementById('stagesList').innerHTML = stages.map(s => {
        const winner = results.stageWinners && results.stageWinners[s.num];
        return `
        <div class="stage-card ${s.type}">
            <div class="stage-number">${s.type === 'rest' ? '💤' : s.num}</div>
            <div class="stage-info">
                <div class="stage-route">${s.from} ${s.type === 'rest' ? '' : '→ ' + s.to}</div>
                <div class="stage-meta">
                    <span>📅 ${s.date}</span>
                    ${s.km ? `<span>📏 ${s.km} km</span>` : ''}
                    <span class="stage-type-badge ${s.type}">${s.type}</span>
                </div>
                <div class="stage-meta" style="margin-top:6px;">${s.desc}</div>
                ${winner ? `<div class="stage-winner-display">🏆 Winner: <strong>${escapeHtml(winner)}</strong></div>` : ''}
            </div>
            <div class="stage-icon">${s.icon}</div>
        </div>`;
    }).join('');
}

function renderRouteStats() {
    document.getElementById('flatCount').textContent = stages.filter(s => s.type === 'flat').length;
    document.getElementById('hillyCount').textContent = stages.filter(s => s.type === 'hilly').length;
    document.getElementById('mountainCount').textContent = stages.filter(s => s.type === 'mountain').length;
    document.getElementById('ittCount').textContent = stages.filter(s => s.type === 'itt').length;
}

function setupTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(target).classList.add('active');
        if (target === 'leaderboard') { renderLeaderboard(); renderPredictionsList(); }
        if (target === 'stages') renderStages();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }));
}

function setupForm() {
    document.getElementById('predictionForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!firebaseReady) { alert('Database not ready, please try again in a moment'); return; }
        const stagePredictions = {};
        stages.filter(s => s.type !== 'rest').forEach(s => {
            stagePredictions[s.num] = document.getElementById(`stagePred${s.num}`).value;
        });
        const prediction = {
            playerName: document.getElementById('playerName').value.trim(),
            yellowJersey: document.getElementById('yellowJersey').value,
            greenJersey: document.getElementById('greenJersey').value,
            polkaJersey: document.getElementById('polkaJersey').value,
            whiteJersey: document.getElementById('whiteJersey').value,
            podium1: document.getElementById('podium1').value,
            podium2: document.getElementById('podium2').value,
            podium3: document.getElementById('podium3').value,
            stagePredictions: stagePredictions,
            stageWins: document.getElementById('stageWins').value,
            winningTeam: document.getElementById('winningTeam').value,
            dnfCount: document.getElementById('dnfCount').value,
            score: 0,
            submittedAt: new Date().toISOString()
        };
        const podium = [prediction.podium1, prediction.podium2, prediction.podium3];
        if (new Set(podium).size !== 3) { alert('Podium positions must be 3 different riders!'); return; }
        try {
            const { collection, addDoc } = window.firebaseSDK;
            await addDoc(collection(db, 'predictions'), prediction);
            showSuccess();
            e.target.reset();
        } catch (err) {
            console.error(err);
            alert('Error submitting: ' + err.message);
        }
    });
}

async function getPredictions() {
    if (!firebaseReady) return [];
    const { collection, getDocs } = window.firebaseSDK;
    const snap = await getDocs(collection(db, 'predictions'));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

async function getResults() {
    if (!firebaseReady) return { stageWinners: {} };
    const { doc, getDoc } = window.firebaseSDK;
    const snap = await getDoc(doc(db, 'results', 'current'));
    return snap.exists() ? snap.data() : { stageWinners: {} };
}

async function saveResults(results) {
    const { doc, setDoc } = window.firebaseSDK;
    await setDoc(doc(db, 'results', 'current'), results);
}

function showSuccess() {
    const msg = document.getElementById('successMessage');
    msg.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => msg.classList.add('hidden'), 4000);
}

function calculateScore(prediction, results) {
    let score = 0;
    if (results.stageWinners) {
        Object.entries(results.stageWinners).forEach(([stageNum, winner]) => {
            if (winner && prediction.stagePredictions && prediction.stagePredictions[stageNum] === winner) score += 10;
        });
    }
    if (results.yellowJersey && prediction.yellowJersey === results.yellowJersey) score += 25;
    if (results.greenJersey && prediction.greenJersey === results.greenJersey) score += 15;
    if (results.polkaJersey && prediction.polkaJersey === results.polkaJersey) score += 15;
    if (results.whiteJersey && prediction.whiteJersey === results.whiteJersey) score += 15;
    const actualPodium = [results.podium1, results.podium2, results.podium3].filter(Boolean);
    const predictedPodium = [prediction.podium1, prediction.podium2, prediction.podium3];
    predictedPodium.forEach((p, i) => {
        if (actualPodium[i] && p === actualPodium[i]) score += 20;
        else if (p && actualPodium.includes(p)) score += 10;
    });
    if (results.team && prediction.winningTeam === results.team) score += 15;
    if (results.stageWins && parseInt(prediction.stageWins) === parseInt(results.stageWins)) score += 10;
    if (results.dnfCount !== undefined && results.dnfCount !== '' && Math.abs(parseInt(prediction.dnfCount) - parseInt(results.dnfCount)) <= 3) score += 10;
    return score;
}

async function recalculateAllScores() {
    if (!firebaseReady) return;
    renderLeaderboard();
    renderPredictionsList();
}

async function renderLeaderboard() {
    const list = document.getElementById('leaderboardList');
    if (!firebaseReady) { list.innerHTML = '<p class="empty-state">Connecting to database...</p>'; return; }
    const predictions = await getPredictions();
    const results = await getResults();
    if (predictions.length === 0) {
        list.innerHTML = '<p class="empty-state">No predictions submitted yet. Be the first!</p>';
        return;
    }
    predictions.forEach(p => p.score = calculateScore(p, results));
    const sorted = [...predictions].sort((a,b) => b.score - a.score);
    list.innerHTML = sorted.map((p,i) => {
        let rc = ''; if (i===0) rc='gold'; else if (i===1) rc='silver'; else if (i===2) rc='bronze';
        return `
            <div class="leaderboard-item">
                <div class="rank ${rc}">#${i+1}</div>
                <div class="player-info">
                    <div class="player-name">${escapeHtml(p.playerName)}</div>
                    <div class="player-score">${p.score} points</div>
                </div>
            </div>`;
    }).join('');
}

async function renderPredictionsList() {
    const list = document.getElementById('predictionsList');
    if (!firebaseReady) return;
    const predictions = await getPredictions();
    const results = await getResults();
    if (predictions.length === 0) { list.innerHTML = '<p class="empty-state">No predictions yet.</p>'; return; }
    predictions.forEach(p => p.score = calculateScore(p, results));
    list.innerHTML = predictions.map(p => `
        <div class="prediction-card">
            <h3>${escapeHtml(p.playerName)} — ${p.score} pts</h3>
            <div class="prediction-detail"><span>🟡 Yellow</span><span>${escapeHtml(p.yellowJersey)}</span></div>
            <div class="prediction-detail"><span>🟢 Green</span><span>${escapeHtml(p.greenJersey)}</span></div>
            <div class="prediction-detail"><span>🔴 Polka</span><span>${escapeHtml(p.polkaJersey)}</span></div>
            <div class="prediction-detail"><span>⚪ White</span><span>${escapeHtml(p.whiteJersey)}</span></div>
            <div class="prediction-detail"><span>🥇 1st</span><span>${escapeHtml(p.podium1)}</span></div>
            <div class="prediction-detail"><span>🥈 2nd</span><span>${escapeHtml(p.podium2)}</span></div>
            <div class="prediction-detail"><span>🥉 3rd</span><span>${escapeHtml(p.podium3)}</span></div>
            <div class="prediction-detail"><span>Team</span><span>${escapeHtml(p.winningTeam)}</span></div>
            <details style="margin-top:10px;">
                <summary style="cursor:pointer;font-weight:700;color:var(--gray);">🏁 Stage Predictions</summary>
                ${Object.entries(p.stagePredictions || {}).map(([num,rider]) => 
                    `<div class="prediction-detail"><span>Stage ${num}</span><span>${escapeHtml(rider)}</span></div>`).join('')}
            </details>
        </div>`).join('');
}

function setupAdmin() {
    document.getElementById('unlockAdmin').addEventListener('click', () => {
        const pin = document.getElementById('adminPin').value;
        if (pin === ADMIN_PIN) {
            document.getElementById('adminLock').classList.add('hidden');
            document.getElementById('adminPanel').classList.remove('hidden');
            buildAdminStageInputs();
            loadResultsIntoAdmin();
        } else { alert('Wrong PIN'); }
    });

    document.getElementById('saveResults').addEventListener('click', async () => {
        const results = await getResults();
        results.stageWinners = results.stageWinners || {};
        stages.filter(s => s.type !== 'rest').forEach(s => {
            const v = document.getElementById(`adminStage${s.num}`).value;
            if (v) results.stageWinners[s.num] = v;
            else delete results.stageWinners[s.num];
        });
        results.yellowJersey = document.getElementById('resultYellow').value;
        results.greenJersey = document.getElementById('resultGreen').value;
        results.polkaJersey = document.getElementById('resultPolka').value;
        results.whiteJersey = document.getElementById('resultWhite').value;
        results.podium1 = document.getElementById('resultPodium1').value;
        results.podium2 = document.getElementById('resultPodium2').value;
        results.podium3 = document.getElementById('resultPodium3').value;
        results.stageWins = document.getElementById('resultStageWins').value;
        results.team = document.getElementById('resultTeam').value;
        results.dnfCount = document.getElementById('resultDnfCount').value;
        await saveResults(results);
        alert('✅ Results saved! Everyone will see the update.');
    });

    document.getElementById('resetAll').addEventListener('click', async () => {
        if (confirm('⚠️ Delete ALL results? (Predictions stay)')) {
            await saveResults({ stageWinners: {} });
            location.reload();
        }
    });

    const fetchBtn = document.getElementById('fetchAllStages');
    if (fetchBtn) fetchBtn.addEventListener('click', fetchAllStagesFromWiki);
}

function buildAdminStageInputs() {
    const container = document.getElementById('adminStageResults');
    container.innerHTML = stages.filter(s => s.type !== 'rest').map(s => `
        <div class="stage-prediction-row">
            <div><div class="stage-label">S${s.num}</div><span class="stage-sub">${s.type}</span></div>
            <select id="adminStage${s.num}">
                <option value="">-- No result yet --</option>
                ${riders.map(r => `<option value="${r}">${r}</option>`).join('')}
            </select>
        </div>`).join('');
}

async function loadResultsIntoAdmin() {
    const r = await getResults();
    if (r.stageWinners) {
        Object.entries(r.stageWinners).forEach(([num, winner]) => {
            const el = document.getElementById(`adminStage${num}`);
            if (el) el.value = winner;
        });
    }
    ['Yellow','Green','Polka','White','Podium1','Podium2','Podium3','Team'].forEach(k => {
        const map = {Yellow:'yellowJersey',Green:'greenJersey',Polka:'polkaJersey',White:'whiteJersey',
                     Podium1:'podium1',Podium2:'podium2',Podium3:'podium3',Team:'team'};
        const el = document.getElementById(`result${k}`);
        if (el && r[map[k]]) el.value = r[map[k]];
    });
    if (r.stageWins) document.getElementById('resultStageWins').value = r.stageWins;
    if (r.dnfCount) document.getElementById('resultDnfCount').value = r.dnfCount;
}

async function fetchAllStagesFromWiki() {
    const status = document.getElementById('fetchStatus');
    const racingStages = stages.filter(s => s.type !== 'rest');
    let found = 0, pending = 0;
    status.innerHTML = '🔄 Fetching from Wikipedia...';
    for (const s of racingStages) {
        try {
            const res = await fetch(`${WIKI_PROXY_URL}/?stage=${s.num}`);
            const data = await res.json();
            if (data.winner) {
                const match = riders.find(r => 
                    r.toLowerCase().includes(data.winner.toLowerCase()) ||
                    data.winner.toLowerCase().includes(r.split(' (')[0].toLowerCase())
                );
                if (match) {
                    const el = document.getElementById(`adminStage${s.num}`);
                    if (el) el.value = match;
                    found++;
                } else { pending++; }
            } else { pending++; }
            status.innerHTML = `🔄 Checking stage ${s.num}/21... (${found} found)`;
            await new Promise(r => setTimeout(r, 200));
        } catch (err) {
            console.error(`Stage ${s.num} fetch failed:`, err);
            pending++;
        }
    }
    status.innerHTML = `✅ Done! Found <strong>${found}</strong> results, <strong>${pending}</strong> not yet available.<br><em>Review dropdowns below, then click "Save & Recalculate Scores".</em>`;
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
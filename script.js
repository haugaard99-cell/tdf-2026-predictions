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

const countries = [
    "🇧🇪 Belgium","🇫🇷 France","🇸🇮 Slovenia","🇩🇰 Denmark","🇳🇱 Netherlands","🇪🇸 Spain","🇮🇹 Italy",
    "🇬🇧 United Kingdom","🇩🇪 Germany","🇨🇭 Switzerland","🇦🇺 Australia","🇨🇴 Colombia","🇪🇨 Ecuador",
    "🇺🇸 USA","🇳🇴 Norway","🇪🇷 Eritrea","🇵🇹 Portugal","🇦🇹 Austria","🇮🇪 Ireland","🇨🇦 Canada","🇵🇱 Poland"
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

const LOCK_DATE = new Date('2026-07-04T10:00:00Z');
const isLocked = () => new Date() >= LOCK_DATE;

let db = null;
let firebaseReady = false;
let currentLeague = 'all';
let currentEditingId = null;

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
    setupLeagueTabs();
    setupForm();
    renderRouteStats();
    setupAdmin();
    setupLoadButton();
    checkLockStatus();
    await initFirebase();
    setupRealtimeUpdates();
    renderStages();
});

function checkLockStatus() {
    if (isLocked()) {
        document.getElementById('predictionForm').classList.add('hidden');
        document.getElementById('lockedMessage').classList.remove('hidden');
        document.getElementById('lockBanner').innerHTML = '🔒 Predictions are now CLOSED - race has started!';
    } else {
        const daysLeft = Math.ceil((LOCK_DATE - new Date()) / (1000*60*60*24));
        document.getElementById('lockBanner').innerHTML = `📅 Race starts July 4, 2026 — <strong>${daysLeft} days left to predict</strong>`;
    }
}

function setupRealtimeUpdates() {
    if (!firebaseReady) return;
    const { collection, onSnapshot, doc } = window.firebaseSDK;
    onSnapshot(collection(db, 'predictions'), () => { renderLeaderboard(); renderPredictionsList(); renderStages(); });
    onSnapshot(doc(db, 'results', 'current'), () => { renderStages(); renderLeaderboard(); renderPredictionsList(); });
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
    ['topCountry','resultTopCountry'].forEach(id => {
        const sel = document.getElementById(id);
        if (!sel) return;
        countries.forEach(c => { const opt = document.createElement('option'); opt.value = c; opt.textContent = c; sel.appendChild(opt); });
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
        </div>`).join('');
}

// 🆕 PHASE 2: Stages tab now shows daily winners
async function renderStages() {
    const results = await getResults();
    const predictions = firebaseReady ? await getPredictions() : [];
    
    document.getElementById('stagesList').innerHTML = stages.map(s => {
        const winner = results.stageWinners && results.stageWinners[s.num];
        
        // Find who predicted this stage correctly
        let correctPredictors = [];
        if (winner && s.type !== 'rest') {
            correctPredictors = predictions
                .filter(p => p.stagePredictions && p.stagePredictions[s.num] === winner)
                .map(p => ({ name: p.playerName, lego: p.legoEmployee }));
        }
        
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
                ${winner && correctPredictors.length > 0 ? `
                    <div class="daily-winners">
                        ✅ <strong>${correctPredictors.length} correct prediction${correctPredictors.length !== 1 ? 's' : ''}:</strong>
                        ${correctPredictors.map(p => `<span class="winner-tag">${escapeHtml(p.name)}${p.lego ? ' 🧱' : ''}</span>`).join('')}
                    </div>
                ` : ''}
                ${winner && correctPredictors.length === 0 ? `
                    <div class="daily-winners" style="color:#999;">😅 Nobody predicted this one correctly!</div>
                ` : ''}
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

function setupLeagueTabs() {
    document.querySelectorAll('.league-tab').forEach(t => {
        t.addEventListener('click', () => {
            document.querySelectorAll('.league-tab').forEach(x => x.classList.remove('active'));
            t.classList.add('active');
            currentLeague = t.dataset.league;
            renderLeaderboard();
        });
    });
}

function setupLoadButton() {
    document.getElementById('loadMyPrediction').addEventListener('click', async () => {
        const name = document.getElementById('playerName').value.trim();
        const pin = document.getElementById('playerPin').value.trim();
        if (!name || !pin) { alert('Please enter your name and PIN first'); return; }
        if (!firebaseReady) { alert('Database not ready, try again in a moment'); return; }
        
        const predictions = await getPredictions();
        const match = predictions.find(p => p.playerName.toLowerCase() === name.toLowerCase() && p.pin === pin);
        
        if (!match) { alert('❌ No prediction found with that name + PIN combo. Check spelling!'); return; }
        if (isLocked()) { alert('🔒 Predictions are locked. You can view but not edit.'); }
        
        document.getElementById('legoEmployee').checked = match.legoEmployee || false;
        document.getElementById('yellowJersey').value = match.yellowJersey || '';
        document.getElementById('greenJersey').value = match.greenJersey || '';
        document.getElementById('polkaJersey').value = match.polkaJersey || '';
        document.getElementById('whiteJersey').value = match.whiteJersey || '';
        document.getElementById('podium1').value = match.podium1 || '';
        document.getElementById('podium2').value = match.podium2 || '';
        document.getElementById('podium3').value = match.podium3 || '';
        document.getElementById('stageWins').value = match.stageWins || '';
        document.getElementById('topCountry').value = match.topCountry || '';
        document.getElementById('winningTeam').value = match.winningTeam || '';
        document.getElementById('dnfCount').value = match.dnfCount || '';
        document.getElementById('timeGap').value = match.timeGap || '';
        Object.entries(match.stagePredictions || {}).forEach(([num, rider]) => {
            const el = document.getElementById(`stagePred${num}`);
            if (el) el.value = rider;
        });
        currentEditingId = match.id;
        console.log('Editing prediction with ID:', currentEditingId);
        document.getElementById('submitBtn').textContent = '💾 Update My Prediction';
        alert(`✅ Loaded prediction for ${match.playerName}. Make changes and click "Update".`);
    });
}

function setupForm() {
    document.getElementById('predictionForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        if (isLocked()) { alert('🔒 Predictions are closed!'); return; }
        if (!firebaseReady) { alert('Database not ready'); return; }
        
        const stagePredictions = {};
        stages.filter(s => s.type !== 'rest').forEach(s => {
            stagePredictions[s.num] = document.getElementById(`stagePred${s.num}`).value;
        });
        const prediction = {
            playerName: document.getElementById('playerName').value.trim(),
            pin: document.getElementById('playerPin').value.trim(),
            legoEmployee: document.getElementById('legoEmployee').checked,
            yellowJersey: document.getElementById('yellowJersey').value,
            greenJersey: document.getElementById('greenJersey').value,
            polkaJersey: document.getElementById('polkaJersey').value,
            whiteJersey: document.getElementById('whiteJersey').value,
            podium1: document.getElementById('podium1').value,
            podium2: document.getElementById('podium2').value,
            podium3: document.getElementById('podium3').value,
            stagePredictions: stagePredictions,
            stageWins: document.getElementById('stageWins').value,
            topCountry: document.getElementById('topCountry').value,
            winningTeam: document.getElementById('winningTeam').value,
            dnfCount: document.getElementById('dnfCount').value,
            timeGap: document.getElementById('timeGap').value,
            score: 0,
            submittedAt: new Date().toISOString()
        };
        
        if (!/^\d{4}$/.test(prediction.pin)) { alert('PIN must be exactly 4 digits'); return; }
        const podium = [prediction.podium1, prediction.podium2, prediction.podium3];
        if (new Set(podium).size !== 3) { alert('Podium positions must be 3 different riders!'); return; }
        if (!/^\d{1,2}:[0-5]\d$/.test(prediction.timeGap)) { alert('Time gap must be MM:SS format (e.g. 12:45)'); return; }

        try {
            const { collection, addDoc, doc, setDoc, getDoc } = window.firebaseSDK;
            
            if (currentEditingId) {
                const docRef = doc(db, 'predictions', currentEditingId);
                const docSnap = await getDoc(docRef);
                if (!docSnap.exists()) {
                    await addDoc(collection(db, 'predictions'), prediction);
                    alert('⚠️ Original prediction not found, created new one.');
                } else {
                    prediction.lastUpdated = new Date().toISOString();
                    await setDoc(docRef, prediction);
                    alert('✅ Prediction updated!');
                }
            } else {
                const existing = await getPredictions();
                const dup = existing.find(p => p.playerName.toLowerCase() === prediction.playerName.toLowerCase() && p.pin === prediction.pin);
                if (dup) {
                    alert('⚠️ A prediction with this name + PIN already exists. Click "Load My Prediction" to edit it instead!');
                    return;
                }
                await addDoc(collection(db, 'predictions'), prediction);
                alert('✅ Prediction submitted!');
            }
            
            showSuccess();
            e.target.reset();
            currentEditingId = null;
            document.getElementById('submitBtn').textContent = 'Submit Predictions 🚴‍♂️';
        } catch (err) {
            console.error('Submit error:', err);
            alert('Error: ' + err.message);
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

function timeGapToSeconds(str) {
    if (!str || !/^\d{1,2}:[0-5]\d$/.test(str)) return null;
    const [m, s] = str.split(':').map(Number);
    return m * 60 + s;
}

// 🆕 PHASE 2: Return both score AND detailed breakdown
function calculateScoreWithBreakdown(prediction, results) {
    const breakdown = [];
    let score = 0;
    
    // Stage wins
    if (results.stageWinners) {
        Object.entries(results.stageWinners).forEach(([stageNum, winner]) => {
            if (winner && prediction.stagePredictions && prediction.stagePredictions[stageNum] === winner) {
                score += 10;
                breakdown.push({ label: `🏁 Stage ${stageNum}: ${winner.split(' (')[0]}`, points: 10, correct: true });
            } else if (winner && prediction.stagePredictions && prediction.stagePredictions[stageNum]) {
                breakdown.push({ label: `❌ Stage ${stageNum}: predicted ${prediction.stagePredictions[stageNum].split(' (')[0]}, actual ${winner.split(' (')[0]}`, points: 0, correct: false });
            }
        });
    }
    
    // Jerseys
    if (results.yellowJersey) {
        if (prediction.yellowJersey === results.yellowJersey) {
            score += 25;
            breakdown.push({ label: `🟡 Yellow Jersey: ${results.yellowJersey.split(' (')[0]}`, points: 25, correct: true });
        } else {
            breakdown.push({ label: `❌ Yellow Jersey: predicted ${prediction.yellowJersey?.split(' (')[0] || 'none'}, actual ${results.yellowJersey.split(' (')[0]}`, points: 0, correct: false });
        }
    }
    if (results.greenJersey) {
        if (prediction.greenJersey === results.greenJersey) {
            score += 15; breakdown.push({ label: `🟢 Green Jersey: ${results.greenJersey.split(' (')[0]}`, points: 15, correct: true });
        } else {
            breakdown.push({ label: `❌ Green Jersey: predicted ${prediction.greenJersey?.split(' (')[0] || 'none'}, actual ${results.greenJersey.split(' (')[0]}`, points: 0, correct: false });
        }
    }
    if (results.polkaJersey) {
        if (prediction.polkaJersey === results.polkaJersey) {
            score += 15; breakdown.push({ label: `🔴 Polka Dot Jersey: ${results.polkaJersey.split(' (')[0]}`, points: 15, correct: true });
        } else {
            breakdown.push({ label: `❌ Polka Dot: predicted ${prediction.polkaJersey?.split(' (')[0] || 'none'}, actual ${results.polkaJersey.split(' (')[0]}`, points: 0, correct: false });
        }
    }
    if (results.whiteJersey) {
        if (prediction.whiteJersey === results.whiteJersey) {
            score += 15; breakdown.push({ label: `⚪ White Jersey: ${results.whiteJersey.split(' (')[0]}`, points: 15, correct: true });
        } else {
            breakdown.push({ label: `❌ White Jersey: predicted ${prediction.whiteJersey?.split(' (')[0] || 'none'}, actual ${results.whiteJersey.split(' (')[0]}`, points: 0, correct: false });
        }
    }
    
    // Podium
    const actualPodium = [results.podium1, results.podium2, results.podium3].filter(Boolean);
    const predictedPodium = [prediction.podium1, prediction.podium2, prediction.podium3];
    const podiumLabels = ['🥇 1st', '🥈 2nd', '🥉 3rd'];
    predictedPodium.forEach((p, i) => {
        if (!actualPodium[i]) return;
        if (p === actualPodium[i]) {
            score += 20;
            breakdown.push({ label: `${podiumLabels[i]} place: ${p.split(' (')[0]} (exact!)`, points: 20, correct: true });
        } else if (p && actualPodium.includes(p)) {
            score += 10;
            breakdown.push({ label: `${podiumLabels[i]} place: ${p.split(' (')[0]} (in top 3, wrong pos)`, points: 10, correct: true });
        } else if (p) {
            breakdown.push({ label: `❌ ${podiumLabels[i]}: predicted ${p.split(' (')[0]}, actual ${actualPodium[i].split(' (')[0]}`, points: 0, correct: false });
        }
    });
    
    // Bonuses
    if (results.team) {
        if (prediction.winningTeam === results.team) {
            score += 15; breakdown.push({ label: `🏢 Winning team: ${results.team}`, points: 15, correct: true });
        } else {
            breakdown.push({ label: `❌ Team: predicted ${prediction.winningTeam || 'none'}, actual ${results.team}`, points: 0, correct: false });
        }
    }
    if (results.stageWins) {
        if (parseInt(prediction.stageWins) === parseInt(results.stageWins)) {
            score += 10; breakdown.push({ label: `🔢 Most stage wins: ${results.stageWins} (exact!)`, points: 10, correct: true });
        } else {
            breakdown.push({ label: `❌ Most stage wins: predicted ${prediction.stageWins}, actual ${results.stageWins}`, points: 0, correct: false });
        }
    }
    if (results.topCountry) {
        if (prediction.topCountry === results.topCountry) {
            score += 10; breakdown.push({ label: `🌍 Top country: ${results.topCountry}`, points: 10, correct: true });
        } else {
            breakdown.push({ label: `❌ Top country: predicted ${prediction.topCountry || 'none'}, actual ${results.topCountry}`, points: 0, correct: false });
        }
    }
    if (results.dnfCount !== undefined && results.dnfCount !== '') {
        const diff = Math.abs(parseInt(prediction.dnfCount) - parseInt(results.dnfCount));
        if (diff <= 3) {
            score += 10;
            breakdown.push({ label: `🚑 DNF count: predicted ${prediction.dnfCount}, actual ${results.dnfCount} (±${diff})`, points: 10, correct: true });
        } else {
            breakdown.push({ label: `❌ DNF count: predicted ${prediction.dnfCount}, actual ${results.dnfCount} (off by ${diff})`, points: 0, correct: false });
        }
    }
    
    return { score, breakdown };
}

function calculateScore(prediction, results) {
    return calculateScoreWithBreakdown(prediction, results).score;
}

function calcTieBreakerDiff(prediction, results) {
    const actual = timeGapToSeconds(results.timeGap);
    const predicted = timeGapToSeconds(prediction.timeGap);
    if (actual === null || predicted === null) return Infinity;
    return Math.abs(actual - predicted);
}

// 🆕 PHASE 2: Stage win counts mini-leaderboard
function getStageWinCounts(predictions, results) {
    if (!results.stageWinners) return [];
    const counts = {};
    predictions.forEach(p => {
        counts[p.id] = { name: p.playerName, lego: p.legoEmployee, correctStages: 0 };
    });
    Object.entries(results.stageWinners).forEach(([stageNum, winner]) => {
        predictions.forEach(p => {
            if (p.stagePredictions && p.stagePredictions[stageNum] === winner) {
                counts[p.id].correctStages++;
            }
        });
    });
    return Object.values(counts).filter(c => c.correctStages > 0).sort((a,b) => b.correctStages - a.correctStages);
}

async function renderLeaderboard() {
    const list = document.getElementById('leaderboardList');
    if (!firebaseReady) { list.innerHTML = '<p class="empty-state">Connecting to database...</p>'; return; }
    const allPredictions = await getPredictions();
    const results = await getResults();
    
    let predictions = allPredictions;
    if (currentLeague === 'lego') predictions = allPredictions.filter(p => p.legoEmployee);
    
    if (predictions.length === 0) {
        list.innerHTML = `<p class="empty-state">No predictions in ${currentLeague === 'lego' ? 'LEGO' : 'All'} league yet.</p>`;
        return;
    }
    
    predictions.forEach(p => {
        const result = calculateScoreWithBreakdown(p, results);
        p.score = result.score;
        p.breakdown = result.breakdown;
        p.tieBreakerDiff = calcTieBreakerDiff(p, results);
    });
    
    const sorted = [...predictions].sort((a,b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.tieBreakerDiff - b.tieBreakerDiff;
    });
    
    list.innerHTML = sorted.map((p,i) => {
        let rc = ''; if (i===0) rc='gold'; else if (i===1) rc='silver'; else if (i===2) rc='bronze';
        const tbInfo = results.timeGap && p.tieBreakerDiff !== Infinity 
            ? `Tie-breaker: predicted ${p.timeGap} (±${p.tieBreakerDiff}s)` 
            : `Tie-breaker: ${p.timeGap || 'not set'}`;
        const breakdownHtml = p.breakdown.length === 0 
            ? '<p style="color:#999;font-style:italic;padding:10px;">No results entered yet — breakdown will appear after admin enters results.</p>'
            : p.breakdown.map(b => `
                <div class="breakdown-row ${b.correct ? 'correct' : 'incorrect'}">
                    <span>${escapeHtml(b.label)}</span>
                    <span class="bp-pts">${b.points > 0 ? '+' + b.points : '0'}</span>
                </div>`).join('');
        
        return `
            <details class="leaderboard-item-wrapper">
                <summary class="leaderboard-item">
                    <div class="rank ${rc}">#${i+1}</div>
                    <div class="player-info">
                        <div class="player-name">${escapeHtml(p.playerName)}${p.legoEmployee ? '<span class="lego-badge">LEGO</span>' : ''}</div>
                        <div class="player-score">${p.score} points</div>
                        <div class="player-tiebreaker">${tbInfo}</div>
                    </div>
                    <div class="expand-arrow">▼</div>
                </summary>
                <div class="score-breakdown">
                    <h4>📊 Score Breakdown</h4>
                    ${breakdownHtml}
                </div>
            </details>`;
    }).join('');
    
    // 🆕 Stage win counts mini-leaderboard
    const stageCounts = getStageWinCounts(predictions, results);
    let stageCountsHtml = '';
    if (stageCounts.length > 0) {
        stageCountsHtml = `
            <div class="card" style="margin-top:20px;">
                <h2>🏁 Stage Prediction Masters</h2>
                <p class="card-desc">Players who correctly predicted the most stage winners</p>
                ${stageCounts.slice(0, 10).map((c, i) => {
                    let rc = ''; if (i===0) rc='gold'; else if (i===1) rc='silver'; else if (i===2) rc='bronze';
                    return `
                        <div class="leaderboard-item">
                            <div class="rank ${rc}">#${i+1}</div>
                            <div class="player-info">
                                <div class="player-name">${escapeHtml(c.name)}${c.lego ? '<span class="lego-badge">LEGO</span>' : ''}</div>
                                <div class="player-score">🏁 ${c.correctStages} correct stage${c.correctStages !== 1 ? 's' : ''}</div>
                            </div>
                        </div>`;
                }).join('')}
            </div>`;
    }
    
    // Insert stage counts after leaderboard
    const existing = document.getElementById('stagePredictionMasters');
    if (existing) existing.remove();
    if (stageCountsHtml) {
        const wrapper = document.createElement('div');
        wrapper.id = 'stagePredictionMasters';
        wrapper.innerHTML = stageCountsHtml;
        list.parentElement.parentElement.insertBefore(wrapper, list.parentElement.nextSibling);
    }
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
            <h3>${escapeHtml(p.playerName)}${p.legoEmployee ? '<span class="lego-badge">LEGO</span>' : ''} — ${p.score} pts</h3>
            <div class="prediction-detail"><span>🟡 Yellow</span><span>${escapeHtml(p.yellowJersey)}</span></div>
            <div class="prediction-detail"><span>🟢 Green</span><span>${escapeHtml(p.greenJersey)}</span></div>
            <div class="prediction-detail"><span>🔴 Polka</span><span>${escapeHtml(p.polkaJersey)}</span></div>
            <div class="prediction-detail"><span>⚪ White</span><span>${escapeHtml(p.whiteJersey)}</span></div>
            <div class="prediction-detail"><span>🥇 1st</span><span>${escapeHtml(p.podium1)}</span></div>
            <div class="prediction-detail"><span>🥈 2nd</span><span>${escapeHtml(p.podium2)}</span></div>
            <div class="prediction-detail"><span>🥉 3rd</span><span>${escapeHtml(p.podium3)}</span></div>
            <div class="prediction-detail"><span>Team</span><span>${escapeHtml(p.winningTeam)}</span></div>
            <div class="prediction-detail"><span>🌍 Top country</span><span>${escapeHtml(p.topCountry || '')}</span></div>
            <div class="prediction-detail"><span>⏱️ Tie-breaker</span><span>${escapeHtml(p.timeGap || '')}</span></div>
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
        results.topCountry = document.getElementById('resultTopCountry').value;
        results.team = document.getElementById('resultTeam').value;
        results.dnfCount = document.getElementById('resultDnfCount').value;
        results.timeGap = document.getElementById('resultTimeGap').value;
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
    const map = {Yellow:'yellowJersey',Green:'greenJersey',Polka:'polkaJersey',White:'whiteJersey',
                 Podium1:'podium1',Podium2:'podium2',Podium3:'podium3',Team:'team',TopCountry:'topCountry'};
    Object.entries(map).forEach(([k, v]) => {
        const el = document.getElementById(`result${k}`);
        if (el && r[v]) el.value = r[v];
    });
    if (r.stageWins) document.getElementById('resultStageWins').value = r.stageWins;
    if (r.dnfCount) document.getElementById('resultDnfCount').value = r.dnfCount;
    if (r.timeGap) document.getElementById('resultTimeGap').value = r.timeGap;
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
    status.innerHTML = `✅ Done! Found <strong>${found}</strong> results, <strong>${pending}</strong> not yet available.`;
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;

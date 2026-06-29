// ============ DATA ============
const riders = [
    "PHILIPSEN Jasper (APT)", "GROVES Kaden (APT)", "VAN DER POEL Mathieu (APT)", "VERSTRYNGE Emiel (APT)", "RICKAERT Jonas (APT)",
    "TIBERI Antonio (BHV)", "MARTINEZ Lenny (BHV)", "MOHORIČ Matej (BHV)",
    "KOOIJ Olav (DCM)", "BENOOT Tiesj (DCM)", "HOOLE Daan (DCM)", "BISSEGGER Stefan (DCM)", "SEIXAS Paul (DCM)",
    "HEALY Ben (EFE)", "ASGREEN Kasper (EFE)", "CARAPAZ Richard (EFE)", "BAUDIN Alex (EFE)",
    "GAUDU David (GFD)", "MARTIN Guillaume (GFD)",
    "GANNA Filippo (INE)", "RODRÍGUEZ Carlos (INE)", "KWIATKOWSKI Michał (INE)", "VAUQUELIN Kévin (INE)", "GODON Dorian (INE)", "ARENSMAN Thymen (INE)",
    "CICCONE Giulio (LTK)", "AYUSO Juan (LTK)", "PEDERSEN Mads (LTK)", "VACEK Mathias (LTK)", "SKJELMOSE Mattias (LTK)", "SIMMONS Quinn (LTK)", "KRAGH ANDERSEN Søren (LTK)",
    "DE LIE Arnaud (LIM)", "VAN EETVELT Lennert (LIM)", "ZIMMERMANN Georg (LIM)",
    "UIJTDEBROEKS Cian (MOV)", "RUBIO Einer (MOV)", "CASTRILLO Pablo (MOV)", "ADRIÀ Roger (MOV)",
    "GIRMAY Biniam (NSN)", "STEWART Jake (NSN)", "ASKEY Lewis (NSN)", "NEILANDS Krists (NSN)", "FRIGO Marco (NSN)", "LOUVEL Matis (NSN)", "BENNETT George (NSN)", "VAN ASBROECK Tom (NSN)",
    "EVENEPOEL Remco (RBH)", "DENZ Nico (RBH)", "LIPOWITZ Florian (RBH)", "CATTANEO Mattia (RBH)", "TRATNIK Jan (RBH)", "VAN GILS Maxim (RBH)", "HINDLEY Jai (RBH)", "VAN DIJKE Mick (RBH)",
    "PARET-PEINTRE Valentin (SQS)", "LANDA Mikel (SQS)", "MERLIER Tim (SQS)", "STUYVEN Jasper (SQS)", "VAN WILDER Ilan (SQS)", "VERVAEKE Louis (SQS)", "VAN BAARLE Dylan (SQS)", "VAN LERBERGHE Bert (SQS)",
    "MATTHEWS Michael (JAY)", "PLAPP Luke (JAY)", "ACKERMANN Pascal (JAY)", "O'CONNOR Ben (JAY)", "SCHMID Mauro (JAY)", "O'BRIEN Kelland (JAY)", "ENGELHARDT Felix (JAY)", "DURBRIDGE Luke (JAY)",
    "BITTNER Pavel (PIC)", "BARGUIL Warren (PIC)", "VAN DEN BROEK Frank (PIC)",
    "CAMPENAERTS Victor (VLB)", "AFFINI Edoardo (VLB)", "HAGENES Per Strand (VLB)", "JORGENSON Matteo (VLB)", "KUSS Sepp (VLB)", "ARMIRAIL Bruno (VLB)", "PIGANZOLI Davide (VLB)", "VINGEGAARD Jonas (VLB)",
    "POGAČAR Tadej (UAE)", "DEL TORO Isaac (UAE)", "WELLENS Tim (UAE)", "MCNULTY Brandon (UAE)", "YATES Adam (UAE)", "VERMEERSCH Florian (UAE)", "POLITT Nils (UAE)",
    "KRON Andreas (UNO)", "CORT Magnus (UNO)", "JOHANNESSEN Tobias Halland (UNO)", "SKAARSETH Anders (UNO)", "WÆRENSKJOLD Søren (UNO)", "CHARMIG Anthon (UNO)", "ABRAHAMSEN Jonas (UNO)", "TRÆEN Torstein (UNO)",
    "TEUNISSEN Mike (XDS)", "HIGUITA Sergio (XDS)", "TEJADA Harold (XDS)", "FORTUNATO Lorenzo (XDS)", "KANTER Max (XDS)",
    "KIRSCH Alex (COF)", "FRETIN Milan (COF)", "BUCHMANN Emanuel (COF)", "PAGE Hugo (COF)", "ARANBURU Alex (COF)", "IZAGIRRE Ion (COF)", "ALLEGAERT Piet (COF)", "BIERMANS Jenthe (COF)", "THOMAS Benjamin (COF)",
    "ALAPHILIPPE Julian (TUD)", "STORER Michael (TUD)", "TRENTIN Matteo (TUD)", "PLUIMERS Rick (TUD)",
    "JEGAT Jordan (TOT)",
    "MOLENAAR Alex (CJR)", "NICOLAU Joel (CJR)",
    "PIDCOCK Tom (PIN)", "WRIGHT Fred (PIN)", "HERMANS Quinten (PIN)"
];

const teams = [
    "Alpecin - Premier Tech", "Bahrain - Victorious", "Decathlon CMA CGM Team", "EF Education - EasyPost",
    "Groupama - FDJ United", "Netcompany INEOS", "Lidl - Trek", "Lotto Intermarché", "Movistar Team",
    "NSN Cycling Team", "Red Bull - BORA - hansgrohe", "Soudal Quick-Step", "Team Jayco AlUla",
    "Team Picnic PostNL", "Team Visma | Lease a Bike", "UAE Team Emirates - XRG", "Uno-X Mobility",
    "XDS Astana Team", "Cofidis", "Tudor Pro Cycling Team", "TotalEnergies", "Caja Rural - Seguros RGA",
    "Pinarello Q36.5 Pro Cycling Team"
];

const countries = [
    "🇧🇪 Belgium", "🇫🇷 France", "🇸🇮 Slovenia", "🇩🇰 Denmark", "🇳🇱 Netherlands", "🇪🇸 Spain", "🇮🇹 Italy",
    "🇬🇧 United Kingdom", "🇩🇪 Germany", "🇨🇭 Switzerland", "🇦🇺 Australia", "🇨🇴 Colombia", "🇪🇨 Ecuador",
    "🇺🇸 USA", "🇳🇴 Norway", "🇪🇷 Eritrea", "🇵🇹 Portugal", "🇦🇹 Austria", "🇮🇪 Ireland", "🇨🇦 Canada", "🇵🇱 Poland"
];

const stages = [
    { num: 1, date: "Sat 07/04/2026", from: "Barcelone", to: "Barcelone", km: 19.6, type: "itt", icon: "⏱️", desc: "Team Time-Trial" },
    { num: 2, date: "Sun 07/05/2026", from: "Tarragone", to: "Barcelone", km: 168.5, type: "hilly", icon: "⛰️", desc: "Hilly Stage" },
    { num: 3, date: "Mon 07/06/2026", from: "Granollers", to: "Les Angles", km: 195.9, type: "mountain", icon: "🏔️", desc: "Mountain Stage" },
    { num: 4, date: "Tue 07/07/2026", from: "Carcassonne", to: "Foix", km: 181.9, type: "hilly", icon: "⛰️", desc: "Hilly Stage" },
    { num: 5, date: "Wed 07/08/2026", from: "Lannemezan", to: "Pau", km: 158.3, type: "flat", icon: "🏁", desc: "Flat Stage" },
    { num: 6, date: "Thu 07/09/2026", from: "Pau", to: "Gavarnie-Gèdre", km: 186.2, type: "mountain", icon: "🏔️", desc: "Mountain Stage" },
    { num: 7, date: "Fri 07/10/2026", from: "Hagetmau", to: "Bordeaux", km: 175.1, type: "flat", icon: "🏁", desc: "Flat Stage" },
    { num: 8, date: "Sat 07/11/2026", from: "Périgueux", to: "Bergerac", km: 180.4, type: "flat", icon: "🏁", desc: "Flat Stage" },
    { num: 9, date: "Sun 07/12/2026", from: "Malemort", to: "Ussel", km: 185.5, type: "hilly", icon: "⛰️", desc: "Hilly Stage" },
    { num: 10, date: "Tue 07/14/2026", from: "Aurillac", to: "Le Lioran", km: 166.6, type: "mountain", icon: "🏔️", desc: "Mountain Stage" },
    { num: 11, date: "Wed 07/15/2026", from: "Vichy", to: "Nevers", km: 161.3, type: "flat", icon: "🏁", desc: "Flat Stage" },
    { num: 12, date: "Thu 07/16/2026", from: "Circuit Nevers Magny-Cours", to: "Chalon-sur-Saône", km: 179.1, type: "flat", icon: "🏁", desc: "Flat Stage" },
    { num: 13, date: "Fri 07/17/2026", from: "Dole", to: "Belfort", km: 205.8, type: "hilly", icon: "⛰️", desc: "Hilly Stage" },
    { num: 14, date: "Sat 07/18/2026", from: "Mulhouse", to: "Le Markstein Fellering", km: 155.3, type: "mountain", icon: "🏔️", desc: "Mountain Stage" },
    { num: 15, date: "Sun 07/19/2026", from: "Champagnole", to: "Plateau de Solaison", km: 183.9, type: "mountain", icon: "🏔️", desc: "Mountain Stage" },
    { num: 16, date: "Tue 07/21/2026", from: "Évian-les-Bains", to: "Thonon-les-Bains", km: 26.1, type: "itt", icon: "⏱️", desc: "Individual time-trial" },
    { num: 17, date: "Wed 07/22/2026", from: "Chambery", to: "Voiron", km: 174.7, type: "flat", icon: "🏁", desc: "Flat Stage" },
    { num: 18, date: "Thu 07/23/2026", from: "Voiron", to: "Orcières-Merlette", km: 185.2, type: "mountain", icon: "🏔️", desc: "Mountain Stage" },
    { num: 19, date: "Fri 07/24/2026", from: "Gap", to: "Alpe d'Huez", km: 127.9, type: "mountain", icon: "🏔️", desc: "Mountain Stage" },
    { num: 20, date: "Sat 07/25/2026", from: "Le Bourg d'Oisans", to: "Alpe d'Huez", km: 170.9, type: "mountain", icon: "🏔️", desc: "Mountain Stage" },
    { num: 21, date: "Sun 07/26/2026", from: "Thoiry", to: "Paris Champs-Élysées", km: 133, type: "flat", icon: "🏆", desc: "Flat Stage" }
];

const LOCK_DATE = new Date('2026-07-04T10:00:00Z');
const isLocked = () => new Date() >= LOCK_DATE;

let db = null;
let firebaseReady = false;
let currentLeague = 'none';  // 'none' | 'lego' | 'akp'
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
    setupRiderStatsTab();
    renderRiderStats();
    await initFirebase();
    setupRealtimeUpdates();
    renderStages();
    renderSummary();
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
    onSnapshot(collection(db, 'predictions'), () => { renderLeaderboard(); renderPredictionsList(); renderStages(); renderSummary(); });
    onSnapshot(doc(db, 'results', 'current'), () => { renderStages(); renderLeaderboard(); renderPredictionsList(); renderSummary(); });
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
        
        let correctPredictors = [];
        if (winner && s.type !== 'rest') {
            correctPredictors = predictions
                .filter(p => p.stagePredictions && p.stagePredictions[s.num] === winner)
                .map(p => ({ name: p.playerName, employer: p.employer }));
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
                ${s.type !== 'rest' ? `<button class="see-top-riders-btn" onclick="showRidersForStage(${s.num}, '${s.type}')">👀 See top riders for this stage</button>` : ''}
                ${winner ? `<div class="stage-winner-display">🏆 Winner: <strong>${escapeHtml(winner)}</strong></div>` : ''}
                ${winner && correctPredictors.length > 0 ? `
                    <div class="daily-winners">
                        ✅ <strong>${correctPredictors.length} correct prediction${correctPredictors.length !== 1 ? 's' : ''}:</strong>
                        ${correctPredictors.map(p => `<span class="winner-tag">${escapeHtml(p.name)}${renderEmployerEmoji(p.employer)}</span>`).join('')}
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
        if (target === 'summary') renderSummary();
        if (target === 'riders') renderRiderStats();
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
        
        const employerValue = match.employer || 'none';
        const radio = document.querySelector(`input[name="employer"][value="${employerValue}"]`);
        if (radio) radio.checked = true;
        
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
            employer: document.querySelector('input[name="employer"]:checked').value,
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
        counts[p.id] = { name: p.playerName, employer: p.employer, correctStages: 0 };
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
    
    const leagueLabels = { none: 'Expert', lego: 'LEGO', akp: 'AKP' };
    const predictions = allPredictions.filter(p => (p.employer || 'none') === currentLeague);

    if (predictions.length === 0) {
        list.innerHTML = `<p class="empty-state">No predictions in ${leagueLabels[currentLeague]} league yet.</p>`;
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
                        <div class="player-name">${escapeHtml(p.playerName)}${renderEmployerBadge(p.employer)}</div>
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
                                <div class="player-name">${escapeHtml(c.name)}${renderEmployerBadge(c.employer)}</div>
                                <div class="player-score">🏁 ${c.correctStages} correct stage${c.correctStages !== 1 ? 's' : ''}</div>
                            </div>
                        </div>`;
                }).join('')}
            </div>`;
    }
    
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
            <h3>${escapeHtml(p.playerName)}${renderEmployerBadge(p.employer)} — ${p.score} pts</h3>
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
}

// 🆕 Summary Function - rebuilt with consensus stats
async function renderSummary() {
    const summaryContent = document.getElementById('summaryContent');
    if (!firebaseReady) { 
        summaryContent.innerHTML = '<p class="empty-state">Connecting to database...</p>'; 
        return; 
    }

    // 🔒 Hide summary until predictions are locked
    if (!isLocked()) {
        const daysLeft = Math.ceil((LOCK_DATE - new Date()) / (1000*60*60*24));
        summaryContent.innerHTML = `
            <div style="text-align:center;padding:40px 20px;">
                <div style="font-size:3rem;margin-bottom:16px;">🔒</div>
                <h3 style="margin-bottom:10px;">Summary unlocks when the race starts</h3>
                <p style="color:var(--gray);max-width:400px;margin:0 auto;">
                    To keep predictions fair, the consensus and stats will be revealed 
                    when predictions close on <strong>July 4, 2026</strong>.
                </p>
                <p style="color:var(--gray);margin-top:14px;">
                    <strong>${daysLeft} days</strong> until reveal 🚴
                </p>
            </div>
        `;
        return;
    }

    const predictions = await getPredictions();
    const total = predictions.length;

    if (total === 0) {
        summaryContent.innerHTML = '<p class="empty-state">No predictions submitted.</p>';
        return;
    }

    // ===== A. Participation =====
    const lastSubmission = predictions
        .map(p => p.lastUpdated || p.submittedAt)
        .filter(Boolean)
        .sort()
        .pop();
    const lastDate = lastSubmission ? new Date(lastSubmission).toLocaleString('en-GB', { 
        day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' 
    }) : 'Unknown';

    const participationHtml = `
        <div class="summary-section">
            <h3>👥 Participation</h3>
            <div class="summary-stats-grid">
                <div class="summary-stat">
                    <div class="summary-stat-num">${total}</div>
                    <div class="summary-stat-label">Total Predictions</div>
                </div>
                <div class="summary-stat">
                    <div class="summary-stat-num" style="font-size:1rem;line-height:1.4;padding-top:8px;">${lastDate}</div>
                    <div class="summary-stat-label">Last Submission</div>
                </div>
            </div>
        </div>
    `;

    // ===== B. Jersey consensus =====
    const jerseyConfig = [
        { key: 'yellowJersey', icon: '🟡', name: 'Yellow Jersey (GC)', color: '#FFD700' },
        { key: 'greenJersey', icon: '🟢', name: 'Green Jersey (Points)', color: '#00A651' },
        { key: 'polkaJersey', icon: '🔴', name: 'Polka Dot (KOM)', color: '#E03A3E' },
        { key: 'whiteJersey', icon: '⚪', name: 'White Jersey (Young)', color: '#999' }
    ];

    const jerseyHtml = jerseyConfig.map(j => {
        const top5 = topN(predictions.map(p => p[j.key]).filter(Boolean), 5);
        return `
            <div class="summary-section">
                <h3>${j.icon} ${j.name}</h3>
                ${renderBars(top5, total, j.color)}
            </div>
        `;
    }).join('');

    // ===== C. Podium consensus =====
    const podiumHtml = `
        <div class="summary-section">
            <h3>🥇 Podium Consensus</h3>
            <div class="podium-consensus-grid">
                ${[1,2,3].map(pos => {
                    const top5 = topN(predictions.map(p => p[`podium${pos}`]).filter(Boolean), 5);
                    const labels = {1: '🥇 1st place', 2: '🥈 2nd place', 3: '🥉 3rd place'};
                    return `
                        <div>
                            <h4 style="margin-bottom:10px;">${labels[pos]}</h4>
                            ${renderBars(top5, total, '#FFD700')}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    // ===== D. Bonus predictions =====
    const teamTop5 = topN(predictions.map(p => p.winningTeam).filter(Boolean), 5);
    const countryTop5 = topN(predictions.map(p => p.topCountry).filter(Boolean), 5);

    const stageWinsArr = predictions.map(p => parseInt(p.stageWins)).filter(n => !isNaN(n));
    const dnfArr = predictions.map(p => parseInt(p.dnfCount)).filter(n => !isNaN(n));
    const timeGapSecsArr = predictions.map(p => timeGapToSeconds(p.timeGap)).filter(n => n !== null);

    const avg = arr => arr.length ? (arr.reduce((a,b) => a+b, 0) / arr.length) : 0;
    const fmtTimeGap = secs => {
        const m = Math.floor(secs / 60);
        const s = Math.round(secs % 60);
        return `${m}:${String(s).padStart(2,'0')}`;
    };

    const bonusHtml = `
        <div class="summary-section">
            <h3>🏢 Winning Team</h3>
            ${renderBars(teamTop5, total, '#2196F3')}
        </div>
        <div class="summary-section">
            <h3>🌍 Country with Most Stage Wins</h3>
            ${renderBars(countryTop5, total, '#FF9800')}
        </div>
        <div class="summary-section">
            <h3>🎯 Numeric Predictions</h3>
            <div class="summary-stats-grid">
                <div class="summary-stat">
                    <div class="summary-stat-num">${stageWinsArr.length ? avg(stageWinsArr).toFixed(1) : '—'}</div>
                    <div class="summary-stat-label">Avg Most Stage Wins</div>
                    <div class="summary-stat-range">${stageWinsArr.length ? `Range: ${Math.min(...stageWinsArr)}–${Math.max(...stageWinsArr)}` : ''}</div>
                </div>
                <div class="summary-stat">
                    <div class="summary-stat-num">${dnfArr.length ? avg(dnfArr).toFixed(0) : '—'}</div>
                    <div class="summary-stat-label">Avg DNF Count</div>
                    <div class="summary-stat-range">${dnfArr.length ? `Range: ${Math.min(...dnfArr)}–${Math.max(...dnfArr)}` : ''}</div>
                </div>
                <div class="summary-stat">
                    <div class="summary-stat-num">${timeGapSecsArr.length ? fmtTimeGap(avg(timeGapSecsArr)) : '—'}</div>
                    <div class="summary-stat-label">Avg Time Gap (1st→10th)</div>
                    <div class="summary-stat-range">${timeGapSecsArr.length ? `Range: ${fmtTimeGap(Math.min(...timeGapSecsArr))}–${fmtTimeGap(Math.max(...timeGapSecsArr))}` : ''}</div>
                </div>
            </div>
        </div>
    `;

    // ===== E. Stage consensus (collapsible) =====
    const stageRows = stages.filter(s => s.type !== 'rest').map(s => {
        const picks = predictions.map(p => p.stagePredictions?.[s.num]).filter(Boolean);
        const top3 = topN(picks, 3);
        const totalPicks = picks.length;
        if (top3.length === 0) {
            return `<div class="stage-summary-row"><strong>Stage ${s.num}</strong><span style="color:var(--gray);">No predictions</span></div>`;
        }
        const top3Html = top3.map(([rider, count]) => 
            `<div class="stage-pick-mini">
                <span>${escapeHtml(rider.split(' (')[0])}</span>
                <span class="pick-pct">${count} (${Math.round(count/totalPicks*100)}%)</span>
            </div>`
        ).join('');
        return `
            <div class="stage-summary-row">
                <div class="stage-summary-label">
                    <strong>S${s.num}</strong>
                    <span class="stage-type-badge ${s.type}" style="margin-left:6px;">${s.type}</span>
                </div>
                <div class="stage-summary-picks">${top3Html}</div>
            </div>
        `;
    }).join('');

    const stageConsensusHtml = `
        <div class="summary-section">
            <details>
                <summary style="cursor:pointer;font-weight:700;font-size:1.1rem;padding:8px 0;">
                    🏁 Stage-by-Stage Consensus (click to expand)
                </summary>
                <div style="margin-top:12px;">${stageRows}</div>
            </details>
        </div>
    `;

    // ===== F. Brave / contrarian picks =====
    const yellowPicks = predictions.map(p => ({ name: p.playerName, pick: p.yellowJersey })).filter(x => x.pick);
    const yellowCounts = {};
    yellowPicks.forEach(x => { yellowCounts[x.pick] = (yellowCounts[x.pick] || 0) + 1; });
    const brave = yellowPicks.filter(x => yellowCounts[x.pick] === 1);

    const braveHtml = brave.length > 0 ? `
        <div class="summary-section">
            <h3>🦁 Brave Picks (Yellow Jersey)</h3>
            <p class="card-desc">Players who picked a Yellow Jersey winner that nobody else did</p>
            <div class="brave-list">
                ${brave.map(b => `
                    <div class="brave-item">
                        <strong>${escapeHtml(b.name)}</strong>
                        <span>→ ${escapeHtml(b.pick.split(' (')[0])}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    summaryContent.innerHTML = participationHtml + jerseyHtml + podiumHtml + bonusHtml + stageConsensusHtml + braveHtml;
}

// Helper: count occurrences and return top N as [[item, count], ...]
function topN(arr, n) {
    const counts = {};
    arr.forEach(item => { counts[item] = (counts[item] || 0) + 1; });
    return Object.entries(counts).sort((a,b) => b[1] - a[1]).slice(0, n);
}

// Helper: render a list of bars
function renderBars(items, total, color) {
    if (items.length === 0) return '<p style="color:var(--gray);font-style:italic;">No data</p>';
    const max = items[0][1];
    return `<div class="bar-list">${items.map(([label, count]) => {
        const pct = Math.round(count / total * 100);
        const width = Math.round(count / max * 100);
        const shortLabel = label.length > 35 ? label.substring(0, 32) + '...' : label;
        return `
            <div class="bar-row">
                <div class="bar-label">${escapeHtml(shortLabel)}</div>
                <div class="bar-track">
                    <div class="bar-fill" style="width:${width}%;background:${color};"></div>
                    <div class="bar-value">${count} (${pct}%)</div>
                </div>
            </div>
        `;
    }).join('')}</div>`;
}

// ============ 🆕 RIDER STATS TAB ============

let currentRiderFilter = {
    search: '',
    team: '',
    nationality: '',
    preset: 'all',
    sortColumn: 'avg',
    sortDirection: 'desc',
    stageContext: null
};

// Preset configs: which stat to sort by, and which columns to highlight
const RIDER_PRESETS = {
    all:        { sortBy: 'avg', highlight: [] },
    gc:         { sortBy: 'gc',  highlight: ['gc', 'mtn', 'itt'] },
    climbers:   { sortBy: 'mtn', highlight: ['mtn', 'hll'] },
    sprinters:  { sortBy: 'spr', highlight: ['spr', 'flt'] },
    tt:         { sortBy: 'itt', highlight: ['itt', 'ttl'] },
    classics:   { sortBy: 'or',  highlight: ['or', 'cob', 'hll'] },
    puncheurs:  { sortBy: 'hll', highlight: ['hll', 'or'] }
};

// Map stage types to presets (for "See top riders for this stage" feature)
const STAGE_TYPE_TO_PRESET = {
    flat:     'sprinters',
    hilly:    'puncheurs',
    mountain: 'climbers',
    itt:      'tt'
};

function setupRiderStatsTab() {
    if (typeof ridersStats === 'undefined') {
        console.warn('⚠️ ridersStats not loaded — Riders tab will not work');
        return;
    }
    populateRiderFilters();
    
    // Search input
    document.getElementById('riderSearch').addEventListener('input', (e) => {
        currentRiderFilter.search = e.target.value.toLowerCase();
        renderRiderStats();
    });
    
    // Team filter
    document.getElementById('riderTeamFilter').addEventListener('change', (e) => {
        currentRiderFilter.team = e.target.value;
        renderRiderStats();
    });
    
    // Nationality filter
    document.getElementById('riderNationalityFilter').addEventListener('change', (e) => {
        currentRiderFilter.nationality = e.target.value;
        renderRiderStats();
    });
    
    // Quick filter buttons
    document.querySelectorAll('.quick-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.quick-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentRiderFilter.preset = btn.dataset.preset;
            const preset = RIDER_PRESETS[btn.dataset.preset];
            currentRiderFilter.sortColumn = preset.sortBy;
            currentRiderFilter.sortDirection = 'desc';
            renderRiderStats();
        });
    });
    
    // Clear stage context
    document.getElementById('clearStageContext').addEventListener('click', () => {
        currentRiderFilter.stageContext = null;
        document.getElementById('stageContextBanner').classList.add('hidden');
        document.querySelectorAll('.quick-filter-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.quick-filter-btn[data-preset="all"]').classList.add('active');
        currentRiderFilter.preset = 'all';
        currentRiderFilter.sortColumn = 'avg';
        renderRiderStats();
    });
}

function populateRiderFilters() {
    // Teams
    const teamSelect = document.getElementById('riderTeamFilter');
    const uniqueTeams = [...new Set(ridersStats.map(r => r.team))].sort();
    uniqueTeams.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = t;
        teamSelect.appendChild(opt);
    });
    
    // Nationalities
    const natSelect = document.getElementById('riderNationalityFilter');
    const uniqueNats = [...new Set(ridersStats.map(r => r.nationality))].sort();
    uniqueNats.forEach(n => {
        const rider = ridersStats.find(r => r.nationality === n);
        const opt = document.createElement('option');
        opt.value = n;
        opt.textContent = `${rider.flag} ${n}`;
        natSelect.appendChild(opt);
    });
}

function getStatClass(value) {
    if (value >= 90) return 'elite';
    if (value >= 80) return 'great';
    if (value >= 65) return 'good';
    if (value >= 45) return 'average';
    return 'low';
}

function filterAndSortRiders() {
    if (typeof ridersStats === 'undefined') return [];
    let list = [...ridersStats];
    
    // Search filter
    if (currentRiderFilter.search) {
        list = list.filter(r => 
            r.name.toLowerCase().includes(currentRiderFilter.search) ||
            r.team.toLowerCase().includes(currentRiderFilter.search) ||
            r.nationality.toLowerCase().includes(currentRiderFilter.search)
        );
    }
    
    // Team filter
    if (currentRiderFilter.team) {
        list = list.filter(r => r.team === currentRiderFilter.team);
    }
    
    // Nationality filter
    if (currentRiderFilter.nationality) {
        list = list.filter(r => r.nationality === currentRiderFilter.nationality);
    }
    
    // Sort
    const col = currentRiderFilter.sortColumn;
    const dir = currentRiderFilter.sortDirection === 'asc' ? 1 : -1;
    
    list.sort((a, b) => {
        let aVal, bVal;
        if (col === 'name') { aVal = a.name; bVal = b.name; }
        else if (col === 'team') { aVal = a.team; bVal = b.team; }
        else if (col === 'nationality') { aVal = a.nationality; bVal = b.nationality; }
        else if (col === 'age') { aVal = a.age || 999; bVal = b.age || 999; }
        else if (col === 'height') { aVal = a.height || 0; bVal = b.height || 0; }
        else if (col === 'weight') { aVal = a.weight || 0; bVal = b.weight || 0; }
        else { aVal = a.stats[col] || 0; bVal = b.stats[col] || 0; }
        
        if (typeof aVal === 'string') return aVal.localeCompare(bVal) * dir;
        return (aVal - bVal) * dir;
    });
    
    return list;
}

function renderRiderStats() {
    const container = document.getElementById('ridersTable');
    if (!container) return;
    if (typeof ridersStats === 'undefined') {
        container.innerHTML = '<div class="empty-riders">⚠️ Rider stats data not loaded.</div>';
        return;
    }
    
    const countEl = document.getElementById('riderCount');
    const filtered = filterAndSortRiders();
    const highlight = RIDER_PRESETS[currentRiderFilter.preset]?.highlight || [];
    
    countEl.textContent = `Showing ${filtered.length} of ${ridersStats.length} riders`;
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-riders">No riders match your filters.</div>';
        return;
    }
    
    const sortCol = currentRiderFilter.sortColumn;
    const sortDir = currentRiderFilter.sortDirection;
    
    const headers = [
        { key: 'name', label: 'Rider' },
        { key: 'team', label: 'Team' },
        { key: 'nationality', label: 'Nation' },
        { key: 'age', label: 'Age', cls: 'col-physical' },
        { key: 'height', label: 'Ht', cls: 'col-physical' },
        { key: 'weight', label: 'Wt', cls: 'col-physical' },
        { key: 'avg', label: 'AVG' },
        { key: 'flt', label: 'FLT' },
        { key: 'cob', label: 'COB' },
        { key: 'hll', label: 'HLL' },
        { key: 'mtn', label: 'MTN' },
        { key: 'spr', label: 'SPR' },
        { key: 'itt', label: 'ITT' },
        { key: 'gc',  label: 'GC' },
        { key: 'or',  label: 'OR' },
        { key: 'ttl', label: 'TTL' }
    ];
    
    const tableHtml = `
        <table class="riders-table">
            <thead>
                <tr>
                    ${headers.map(h => {
                        const sortClass = sortCol === h.key 
                            ? (sortDir === 'asc' ? 'sort-asc' : 'sort-desc')
                            : 'sortable';
                        return `<th class="${sortClass} ${h.cls || ''}" data-sort="${h.key}">${h.label}</th>`;
                    }).join('')}
                </tr>
            </thead>
            <tbody>
                ${filtered.map(r => `
                    <tr>
                        <td class="rider-name-cell">
                            <span class="rider-flag">${r.flag}</span>${escapeHtml(r.name)}
                        </td>
                        <td class="rider-team-cell">${escapeHtml(r.team)}</td>
                        <td>${escapeHtml(r.nationality)}</td>
                        <td class="col-physical">${r.age || '—'}</td>
                        <td class="col-physical">${r.height ? r.height + 'cm' : '—'}</td>
                        <td class="col-physical">${r.weight ? r.weight + 'kg' : '—'}</td>
                        ${['avg','flt','cob','hll','mtn','spr','itt','gc','or','ttl'].map(stat => {
                            const val = r.stats[stat];
                            const cls = getStatClass(val);
                            const highlightCls = highlight.includes(stat) ? 'highlighted' : '';
                            return `<td class="stat-cell ${cls} ${highlightCls}">${val}</td>`;
                        }).join('')}
                    </tr>
                `).join('')}
            </tbody>
        </table>
        
        ${filtered.map(r => `
            <div class="rider-card">
                <div class="rider-card-header">
                    <div>
                        <div class="rider-card-name">
                            <span class="rider-flag">${r.flag}</span>${escapeHtml(r.name)}
                        </div>
                        <div class="rider-card-team">${escapeHtml(r.team)}</div>
                        <div class="rider-card-meta">
                            ${r.age || '—'}y · ${r.height ? r.height + 'cm' : '—'} · ${r.weight ? r.weight + 'kg' : '—'}
                        </div>
                    </div>
                </div>
                <div class="rider-card-stats">
                    ${['flt','hll','mtn','spr','itt','gc','or','cob','ttl','avg'].map(stat => {
                        const val = r.stats[stat];
                        const cls = getStatClass(val);
                        const highlightCls = highlight.includes(stat) ? 'highlighted' : '';
                        return `
                            <div class="rider-stat-box ${cls} ${highlightCls}">
                                <div class="stat-label-sm">${stat}</div>
                                <div class="stat-num-sm">${val}</div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `).join('')}
    `;
    
    container.innerHTML = tableHtml;
    
    // Wire up sortable column headers
    container.querySelectorAll('th[data-sort]').forEach(th => {
        th.addEventListener('click', () => {
            const col = th.dataset.sort;
            if (currentRiderFilter.sortColumn === col) {
                currentRiderFilter.sortDirection = currentRiderFilter.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                currentRiderFilter.sortColumn = col;
                currentRiderFilter.sortDirection = 'desc';
            }
            renderRiderStats();
        });
    });
}

// Called from Stages tab — switches to Riders tab and applies stage-type preset
function showRidersForStage(stageNum, stageType) {
    const preset = STAGE_TYPE_TO_PRESET[stageType];
    if (!preset) return;
    
    const stage = stages.find(s => s.num === stageNum);
    if (!stage) return;
    
    // Switch tab
    document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelector('[data-tab="riders"]').classList.add('active');
    document.getElementById('riders').classList.add('active');
    
    // Apply preset
    document.querySelectorAll('.quick-filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.quick-filter-btn[data-preset="${preset}"]`).classList.add('active');
    currentRiderFilter.preset = preset;
    currentRiderFilter.sortColumn = RIDER_PRESETS[preset].sortBy;
    currentRiderFilter.sortDirection = 'desc';
    currentRiderFilter.stageContext = { stageNum, stageType };
    
    // Show context banner
    const banner = document.getElementById('stageContextBanner');
    const label = document.getElementById('stageContextLabel');
    label.innerHTML = `Stage ${stageNum} (${stage.from} → ${stage.to}) — <em>${stageType}</em>`;
    banner.classList.remove('hidden');
    
    renderRiderStats();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

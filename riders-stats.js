// ============ RIDER STATISTICS ============
// Stats scale: 0-99
// AVG=Average, FLT=Flat, COB=Cobbles, HLL=Hilly, MTN=Mountain
// SPR=Sprint, ITT=Time Trial, GC=GC, OR=One-day Race, TTL=Team Trial
// ⚠️ Stats are estimates based on rider profiles, not official PCS data

const ridersStats = [
  // ============ GC CONTENDERS / TOP CLIMBERS ============
  {
    name: "Tadej Pogačar", teamCode: "UAE", team: "UAE Team Emirates - XRG",
    nationality: "Slovenia", flag: "🇸🇮",
    height: 176, weight: 66, age: 27,
    stats: { avg: 99, flt: 92, cob: 88, hll: 99, mtn: 99, spr: 78, itt: 92, gc: 99, or: 99, ttl: 92 }
  },
  {
    name: "Jonas Vingegaard", teamCode: "VLB", team: "Team Visma | Lease a Bike",
    nationality: "Denmark", flag: "🇩🇰",
    height: 175, weight: 58, age: 29,
    stats: { avg: 97, flt: 74, cob: 20, hll: 91, mtn: 99, spr: 53, itt: 90, gc: 99, or: 60, ttl: 85 }
  },
  {
    name: "Remco Evenepoel", teamCode: "RBH", team: "Red Bull - BORA - hansgrohe",
    nationality: "Belgium", flag: "🇧🇪",
    height: 171, weight: 63, age: 26,
    stats: { avg: 97, flt: 85, cob: 70, hll: 96, mtn: 90, spr: 56, itt: 99, gc: 95, or: 95, ttl: 92 }
  },
  {
    name: "Juan Ayuso", teamCode: "LTK", team: "Lidl - Trek",
    nationality: "Spain", flag: "🇪🇸",
    height: 184, weight: 67, age: 23,
    stats: { avg: 92, flt: 65, cob: 30, hll: 86, mtn: 93, spr: 50, itt: 86, gc: 91, or: 55, ttl: 82 }
  },
  {
    name: "Isaac del Toro", teamCode: "UAE", team: "UAE Team Emirates - XRG",
    nationality: "Mexico", flag: "🇲🇽",
    height: 180, weight: 64, age: 22,
    stats: { avg: 92, flt: 78, cob: 55, hll: 92, mtn: 90, spr: 60, itt: 80, gc: 88, or: 85, ttl: 80 }
  },
  {
    name: "Carlos Rodríguez", teamCode: "INE", team: "Netcompany INEOS",
    nationality: "Spain", flag: "🇪🇸",
    height: 175, weight: 60, age: 25,
    stats: { avg: 90, flt: 70, cob: 40, hll: 85, mtn: 90, spr: 50, itt: 82, gc: 88, or: 55, ttl: 80 }
  },
  {
    name: "Florian Lipowitz", teamCode: "RBH", team: "Red Bull - BORA - hansgrohe",
    nationality: "Germany", flag: "🇩🇪",
    height: 184, weight: 65, age: 25,
    stats: { avg: 88, flt: 65, cob: 35, hll: 82, mtn: 88, spr: 45, itt: 80, gc: 85, or: 50, ttl: 78 }
  },
  {
    name: "Mattias Skjelmose", teamCode: "LTK", team: "Lidl - Trek",
    nationality: "Denmark", flag: "🇩🇰",
    height: 178, weight: 60, age: 25,
    stats: { avg: 89, flt: 72, cob: 45, hll: 90, mtn: 87, spr: 55, itt: 84, gc: 85, or: 80, ttl: 80 }
  },
  {
    name: "Ben O'Connor", teamCode: "JAY", team: "Team Jayco AlUla",
    nationality: "Australia", flag: "🇦🇺",
    height: 187, weight: 67, age: 30,
    stats: { avg: 87, flt: 65, cob: 35, hll: 82, mtn: 88, spr: 40, itt: 80, gc: 86, or: 50, ttl: 75 }
  },
  {
    name: "Ben Healy", teamCode: "EFE", team: "EF Education - EasyPost",
    nationality: "Ireland", flag: "🇮🇪",
    height: 180, weight: 70, age: 25,
    stats: { avg: 88, flt: 78, cob: 65, hll: 92, mtn: 80, spr: 55, itt: 78, gc: 75, or: 88, ttl: 75 }
  },
  {
    name: "Richard Carapaz", teamCode: "EFE", team: "EF Education - EasyPost",
    nationality: "Ecuador", flag: "🇪🇨",
    height: 170, weight: 62, age: 33,
    stats: { avg: 86, flt: 65, cob: 30, hll: 82, mtn: 89, spr: 45, itt: 75, gc: 86, or: 50, ttl: 72 }
  },
  {
    name: "David Gaudu", teamCode: "GFD", team: "Groupama - FDJ United",
    nationality: "France", flag: "🇫🇷",
    height: 170, weight: 57, age: 29,
    stats: { avg: 84, flt: 60, cob: 25, hll: 80, mtn: 86, spr: 50, itt: 72, gc: 82, or: 50, ttl: 70 }
  },
  {
    name: "Antonio Tiberi", teamCode: "BHV", team: "Bahrain - Victorious",
    nationality: "Italy", flag: "🇮🇹",
    height: 180, weight: 60, age: 24,
    stats: { avg: 84, flt: 65, cob: 35, hll: 82, mtn: 84, spr: 45, itt: 82, gc: 82, or: 45, ttl: 75 }
  },
  {
    name: "Cian Uijtdebroeks", teamCode: "MOV", team: "Movistar Team",
    nationality: "Belgium", flag: "🇧🇪",
    height: 175, weight: 60, age: 23,
    stats: { avg: 84, flt: 60, cob: 30, hll: 80, mtn: 86, spr: 40, itt: 75, gc: 83, or: 45, ttl: 72 }
  },
  {
    name: "Lenny Martinez", teamCode: "BHV", team: "Bahrain - Victorious",
    nationality: "France", flag: "🇫🇷",
    height: 168, weight: 53, age: 22,
    stats: { avg: 84, flt: 55, cob: 20, hll: 82, mtn: 90, spr: 38, itt: 65, gc: 78, or: 45, ttl: 65 }
  },
  {
    name: "Felix Gall", teamCode: "DCM", team: "Decathlon CMA CGM Team",
    nationality: "Austria", flag: "🇦🇹",
    height: 178, weight: 64, age: 28,
    stats: { avg: 84, flt: 60, cob: 30, hll: 78, mtn: 88, spr: 40, itt: 72, gc: 82, or: 45, ttl: 72 }
  },
  {
    name: "Jai Hindley", teamCode: "RBH", team: "Red Bull - BORA - hansgrohe",
    nationality: "Australia", flag: "🇦🇺",
    height: 173, weight: 60, age: 30,
    stats: { avg: 84, flt: 65, cob: 30, hll: 80, mtn: 86, spr: 42, itt: 74, gc: 82, or: 48, ttl: 72 }
  },
  {
    name: "Sepp Kuss", teamCode: "VLB", team: "Team Visma | Lease a Bike",
    nationality: "USA", flag: "🇺🇸",
    height: 180, weight: 60, age: 31,
    stats: { avg: 85, flt: 60, cob: 25, hll: 78, mtn: 88, spr: 35, itt: 70, gc: 80, or: 40, ttl: 75 }
  },
  {
    name: "Adam Yates", teamCode: "UAE", team: "UAE Team Emirates - XRG",
    nationality: "United Kingdom", flag: "🇬🇧",
    height: 173, weight: 58, age: 33,
    stats: { avg: 86, flt: 70, cob: 35, hll: 86, mtn: 86, spr: 45, itt: 78, gc: 84, or: 60, ttl: 78 }
  },
  {
    name: "Thymen Arensman", teamCode: "INE", team: "Netcompany INEOS",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 184, weight: 65, age: 26,
    stats: { avg: 84, flt: 65, cob: 30, hll: 78, mtn: 85, spr: 40, itt: 82, gc: 80, or: 45, ttl: 75 }
  },
  {
    name: "Tom Pidcock", teamCode: "PIN", team: "Pinarello Q36.5 Pro Cycling Team",
    nationality: "United Kingdom", flag: "🇬🇧",
    height: 170, weight: 58, age: 27,
    stats: { avg: 90, flt: 80, cob: 88, hll: 92, mtn: 84, spr: 70, itt: 80, gc: 75, or: 92, ttl: 78 }
  },

  // ============ SPRINTERS ============
  {
    name: "Jasper Philipsen", teamCode: "APT", team: "Alpecin - Premier Tech",
    nationality: "Belgium", flag: "🇧🇪",
    height: 179, weight: 75, age: 28,
    stats: { avg: 90, flt: 99, cob: 75, hll: 70, mtn: 25, spr: 99, itt: 55, gc: 30, or: 85, ttl: 70 }
  },
  {
    name: "Mathieu van der Poel", teamCode: "APT", team: "Alpecin - Premier Tech",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 184, weight: 75, age: 31,
    stats: { avg: 95, flt: 95, cob: 99, hll: 95, mtn: 61, spr: 88, itt: 78, gc: 55, or: 99, ttl: 75 }
  },
  {
    name: "Tim Merlier", teamCode: "SQS", team: "Soudal Quick-Step",
    nationality: "Belgium", flag: "🇧🇪",
    height: 180, weight: 79, age: 33,
    stats: { avg: 88, flt: 99, cob: 75, hll: 60, mtn: 20, spr: 99, itt: 50, gc: 25, or: 80, ttl: 65 }
  },
  {
    name: "Mads Pedersen", teamCode: "LTK", team: "Lidl - Trek",
    nationality: "Denmark", flag: "🇩🇰",
    height: 180, weight: 78, age: 30,
    stats: { avg: 91, flt: 92, cob: 92, hll: 90, mtn: 50, spr: 92, itt: 78, gc: 45, or: 95, ttl: 80 }
  },
  {
    name: "Biniam Girmay", teamCode: "NSN", team: "NSN Cycling Team",
    nationality: "Eritrea", flag: "🇪🇷",
    height: 175, weight: 67, age: 26,
    stats: { avg: 86, flt: 90, cob: 72, hll: 82, mtn: 45, spr: 92, itt: 60, gc: 38, or: 85, ttl: 65 }
  },
  {
    name: "Olav Kooij", teamCode: "DCM", team: "Decathlon CMA CGM Team",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 178, weight: 70, age: 24,
    stats: { avg: 84, flt: 92, cob: 60, hll: 65, mtn: 25, spr: 94, itt: 55, gc: 30, or: 70, ttl: 68 }
  },
  {
    name: "Kaden Groves", teamCode: "APT", team: "Alpecin - Premier Tech",
    nationality: "Australia", flag: "🇦🇺",
    height: 184, weight: 78, age: 27,
    stats: { avg: 84, flt: 92, cob: 70, hll: 72, mtn: 30, spr: 90, itt: 55, gc: 30, or: 75, ttl: 65 }
  },
  {
    name: "Michael Matthews", teamCode: "JAY", team: "Team Jayco AlUla",
    nationality: "Australia", flag: "🇦🇺",
    height: 180, weight: 72, age: 35,
    stats: { avg: 85, flt: 88, cob: 70, hll: 88, mtn: 45, spr: 85, itt: 65, gc: 40, or: 85, ttl: 70 }
  },
  {
    name: "Arnaud De Lie", teamCode: "LIM", team: "Lotto Intermarché",
    nationality: "Belgium", flag: "🇧🇪",
    height: 178, weight: 78, age: 24,
    stats: { avg: 84, flt: 90, cob: 78, hll: 78, mtn: 30, spr: 90, itt: 55, gc: 30, or: 82, ttl: 65 }
  },
  {
    name: "Pascal Ackermann", teamCode: "JAY", team: "Team Jayco AlUla",
    nationality: "Germany", flag: "🇩🇪",
    height: 180, weight: 76, age: 32,
    stats: { avg: 80, flt: 86, cob: 55, hll: 55, mtn: 22, spr: 86, itt: 50, gc: 25, or: 65, ttl: 60 }
  },
  {
    name: "Søren Wærenskjold", teamCode: "UNO", team: "Uno-X Mobility",
    nationality: "Norway", flag: "🇳🇴",
    height: 188, weight: 80, age: 26,
    stats: { avg: 80, flt: 86, cob: 70, hll: 70, mtn: 30, spr: 84, itt: 75, gc: 32, or: 75, ttl: 75 }
  },
  {
    name: "Pavel Bittner", teamCode: "PIC", team: "Team Picnic PostNL",
    nationality: "Czech Republic", flag: "🇨🇿",
    height: 178, weight: 72, age: 23,
    stats: { avg: 76, flt: 84, cob: 55, hll: 60, mtn: 25, spr: 82, itt: 48, gc: 28, or: 65, ttl: 60 }
  },
  {
    name: "Milan Fretin", teamCode: "COF", team: "Cofidis",
    nationality: "Belgium", flag: "🇧🇪",
    height: 179, weight: 75, age: 24,
    stats: { avg: 75, flt: 82, cob: 60, hll: 58, mtn: 22, spr: 80, itt: 48, gc: 25, or: 65, ttl: 58 }
  },
  {
    name: "Magnus Cort", teamCode: "UNO", team: "Uno-X Mobility",
    nationality: "Denmark", flag: "🇩🇰",
    height: 184, weight: 75, age: 33,
    stats: { avg: 80, flt: 80, cob: 70, hll: 82, mtn: 55, spr: 75, itt: 65, gc: 40, or: 80, ttl: 65 }
  },

  // ============ TIME TRIAL SPECIALISTS ============
  {
    name: "Filippo Ganna", teamCode: "INE", team: "Netcompany INEOS",
    nationality: "Italy", flag: "🇮🇹",
    height: 193, weight: 83, age: 30,
    stats: { avg: 88, flt: 88, cob: 70, hll: 70, mtn: 40, spr: 75, itt: 99, gc: 35, or: 80, ttl: 95 }
  },
  {
    name: "Stefan Bissegger", teamCode: "DCM", team: "Decathlon CMA CGM Team",
    nationality: "Switzerland", flag: "🇨🇭",
    height: 191, weight: 78, age: 28,
    stats: { avg: 78, flt: 75, cob: 65, hll: 60, mtn: 35, spr: 55, itt: 88, gc: 35, or: 60, ttl: 85 }
  },
  {
    name: "Edoardo Affini", teamCode: "VLB", team: "Team Visma | Lease a Bike",
    nationality: "Italy", flag: "🇮🇹",
    height: 194, weight: 83, age: 30,
    stats: { avg: 80, flt: 80, cob: 65, hll: 60, mtn: 30, spr: 60, itt: 90, gc: 30, or: 65, ttl: 90 }
  },
  {
    name: "Bruno Armirail", teamCode: "VLB", team: "Team Visma | Lease a Bike",
    nationality: "France", flag: "🇫🇷",
    height: 184, weight: 71, age: 32,
    stats: { avg: 74, flt: 70, cob: 50, hll: 65, mtn: 50, spr: 45, itt: 85, gc: 50, or: 50, ttl: 80 }
  },
  {
    name: "Daan Hoole", teamCode: "DCM", team: "Decathlon CMA CGM Team",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 194, weight: 80, age: 27,
    stats: { avg: 72, flt: 72, cob: 55, hll: 55, mtn: 30, spr: 50, itt: 82, gc: 30, or: 55, ttl: 82 }
  },
  {
    name: "Victor Campenaerts", teamCode: "VLB", team: "Team Visma | Lease a Bike",
    nationality: "Belgium", flag: "🇧🇪",
    height: 181, weight: 71, age: 34,
    stats: { avg: 76, flt: 78, cob: 65, hll: 70, mtn: 50, spr: 55, itt: 85, gc: 45, or: 72, ttl: 82 }
  },

  // ============ CLASSICS / PUNCHEURS ============
  {
    name: "Julian Alaphilippe", teamCode: "TUD", team: "Tudor Pro Cycling Team",
    nationality: "France", flag: "🇫🇷",
    height: 173, weight: 62, age: 34,
    stats: { avg: 84, flt: 75, cob: 75, hll: 92, mtn: 65, spr: 68, itt: 70, gc: 50, or: 90, ttl: 70 }
  },
  {
    name: "Kasper Asgreen", teamCode: "EFE", team: "EF Education - EasyPost",
    nationality: "Denmark", flag: "🇩🇰",
    height: 192, weight: 75, age: 31,
    stats: { avg: 80, flt: 82, cob: 88, hll: 75, mtn: 35, spr: 60, itt: 80, gc: 35, or: 85, ttl: 80 }
  },
  {
    name: "Quinn Simmons", teamCode: "LTK", team: "Lidl - Trek",
    nationality: "USA", flag: "🇺🇸",
    height: 191, weight: 78, age: 25,
    stats: { avg: 78, flt: 78, cob: 80, hll: 78, mtn: 40, spr: 65, itt: 70, gc: 35, or: 78, ttl: 70 }
  },
  {
    name: "Warren Barguil", teamCode: "PIC", team: "Team Picnic PostNL",
    nationality: "France", flag: "🇫🇷",
    height: 184, weight: 64, age: 34,
    stats: { avg: 78, flt: 65, cob: 35, hll: 80, mtn: 82, spr: 50, itt: 65, gc: 60, or: 60, ttl: 65 }
  },
  {
    name: "Marc Hirschi", teamCode: "TUD", team: "Tudor Pro Cycling Team",
    nationality: "Switzerland", flag: "🇨🇭",
    height: 174, weight: 65, age: 27,
    stats: { avg: 82, flt: 72, cob: 60, hll: 88, mtn: 70, spr: 65, itt: 65, gc: 45, or: 85, ttl: 65 }
  },
  {
    name: "Matej Mohorič", teamCode: "BHV", team: "Bahrain - Victorious",
    nationality: "Slovenia", flag: "🇸🇮",
    height: 175, weight: 66, age: 31,
    stats: { avg: 82, flt: 78, cob: 78, hll: 85, mtn: 60, spr: 65, itt: 72, gc: 40, or: 85, ttl: 70 }
  },
  {
    name: "Matteo Jorgenson", teamCode: "VLB", team: "Team Visma | Lease a Bike",
    nationality: "USA", flag: "🇺🇸",
    height: 188, weight: 70, age: 27,
    stats: { avg: 86, flt: 75, cob: 60, hll: 85, mtn: 82, spr: 55, itt: 80, gc: 78, or: 75, ttl: 78 }
  },
  {
    name: "Michał Kwiatkowski", teamCode: "INE", team: "Netcompany INEOS",
    nationality: "Poland", flag: "🇵🇱",
    height: 176, weight: 68, age: 36,
    stats: { avg: 82, flt: 78, cob: 70, hll: 85, mtn: 65, spr: 60, itt: 78, gc: 55, or: 82, ttl: 75 }
  },
  {
    name: "Tiesj Benoot", teamCode: "DCM", team: "Decathlon CMA CGM Team",
    nationality: "Belgium", flag: "🇧🇪",
    height: 187, weight: 76, age: 32,
    stats: { avg: 78, flt: 75, cob: 82, hll: 80, mtn: 50, spr: 55, itt: 65, gc: 40, or: 82, ttl: 70 }
  },
  {
    name: "Jasper Stuyven", teamCode: "SQS", team: "Soudal Quick-Step",
    nationality: "Belgium", flag: "🇧🇪",
    height: 187, weight: 78, age: 34,
    stats: { avg: 78, flt: 78, cob: 80, hll: 78, mtn: 35, spr: 70, itt: 60, gc: 30, or: 80, ttl: 65 }
  },
  {
    name: "Fred Wright", teamCode: "PIN", team: "Pinarello Q36.5 Pro Cycling Team",
    nationality: "United Kingdom", flag: "🇬🇧",
    height: 184, weight: 72, age: 27,
    stats: { avg: 76, flt: 72, cob: 78, hll: 78, mtn: 50, spr: 60, itt: 65, gc: 38, or: 80, ttl: 65 }
  },
  {
    name: "Kévin Vauquelin", teamCode: "INE", team: "Netcompany INEOS",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 68, age: 25,
    stats: { avg: 82, flt: 75, cob: 55, hll: 86, mtn: 78, spr: 60, itt: 75, gc: 70, or: 75, ttl: 72 }
  },
  {
    name: "Valentin Paret-Peintre", teamCode: "SQS", team: "Soudal Quick-Step",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 60, age: 25,
    stats: { avg: 78, flt: 60, cob: 30, hll: 80, mtn: 84, spr: 45, itt: 65, gc: 60, or: 60, ttl: 65 }
  },
  {
    name: "Giulio Ciccone", teamCode: "LTK", team: "Lidl - Trek",
    nationality: "Italy", flag: "🇮🇹",
    height: 174, weight: 60, age: 31,
    stats: { avg: 82, flt: 65, cob: 35, hll: 82, mtn: 88, spr: 50, itt: 70, gc: 70, or: 55, ttl: 70 }
  },
  {
    name: "Brandon McNulty", teamCode: "UAE", team: "UAE Team Emirates - XRG",
    nationality: "USA", flag: "🇺🇸",
    height: 178, weight: 64, age: 28,
    stats: { avg: 82, flt: 70, cob: 40, hll: 80, mtn: 78, spr: 50, itt: 86, gc: 70, or: 50, ttl: 78 }
  },
  {
    name: "Mikel Landa", teamCode: "SQS", team: "Soudal Quick-Step",
    nationality: "Spain", flag: "🇪🇸",
    height: 173, weight: 60, age: 36,
    stats: { avg: 80, flt: 60, cob: 30, hll: 78, mtn: 86, spr: 40, itt: 70, gc: 78, or: 45, ttl: 70 }
  },
  {
    name: "Tobias Halland Johannessen", teamCode: "UNO", team: "Uno-X Mobility",
    nationality: "Norway", flag: "🇳🇴",
    height: 175, weight: 60, age: 26,
    stats: { avg: 78, flt: 65, cob: 30, hll: 78, mtn: 82, spr: 45, itt: 70, gc: 72, or: 50, ttl: 65 }
  },
  {
    name: "Einer Rubio", teamCode: "MOV", team: "Movistar Team",
    nationality: "Colombia", flag: "🇨🇴",
    height: 176, weight: 62, age: 28,
    stats: { avg: 76, flt: 60, cob: 30, hll: 75, mtn: 82, spr: 40, itt: 65, gc: 68, or: 45, ttl: 62 }
  },
  {
    name: "Michael Storer", teamCode: "TUD", team: "Tudor Pro Cycling Team",
    nationality: "Australia", flag: "🇦🇺",
    height: 175, weight: 63, age: 28,
    stats: { avg: 78, flt: 65, cob: 35, hll: 75, mtn: 82, spr: 45, itt: 68, gc: 65, or: 50, ttl: 65 }
  },

  // ============ DOMESTIQUES / UTILITY ============
  {
    name: "Tim Wellens", teamCode: "UAE", team: "UAE Team Emirates - XRG",
    nationality: "Belgium", flag: "🇧🇪",
    height: 183, weight: 70, age: 35,
    stats: { avg: 78, flt: 72, cob: 70, hll: 82, mtn: 65, spr: 55, itt: 65, gc: 40, or: 80, ttl: 68 }
  },
  {
    name: "Nils Politt", teamCode: "UAE", team: "UAE Team Emirates - XRG",
    nationality: "Germany", flag: "🇩🇪",
    height: 192, weight: 80, age: 32,
    stats: { avg: 74, flt: 80, cob: 80, hll: 65, mtn: 30, spr: 65, itt: 70, gc: 28, or: 75, ttl: 70 }
  },
  {
    name: "Per Strand Hagenes", teamCode: "VLB", team: "Team Visma | Lease a Bike",
    nationality: "Norway", flag: "🇳🇴",
    height: 178, weight: 70, age: 23,
    stats: { avg: 75, flt: 75, cob: 70, hll: 78, mtn: 50, spr: 65, itt: 65, gc: 35, or: 75, ttl: 65 }
  },
  {
    name: "Ion Izagirre", teamCode: "COF", team: "Cofidis",
    nationality: "Spain", flag: "🇪🇸",
    height: 174, weight: 62, age: 37,
    stats: { avg: 76, flt: 65, cob: 40, hll: 78, mtn: 75, spr: 50, itt: 72, gc: 60, or: 60, ttl: 65 }
  }
];

// ============ HELPER: Get rider stats by name match ============
// Your `riders` array uses format "LASTNAME Firstname (TEAM)" 
// while ridersStats uses "Firstname Lastname". This helper bridges them.
function getRiderStats(riderEntry) {
    // riderEntry format: "POGAČAR Tadej (UAE)"
    const match = riderEntry.match(/^(.+?)\s+(.+?)\s+$([A-Z]+)$$/);
    if (!match) return null;
    const [, lastname, firstname, teamCode] = match;
    
    // Find by matching firstname + lastname (case-insensitive)
    return ridersStats.find(r => {
        const parts = r.name.split(' ');
        const rFirst = parts[0];
        const rLast = parts.slice(1).join(' ');
        return rFirst.toLowerCase() === firstname.toLowerCase() && 
               rLast.toLowerCase() === lastname.toLowerCase().replace(/č/g, 'c').replace(/ć/g, 'c');
    });
}

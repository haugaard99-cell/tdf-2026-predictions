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
    name: "Egan Bernal", teamCode: "INE", team: "Netcompany INEOS",
    nationality: "Colombia", flag: "🇨🇴",
    height: 175, weight: 60, age: 29,
    stats: { avg: 85, flt: 65, cob: 30, hll: 82, mtn: 90, spr: 45, itt: 75, gc: 85, or: 55, ttl: 72 }
  },
  {
    name: "Florian Lipowitz", teamCode: "RBH", team: "Red Bull - BORA - hansgrohe",
    nationality: "Germany", flag: "🇩🇪",
    height: 184, weight: 65, age: 25,
    stats: { avg: 91, flt: 70, cob: 40, hll: 86, mtn: 92, spr: 48, itt: 86, gc: 92, or: 55, ttl: 82 }
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
    name: "Guillaume Martin", teamCode: "GFD", team: "Groupama - FDJ United",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 60, age: 33,
    stats: { avg: 82, flt: 60, cob: 30, hll: 78, mtn: 85, spr: 40, itt: 68, gc: 78, or: 45, ttl: 65 }
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
    stats: { avg: 87, flt: 58, cob: 22, hll: 86, mtn: 94, spr: 40, itt: 68, gc: 80, or: 50, ttl: 68 }
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
  {
    name: "Paul Seixas", teamCode: "DCM", team: "Decathlon CMA CGM Team",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 62, age: 20,
    stats: { avg: 85, flt: 68, cob: 35, hll: 85, mtn: 88, spr: 48, itt: 82, gc: 86, or: 55, ttl: 72 }
  },
  {
    name: "Matthew Riccitello", teamCode: "DCM", team: "Decathlon CMA CGM Team",
    nationality: "USA", flag: "🇺🇸",
    height: 175, weight: 60, age: 25,
    stats: { avg: 76, flt: 58, cob: 28, hll: 72, mtn: 80, spr: 40, itt: 68, gc: 72, or: 42, ttl: 65 }
  },
  {
    name: "Nicolas Prodhomme", teamCode: "DCM", team: "Decathlon CMA CGM Team",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 64, age: 29,
    stats: { avg: 76, flt: 60, cob: 30, hll: 75, mtn: 80, spr: 42, itt: 65, gc: 68, or: 45, ttl: 65 }
  },
  {
    name: "Felix Großschartner", teamCode: "UAE", team: "UAE Team Emirates - XRG",
    nationality: "Austria", flag: "🇦🇹",
    height: 184, weight: 70, age: 32,
    stats: { avg: 80, flt: 70, cob: 50, hll: 80, mtn: 82, spr: 50, itt: 72, gc: 72, or: 55, ttl: 72 }
  },
  {
    name: "Damiano Caruso", teamCode: "BHV", team: "Bahrain - Victorious",
    nationality: "Italy", flag: "🇮🇹",
    height: 178, weight: 65, age: 38,
    stats: { avg: 80, flt: 65, cob: 35, hll: 78, mtn: 84, spr: 45, itt: 72, gc: 75, or: 50, ttl: 70 }
  },
  {
    name: "Georg Steinhauser", teamCode: "EFE", team: "EF Education - EasyPost",
    nationality: "Germany", flag: "🇩🇪",
    height: 178, weight: 64, age: 24,
    stats: { avg: 76, flt: 60, cob: 32, hll: 76, mtn: 80, spr: 42, itt: 68, gc: 68, or: 50, ttl: 65 }
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
    stats: { avg: 93, flt: 94, cob: 94, hll: 92, mtn: 52, spr: 94, itt: 80, gc: 48, or: 96, ttl: 82 }
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
  {
    name: "Phil Bauhaus", teamCode: "BHV", team: "Bahrain - Victorious",
    nationality: "Germany", flag: "🇩🇪",
    height: 181, weight: 71, age: 31,
    stats: { avg: 80, flt: 85, cob: 55, hll: 60, mtn: 25, spr: 85, itt: 52, gc: 28, or: 70, ttl: 60 }
  },
  {
    name: "Fernando Gaviria", teamCode: "CJR", team: "Caja Rural - Seguros RGA",
    nationality: "Colombia", flag: "🇨🇴",
    height: 184, weight: 75, age: 31,
    stats: { avg: 78, flt: 82, cob: 55, hll: 55, mtn: 22, spr: 84, itt: 50, gc: 25, or: 68, ttl: 58 }
  },
  {
    name: "John Degenkolb", teamCode: "PIC", team: "Team Picnic PostNL",
    nationality: "Germany", flag: "🇩🇪",
    height: 187, weight: 79, age: 37,
    stats: { avg: 76, flt: 78, cob: 82, hll: 72, mtn: 30, spr: 75, itt: 55, gc: 28, or: 80, ttl: 60 }
  },
  {
    name: "Arvid de Kleijn", teamCode: "TUD", team: "Tudor Pro Cycling Team",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 185, weight: 78, age: 31,
    stats: { avg: 72, flt: 80, cob: 55, hll: 55, mtn: 22, spr: 80, itt: 48, gc: 25, or: 62, ttl: 56 }
  },
  {
    name: "Marco Haller", teamCode: "TUD", team: "Tudor Pro Cycling Team",
    nationality: "Austria", flag: "🇦🇹",
    height: 187, weight: 80, age: 35,
    stats: { avg: 70, flt: 76, cob: 65, hll: 55, mtn: 22, spr: 72, itt: 52, gc: 25, or: 65, ttl: 60 }
  },
  {
    name: "Max Kanter", teamCode: "XDS", team: "XDS Astana Team",
    nationality: "Germany", flag: "🇩🇪",
    height: 191, weight: 80, age: 28,
    stats: { avg: 72, flt: 78, cob: 55, hll: 55, mtn: 22, spr: 78, itt: 50, gc: 25, or: 62, ttl: 58 }
  },
  {
    name: "Cees Bol", teamCode: "DCM", team: "Decathlon CMA CGM Team",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 195, weight: 82, age: 31,
    stats: { avg: 70, flt: 78, cob: 55, hll: 52, mtn: 20, spr: 78, itt: 50, gc: 22, or: 60, ttl: 58 }
  },

  // ============ TIME TRIAL SPECIALISTS ============
  {
    name: "Filippo Ganna", teamCode: "INE", team: "Netcompany INEOS",
    nationality: "Italy", flag: "🇮🇹",
    height: 193, weight: 83, age: 30,
    stats: { avg: 88, flt: 88, cob: 70, hll: 70, mtn: 40, spr: 75, itt: 99, gc: 35, or: 80, ttl: 95 }
  },
  {
    name: "Joshua Tarling", teamCode: "INE", team: "Netcompany INEOS",
    nationality: "United Kingdom", flag: "🇬🇧",
    height: 193, weight: 78, age: 22,
    stats: { avg: 80, flt: 78, cob: 55, hll: 60, mtn: 30, spr: 55, itt: 92, gc: 30, or: 60, ttl: 85 }
  },
  {
    name: "Tobias Foss", teamCode: "INE", team: "Netcompany INEOS",
    nationality: "Norway", flag: "🇳🇴",
    height: 184, weight: 70, age: 28,
    stats: { avg: 78, flt: 70, cob: 45, hll: 72, mtn: 68, spr: 50, itt: 85, gc: 55, or: 55, ttl: 78 }
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
  {
    name: "Nelson Oliveira", teamCode: "MOV", team: "Movistar Team",
    nationality: "Portugal", flag: "🇵🇹",
    height: 188, weight: 76, age: 37,
    stats: { avg: 74, flt: 72, cob: 55, hll: 65, mtn: 45, spr: 55, itt: 82, gc: 40, or: 62, ttl: 75 }
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
    stats: { avg: 86, flt: 78, cob: 60, hll: 90, mtn: 82, spr: 62, itt: 80, gc: 78, or: 80, ttl: 75 }
  },
  {
    name: "Valentin Paret-Peintre", teamCode: "SQS", team: "Soudal Quick-Step",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 60, age: 25,
    stats: { avg: 78, flt: 60, cob: 30, hll: 80, mtn: 84, spr: 45, itt: 65, gc: 60, or: 60, ttl: 65 }
  },
  {
    name: "Aurelien Paret-Peintre", teamCode: "DCM", team: "Decathlon CMA CGM Team",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 62, age: 29,
    stats: { avg: 78, flt: 62, cob: 32, hll: 82, mtn: 82, spr: 48, itt: 65, gc: 62, or: 60, ttl: 65 }
  },
  {
    name: "Brandon McNulty", teamCode: "UAE", team: "UAE Team Emirates - XRG",
    nationality: "USA", flag: "🇺🇸",
    height: 178, weight: 64, age: 28,
    stats: { avg: 82, flt: 70, cob: 40, hll: 80, mtn: 78, spr: 50, itt: 86, gc: 70, or: 50, ttl: 78 }
  },
  {
    name: "Tobias Halland Johannessen", teamCode: "UNO", team: "Uno-X Mobility",
    nationality: "Norway", flag: "🇳🇴",
    height: 175, weight: 60, age: 26,
    stats: { avg: 82, flt: 68, cob: 32, hll: 82, mtn: 86, spr: 48, itt: 74, gc: 80, or: 55, ttl: 68 }
  },
  {
    name: "Anders Halland Johannessen", teamCode: "UNO", team: "Uno-X Mobility",
    nationality: "Norway", flag: "🇳🇴",
    height: 175, weight: 60, age: 26,
    stats: { avg: 74, flt: 60, cob: 28, hll: 75, mtn: 80, spr: 42, itt: 65, gc: 65, or: 45, ttl: 62 }
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
  {
    name: "Anthony Turgis", teamCode: "TOT", team: "TotalEnergies",
    nationality: "France", flag: "🇫🇷",
    height: 185, weight: 76, age: 32,
    stats: { avg: 76, flt: 75, cob: 80, hll: 78, mtn: 45, spr: 70, itt: 60, gc: 35, or: 80, ttl: 62 }
  },
  {
    name: "Romain Grégoire", teamCode: "GFD", team: "Groupama - FDJ United",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 67, age: 23,
    stats: { avg: 76, flt: 70, cob: 50, hll: 80, mtn: 65, spr: 60, itt: 65, gc: 50, or: 75, ttl: 65 }
  },
  {
    name: "Matteo Vercher", teamCode: "TOT", team: "TotalEnergies",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 68, age: 26,
    stats: { avg: 72, flt: 65, cob: 45, hll: 75, mtn: 65, spr: 55, itt: 60, gc: 50, or: 65, ttl: 60 }
  },
  {
    name: "Jordan Jegat", teamCode: "TOT", team: "TotalEnergies",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 64, age: 27,
    stats: { avg: 74, flt: 60, cob: 30, hll: 72, mtn: 78, spr: 42, itt: 65, gc: 65, or: 45, ttl: 60 }
  },
  {
    name: "Stefano Oldani", teamCode: "CJR", team: "Caja Rural - Seguros RGA",
    nationality: "Italy", flag: "🇮🇹",
    height: 186, weight: 73, age: 28,
    stats: { avg: 74, flt: 68, cob: 50, hll: 75, mtn: 65, spr: 58, itt: 62, gc: 45, or: 70, ttl: 60 }
  },
  {
    name: "Michael Valgren", teamCode: "EFE", team: "EF Education - EasyPost",
    nationality: "Denmark", flag: "🇩🇰",
    height: 182, weight: 73, age: 34,
    stats: { avg: 75, flt: 70, cob: 75, hll: 78, mtn: 50, spr: 58, itt: 60, gc: 38, or: 78, ttl: 62 }
  },
  {
    name: "Xandro Meurisse", teamCode: "PIN", team: "Pinarello Q36.5 Pro Cycling Team",
    nationality: "Belgium", flag: "🇧🇪",
    height: 178, weight: 63, age: 33,
    stats: { avg: 72, flt: 62, cob: 40, hll: 75, mtn: 68, spr: 48, itt: 62, gc: 48, or: 65, ttl: 58 }
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
  },
  {
    name: "Florian Vermeersch", teamCode: "UAE", team: "UAE Team Emirates - XRG",
    nationality: "Belgium", flag: "🇧🇪",
    height: 191, weight: 80, age: 27,
    stats: { avg: 74, flt: 75, cob: 82, hll: 65, mtn: 32, spr: 62, itt: 72, gc: 30, or: 78, ttl: 70 }
  },
  {
    name: "Emiel Verstrynge", teamCode: "APT", team: "Alpecin - Premier Tech",
    nationality: "Belgium", flag: "🇧🇪",
    height: 180, weight: 70, age: 23,
    stats: { avg: 68, flt: 65, cob: 65, hll: 65, mtn: 35, spr: 55, itt: 55, gc: 30, or: 68, ttl: 58 }
  },
  {
    name: "Jonas Rickaert", teamCode: "APT", team: "Alpecin - Premier Tech",
    nationality: "Belgium", flag: "🇧🇪",
    height: 180, weight: 75, age: 32,
    stats: { avg: 70, flt: 78, cob: 65, hll: 55, mtn: 22, spr: 72, itt: 50, gc: 25, or: 68, ttl: 58 }
  },
  {
    name: "Tim Marsman", teamCode: "APT", team: "Alpecin - Premier Tech",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 180, weight: 72, age: 24,
    stats: { avg: 65, flt: 65, cob: 60, hll: 62, mtn: 35, spr: 58, itt: 55, gc: 30, or: 62, ttl: 55 }
  },
  {
    name: "Ramses Debruyne", teamCode: "APT", team: "Alpecin - Premier Tech",
    nationality: "Belgium", flag: "🇧🇪",
    height: 182, weight: 72, age: 24,
    stats: { avg: 65, flt: 65, cob: 62, hll: 60, mtn: 32, spr: 60, itt: 52, gc: 28, or: 62, ttl: 55 }
  },
  {
    name: "Edward Planckaert", teamCode: "APT", team: "Alpecin - Premier Tech",
    nationality: "Belgium", flag: "🇧🇪",
    height: 184, weight: 75, age: 30,
    stats: { avg: 70, flt: 72, cob: 72, hll: 65, mtn: 30, spr: 65, itt: 55, gc: 28, or: 72, ttl: 60 }
  },
  {
    name: "Silvan Dillier", teamCode: "APT", team: "Alpecin - Premier Tech",
    nationality: "Switzerland", flag: "🇨🇭",
    height: 188, weight: 81, age: 35,
    stats: { avg: 70, flt: 75, cob: 75, hll: 62, mtn: 28, spr: 60, itt: 65, gc: 25, or: 72, ttl: 65 }
  },
  {
    name: "Kamil Gradek", teamCode: "BHV", team: "Bahrain - Victorious",
    nationality: "Poland", flag: "🇵🇱",
    height: 182, weight: 70, age: 35,
    stats: { avg: 68, flt: 68, cob: 55, hll: 60, mtn: 38, spr: 55, itt: 65, gc: 32, or: 60, ttl: 65 }
  },
  {
    name: "Robert Stannard", teamCode: "BHV", team: "Bahrain - Victorious",
    nationality: "Australia", flag: "🇦🇺",
    height: 176, weight: 65, age: 27,
    stats: { avg: 72, flt: 65, cob: 40, hll: 72, mtn: 72, spr: 50, itt: 60, gc: 55, or: 50, ttl: 60 }
  },
  {
    name: "Vlad van Mechelen", teamCode: "BHV", team: "Bahrain - Victorious",
    nationality: "Belgium", flag: "🇧🇪",
    height: 180, weight: 72, age: 23,
    stats: { avg: 65, flt: 65, cob: 60, hll: 62, mtn: 35, spr: 58, itt: 55, gc: 30, or: 62, ttl: 55 }
  },
  {
    name: "Alex Baudin", teamCode: "EFE", team: "EF Education - EasyPost",
    nationality: "France", flag: "🇫🇷",
    height: 175, weight: 65, age: 25,
    stats: { avg: 72, flt: 62, cob: 32, hll: 72, mtn: 75, spr: 45, itt: 62, gc: 60, or: 48, ttl: 60 }
  },
  {
    name: "Sean Quinn", teamCode: "EFE", team: "EF Education - EasyPost",
    nationality: "USA", flag: "🇺🇸",
    height: 188, weight: 70, age: 25,
    stats: { avg: 70, flt: 65, cob: 50, hll: 70, mtn: 65, spr: 50, itt: 62, gc: 45, or: 65, ttl: 58 }
  },
  {
    name: "Max Walker", teamCode: "EFE", team: "EF Education - EasyPost",
    nationality: "United Kingdom", flag: "🇬🇧",
    height: 180, weight: 70, age: 23,
    stats: { avg: 66, flt: 65, cob: 55, hll: 62, mtn: 35, spr: 58, itt: 55, gc: 30, or: 62, ttl: 55 }
  },
  {
    name: "Clement Berthet", teamCode: "GFD", team: "Groupama - FDJ United",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 65, age: 28,
    stats: { avg: 68, flt: 60, cob: 32, hll: 65, mtn: 70, spr: 42, itt: 58, gc: 50, or: 45, ttl: 58 }
  },
  {
    name: "Clement Braz Afonso", teamCode: "GFD", team: "Groupama - FDJ United",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 65, age: 23,
    stats: { avg: 65, flt: 60, cob: 32, hll: 62, mtn: 65, spr: 42, itt: 55, gc: 45, or: 45, ttl: 55 }
  },
  {
    name: "Lorenzo Germani", teamCode: "GFD", team: "Groupama - FDJ United",
    nationality: "Italy", flag: "🇮🇹",
    height: 178, weight: 70, age: 22,
    stats: { avg: 65, flt: 70, cob: 50, hll: 60, mtn: 30, spr: 65, itt: 50, gc: 28, or: 62, ttl: 55 }
  },
  {
    name: "Quentin Pacher", teamCode: "GFD", team: "Groupama - FDJ United",
    nationality: "France", flag: "🇫🇷",
    height: 184, weight: 70, age: 33,
    stats: { avg: 70, flt: 65, cob: 40, hll: 68, mtn: 68, spr: 48, itt: 60, gc: 45, or: 55, ttl: 58 }
  },
  {
    name: "Clement Russo", teamCode: "GFD", team: "Groupama - FDJ United",
    nationality: "France", flag: "🇫🇷",
    height: 180, weight: 72, age: 31,
    stats: { avg: 68, flt: 68, cob: 60, hll: 62, mtn: 30, spr: 62, itt: 55, gc: 28, or: 65, ttl: 58 }
  },
  {
    name: "Ewen Costiou", teamCode: "GFD", team: "Groupama - FDJ United",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 67, age: 23,
    stats: { avg: 66, flt: 60, cob: 40, hll: 65, mtn: 55, spr: 48, itt: 55, gc: 40, or: 55, ttl: 55 }
  },
  {
    name: "Dorian Godon", teamCode: "INE", team: "Netcompany INEOS",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 70, age: 29,
    stats: { avg: 74, flt: 70, cob: 55, hll: 78, mtn: 50, spr: 62, itt: 60, gc: 35, or: 72, ttl: 60 }
  },
  {
    name: "Mathias Vacek", teamCode: "LTK", team: "Lidl - Trek",
    nationality: "Czech Republic", flag: "🇨🇿",
    height: 188, weight: 75, age: 23,
    stats: { avg: 76, flt: 75, cob: 65, hll: 75, mtn: 50, spr: 62, itt: 75, gc: 45, or: 72, ttl: 70 }
  },
  {
    name: "Derek Gee-West", teamCode: "LTK", team: "Lidl - Trek",
    nationality: "Canada", flag: "🇨🇦",
    height: 180, weight: 65, age: 28,
    stats: { avg: 80, flt: 70, cob: 45, hll: 80, mtn: 82, spr: 50, itt: 75, gc: 75, or: 55, ttl: 70 }
  },
  {
    name: "Carlos Verona", teamCode: "LTK", team: "Lidl - Trek",
    nationality: "Spain", flag: "🇪🇸",
    height: 188, weight: 72, age: 33,
    stats: { avg: 74, flt: 68, cob: 40, hll: 75, mtn: 75, spr: 50, itt: 65, gc: 55, or: 55, ttl: 62 }
  },
  {
    name: "Toms Skujins", teamCode: "LTK", team: "Lidl - Trek",
    nationality: "Latvia", flag: "🇱🇻",
    height: 182, weight: 72, age: 34,
    stats: { avg: 76, flt: 70, cob: 70, hll: 80, mtn: 55, spr: 58, itt: 68, gc: 42, or: 78, ttl: 65 }
  },
  {
    name: "Lennert Van Eetvelt", teamCode: "LIM", team: "Lotto Intermarché",
    nationality: "Belgium", flag: "🇧🇪",
    height: 178, weight: 60, age: 24,
    stats: { avg: 76, flt: 60, cob: 30, hll: 72, mtn: 80, spr: 42, itt: 65, gc: 72, or: 48, ttl: 62 }
  },
  {
    name: "Georg Zimmermann", teamCode: "LIM", team: "Lotto Intermarché",
    nationality: "Germany", flag: "🇩🇪",
    height: 178, weight: 65, age: 28,
    stats: { avg: 72, flt: 65, cob: 35, hll: 72, mtn: 72, spr: 48, itt: 62, gc: 50, or: 55, ttl: 58 }
  },
  {
    name: "Huub Artz", teamCode: "LIM", team: "Lotto Intermarché",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 180, weight: 70, age: 23,
    stats: { avg: 65, flt: 65, cob: 55, hll: 60, mtn: 35, spr: 58, itt: 55, gc: 30, or: 60, ttl: 55 }
  },
  {
    name: "Jenno Berckmoes", teamCode: "LIM", team: "Lotto Intermarché",
    nationality: "Belgium", flag: "🇧🇪",
    height: 180, weight: 67, age: 24,
    stats: { avg: 68, flt: 65, cob: 55, hll: 68, mtn: 50, spr: 55, itt: 55, gc: 38, or: 65, ttl: 55 }
  },
  {
    name: "Liam Slock", teamCode: "LIM", team: "Lotto Intermarché",
    nationality: "Belgium", flag: "🇧🇪",
    height: 184, weight: 72, age: 25,
    stats: { avg: 65, flt: 65, cob: 55, hll: 60, mtn: 35, spr: 58, itt: 55, gc: 30, or: 60, ttl: 55 }
  },
  {
    name: "Lars Craps", teamCode: "LIM", team: "Lotto Intermarché",
    nationality: "Belgium", flag: "🇧🇪",
    height: 180, weight: 70, age: 26,
    stats: { avg: 65, flt: 62, cob: 55, hll: 62, mtn: 40, spr: 55, itt: 52, gc: 32, or: 60, ttl: 55 }
  },
  {
    name: "Baptiste Veistroffer", teamCode: "LIM", team: "Lotto Intermarché",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 68, age: 24,
    stats: { avg: 63, flt: 60, cob: 50, hll: 60, mtn: 35, spr: 55, itt: 52, gc: 30, or: 58, ttl: 52 }
  },
  {
    name: "Raul Garcia Pierna", teamCode: "MOV", team: "Movistar Team",
    nationality: "Spain", flag: "🇪🇸",
    height: 178, weight: 62, age: 24,
    stats: { avg: 70, flt: 60, cob: 30, hll: 68, mtn: 72, spr: 45, itt: 60, gc: 55, or: 50, ttl: 55 }
  },
  {
    name: "Pablo Castrillo", teamCode: "MOV", team: "Movistar Team",
    nationality: "Spain", flag: "🇪🇸",
    height: 175, weight: 60, age: 25,
    stats: { avg: 72, flt: 58, cob: 28, hll: 68, mtn: 78, spr: 40, itt: 60, gc: 60, or: 45, ttl: 58 }
  },
  {
    name: "Javier Romo", teamCode: "MOV", team: "Movistar Team",
    nationality: "Spain", flag: "🇪🇸",
    height: 178, weight: 65, age: 26,
    stats: { avg: 72, flt: 65, cob: 38, hll: 72, mtn: 68, spr: 52, itt: 62, gc: 50, or: 58, ttl: 58 }
  },
  {
    name: "Jefferson Alveiro Cepeda", teamCode: "MOV", team: "Movistar Team",
    nationality: "Ecuador", flag: "🇪🇨",
    height: 172, weight: 60, age: 28,
    stats: { avg: 72, flt: 58, cob: 28, hll: 68, mtn: 78, spr: 40, itt: 58, gc: 60, or: 45, ttl: 55 }
  },
  {
    name: "Michel Hessmann", teamCode: "MOV", team: "Movistar Team",
    nationality: "Germany", flag: "🇩🇪",
    height: 187, weight: 74, age: 24,
    stats: { avg: 70, flt: 68, cob: 45, hll: 65, mtn: 45, spr: 50, itt: 75, gc: 40, or: 55, ttl: 68 }
  },
  {
    name: "Jake Stewart", teamCode: "NSN", team: "NSN Cycling Team",
    nationality: "United Kingdom", flag: "🇬🇧",
    height: 180, weight: 75, age: 26,
    stats: { avg: 70, flt: 78, cob: 55, hll: 60, mtn: 25, spr: 75, itt: 55, gc: 28, or: 65, ttl: 58 }
  },
  {
    name: "Lewis Askey", teamCode: "NSN", team: "NSN Cycling Team",
    nationality: "United Kingdom", flag: "🇬🇧",
    height: 182, weight: 72, age: 24,
    stats: { avg: 68, flt: 68, cob: 65, hll: 65, mtn: 35, spr: 65, itt: 55, gc: 32, or: 68, ttl: 55 }
  },
  {
    name: "Krists Neilands", teamCode: "NSN", team: "NSN Cycling Team",
    nationality: "Latvia", flag: "🇱🇻",
    height: 184, weight: 70, age: 31,
    stats: { avg: 72, flt: 68, cob: 55, hll: 72, mtn: 60, spr: 55, itt: 65, gc: 40, or: 70, ttl: 60 }
  },
  {
    name: "Marco Frigo", teamCode: "NSN", team: "NSN Cycling Team",
    nationality: "Italy", flag: "🇮🇹",
    height: 178, weight: 65, age: 27,
    stats: { avg: 68, flt: 60, cob: 35, hll: 65, mtn: 70, spr: 45, itt: 58, gc: 45, or: 50, ttl: 55 }
  },
  {
    name: "Matis Louvel", teamCode: "NSN", team: "NSN Cycling Team",
    nationality: "France", flag: "🇫🇷",
    height: 180, weight: 70, age: 26,
    stats: { avg: 70, flt: 70, cob: 60, hll: 65, mtn: 40, spr: 62, itt: 58, gc: 32, or: 68, ttl: 58 }
  },
  {
    name: "George Bennett", teamCode: "NSN", team: "NSN Cycling Team",
    nationality: "New Zealand", flag: "🇳🇿",
    height: 180, weight: 60, age: 36,
    stats: { avg: 72, flt: 60, cob: 30, hll: 70, mtn: 75, spr: 40, itt: 60, gc: 60, or: 45, ttl: 60 }
  },
  {
    name: "Tom Van Asbroeck", teamCode: "NSN", team: "NSN Cycling Team",
    nationality: "Belgium", flag: "🇧🇪",
    height: 178, weight: 73, age: 35,
    stats: { avg: 70, flt: 75, cob: 65, hll: 60, mtn: 28, spr: 72, itt: 55, gc: 28, or: 70, ttl: 58 }
  },
  {
    name: "Tim van Dijke", teamCode: "RBH", team: "Red Bull - BORA - hansgrohe",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 184, weight: 72, age: 26,
    stats: { avg: 72, flt: 72, cob: 60, hll: 65, mtn: 40, spr: 60, itt: 65, gc: 35, or: 65, ttl: 62 }
  },
  {
    name: "Nico Denz", teamCode: "RBH", team: "Red Bull - BORA - hansgrohe",
    nationality: "Germany", flag: "🇩🇪",
    height: 178, weight: 73, age: 32,
    stats: { avg: 74, flt: 72, cob: 60, hll: 72, mtn: 55, spr: 58, itt: 65, gc: 42, or: 70, ttl: 62 }
  },
  {
    name: "Mattia Cattaneo", teamCode: "RBH", team: "Red Bull - BORA - hansgrohe",
    nationality: "Italy", flag: "🇮🇹",
    height: 178, weight: 64, age: 35,
    stats: { avg: 75, flt: 70, cob: 45, hll: 72, mtn: 72, spr: 50, itt: 75, gc: 55, or: 55, ttl: 70 }
  },
  {
    name: "Jan Tratnik", teamCode: "RBH", team: "Red Bull - BORA - hansgrohe",
    nationality: "Slovenia", flag: "🇸🇮",
    height: 174, weight: 65, age: 36,
    stats: { avg: 74, flt: 70, cob: 55, hll: 72, mtn: 58, spr: 55, itt: 75, gc: 42, or: 65, ttl: 65 }
  },
  {
    name: "Maxim Van Gils", teamCode: "RBH", team: "Red Bull - BORA - hansgrohe",
    nationality: "Belgium", flag: "🇧🇪",
    height: 178, weight: 67, age: 26,
    stats: { avg: 78, flt: 70, cob: 50, hll: 82, mtn: 72, spr: 58, itt: 68, gc: 60, or: 75, ttl: 65 }
  },
  {
    name: "Pascal Eenkhoorn", teamCode: "SQS", team: "Soudal Quick-Step",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 188, weight: 78, age: 28,
    stats: { avg: 72, flt: 72, cob: 65, hll: 65, mtn: 40, spr: 58, itt: 65, gc: 35, or: 70, ttl: 65 }
  },
  {
    name: "Ilan Van Wilder", teamCode: "SQS", team: "Soudal Quick-Step",
    nationality: "Belgium", flag: "🇧🇪",
    height: 188, weight: 70, age: 25,
    stats: { avg: 76, flt: 65, cob: 35, hll: 72, mtn: 78, spr: 45, itt: 70, gc: 70, or: 50, ttl: 65 }
  },
  {
    name: "Louis Vervaeke", teamCode: "SQS", team: "Soudal Quick-Step",
    nationality: "Belgium", flag: "🇧🇪",
    height: 188, weight: 68, age: 32,
    stats: { avg: 72, flt: 62, cob: 40, hll: 70, mtn: 72, spr: 45, itt: 62, gc: 50, or: 55, ttl: 60 }
  },
  {
    name: "Dylan van Baarle", teamCode: "SQS", team: "Soudal Quick-Step",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 187, weight: 75, age: 34,
    stats: { avg: 80, flt: 78, cob: 88, hll: 78, mtn: 45, spr: 60, itt: 75, gc: 38, or: 85, ttl: 75 }
  },
  {
    name: "Bert Van Lerberghe", teamCode: "SQS", team: "Soudal Quick-Step",
    nationality: "Belgium", flag: "🇧🇪",
    height: 182, weight: 75, age: 33,
    stats: { avg: 68, flt: 75, cob: 65, hll: 58, mtn: 25, spr: 70, itt: 52, gc: 25, or: 65, ttl: 58 }
  },
  {
    name: "Luke Plapp", teamCode: "JAY", team: "Team Jayco AlUla",
    nationality: "Australia", flag: "🇦🇺",
    height: 178, weight: 65, age: 25,
    stats: { avg: 78, flt: 68, cob: 40, hll: 75, mtn: 75, spr: 50, itt: 82, gc: 65, or: 55, ttl: 75 }
  },
  {
    name: "Mauro Schmid", teamCode: "JAY", team: "Team Jayco AlUla",
    nationality: "Switzerland", flag: "🇨🇭",
    height: 186, weight: 73, age: 26,
    stats: { avg: 74, flt: 72, cob: 65, hll: 72, mtn: 45, spr: 60, itt: 70, gc: 38, or: 72, ttl: 65 }
  },
  {
    name: "Kelland O'Brien", teamCode: "JAY", team: "Team Jayco AlUla",
    nationality: "Australia", flag: "🇦🇺",
    height: 184, weight: 75, age: 27,
    stats: { avg: 72, flt: 72, cob: 55, hll: 65, mtn: 40, spr: 62, itt: 68, gc: 35, or: 65, ttl: 65 }
  },
  {
    name: "Felix Engelhardt", teamCode: "JAY", team: "Team Jayco AlUla",
    nationality: "Germany", flag: "🇩🇪",
    height: 188, weight: 72, age: 23,
    stats: { avg: 68, flt: 65, cob: 45, hll: 65, mtn: 50, spr: 52, itt: 60, gc: 40, or: 60, ttl: 58 }
  },
  {
    name: "Luke Durbridge", teamCode: "JAY", team: "Team Jayco AlUla",
    nationality: "Australia", flag: "🇦🇺",
    height: 187, weight: 81, age: 35,
    stats: { avg: 75, flt: 75, cob: 70, hll: 65, mtn: 35, spr: 60, itt: 78, gc: 30, or: 72, ttl: 78 }
  },
  {
    name: "Frank van den Broek", teamCode: "PIC", team: "Team Picnic PostNL",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 178, weight: 65, age: 25,
    stats: { avg: 74, flt: 65, cob: 40, hll: 72, mtn: 75, spr: 48, itt: 65, gc: 62, or: 50, ttl: 60 }
  },
  {
    name: "Robbe Dhondt", teamCode: "PIC", team: "Team Picnic PostNL",
    nationality: "Belgium", flag: "🇧🇪",
    height: 180, weight: 72, age: 23,
    stats: { avg: 66, flt: 68, cob: 55, hll: 60, mtn: 32, spr: 60, itt: 55, gc: 30, or: 62, ttl: 55 }
  },
  {
    name: "Julius van den Berg", teamCode: "PIC", team: "Team Picnic PostNL",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 188, weight: 75, age: 29,
    stats: { avg: 70, flt: 72, cob: 65, hll: 62, mtn: 32, spr: 60, itt: 62, gc: 30, or: 68, ttl: 60 }
  },
  {
    name: "Niklas Markl", teamCode: "PIC", team: "Team Picnic PostNL",
    nationality: "Germany", flag: "🇩🇪",
    height: 180, weight: 70, age: 25,
    stats: { avg: 66, flt: 65, cob: 50, hll: 62, mtn: 35, spr: 60, itt: 55, gc: 32, or: 60, ttl: 55 }
  },
  {
    name: "Frits Biesterbos", teamCode: "PIC", team: "Team Picnic PostNL",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 180, weight: 70, age: 24,
    stats: { avg: 64, flt: 62, cob: 50, hll: 60, mtn: 35, spr: 55, itt: 55, gc: 32, or: 58, ttl: 55 }
  },
  {
    name: "Davide Piganzoli", teamCode: "VLB", team: "Team Visma | Lease a Bike",
    nationality: "Italy", flag: "🇮🇹",
    height: 178, weight: 65, age: 23,
    stats: { avg: 70, flt: 62, cob: 38, hll: 68, mtn: 70, spr: 45, itt: 62, gc: 55, or: 48, ttl: 60 }
  },
  {
    name: "Anders Skaarseth", teamCode: "UNO", team: "Uno-X Mobility",
    nationality: "Norway", flag: "🇳🇴",
    height: 188, weight: 78, age: 31,
    stats: { avg: 70, flt: 75, cob: 60, hll: 62, mtn: 30, spr: 65, itt: 60, gc: 28, or: 65, ttl: 62 }
  },
  {
    name: "Anthon Charmig", teamCode: "UNO", team: "Uno-X Mobility",
    nationality: "Denmark", flag: "🇩🇰",
    height: 182, weight: 67, age: 28,
    stats: { avg: 70, flt: 65, cob: 40, hll: 70, mtn: 68, spr: 48, itt: 60, gc: 45, or: 55, ttl: 58 }
  },
  {
    name: "Jonas Abrahamsen", teamCode: "UNO", team: "Uno-X Mobility",
    nationality: "Norway", flag: "🇳🇴",
    height: 188, weight: 75, age: 30,
    stats: { avg: 75, flt: 75, cob: 65, hll: 72, mtn: 50, spr: 65, itt: 65, gc: 40, or: 72, ttl: 62 }
  },
  {
    name: "Torstein Træen", teamCode: "UNO", team: "Uno-X Mobility",
    nationality: "Norway", flag: "🇳🇴",
    height: 188, weight: 72, age: 31,
    stats: { avg: 72, flt: 65, cob: 38, hll: 70, mtn: 72, spr: 45, itt: 65, gc: 55, or: 50, ttl: 62 }
  },
  {
    name: "Mike Teunissen", teamCode: "XDS", team: "XDS Astana Team",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 180, weight: 72, age: 33,
    stats: { avg: 74, flt: 75, cob: 70, hll: 68, mtn: 35, spr: 65, itt: 65, gc: 32, or: 75, ttl: 62 }
  },
  {
    name: "Sergio Higuita", teamCode: "XDS", team: "XDS Astana Team",
    nationality: "Colombia", flag: "🇨🇴",
    height: 169, weight: 58, age: 28,
    stats: { avg: 75, flt: 60, cob: 30, hll: 75, mtn: 78, spr: 45, itt: 60, gc: 65, or: 55, ttl: 60 }
  },
  {
    name: "Harold Tejada", teamCode: "XDS", team: "XDS Astana Team",
    nationality: "Colombia", flag: "🇨🇴",
    height: 173, weight: 60, age: 28,
    stats: { avg: 72, flt: 60, cob: 30, hll: 70, mtn: 75, spr: 42, itt: 60, gc: 60, or: 45, ttl: 60 }
  },
  {
    name: "Nicolas Vinokurov", teamCode: "XDS", team: "XDS Astana Team",
    nationality: "Kazakhstan", flag: "🇰🇿",
    height: 178, weight: 68, age: 23,
    stats: { avg: 68, flt: 62, cob: 35, hll: 65, mtn: 60, spr: 50, itt: 58, gc: 42, or: 55, ttl: 55 }
  },
  {
    name: "Davide Ballerini", teamCode: "XDS", team: "XDS Astana Team",
    nationality: "Italy", flag: "🇮🇹",
    height: 180, weight: 73, age: 31,
    stats: { avg: 72, flt: 75, cob: 65, hll: 68, mtn: 30, spr: 70, itt: 60, gc: 28, or: 72, ttl: 60 }
  },
  {
    name: "Aaron Gate", teamCode: "XDS", team: "XDS Astana Team",
    nationality: "New Zealand", flag: "🇳🇿",
    height: 178, weight: 70, age: 34,
    stats: { avg: 72, flt: 72, cob: 55, hll: 65, mtn: 38, spr: 65, itt: 68, gc: 32, or: 65, ttl: 65 }
  },
  {
    name: "Simone Velasco", teamCode: "XDS", team: "XDS Astana Team",
    nationality: "Italy", flag: "🇮🇹",
    height: 175, weight: 65, age: 30,
    stats: { avg: 70, flt: 65, cob: 40, hll: 70, mtn: 58, spr: 52, itt: 60, gc: 38, or: 65, ttl: 58 }
  },
  {
    name: "Piet Allegaert", teamCode: "COF", team: "Cofidis",
    nationality: "Belgium", flag: "🇧🇪",
    height: 178, weight: 72, age: 31,
    stats: { avg: 70, flt: 75, cob: 65, hll: 60, mtn: 28, spr: 70, itt: 55, gc: 28, or: 68, ttl: 58 }
  },
  {
    name: "Jenthe Biermans", teamCode: "COF", team: "Cofidis",
    nationality: "Belgium", flag: "🇧🇪",
    height: 188, weight: 73, age: 30,
    stats: { avg: 68, flt: 70, cob: 60, hll: 60, mtn: 30, spr: 60, itt: 58, gc: 28, or: 65, ttl: 58 }
  },
  {
    name: "Alex Kirsch", teamCode: "COF", team: "Cofidis",
    nationality: "Luxembourg", flag: "🇱🇺",
    height: 188, weight: 75, age: 33,
    stats: { avg: 70, flt: 72, cob: 70, hll: 62, mtn: 32, spr: 60, itt: 60, gc: 30, or: 70, ttl: 60 }
  },
  {
    name: "Hugo Page", teamCode: "COF", team: "Cofidis",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 68, age: 23,
    stats: { avg: 68, flt: 65, cob: 50, hll: 65, mtn: 35, spr: 60, itt: 55, gc: 32, or: 62, ttl: 55 }
  },
  {
    name: "Alex Aranburu", teamCode: "COF", team: "Cofidis",
    nationality: "Spain", flag: "🇪🇸",
    height: 180, weight: 70, age: 30,
    stats: { avg: 76, flt: 72, cob: 55, hll: 78, mtn: 55, spr: 65, itt: 65, gc: 40, or: 75, ttl: 60 }
  },
  {
    name: "Benjamin Thomas", teamCode: "COF", team: "Cofidis",
    nationality: "France", flag: "🇫🇷",
    height: 173, weight: 65, age: 30,
    stats: { avg: 72, flt: 68, cob: 45, hll: 68, mtn: 40, spr: 58, itt: 70, gc: 35, or: 65, ttl: 65 }
  },
  {
    name: "Matteo Trentin", teamCode: "TUD", team: "Tudor Pro Cycling Team",
    nationality: "Italy", flag: "🇮🇹",
    height: 178, weight: 75, age: 37,
    stats: { avg: 76, flt: 78, cob: 75, hll: 72, mtn: 35, spr: 72, itt: 60, gc: 30, or: 80, ttl: 62 }
  },
  {
    name: "Rick Pluimers", teamCode: "TUD", team: "Tudor Pro Cycling Team",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 180, weight: 70, age: 24,
    stats: { avg: 68, flt: 65, cob: 45, hll: 65, mtn: 45, spr: 55, itt: 58, gc: 40, or: 60, ttl: 55 }
  },
  {
    name: "Yannis Voisard", teamCode: "TUD", team: "Tudor Pro Cycling Team",
    nationality: "Switzerland", flag: "🇨🇭",
    height: 180, weight: 67, age: 27,
    stats: { avg: 68, flt: 62, cob: 35, hll: 68, mtn: 65, spr: 45, itt: 60, gc: 45, or: 50, ttl: 55 }
  },
  {
    name: "Alexandre Delettre", teamCode: "TOT", team: "TotalEnergies",
    nationality: "France", flag: "🇫🇷",
    height: 175, weight: 65, age: 26,
    stats: { avg: 66, flt: 60, cob: 35, hll: 65, mtn: 60, spr: 48, itt: 55, gc: 42, or: 50, ttl: 55 }
  },
  {
    name: "Mathis Le Berre", teamCode: "TOT", team: "TotalEnergies",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 68, age: 25,
    stats: { avg: 66, flt: 65, cob: 40, hll: 65, mtn: 45, spr: 55, itt: 55, gc: 35, or: 58, ttl: 55 }
  },
  {
    name: "Nicolas Breuillard", teamCode: "TOT", team: "TotalEnergies",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 68, age: 25,
    stats: { avg: 64, flt: 62, cob: 38, hll: 62, mtn: 45, spr: 50, itt: 52, gc: 35, or: 55, ttl: 52 }
  },
  {
    name: "Joris Delbove", teamCode: "TOT", team: "TotalEnergies",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 70, age: 26,
    stats: { avg: 64, flt: 65, cob: 45, hll: 60, mtn: 38, spr: 52, itt: 52, gc: 30, or: 58, ttl: 52 }
  },
  {
    name: "Thibault Guernalec", teamCode: "TOT", team: "TotalEnergies",
    nationality: "France", flag: "🇫🇷",
    height: 178, weight: 67, age: 26,
    stats: { avg: 65, flt: 62, cob: 38, hll: 62, mtn: 48, spr: 50, itt: 55, gc: 38, or: 55, ttl: 55 }
  },
  {
    name: "Alex Molenaar", teamCode: "CJR", team: "Caja Rural - Seguros RGA",
    nationality: "Netherlands", flag: "🇳🇱",
    height: 180, weight: 68, age: 26,
    stats: { avg: 68, flt: 62, cob: 35, hll: 65, mtn: 65, spr: 45, itt: 58, gc: 50, or: 50, ttl: 55 }
  },
  {
    name: "Joel Nicolau", teamCode: "CJR", team: "Caja Rural - Seguros RGA",
    nationality: "Andorra", flag: "🇦🇩",
    height: 178, weight: 65, age: 25,
    stats: { avg: 66, flt: 60, cob: 35, hll: 65, mtn: 65, spr: 45, itt: 55, gc: 45, or: 48, ttl: 55 }
  },
  {
    name: "Abel Balderstone", teamCode: "CJR", team: "Caja Rural - Seguros RGA",
    nationality: "Spain", flag: "🇪🇸",
    height: 178, weight: 65, age: 23,
    stats: { avg: 62, flt: 60, cob: 35, hll: 60, mtn: 55, spr: 45, itt: 52, gc: 40, or: 48, ttl: 50 }
  },
  {
    name: "Sebastian Berwick", teamCode: "CJR", team: "Caja Rural - Seguros RGA",
    nationality: "Australia", flag: "🇦🇺",
    height: 180, weight: 70, age: 25,
    stats: { avg: 65, flt: 62, cob: 40, hll: 62, mtn: 50, spr: 52, itt: 55, gc: 38, or: 55, ttl: 52 }
  },
  {
    name: "Jakub Otruba", teamCode: "CJR", team: "Caja Rural - Seguros RGA",
    nationality: "Czech Republic", flag: "🇨🇿",
    height: 184, weight: 72, age: 26,
    stats: { avg: 64, flt: 65, cob: 45, hll: 60, mtn: 40, spr: 55, itt: 58, gc: 32, or: 55, ttl: 55 }
  },
  {
    name: "Jose Felix Parra", teamCode: "CJR", team: "Caja Rural - Seguros RGA",
    nationality: "Spain", flag: "🇪🇸",
    height: 178, weight: 65, age: 27,
    stats: { avg: 64, flt: 60, cob: 35, hll: 62, mtn: 60, spr: 45, itt: 55, gc: 45, or: 48, ttl: 52 }
  },
  {
    name: "Quinten Hermans", teamCode: "PIN", team: "Pinarello Q36.5 Pro Cycling Team",
    nationality: "Belgium", flag: "🇧🇪",
    height: 178, weight: 67, age: 30,
    stats: { avg: 74, flt: 65, cob: 70, hll: 78, mtn: 55, spr: 58, itt: 60, gc: 38, or: 78, ttl: 60 }
  }
];

// ============ HELPER: Get rider stats by name match ============
// Your `riders` array uses format "LASTNAME Firstname (TEAM)"
//   e.g. "POGAČAR Tadej (UAE)", "VAN DER POEL Mathieu (APT)"
// while ridersStats uses "Firstname Lastname" e.g. "Tadej Pogačar"
// This helper bridges them — robust to diacritics and multi-word lastnames.
function getRiderStats(riderEntry) {
    if (!riderEntry) return null;

    // 1. Strip the team code in parentheses at the end
    const match = riderEntry.match(/^(.+?)\s+$([A-Z]+)$\s*$/);
    if (!match) return null;
    const nameWithoutTeam = match[1].trim();

    // 2. Split name: ALL-CAPS words = lastname, others = firstname
    //    Handles "POGAČAR Tadej", "VAN DER POEL Mathieu", "KRAGH ANDERSEN Søren"
    const words = nameWithoutTeam.split(/\s+/);
    const lastnameWords = [];
    const firstnameWords = [];
    for (const w of words) {
        // Compare against uppercase version (locale-aware for diacritics like Č, Æ, Ø)
        if (w.length > 1 && w === w.toLocaleUpperCase()) {
            lastnameWords.push(w);
        } else {
            firstnameWords.push(w);
        }
    }
    if (lastnameWords.length === 0 || firstnameWords.length === 0) return null;

    const targetFirst = normalizeRiderName(firstnameWords.join(' '));
    const targetLast = normalizeRiderName(lastnameWords.join(' '));

    // 3. Find in ridersStats with normalized comparison
    return ridersStats.find(r => {
        const parts = r.name.split(/\s+/);
        // ridersStats names: first word = firstname, rest = lastname
        // Handles "Tadej Pogačar", "Mathieu van der Poel", "Tobias Halland Johannessen"
        const rFirst = normalizeRiderName(parts[0]);
        const rLast = normalizeRiderName(parts.slice(1).join(' '));
        return rFirst === targetFirst && rLast === targetLast;
    }) || null;
}

// Strip diacritics and lowercase — so "POGAČAR" matches "Pogačar",
// "WÆRENSKJOLD" matches "Wærenskjold", "RODRÍGUEZ" matches "Rodríguez", etc.
function normalizeRiderName(str) {
    if (!str) return '';
    return str
        .normalize('NFD')                    // split base char from accent
        .replace(/[\u0300-\u036f]/g, '')     // remove combining diacritics
        .replace(/æ/gi, 'ae')                // Æ is not a diacritic, hardcode
        .replace(/ø/gi, 'o')                 // Ø is not a diacritic, hardcode
        .replace(/ß/gi, 'ss')
        .toLowerCase()
        .trim();
}

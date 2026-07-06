// FC26 Genişletilmiş Dinamik Veritabanı (800+ Oyuncu Kapasiteli)
const ELITE_DATABASE = [
    { id: 1, name: "Kylian Mbappé", rating: 91, pos: "ST", club: "Real Madrid", league: "LaLiga", nation: "Fransa", age: 27, height: 178, foot: "Sağ", rarity: "gold-rare", pac: 97, sho: 90, pas: 80, dri: 92, def: 36, phy: 78 },
    { id: 2, name: "Erling Haaland", rating: 91, pos: "ST", club: "Man City", league: "Premier League", nation: "Norveç", age: 25, height: 194, foot: "Sol", rarity: "gold-rare", pac: 89, sho: 93, pas: 66, dri: 80, def: 45, phy: 88 },
    { id: 3, name: "Jude Bellingham", rating: 90, pos: "CAM", club: "Real Madrid", league: "LaLiga", nation: "İngiltere", age: 23, height: 186, foot: "Sağ", rarity: "gold-rare", pac: 80, sho: 87, pas: 83, dri: 88, def: 78, phy: 82 },
    { id: 4, name: "Kevin De Bruyne", rating: 90, pos: "CM", club: "Man City", league: "Premier League", nation: "Belçika", age: 34, height: 181, foot: "Sağ", rarity: "gold-rare", pac: 67, sho: 87, pas: 93, dri: 87, def: 65, phy: 77 },
    { id: 5, name: "Vinícius Júnior", rating: 90, pos: "LW", club: "Real Madrid", league: "LaLiga", nation: "Brezilya", age: 25, height: 176, foot: "Sağ", rarity: "gold-rare", pac: 95, sho: 84, pas: 81, dri: 91, def: 29, phy: 68 },
    { id: 6, name: "Rodri", rating: 90, pos: "CDM", club: "Man City", league: "Premier League", nation: "İspanya", age: 29, height: 191, foot: "Sağ", rarity: "gold-rare", pac: 66, sho: 80, pas: 86, dri: 84, def: 87, phy: 85 },
    { id: 7, name: "Harry Kane", rating: 90, pos: "ST", club: "Bayern München", league: "Bundesliga", nation: "İngiltere", age: 32, height: 188, foot: "Sağ", rarity: "gold-rare", pac: 65, sho: 93, pas: 84, dri: 83, def: 49, phy: 83 },
    { id: 8, name: "Mohamed Salah", rating: 90, pos: "RW", club: "Liverpool", league: "Premier League", nation: "Mısır", age: 34, height: 175, foot: "Sol", rarity: "gold-rare", pac: 89, sho: 88, pas: 82, dri: 88, def: 45, phy: 75 },
    { id: 9, name: "Virgil van Dijk", rating: 90, pos: "CB", club: "Liverpool", league: "Premier League", nation: "Hollanda", age: 34, height: 193, foot: "Sağ", rarity: "gold-rare", pac: 79, sho: 60, pas: 71, dri: 72, def: 90, phy: 86 },
    { id: 101, name: "Mbappé (VIP LEGEND)", rating: 99, pos: "ST", club: "Real Madrid", league: "LaLiga", nation: "Fransa", rarity: "vip-promo", pac: 99, sho: 99, pas: 95, dri: 99, def: 50, phy: 90 },
    { id: 102, name: "Haaland (TITAN)", rating: 98, pos: "ST", club: "Man City", league: "Premier League", nation: "Norveç", rarity: "vip-promo", pac: 96, sho: 99, pas: 80, dri: 92, def: 55, phy: 98 }
];

const FIRST_NAMES = ["Ahmet", "Mehmet", "Can", "Burak", "Emre", "John", "David", "Lucas", "Diego", "Marco", "Leo", "Sandro", "Pierre", "Antoine", "Carlos", "Luka", "Ivan", "Jack", "Harry"];
const LAST_NAMES = ["Yılmaz", "Kaya", "Çelik", "Smith", "Jones", "Garcia", "Martinez", "Silva", "Müller", "Schmidt", "Dubois", "Leroy", "Rossi", "Ferrari", "Novak", "Walker", "Green"];
const POSITIONS = ["ST", "LW", "RW", "CAM", "CM", "CDM", "LB", "CB", "RB", "GK"];
const CLUBS = ["Galatasaray", "Fenerbahçe", "Beşiktaş", "Real Madrid", "FC Barcelona", "Man City", "Arsenal", "Liverpool", "Bayern München", "PSG", "Inter", "Juventus", "Benfica"];
const NATIONS = ["Türkiye", "İspanya", "İngiltere", "Fransa", "Almanya", "İtalya", "Brezilya", "Arjantin", "Portekiz", "Hollanda", "Belçika", "Hırvatistan"];

// 850 Oyuncuya tamamlayan jeneratör motoru
function generateDatabase() {
    let database = [...ELITE_DATABASE];
    let idCounter = 200;

    while (database.length < 850) {
        const rand = Math.random() * 100;
        let rating;
        
        // Dağılım simülasyonuna paralel gerçekçi havuz kırılımı
        if (rand < 65) rating = Math.floor(Math.random() * (77 - 70 + 1)) + 70;
        else if (rand < 95) rating = Math.floor(Math.random() * (85 - 80 + 1)) + 80;
        else rating = Math.floor(Math.random() * (94 - 90 + 1)) + 90;

        const pos = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];
        const name = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)] + " " + LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
        
        database.push({
            id: idCounter++,
            name: name,
            rating: rating,
            pos: pos,
            club: CLUBS[Math.floor(Math.random() * CLUBS.length)],
            league: "FC Professional League",
            nation: NATIONS[Math.floor(Math.random() * NATIONS.length)],
            age: Math.floor(Math.random() * (36 - 18 + 1)) + 18,
            height: Math.floor(Math.random() * (200 - 170 + 1)) + 170,
            foot: Math.random() > 0.75 ? "Sol" : "Sağ",
            rarity: rating >= 80 ? "gold-rare" : "gold-rare",
            pac: Math.floor(Math.random() * (rating + 10 - 60) + 60),
            sho: Math.floor(Math.random() * (rating + 5 - 50) + 50),
            pas: Math.floor(Math.random() * (rating + 5 - 50) + 50),
            dri: Math.floor(Math.random() * (rating + 10 - 60) + 60),
            def: Math.floor(Math.random() * (rating + 5 - 30) + 30),
            phy: Math.floor(Math.random() * (rating + 10 - 50) + 50)
        });
    }
    return database;
}

const RAW_FC26_DATABASE = generateDatabase();
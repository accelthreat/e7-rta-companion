export interface RtaMatch {
  players: string[];
  prebans: string[];
  first_pick_characters: string[];
  second_pick_characters: string[];
  postbans: number[];
  winner: number;
  uid: string;
}

export const sample_games: RtaMatch[] = [
  {
    players: ["Accelthreat", "LeweK"],
    prebans: ["Conqueror Lilias", "Lua", "Angel of Light Angelica"],
    first_pick_characters: [
      "Mediator Kawerik",
      "Adventurer Ras",
      "Landy",
      "Zahhak",
      "Specter Tenebria",
    ],
    second_pick_characters: [
      "Unbound Knight Arowell",
      "Savior Adin",
      "Milim",
      "Destina",
      "Charlotte",
    ],
    postbans: [1, 9],
    winner: 0,
    uid: "0",
  },
  {
    players: ["Accelthreat", "LeweK"],
    prebans: ["Angel of Light Angelica", "Conqueror Lilias", "Lua"],
    first_pick_characters: [
      "Mediator Kawerik",
      "Landy",
      "Adventurer Ras",
      "Specter Tenebria",
      "Zahhak",
    ],
    second_pick_characters: [
      "Savior Adin",
      "Unbound Knight Arowell",
      "Destina",
      "Milim",
      "Charlotte",
    ],
    postbans: [2, 9],
    winner: 0,
    uid: "1",
  },
  {
    players: ["Accelthreat", "LeweK"],
    prebans: ["Conqueror Lilias", "Lua", "Angel of Light Angelica", "Belian"],
    first_pick_characters: [
      "Mediator Kawerik",
      "Adventurer Ras",
      "Landy",
      "Zahhak",
      "Specter Tenebria",
    ],
    second_pick_characters: [
      "Fallen Cecilia",
      "Savior Adin",
      "Milim",
      "Destina",
      "Charlotte",
    ],
    postbans: [1, 9],
    winner: 0,
    uid: "3",
  },
  {
    players: ["asdfasdfasdfdf", "asdfasdf"],
    prebans: ["Angel of Light Angelica", "Conqueror Lilias", "Lua"],
    first_pick_characters: [
      "Mediator Kawerik",
      "Landy",
      "Adventurer Ras",
      "Specter Tenebria",
      "Zahhak",
    ],
    second_pick_characters: [
      "Remnant Violet",
      "Fallen Cecilia",
      "Ray",
      "Milim",
      "Researcher Carrot",
    ],
    postbans: [2, 9],
    winner: 0,
    uid: "2",
  },
  {
    players: ["asdfasdfasdfdf", "asdfasdf"],
    prebans: ["Angel of Light Angelica", "Conqueror Lilias", "Lua"],
    first_pick_characters: [
      "Mediator Kawerik",
      "Landy",
      "Crimson Armin",
      "Specter Tenebria",
      "Zahhak",
    ],
    second_pick_characters: [
      "Remnant Violet",
      "Fallen Cecilia",
      "Ray",
      "Milim",
      "Researcher Carrot",
    ],
    postbans: [2, 9],
    winner: 1,
    uid: "2",
  },
];

export const character_options = [
  { value: "", label: "Empty" },
  { value: "Achates", label: "Achates" },
  { value: "Adin", label: "Adin" },
  { value: "Adlay", label: "Adlay" },
  { value: "Adventurer Ras", label: "Adventurer Ras" },
  { value: "ae-GISELLE", label: "ae-GISELLE" },
  { value: "ae-KARINA", label: "ae-KARINA" },
  { value: "ae-NINGNING", label: "ae-NINGNING" },
  { value: "ae-WINTER", label: "ae-WINTER" },
  { value: "Ainos", label: "Ainos" },
  { value: "Ains", label: "Ains" },
  { value: "Aither", label: "Aither" },
  { value: "Alencia", label: "Alencia" },
  { value: "Alexa", label: "Alexa" },
  { value: "All-Rounder Wanda", label: "All-Rounder Wanda" },
  { value: "Ambitious Tywin", label: "Ambitious Tywin" },
  { value: "Angel of Light Angelica", label: "Angel of Light Angelica" },
  { value: "Angelic Montmorancy", label: "Angelic Montmorancy" },
  { value: "Angelica", label: "Angelica" },
  { value: "Apocalypse Ravi", label: "Apocalypse Ravi" },
  { value: "Aramintha", label: "Aramintha" },
  { value: "Arbiter Vildred", label: "Arbiter Vildred" },
  { value: "Aria", label: "Aria" },
  { value: "Armin", label: "Armin" },
  { value: "Arowell", label: "Arowell" },
  { value: "Arunka", label: "Arunka" },
  { value: "Assassin Cartuja", label: "Assassin Cartuja" },
  { value: "Assassin Cidd", label: "Assassin Cidd" },
  { value: "Assassin Coli", label: "Assassin Coli" },
  { value: "Astromancer Elena", label: "Astromancer Elena" },
  { value: "Auxiliary Lots", label: "Auxiliary Lots" },
  { value: "Azalea", label: "Azalea" },
  { value: "Baal & Sezan", label: "Baal & Sezan" },
  { value: "Bad Cat Armin", label: "Bad Cat Armin" },
  { value: "Baiken", label: "Baiken" },
  { value: "Basar", label: "Basar" },
  { value: "Bask", label: "Bask" },
  { value: "Batisse", label: "Batisse" },
  { value: "Belian", label: "Belian" },
  { value: "Bellona", label: "Bellona" },
  { value: "Benevolent Romann", label: "Benevolent Romann" },
  { value: "Mana Burst", label: "Mana Burst" },
  { value: "Blaze Dingo", label: "Blaze Dingo" },
  { value: "Blood Blade Karin", label: "Blood Blade Karin" },
  { value: "Blood Moon Haste", label: "Blood Moon Haste" },
  { value: "Briar Witch Iseria", label: "Briar Witch Iseria" },
  { value: "Butcher Corps Inquisitor", label: "Butcher Corps Inquisitor" },
  { value: "Camilla", label: "Camilla" },
  { value: "Captain Rikoris", label: "Captain Rikoris" },
  { value: "Carmainerose", label: "Carmainerose" },
  { value: "Carrot", label: "Carrot" },
  { value: "Cartuja", label: "Cartuja" },
  { value: "Cecilia", label: "Cecilia" },
  { value: "Celeste", label: "Celeste" },
  { value: "Celestial Mercedes", label: "Celestial Mercedes" },
  { value: "Celine", label: "Celine" },
  { value: "Cerise", label: "Cerise" },
  { value: "Cermia", label: "Cermia" },
  { value: "Challenger Dominiel", label: "Challenger Dominiel" },
  { value: "Champion Zerato", label: "Champion Zerato" },
  { value: "Chaos Inquisitor", label: "Chaos Inquisitor" },
  { value: "Chaos Sect Axe", label: "Chaos Sect Axe" },
  { value: "Charles", label: "Charles" },
  { value: "Charlotte", label: "Charlotte" },
  { value: "Chloe", label: "Chloe" },
  { value: "Choux", label: "Choux" },
  { value: "Christy", label: "Christy" },
  { value: "Church of Ilryos Axe", label: "Church of Ilryos Axe" },
  { value: "Cidd", label: "Cidd" },
  { value: "Clarissa", label: "Clarissa" },
  { value: "Coli", label: "Coli" },
  { value: "Commander Lorina", label: "Commander Lorina" },
  { value: "Command Model Laika", label: "Command Model Laika" },
  { value: "Commander Pavel", label: "Commander Pavel" },
  { value: "Conqueror Lilias", label: "Conqueror Lilias" },
  { value: "Corvus", label: "Corvus" },
  { value: "Crimson Armin", label: "Crimson Armin" },
  { value: "Crozet", label: "Crozet" },
  { value: "Dark Corvus", label: "Dark Corvus" },
  { value: "Death Dealer Ray", label: "Death Dealer Ray" },
  { value: "Desert Jewel Basar", label: "Desert Jewel Basar" },
  { value: "Designer Lilibet", label: "Designer Lilibet" },
  { value: "Destina", label: "Destina" },
  { value: "Diene", label: "Diene" },
  { value: "Dingo", label: "Dingo" },
  { value: "Dizzy", label: "Dizzy" },
  { value: "Doll Maker Pearlhorizon", label: "Doll Maker Pearlhorizon" },
  { value: "Dominiel", label: "Dominiel" },
  { value: "Doris", label: "Doris" },
  { value: "Eaton", label: "Eaton" },
  { value: "Eda", label: "Eda" },
  { value: "Edward Elric", label: "Edward Elric" },
  { value: "Elena", label: "Elena" },
  { value: "Elphelt Valentine", label: "Elphelt Valentine" },
  { value: "Elson", label: "Elson" },
  { value: "Emilia", label: "Emilia" },
  { value: "Enott", label: "Enott" },
  { value: "Ervalen", label: "Ervalen" },
  { value: "Fairytale Tenebria", label: "Fairytale Tenebria" },
  { value: "Faithless Lidica", label: "Faithless Lidica" },
  { value: "Falconer Kluri", label: "Falconer Kluri" },
  { value: "Fallen Cecilia", label: "Fallen Cecilia" },
  { value: "Fighter Maya", label: "Fighter Maya" },
  { value: "Flan", label: "Flan" },
  { value: "Free Spirit Tieria", label: "Free Spirit Tieria" },
  { value: "Furious", label: "Furious" },
  { value: "General Purrgis", label: "General Purrgis" },
  { value: "Glenn", label: "Glenn" },
  { value: "Gloomyrain", label: "Gloomyrain" },
  { value: "Godmother", label: "Godmother" },
  { value: "Great Chief Khawana", label: "Great Chief Khawana" },
  { value: "Guider Aither", label: "Guider Aither" },
  { value: "Gunther", label: "Gunther" },
  { value: "Hataan", label: "Hataan" },
  { value: "Hasol", label: "Hasol" },
  { value: "Haste", label: "Haste" },
  { value: "Hazel", label: "Hazel" },
  { value: "Helen", label: "Helen" },
  { value: "Helga", label: "Helga" },
  { value: "Holiday Yufine", label: "Holiday Yufine" },
  { value: "Holy Flame Adin", label: "Holy Flame Adin" },
  { value: "Hurado", label: "Hurado" },
  { value: "Hwayoung", label: "Hwayoung" },
  { value: "Ian", label: "Ian" },
  { value: "Ilynav", label: "Ilynav" },
  { value: "Inferno Khawazu", label: "Inferno Khawazu" },
  { value: "Iseria", label: "Iseria" },
  { value: "Jack-O'", label: "Jack-O'" },
  { value: "Januta", label: "Januta" },
  { value: "Jecht", label: "Jecht" },
  { value: "Jena", label: "Jena" },
  { value: "Judge Kise", label: "Judge Kise" },
  { value: "Judith", label: "Judith" },
  { value: "Kanna", label: "Kanna" },
  { value: "Karin", label: "Karin" },
  { value: "Kawerik", label: "Kawerik" },
  { value: "Kayron", label: "Kayron" },
  { value: "Ken", label: "Ken" },
  { value: "Khawana", label: "Khawana" },
  { value: "Khawazu", label: "Khawazu" },
  { value: "Kiris", label: "Kiris" },
  { value: "Kise", label: "Kise" },
  { value: "Kitty Clarissa", label: "Kitty Clarissa" },
  { value: "Kizuna AI", label: "Kizuna AI" },
  { value: "Kluri", label: "Kluri" },
  { value: "Krau", label: "Krau" },
  { value: "Landy", label: "Landy" },
  { value: "Last Rider Krau", label: "Last Rider Krau" },
  { value: "Lena", label: "Lena" },
  { value: "Leo", label: "Leo" },
  { value: "Lidica", label: "Lidica" },
  { value: "Lilias", label: "Lilias" },
  { value: "Lilibet", label: "Lilibet" },
  { value: "Lionheart Cermia", label: "Lionheart Cermia" },
  { value: "Little Queen Charlotte", label: "Little Queen Charlotte" },
  { value: "Lorina", label: "Lorina" },
  { value: "Lots", label: "Lots" },
  { value: "Lua", label: "Lua" },
  { value: "Lucy", label: "Lucy" },
  { value: "Ludwig", label: "Ludwig" },
  { value: "Luluca", label: "Luluca" },
  { value: "Luna", label: "Luna" },
  { value: "Magic Scholar Doris", label: "Magic Scholar Doris" },
  { value: "Maid Chloe", label: "Maid Chloe" },
  { value: "Martial Artist Ken", label: "Martial Artist Ken" },
  { value: "Mascot Hazel", label: "Mascot Hazel" },
  { value: "Maya", label: "Maya" },
  { value: "Mediator Kawerik", label: "Mediator Kawerik" },
  { value: "Melany", label: "Melany" },
  { value: "Melissa", label: "Melissa" },
  { value: "Mercedes", label: "Mercedes" },
  { value: "Mercenary Helga", label: "Mercenary Helga" },
  { value: "Mighty Scout (Mouse)", label: "Mighty Scout (Mouse)" },
  { value: "Milim", label: "Milim" },
  { value: "Mirsa", label: "Mirsa" },
  { value: "Mistychain", label: "Mistychain" },
  { value: "Montmorancy", label: "Montmorancy" },
  { value: "Moon Bunny Dominiel", label: "Moon Bunny Dominiel" },
  { value: "Mort", label: "Mort" },
  { value: "Mucacha", label: "Mucacha" },
  { value: "Mui", label: "Mui" },
  { value: "Muse Rima", label: "Muse Rima" },
  { value: "Muwi", label: "Muwi" },
  { value: "Nemunas", label: "Nemunas" },
  { value: "Operator Sigret", label: "Operator Sigret" },
  { value: "Orte", label: "Orte" },
  { value: "Otillie", label: "Otillie" },
  { value: "Pavel", label: "Pavel" },
  { value: "Pearlhorizon", label: "Pearlhorizon" },
  { value: "Peira", label: "Peira" },
  { value: "Penelope", label: "Penelope" },
  { value: "Pirate Captain Flan", label: "Pirate Captain Flan" },
  { value: "Politis", label: "Politis" },
  { value: "Purrgis", label: "Purrgis" },
  { value: "Pyllis", label: "Pyllis" },
  { value: "Ram", label: "Ram" },
  { value: "Ran", label: "Ran" },
  { value: "Ras", label: "Ras" },
  { value: "Ravi", label: "Ravi" },
  { value: "Ray", label: "Ray" },
  { value: "Rem", label: "Rem" },
  { value: "Remnant Violet", label: "Remnant Violet" },
  { value: "Requiemroar", label: "Requiemroar" },
  { value: "Researcher Carrot", label: "Researcher Carrot" },
  { value: "Righteous Thief Roozid", label: "Righteous Thief Roozid" },
  { value: "Rikoris", label: "Rikoris" },
  { value: "Rima", label: "Rima" },
  { value: "Rimuru", label: "Rimuru" },
  { value: "Rin", label: "Rin" },
  { value: "Riza Hawkeye", label: "Riza Hawkeye" },
  { value: "Roaming Warrior Leo", label: "Roaming Warrior Leo" },
  { value: "Roana", label: "Roana" },
  { value: "Romann", label: "Romann" },
  { value: "Roozid", label: "Roozid" },
  { value: "Rose", label: "Rose" },
  { value: "Roy Mustang", label: "Roy Mustang" },
  { value: "Ruele of Light", label: "Ruele of Light" },
  { value: "Sage Baal & Sezan", label: "Sage Baal & Sezan" },
  { value: "Savior Adin", label: "Savior Adin" },
  { value: "Schuri", label: "Schuri" },
  { value: "Senya", label: "Senya" },
  { value: "Shepherd Jena", label: "Shepherd Jena" },
  { value: "Shooting Star Achates", label: "Shooting Star Achates" },
  { value: "Shuna", label: "Shuna" },
  { value: "Seaside Bellona", label: "Seaside Bellona" },
  { value: "Serene Purity Adin", label: "Serene Purity Adin" },
  { value: "Serila", label: "Serila" },
  { value: "Sez", label: "Sez" },
  { value: "Shadow Rose", label: "Shadow Rose" },
  { value: "Sharun", label: "Sharun" },
  { value: "Sigret", label: "Sigret" },
  { value: "Silk", label: "Silk" },
  { value: "Silver Blade Aramintha", label: "Silver Blade Aramintha" },
  { value: "Sinful Angelica", label: "Sinful Angelica" },
  { value: "Sol Badguy", label: "Sol Badguy" },
  { value: "Solitaria of the Snow", label: "Solitaria of the Snow" },
  { value: "Sonia", label: "Sonia" },
  { value: "Specimen Sez", label: "Specimen Sez" },
  { value: "Specter Tenebria", label: "Specter Tenebria" },
  { value: "Spirit Eye Celine", label: "Spirit Eye Celine" },
  { value: "Straze", label: "Straze" },
  { value: "Summer Break Charlotte", label: "Summer Break Charlotte" },
  { value: "Summer's Disciple Alexa", label: "Summer's Disciple Alexa" },
  { value: "Summertime Iseria", label: "Summertime Iseria" },
  { value: "Surin", label: "Surin" },
  { value: "Sven", label: "Sven" },
  { value: "Sylvan Sage Vivian", label: "Sylvan Sage Vivian" },
  { value: "Taeyou", label: "Taeyou" },
  { value: "Tamarinne", label: "Tamarinne" },
  { value: "Taranor Guard", label: "Taranor Guard" },
  { value: "Taranor Royal Guard", label: "Taranor Royal Guard" },
  { value: "Tempest Surin", label: "Tempest Surin" },
  { value: "Tenebria", label: "Tenebria" },
  { value: "Tieria", label: "Tieria" },
  { value: "Top Model Luluca", label: "Top Model Luluca" },
  { value: "Troublemaker Crozet", label: "Troublemaker Crozet" },
  { value: "Tywin", label: "Tywin" },
  { value: "Unbound Knight Arowell", label: "Unbound Knight Arowell" },
  { value: "Verdant Adin", label: "Verdant Adin" },
  { value: "Vigilante Leader Glenn", label: "Vigilante Leader Glenn" },
  { value: "Vildred", label: "Vildred" },
  { value: "Violet", label: "Violet" },
  { value: "Vivian", label: "Vivian" },
  { value: "Wanda", label: "Wanda" },
  { value: "Wanderer Silk", label: "Wanderer Silk" },
  { value: "Watcher Schuri", label: "Watcher Schuri" },
  { value: "Yoonryoung", label: "Yoonryoung" },
  { value: "Yufine", label: "Yufine" },
  { value: "Yulha", label: "Yulha" },
  { value: "Yuna", label: "Yuna" },
  { value: "Zahhak", label: "Zahhak" },
  { value: "Zealot Carmainerose", label: "Zealot Carmainerose" },
  { value: "Zeno", label: "Zeno" },
  { value: "Zerato", label: "Zerato" },
  { value: "Zio", label: "Zio" },
];

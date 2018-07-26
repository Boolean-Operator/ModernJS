let names = ".Wolverine.Thing.Magneto.Nightcrawler.Juggernaut.Emma Frost.Beast.Captain America. Spider-Man.Doctor Strange. Cyclops. Colossus. Jubilee. Lockheed. Nick Fury. Nico Minoru. Shaman. Angel. Gambit. Hawkeye. Iceman. Sabretooth. Arcade. Karolina Dean. Mr. Fantastic. Blob. Mystique. Red Skull. Hulk. Norman Osborn. Silver Samurai. Pyro. Amadeus Cho. The Pride. Mockingbird. Hercules. Lockjaw. Chase Stein. Molly Hayes. Crossbones. Armor. Northstar. Jean Grey. Captain Britain. Guardian. Scarlet Witch. Cannonball. Sasquatch. Layla Miller. Psylocke. Wolfsbane. Stepford Cuckoos. Iron Man. Professor X. Daredevil. Doctor Doom. Kingpin. Sentinels. Invisible Woman. Lady Deathstrike. Moonstar. Namor. X-23. Rogue. Storm. Madrox. Dazzler. Wiccan. Patriot. Bishop. Magik. Galactus. Banshee. Siryn. Venom. Heather McNeil Hudson. Bucky Barnes. Quicksilver. Elektra. Taskmaster. Phobos . Apocalypse. Human Torch. Cassie Lang. Thor. Cypher. Beta Ray Bill. Talisman. Silver Surfer. Sunspot. Polaris"

// console.log(names);

let re = /\s*\.\s*/;
let nameList = names.split(re);
// let nameList2 = names2.split(re);
// let list = nameList.concat(nameList2)


console.log(nameList);
// console.log(nameList2);
// console.log(list);
// Write utility to convert list to arrays and write to file to use as work list for hangman
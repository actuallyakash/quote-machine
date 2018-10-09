window.onload = function() {
  randomQuote();
  readyTweet();
};

function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 10)];
  }
  return color;
}

//var col = getRandomColor();

//document.body.style.background=col;
//document.getElementById('new').style.background=col;

var quote = [
  [
    "Tell my wife...I had another wife.",
    "Secret Service Agent",
    "Saints Row IV"
  ],
  ["Do a barrel roll!", "Stupid Bunny", "Starfox"],
  ["Boomshakalaka!", "The Announcer", "NBA Jam"],
  [
    "I’ve got a fever and my only cure is more dead angels.",
    "Bayonetta",
    "Bayonetta 2"
  ],
  ["Not even death can save you from me.", "Diablo", "Diablo II"],
  [
    "I'm the grim reaper, Lardass, and you're my next customer.",
    "Manny Calavera",
    "Grim Fandango"
  ],
  [
    "It's not over until I teabag every last one of you alien mother f*&%krs!",
    "Sam",
    "Serious Sam 3"
  ],
  [
    "There are two ways of doing this. My way, or the he's a dead motherf#$%*@ way: You pick.",
    "The Boss",
    "Conker’s bad Fur Day"
  ],
  [
    "Shut up, sit down. I'll tell you what we're gonna do. You're gonna find out who took our cocaine, and then, I'm gonna kill them.",
    "Tommy Vercetti",
    "Grand Theft Auto: Vice City"
  ],
  [
    "To the edge of the universe and back. Endure and survive.",
    "Ellie",
    "The Last of Us"
  ],
  [
    "This match….I think I learned something from this.  You’re nothing!",
    "Ryu",
    "Street Fighter 3"
  ],
  ["Steel wins battles, Gold wins wars.", "Davion", "DOTA 2"],
  [
    "Stand in the ashes of a trillion dead souls and ask the ghosts if honor matters. Their silence is your answer.",
    "Javik",
    "MASS EFFECT"
  ],
  [
    "It's time to kick ass and chew bubblegum, and I'm all out of gum.",
    "Duke",
    "Duke Nukem 3D"
  ],
  [
    "Yeah, I’m still the Queen Bitch of the Universe.",
    "Kerrigan",
    "Starcraft 2"
  ],
  [
    "When you are ready to begin the Tea-Party, please smack Mister Flesh Stick in his bitch face.",
    "Tiny Tina",
    "Borderlands 2"
  ],
  ["Stay a while, and listen!", "-", "Diablo II"],
  [
    "Thank you Mario! But our Princess is in another castle!",
    "-",
    "Super Mario Bros"
  ],
  ["X-Men, welcome to die!", "-", "X-Men Arcade"],
  ["I will kill your dicks!", "-", "Bulletstorm"],
  [
    "Everything is teetering on the edge of everything.",
    "-",
    "Spec Ops: The Line"
  ],
  [
    "The right man in the wrong place can make all the difference in the world.",
    "-",
    "Half-Life 2"
  ],
  [
    "You can't break a man the way you do a dog or a horse - the harder you beat a man, the taller he stands.",
    "-",
    "Far Cry 2"
  ],
  [
    "What is a man? A miserable little pile of secrets.",
    "-",
    "Castlevania: Symphony of the Night"
  ],
  ["Stay frosty.", "-", "Call of Duty 4: Modern Warfare"],
  ["A man chooses; a slave obeys.", "-", "BioShock"],
  ["War has changed.", "-", "Metal Gear Solid 4"],
  ["War. War never changes.", "-", "Fallout 3"],
  ["Hadouken!", "-", "Street Fighter II"],
  ["Big American titties!", "-", "Grand Theft Auto IV"],
  [
    "Wait, thats not how it happened.",
    "-",
    "Prince of Persia: The Sands of Time"
  ],
  [
    "Twinkle, twinkle, little bat. Watch me kill your favorite cat.",
    "The Joker",
    "Batman: Arkham City"
  ],
  ["Zeus your son has returned?", "-", "God of War 3"],
  [
    "Shall I find something to kill to cheer ourselves up?",
    "-",
    "Star Wars Knights"
  ],
  ["Check it out it’s got wings", "-", "Devil May Cry 4"],
  [
    "You exist because we allow it, and you will end because we demand it.",
    "-",
    "Sovereign"
  ],
  [
    "Why did I move here? I guess it was the weather.",
    "Michael trailer",
    "GTA 5"
  ],
  [
    "How does it feel, Wayne? To stand on the very stone that ran with your parents’ blood. Do you feel sad? Full of rage? Or does that outfit help bury your feelings. Hiding your true self",
    "Hugo Strange",
    "Batman Arkham City"
  ],
  ["Today is not a good day to push me, Victor", "-", "Batman Arkham City"],
  ["Remember No Russian", "-", "Modern Warfare 2"],
  [
    "Medals don’t help me sleep at night, Lambert.",
    "-",
    "Splinter Cell Chaos Theory"
  ],
  ["I’m Sorry I don’t like the way you are looking at me", "-", "Far Cry 3"],
  [
    "I am not the same man you found that day! The monster you've created has returned, to kill you!",
    "Kratos",
    "God of War"
  ],
  [
    "Do You Think By Calling Me Son I Might Change My Mind",
    "-",
    "Assassins Creed 3"
  ],
  ["Prepare for Unforeseen Consequences.", "G-Man", "Half Life 2"],
  ["No Bane This Time I Break You", "-", "Batman Arkham Asylum"],
  ["You were almost a Jill sandwich!", "-", "Resident Evil"],
  [
    "Did I ever tell you what the definition of insanity is? Insanity is doing the exact... same fucking thing... over and over again expecting... shit to change...",
    "Vaas Montenegro",
    "Far Cry 3"
  ],
  [
    "Good men mean well. We just don't always end up doing well.",
    "Isaac Clarke",
    "Dead Space 3"
  ],
  [
    "A hero need not speak. When he is gone, the world will speak for him.",
    "-",
    "Halo combat evolved "
  ],
  ["Rise and shine Mr.Freeman. Rise and ...shine", "The G-Man", "Half-Life 2"],
  [
    "It is better to have faith in something than none at all",
    "Connor Kenway",
    "Assassin's creed III"
  ],
  ["Awesomeness is just so dark", "-", "Counter strike 1.6"],
  ["This just keep getting better n better.", "Dante", "Devil May Cry 3"],
  [
    "When A Man Is Faced With His Own Death, He Finds The Impossible Less Of A Barrier",
    "-",
    "Price of Persia"
  ],
  [
    "Love is just a chemical. We give it meaning by choice",
    "Eleanor Lamb",
    "Bioshock 2"
  ],
  [
    "One should never need to explain why one has a fake moustache.",
    "Harley Quinn",
    "Injustice: Gods Among Us"
  ],
  [
    "I am a woman and I reserve the right to be inconsistent!",
    "Leliana",
    "Dragon Age"
  ],
  [
    "I love these these pussies with cocky names",
    "-",
    "The Witcher 2: Assassins of Kings"
  ],
  ["I don't need luck, I have ammo", "-", "Mass Effect 3"],
  [
    "I've been in this game for years and got out alive. Don't try to get in this game, son. Go to college. Then you can legally rip people off and get paid for it",
    "Michael Townly",
    "GTA V"
  ],
  ["Misery. Everywhere.", "-", "Dishonored"],
  [
    "It's understandable, people get scared. They're as likely to turn to god as anything else. God died with the gold standard, we're onto a more concrete faith now. You have to rob Paul to pay Peter, there's no other way.",
    "Rick Trager",
    "Outlast"
  ],
  [
    "People will often go mad when they believe their life is over.",
    "Cop",
    "The Walking Dead"
  ],
  [
    "Kill all sons-a-bitches. That's *my* 'fficial instructions.",
    "Ellis",
    "Left 4 Dead 2"
  ],
  [
    " Technically, you're not supposed to use an elevator in a fire. But that might not apply during a *zombie apocalypse.*",
    "Nick",
    "Left 4 Dead 2"
  ]
];

function randomQuote() {
  var n;
  var col = getRandomColor();
  n = Math.floor(Math.random() * 67);
  var q = quote[n][0];
  var a = quote[n][1];
  document.getElementById("quote").innerHTML = quote[n][0];
  document.getElementById("auth").innerHTML = quote[n][1];
  document.getElementById("game").innerHTML = quote[n][2];
  document.getElementById("quote").style.color = col;
  document.getElementById("auth").style.color = col;
  document.getElementById("game").style.color = col;
  document.body.style.backgroundColor = col;
  document.getElementById("new").style.background = col;
}

function readyTweet() {
  var n;
  n = Math.floor(Math.random() * 67);
  var q = quote[n][0];
  var a = quote[n][1];
  var linkText = q + " - " + a + " https://codepen.io/sky1911/pen/xOXWEp";
  document
    .getElementsByClassName("tweetbutton")[0]
    .setAttribute(
      "href",
      "https://twitter.com/intent/tweet?text=" + encodeURIComponent(linkText)
    );
}

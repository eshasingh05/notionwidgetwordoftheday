// Array of words with their part of speech and definition for the current month
const words = [
  { word: "melancholy", definition: "(noun), a deep, enduring sadness", example1: "He was shrouded in a", example2: " profound melancholy." },
  { word: "ethereal", definition: "(adjective), delicate and light, almost unreal", example1: "Her beauty was ethereal,", example2: " like a fleeting dream." },
  { word: "woe", definition: "(noun), great sorrow or distress", example1: "His face was etched with", example2: " lines of woe." },
  { word: "phantasmagoria", definition: "(noun), a shifting series of illusions", example1: "The scene appeared as a", example2: " phantasmagoria of colors." },
  { word: "rapture", definition: "(noun), intense pleasure or joy", example1: "She gazed at the sunset", example2: " with utter rapture." },
  { word: "sublime", definition: "(adjective), inspiring awe through grandeur", example1: "The view was nothing short", example2: " of sublime." },
  { word: "wistful", definition: "(adjective), full of yearning or longing", example1: "He gave a wistful glance", example2: " at the horizon." },
  { word: "languor", definition: "(noun), a dreamy, relaxed state", example1: "The afternoon passed in a", example2: " gentle languor." },
  { word: "gloaming", definition: "(noun), twilight or dusk", example1: "They walked through the", example2: " gloaming, hand in hand." },
  { word: "tempest", definition: "(noun), a violent storm", example1: "A raging tempest swept", example2: " through the coast." },
  { word: "valiant", definition: "(adjective), courageous and brave", example1: "The knight fought with", example2: " valiant resolve." },
  { word: "gale", definition: "(noun), a strong wind", example1: "The gale howled through", example2: " the empty streets." },
  { word: "forlorn", definition: "(adjective), pitifully sad and abandoned", example1: "The old house stood empty", example2: " and forlorn." },
  { word: "swoon", definition: "(verb), to faint from extreme emotion", example1: "She swooned at the sight", example2: " of him." },
  { word: "betwixt", definition: "(preposition), between", example1: "He found himself betwixt", example2: " hope and despair." },
  { word: "ardent", definition: "(adjective), passionate or enthusiastic", example1: "Her ardent love was clear", example2: " in her letters." },
  { word: "baleful", definition: "(adjective), menacing or harmful", example1: "The baleful glare sent", example2: " chills down her spine." },
  { word: "reverie", definition: "(noun), a state of being pleasantly lost in one's thoughts", example1: "He fell into a reverie", example2: " by the tranquil stream." },
  { word: "forlorn", definition: "(adjective), pitifully sad or abandoned", example1: "The forlorn figure wandered", example2: " through the storm." },
  { word: "enkindle", definition: "(verb), to set on fire or inspire", example1: "The speech enkindled their", example2: " spirits for the cause." },
  { word: "hearken", definition: "(verb), to listen attentively", example1: "They hearkened to the old", example2: " storyteller's words." },
  { word: "covet", definition: "(verb), to desire something belonging to another", example1: "He could not help but", example2: " covet the title she held." },
  { word: "ensconce", definition: "(verb), to settle comfortably or securely", example1: "She ensconced herself in", example2: " the library chair." },
  { word: "ardor", definition: "(noun), great enthusiasm or passion", example1: "She pursued her goals with", example2: " unyielding ardor." },
  { word: "threnody", definition: "(noun), a lamentation or song of mourning", example1: "The threnody echoed through", example2: " the empty halls." },
  { word: "rapacious", definition: "(adjective), aggressively greedy or grasping", example1: "The rapacious baron taxed", example2: " his subjects heavily." },
  { word: "vindicate", definition: "(verb), to clear someone of blame or suspicion", example1: "The evidence vindicated the", example2: " wrongly accused man." },
  { word: "dirge", definition: "(noun), a mournful song or poem for the dead", example1: "A dirge was sung at the", example2: " hero's funeral." },
  { word: "prodigal", definition: "(adjective), lavishly wasteful", example1: "The prodigal son returned", example2: " after squandering his wealth." },
  { word: "arduous", definition: "(adjective), difficult and tiring", example1: "The arduous journey tested", example2: " their endurance." },
  { word: "transient", definition: "(adjective), lasting only for a short time", example1: "Their transient happiness", example2: " faded with the dawn." }
];
  
  function getWordOfTheDay() {
    const today = new Date();
    const dayOfMonth = today.getDate(); // Day of the month (1-31)
    
    // Ensure there are enough words for each day of the month
    const totalDaysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    
    if (words.length < totalDaysInMonth) {
      console.warn('Not enough words for each day of the month');
    }
  
    // Select a word based on the day of the month
    return words[(dayOfMonth - 1) % words.length]; // Day of the month starts from 1
  }
  
  function displayWord() {
    const { word,definition, example1, example2 } = getWordOfTheDay();
    
    // Update the word
    document.getElementById('wordDisplay').textContent = word;

    
    // Update the definition
    document.getElementById('definition').textContent = definition;
    
    // Update the example sentence
    document.getElementById('example1').textContent = example1;

    document.getElementById('example2').textContent = example2;

  }
  
  displayWord();
  

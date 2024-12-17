// Array of words with their part of speech and definition for the current month
const words = [
  { word: "melancholy", definition: "(noun), a deep, enduring sadness", example: "He was shrouded in a profound melancholy." },
  { word: "ethereal", definition: "(adjective), delicate and light, almost unreal", example: "Her beauty was ethereal, like a fleeting dream." },
  { word: "woe", definition: "(noun), great sorrow or distress", example: "His face was etched with lines of woe." },
  { word: "phantasmagoria", definition: "(noun), a shifting series of illusions", example: "The scene appeared as a phantasmagoria of colors." },
  { word: "rapture", definition: "(noun), intense pleasure or joy", example: "She gazed at the sunset with utter rapture." },
  { word: "sublime", definition: "(adjective), inspiring awe through grandeur", example: "The view was nothing short of sublime." },
  { word: "wistful", definition: "(adjective), full of yearning or longing", example: "He gave a wistful glance at the horizon." },
  { word: "languor", definition: "(noun), a dreamy, relaxed state", example: "The afternoon passed in a gentle languor." },
  { word: "gloaming", definition: "(noun), twilight or dusk", example: "They walked through the gloaming, hand in hand." },
  { word: "tempest", definition: "(noun), a violent storm", example: "A raging tempest swept through the coast." },
  { word: "valiant", definition: "(adjective), courageous and brave", example: "The knight fought with valiant resolve." },
  { word: "gale", definition: "(noun), a strong wind", example: "The gale howled through the empty streets." },
  { word: "forlorn", definition: "(adjective), pitifully sad and abandoned", example: "The old house stood empty and forlorn." },
  { word: "swoon", definition: "(verb), to faint from extreme emotion", example: "She swooned at the sight of him." },
  { word: "betwixt", definition: "(preposition), between", example: "He found himself betwixt hope and despair." },
  { word: "ardent", definition: "(adjective), passionate or enthusiastic", example: "Her ardent love was clear in her letters." },
  { word: "baleful", definition: "(adjective), menacing or harmful", example: "The baleful glare sent chills down her spine." },
  { word: "reverie", definition: "(noun), a state of being pleasantly lost in one's thoughts", example: "He fell into a reverie by the tranquil stream." },
  { word: "forlorn", definition: "(adjective), pitifully sad or abandoned", example: "The forlorn figure wandered through the storm." },
  { word: "enkindle", definition: "(verb), to set on fire or inspire", example: "The speech enkindled their spirits for the cause." },
  { word: "hearken", definition: "(verb), to listen attentively", example: "They hearkened to the old storyteller's words." },
  { word: "covet", definition: "(verb), to desire something belonging to another", example: "He could not help but covet the title she held." },
  { word: "ensconce", definition: "(verb), to settle comfortably or securely", example: "She ensconced herself in the library chair." },
  { word: "ardor", definition: "(noun), great enthusiasm or passion", example: "She pursued her goals with unyielding ardor." },
  { word: "threnody", definition: "(noun), a lamentation or song of mourning", example: "The threnody echoed through the empty halls." },
  { word: "rapacious", definition: "(adjective), aggressively greedy or grasping", example: "The rapacious baron taxed his subjects heavily." },
  { word: "vindicate", definition: "(verb), to clear someone of blame or suspicion", example: "The evidence vindicated the wrongly accused man." },
  { word: "dirge", definition: "(noun), a mournful song or poem for the dead", example: "A dirge was sung at the hero's funeral." },
  { word: "prodigal", definition: "(adjective), lavishly wasteful", example: "The prodigal son returned after squandering his wealth." },
  { word: "arduous", definition: "(adjective), difficult and tiring", example: "The arduous journey tested their endurance." },
  { word: "transient", definition: "(adjective), lasting only for a short time", example: "Their transient happiness faded with the dawn." },
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
    const { word,definition, example } = getWordOfTheDay();
    
    // Update the word
    document.getElementById('wordDisplay').textContent = word;

    
    // Update the definition
    document.getElementById('definition').textContent = definition;
    
    // Update the example sentence
    document.getElementById('example').textContent = example;
  }
  
  displayWord();
  

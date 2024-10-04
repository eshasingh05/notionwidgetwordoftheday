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
  { word: "pensive", definition: "(adjective), engaged in deep thought", example: "She sat by the window, pensive and still." },
  { word: "lament", definition: "(verb), to express grief or sorrow", example: "He lamented the loss of his beloved." },
  { word: "transient", definition: "(adjective), lasting only a short time", example: "The joy was fleeting and transient." },
  { word: "hearken", definition: "(verb), to listen attentively", example: "They hearkened to the old man’s tale." },
  { word: "verdant", definition: "(adjective), green with vegetation", example: "The verdant fields stretched endlessly." },
  { word: "reverie", definition: "(noun), a daydream", example: "She drifted into a peaceful reverie." },
  { word: "mirth", definition: "(noun), amusement or laughter", example: "Their mirth echoed in the great hall." },
  { word: "seraphic", definition: "(adjective), angelic and pure", example: "Her seraphic smile lit up the room." },
  { word: "profound", definition: "(adjective), very deep or intense", example: "He felt a profound sense of loss." },
  { word: "mournful", definition: "(adjective), feeling sorrow or grief", example: "The mournful cry echoed in the woods." },
  { word: "tempestuous", definition: "(adjective), characterized by strong emotions", example: "Their love was tempestuous and wild." },
  { word: "ardor", definition: "(noun), enthusiasm or passion", example: "He pursued his dreams with ardor." },
  { word: "quaint", definition: "(adjective), charmingly old-fashioned", example: "They lived in a quaint little village." },
  { word: "piteous", definition: "(adjective), deserving of pity", example: "The stray dog let out a piteous whimper." },
  { word: "fervor", definition: "(noun), intense emotion or passion", example: "She spoke with great fervor." },
  { word: "idyllic", definition: "(adjective), extremely peaceful and picturesque", example: "They spent their days in an idyllic setting." }
    // Add as many words as there are days in the month
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
  

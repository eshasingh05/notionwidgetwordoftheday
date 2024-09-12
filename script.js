// Array of words with their part of speech and definition
const words = [
    { word: 'Ebullient', partOfSpeech: 'Adjective', definition: 'Cheerful and full of energy' },
    { word: 'Voracious', partOfSpeech: 'Adjective', definition: 'Wanting or devouring great quantities of food' },
    { word: 'Sycophant', partOfSpeech: 'Noun', definition: 'A person who acts obsequiously toward someone important in order to gain advantage' },
    // Add more words as needed
  ];
  
  function getWordOfTheDay() {
    const today = new Date();
    const dayIndex = today.getDate() % words.length; // Simple way to cycle through words
    return words[dayIndex];
  }
  
  function displayWord() {
    const { word, partOfSpeech, definition } = getWordOfTheDay();
    document.getElementById('wordDisplay').textContent = `${word} - ${partOfSpeech}, ${definition}`;
  }
  
  // Call the function to display the word
  displayWord();
  
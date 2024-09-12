// Array of words with their part of speech and definition for the current month
const words = [
    { word: "ebullient", partOfSpeech: "adjective", definition: "cheerful and full of energy", example: "Her ebullient personality brightened up the room."},
    { word: "voracious", partOfSpeech: "adjective", definition: "wanting or devouring great quantities of food", example: "He had a voracious appetite after the hike."},
    { word: "sycophant", partOfSpeech: "noun", definition: "a person who acts obsequiously toward someone important in order to gain advantage", example: "The sycophant flattered the boss excessively."},
    { word: "pernicious", partOfSpeech: "adjective", definition: "having a harmful effect, especially in a gradual or subtle way", example: "The pernicious effects of the drug were not immediately apparent."},
    { word: "propensity", partOfSpeech: "noun", definition: "an inclination or natural tendency to behave in a particular way", example: "She has a propensity for meticulous planning."},
    { word: "obsequious", partOfSpeech: "adjective", definition: "obedient or attentive to an excessive or servile degree", example: "His obsequious behavior was evident in his constant flattery."},
    { word: "fastidious", partOfSpeech: "adjective", definition: "very attentive to detail and accuracy; hard to please", example: "The fastidious editor scrutinized every word in the manuscript."},
    { word: "dilettante", partOfSpeech: "noun", definition: "a person who cultivates an area of interest without real commitment or knowledge; an amateur", example: "As a dilettante, he enjoyed exploring many different hobbies without mastering any."},
    { word: "sycophant", partOfSpeech: "noun", definition: "a person who acts obsequiously toward someone important in order to gain advantage", example: "The sycophant tried to win favor by constantly agreeing with the CEO."},
    { word: "insipid", partOfSpeech: "adjective", definition: "lacking flavor or interest; dull", example: "lacking flavor or interest; dull"},
    { word: "avarice", partOfSpeech: "noun", definition: "extreme greed for wealth or material gain", example: "Her avarice led her to make unethical decisions."},
    { word: "caitiff", partOfSpeech: "noun", definition: "a despicable or cowardly person", example: "The caitiff was feared for his treachery."},
    { word: "clandestine", partOfSpeech: "adjective", definition: "kept secret or done secretively", example: "They held a clandestine meeting in the basement."},   
    { word: "despondent", partOfSpeech: "adjective", definition: "in low spirits from loss of hope or courage", example: "She felt despondent after the bad news."}, 
    { word: "exorbitant", partOfSpeech: "adjective", definition: "unreasonably high; excessive", example: "The price of the car was exorbitant and unaffordable."},
    { word: "furtive", partOfSpeech: "adjective", definition: "attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble", example: "She cast a furtive glance around the room."},
    { word: "hapless", partOfSpeech: "adjective", definition: "unfortunate or unlucky", example: "The hapless traveler lost his way in the storm."},
    { word: "inimical", partOfSpeech: "adjective", definition: "tending to obstruct or harm", example: "Their inimical actions jeopardized the project."},
    { word: "lugubrious", partOfSpeech: "adjective", definition: "looking or sounding sad and dismal", example: "The lugubrious tone of the music matched the mood of the day."},
    { word: "miasma", partOfSpeech: "noun", definition: "a highly unpleasant or unhealthy smell or vapor", example: "The miasma from the swamp was unbearable."},
    { word: "pallid", partOfSpeech: "adjective", definition: "lacking color or liveliness", example: "Her pallid complexion was a sign of her illness."},
    { word: "ravenous", partOfSpeech: "adjective", definition: "extremely hungry", example: "After the hike, they were ravenous and ate everything in sight."},
    { word: "soporific", partOfSpeech: "adjective", definition: "tending to induce drowsiness or sleep", example: "The lecture was so soporific that many students fell asleep."},
    { word: "subterfuge", partOfSpeech: "noun", definition: "deceit used in order to achieve one's goal", example: "He used subterfuge to gain access to the restricted area."},
    { word: "tremulous", partOfSpeech: "adjective", definition: "shaking or quivering slightly", example: "Her tremulous voice betrayed her nervousness."},
    { word: "ubiquitous", partOfSpeech: "adjective", definition: "present, appearing, or found everywhere", example: "Smartphones have become ubiquitous in modern society."},
    { word: "vehement", partOfSpeech: "adjective", definition: "showing strong feeling; forceful, passionate, or intense", example: "He was vehement in his defense of the policy."},
    { word: "wraith", partOfSpeech: "noun", definition: "a ghost or ghostlike image of someone, especially one seen shortly before or after their death", example: "The wraith appeared in the old mansion late at night."},
    { word: "pragmatic", partOfSpeech: "adjective", definition: "dealing with things sensibly and realistically", example: "Her pragmatic approach helped resolve many issues efficiently."},
    { word: "replete", partOfSpeech: "adjective", definition: "filled or well-supplied with something", example: "The banquet hall was replete with luxurious decorations."},
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
    const { word, partOfSpeech, definition, example} = getWordOfTheDay();
    document.getElementById('wordDisplay').textContent = `${word} - ${partOfSpeech}, ${definition} \n ${example}`;
  }
  
  displayWord();
  

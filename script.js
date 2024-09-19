// Array of words with their part of speech and definition for the current month
const words = [
    { word: "ebullient", definition: "(adjective), cheerful and full of energy", example: "Her ebullient personality brightened up the room."},
    { word: "voracious", definition: "(adjective), wanting or devouring great quantities of food", example: "He had a voracious appetite after the hike."},
    { word: "sycophant", definition: "(noun), a person who acts obsequiously toward someone important in order to gain advantage", example: "The sycophant flattered the boss excessively."},
    { word: "pernicious", definition: "(adjective), having a harmful effect, especially in a gradual or subtle way", example: "The pernicious effects of the drug were not immediately apparent."},
    { word: "propensity", definition: "(noun), an inclination or natural tendency to behave in a particular way", example: "She has a propensity for meticulous planning."},
    { word: "obsequious", definition: "(adjective), obedient or attentive to an excessive or servile degree", example: "His obsequious behavior was evident in his constant flattery."},
    { word: "fastidious", definition: "(adjective), very attentive to detail and accuracy; hard to please", example: "The fastidious editor scrutinized every word in the manuscript."},
    { word: "dilettante", definition: "(noun), a person who cultivates an area of interest without real commitment or knowledge; an amateur", example: "As a dilettante, he enjoyed exploring many different hobbies without mastering any."},
    { word: "sycophant", definition: "(noun), a person who acts obsequiously toward someone important in order to gain advantage", example: "The sycophant tried to win favor by constantly agreeing with the CEO."},
    { word: "insipid", definition: "(adjective), lacking flavor or interest; dull", example: "lacking flavor or interest; dull"},
    { word: "avarice", definition: "(noun), extreme greed for wealth or material gain", example: "Her avarice led her to make unethical decisions."},
    { word: "caitiff", definition: "(noun), a despicable or cowardly person", example: "The caitiff was feared for his treachery."},
    { word: "clandestine", definition: "(adjective), kept secret or done secretively", example: "They held a clandestine meeting in the basement."},   
    { word: "despondent", definition: "(adjective), in low spirits from loss of hope or courage", example: "She felt despondent after the bad news."}, 
    { word: "exorbitant", definition: "(adjective), unreasonably high; excessive", example: "The price of the car was exorbitant and unaffordable."},
    { word: "furtive", definition: "(adjective), attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble", example: "She cast a furtive glance around the room."},
    { word: "hapless", definition: "(adjective), unfortunate or unlucky", example: "The hapless traveler lost his way in the storm."},
    { word: "inimical", definition: "(adjective), tending to obstruct or harm", example: "Their inimical actions jeopardized the project."},
    { word: "lugubrious", definition: "(adjective), looking or sounding sad and dismal", example: "The lugubrious tone of the music matched the cloudy weather."},
    { word: "miasma", definition: "(noun), a highly unpleasant or unhealthy smell or vapor", example: "The miasma from the swamp was unbearable."},
    { word: "pallid", definition: "(adjective), lacking color or liveliness", example: "Her pallid complexion was a sign of her illness."},
    { word: "ravenous", definition: "(adjective), extremely hungry", example: "After the hike, they were ravenous and ate everything in sight."},
    { word: "soporific", definition: "(adjective), tending to induce drowsiness or sleep", example: "The lecture was so soporific that many students fell asleep."},
    { word: "subterfuge", definition: "(noun), deceit used in order to achieve one's goal", example: "He used subterfuge to gain access to the restricted area."},
    { word: "tremulous", definition: "(adjective), shaking or quivering slightly", example: "Her tremulous voice betrayed her nervousness."},
    { word: "ubiquitous", definition: "(adjective), present, appearing, or found everywhere", example: "Smartphones have become ubiquitous in modern society."},
    { word: "vehement", definition: "(adjective),showing strong feeling; forceful, passionate, or intense", example: "He was vehement in his defense of the policy."},
    { word: "wraith", definition: "(noun),a ghost or ghostlike image of someone, especially one seen shortly before or after their death", example: "The wraith appeared in the old mansion late at night."},
    { word: "pragmatic", definition: "(adjective),dealing with things sensibly and realistically", example: "Her pragmatic approach helped resolve many issues efficiently."},
    { word: "replete", definition: "(adjective),filled or well-supplied with something", example: "The banquet hall was replete with luxurious decorations."},
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
  

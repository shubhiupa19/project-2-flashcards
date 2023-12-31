import React, { useState } from 'react';
import Card from './Card';
import './App.css';

//all the data, questions and answers, that will be on the cards
const flashcards = [
  { state: 'Alabama', capital: 'Montgomery' },
  { state: 'Alaska', capital: 'Juneau' },
  { state: 'Arizona', capital: 'Phoenix' },
  {state: 'New York', capital: 'Albany'},
  {state: 'New Jersey', capital: 'Trenton'},
  {state: 'California', capital: 'Sacramento'},
  {state: 'Colorado', capital: 'Denver'},
  {state: 'Connecticut', capital: 'Hartford'},
  {state: 'Delaware', capital: 'Dover'},
  {state: 'Florida', capital: 'Tallahassee'},
  {state: 'Georgia', capital: 'Atlanta'},
  {state: 'Hawaii', capital: 'Honolulu'},
  {state: 'Idaho', capital: 'Boise'},
  {state: 'Illinois', capital: 'Springfield'},
  {state: 'Indiana', capital: 'Indianapolis'},
  {state: 'Iowa', capital: 'Des Moines'},
  {state: 'Kansas', capital: 'Topeka'},
  {state: 'Kentucky', capital: 'Frankfort'},
  {state: 'Louisiana', capital: 'Baton Rouge'},
  {state: 'Maine', capital: 'Augusta'},
  {state: 'Maryland', capital: 'Annapolis'},
  {state: 'Massachusetts', capital: 'Boston'},
  {state: 'Michigan', capital: 'Lansing'},
  {state: 'Minnesota', capital: 'St. Paul'},
  {state: 'Mississippi', capital: 'Jackson'},
  {state: 'Missouri', capital: 'Jefferson City'},
  {state: 'Montana', capital: 'Helena'},
  {state: 'Nebraska', capital: 'Lincoln'},
  {state: 'Nevada', capital: 'Carson City'},
  {state: 'New Hampshire', capital: 'Concord'},
  {state: 'New Mexico', capital: 'Santa Fe'},
  {state: 'North Carolina', capital: 'Raleigh'},
  {state: 'North Dakota', capital: 'Bismarck'},
  {state: 'Ohio', capital: 'Columbus'},
  {state: 'Oklahoma', capital: 'Oklahoma City'},
  {state: 'Oregon', capital: 'Salem'},
  {state: 'Pennsylvania', capital: 'Harrisburg'},
  {state: 'Rhode Island', capital: 'Providence'},
  {state: 'South Carolina', capital: 'Columbia'},
  {state: 'South Dakota', capital: 'Pierre'},
  {state: 'Tennessee', capital: 'Nashville'},
  {state: 'Texas', capital: 'Austin'},
  {state: 'Utah', capital: 'Salt Lake City'},
  {state: 'Vermont', capital: 'Montpelier'},
  {state: 'Virginia', capital: 'Richmond'},
  {state: 'Washington', capital: 'Olympia'},
  {state: 'West Virginia', capital: 'Charleston'},
  {state: 'Wisconsin', capital: 'Madison'},
  {state: 'Wyoming', capital: 'Cheyenne'},
  {state: 'Washington D.C.', capital: 'Washington D.C.'},

  
];

function App() {
  //initialize a state variable called currentIndex of the card and set it to 0, since we're starting with the first card
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  //if we're on the last flaschard, go back to the first one
  //else, just keep iterating through 
  const handleNextCard = () => { 
    const newIndex = (currentIndex + 1 + flashcards.length) % flashcards.length;
    setCurrentIndex(newIndex);
    setAnswer('');
    setIsCorrect(null);
  };

  const handlePrevCard = () => {
    const newIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    setCurrentIndex(newIndex);
    setAnswer('');
    setIsCorrect(null);
  };

  const handleAnswerChange = (event) => { 
    setAnswer(event.target.value);
  };

  const handleAnswerSubmit = (event) => {
    event.preventDefault();
    const currentFlashcard = flashcards[currentIndex];
    if (answer.toLowerCase() === currentFlashcard.capital.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  


  let feedbackMessage = null;
  if (isCorrect === true) {
    feedbackMessage = <p className="correct">Correct!</p>;
  } else if (isCorrect === false) {
    feedbackMessage = <p className="incorrect">Incorrect. The correct answer is {flashcards[currentIndex].capital}.</p>;
  }
  

  return (
    //renders the webpage
    <div className="App">
      <h1>States and Capitals</h1>
      <h2>Can you name the capital of each state? (50 cards in total)</h2>

      {/* prints out the card */}
      <Card flashcard={flashcards[currentIndex]} />
      {feedbackMessage}
      <form onSubmit={handleAnswerSubmit}>
        <label>
          Enter your answer:
          <input type="text" value={answer} onChange={handleAnswerChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

       {/* button to go to the previous card */}
       <div class = "card-buttons">
       <button onClick={handlePrevCard}>Previous</button>
      {/* button to go to the next card */}
      <button onClick={handleNextCard}>Next</button>

     
      </div>
     
    </div>
  );
}

export default App;

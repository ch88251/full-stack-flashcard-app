import { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import DomainSelect from "./DomainSelect";

function App() {
  const [data, setData] = useState({});
  const [selectedDomain, setSelectedDomain] = useState("");
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Load JSON on initial render
  useEffect(() => {
    fetch("/flashcards.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  // When domain changes, load its data
  useEffect(() => {
    if (selectedDomain && data[selectedDomain]) {
      setCards(data[selectedDomain]);
      setIndex(0);
      setFlipped(false);
    }
  }, [selectedDomain, data]);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cards.length);
    setFlipped(false);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setFlipped(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">
        Security+ Flashcards
      </h1>

      <DomainSelect domains={Object.keys(data)} onSelect={setSelectedDomain} />

      {cards.length > 0 && (
        <>
          <Flashcard
            front={cards[index].front}
            back={cards[index].back}
            flipped={flipped}
            onFlip={() => setFlipped(!flipped)}
          />
          <div className="flex gap-4 mt-4">
            <button 
              onClick={prevCard} 
              className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-md">Previous</button>
            <button 
              onClick={nextCard} 
              className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-md">
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import AssistiveTechInfo from "./components/AssistiveTechInfo";
import GameOver from "./components/GameOver";
import ErrorCard from "./components/ErrorCard";
import './index.css'
export default function App() {
  const initialFormData = { category: "animals-and-nature", number: 10 };
  const [formData, setFormData] = useState(initialFormData);
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [areAllCardsMatched, setAreAllCardsMatched] = useState(false);
  const [isError, setIsError] = useState(false);

  // console.log(emojisData);
  //console.log(matchedCards);
  //console.log(isGameOver);
  console.log(selectedCards);
  useEffect(() => {
    if (
      selectedCards.length == 2 &&
      selectedCards[0].name === selectedCards[1].name
    ) {
      setMatchedCards((prevMatchedCards) => [
        ...prevMatchedCards,
        ...selectedCards,
      ]);
    }
  }, [selectedCards]);
  useEffect(() => {
    if (emojisData.length && emojisData.length === matchedCards.length) {
      setAreAllCardsMatched(true);
    }
  }, [matchedCards]);
  function handleFormChange(e) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  }

  async function startGame(e, data) {
    e.preventDefault();

    try {
      //throw new Error("Unable to fetch data from api");
      const response = await fetch(
        `https://emojihub.yurace.pro/api/all/category/${formData.category}`
      );
      if (!response.ok) {
        throw new Error("could not fetch data from API");
      }
      const data = await response.json();
      console.log(getRandomIndices(data));
      const dataSlice = getDataSlice(data);
      const emojisArray = getEmojisArray(dataSlice);

      setEmojisData(emojisArray);
      //console.log(data);
      setIsGameOn(true);
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  }
  function getDataSlice(data) {
    const randomIndices = getRandomIndices(data);
    const dataSlice = randomIndices.map((index) => data[index]);
    return dataSlice;
  }
  function getRandomIndices(data) {
    let randomIndicesArray = new Set();
    while (randomIndicesArray.size < formData.number / 2) {
      let randomIndex = Math.floor(Math.random() * data.length);
      randomIndicesArray.add(randomIndex);
    }
    return [...randomIndicesArray];
  }
  function getEmojisArray(data) {
    const pairedEmojisArray = [...data, ...data];
    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [pairedEmojisArray[i], pairedEmojisArray[j]] = [
        pairedEmojisArray[j],
        pairedEmojisArray[i],
      ];
    }
    return pairedEmojisArray;
  }

  function turnCard(name, index) {
    if (selectedCards.length < 2) {
      setSelectedCards((prevSelectedCards) => [
        ...prevSelectedCards,
        { name, index },
      ]);
    } else if (selectedCards.length == 2) {
      setSelectedCards([
        {
          name,
          index,
        },
      ]);
    }
  }
  function resetGame() {
    setIsGameOn(false);
    setMatchedCards([]);
    setSelectedCards([]);
    setAreAllCardsMatched(false);
  }
  function resetError() {
    setIsError(false);
  }

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && !isError && (
        <Form handleSubmit={startGame} handleFormChange={handleFormChange} />
      )}

      {isGameOn && !areAllCardsMatched && (
        <AssistiveTechInfo
          emojisData={emojisData}
          matchedCards={matchedCards}
        />
      )}
      {areAllCardsMatched && <GameOver handleClick={resetGame} />}

      {isGameOn && (
        <MemoryCard
          handleClick={turnCard}
          data={emojisData}
          selectedCards={selectedCards}
          matchedCards={matchedCards}
        />
      )}
      {/*isError && <ErrorCard handleClick={resetError} />*/}
    </main>
  );
}

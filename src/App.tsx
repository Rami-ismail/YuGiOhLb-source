import { useEffect, useState } from "react";
import CardList from "./components/CardList";

const ID = "1wyoeq_rQbZTOfH8COymYzkNEod8-7FEtogHopVzr0Jw";
const GID = "0";
const URL =
  "https://docs.google.com/spreadsheets/d/" +
  ID +
  "/gviz/tq?tqx=out:json&tq&gid=" +
  GID;

function App() {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.text())
      .then((responseText) => responseText.match(/(?<="table":).*(?=}\);)/g))
      .then((match) => (match != null ? JSON.parse(match[0]) : null))
      .then((json) => setCards(json.rows));
  }, []);

  return (
    <>
      <div className="card">{cards ? <CardList cards={cards} /> : <></>}</div>
    </>
  );
}

export default App;

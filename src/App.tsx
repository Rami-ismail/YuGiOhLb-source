import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CardList from "./components/CardList";
import { CardSearcher } from "./components/CardSearcher";


const ID = "1wyoeq_rQbZTOfH8COymYzkNEod8-7FEtogHopVzr0Jw";
const WANTED_GID = "0";
const FORSALE_GID = "440879152";
const URL =
  "https://docs.google.com/spreadsheets/d/" +
  ID +
  "/gviz/tq?tqx=out:json&tq&gid=";

function App() {
  const [wantedCards, setWantedCards] = useState(null);
  const [cardsForSale, setCardsForSale] = useState(null);

  useEffect(() => {
    fetch(URL + WANTED_GID)
      .then((response) => response.text())
      .then((responseText) => responseText.match(/(?<="table":).*(?=}\);)/g))
      .then((match) => (match != null ? JSON.parse(match[0]) : null))
      .then((json) => setWantedCards(json.rows));
  }, []);

  useEffect(() => {
    fetch(URL + FORSALE_GID)
      .then((response) => response.text())
      .then((responseText) => responseText.match(/(?<="table":).*(?=}\);)/g))
      .then((match) => (match != null ? JSON.parse(match[0]) : null))
      .then((json) => setCardsForSale(json.rows));
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="header">
          <nav>
            <Link to={"/"}>YuGiOhLb</Link>
            <ul className="header-nav">
              <li>
                <Link to={"/Sale"}>Cards for Sale</Link>
              </li>
              <li>
                <Link to={"/Wanted"}>Wanted Cards</Link>
              </li>
              <li>
                <Link to={"/Search"}>Search</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="card">
          <Routes>
            <Route
              path="/"
              element={
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  distinctio odio dignissimos ab deleniti corrupti sit quia
                  delectus, veritatis amet recusandae beatae dolorem dolorum
                  facilis, quibusdam omnis aspernatur blanditiis accusamus.
                </h1>
              }
            />
            <Route
              path="/Sale"
              element={cardsForSale ? <CardList cards={cardsForSale} /> : <></>}
            />
            <Route
              path="/Wanted"
              element={wantedCards ? <CardList cards={wantedCards} /> : <></>}
            />
            <Route
              path="/Search"
              element={<CardSearcher/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

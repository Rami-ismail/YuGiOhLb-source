// import { TornadoDragon } from "./mockData";
import CardsDetail from "./components/CardDetails/CardsDetail";
import CardsList from "./components/CardList/CardsList";
import { TornadoDragon } from "./mockData";

function App() {
  return (
    <>
      <CardsList
        cardsFilterName={"Dark Magician"}
        // cardsFilterType={""}
        // cardsFilterRace={""}
        // cardsFilterAttribute={""}
        // cardsFilterLevelRank={""}
        // cardsFilterLevelRankCompare={""}
        // cardsFilterLink={""}
        // cardsFilterLinkMarkers={""}
        // cardsFilterLinkValCompare={""}
        // cardsFilterScales={""}
        // cardsFilterAtk={""}
        // cardsFilterDef={""}
        // cardsFilterAtkCompare={""}
        // cardsFilterDefCompare={""}
        // cardsFilterSort={""}
      ></CardsList>
      <CardsDetail card={TornadoDragon}></CardsDetail>
    </>
  );
}

export default App;

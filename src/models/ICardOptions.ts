import { Dispatch } from "react";

export interface ICardOptions {
    setCardsFilterName: Dispatch<React.SetStateAction<string>>,
    setCardsFilterType: Dispatch<React.SetStateAction<string>>,
    setCardsFilterRace: Dispatch<React.SetStateAction<string>>,
    setCardsFilterAttribute: Dispatch<React.SetStateAction<string>>,
    setCardsFilterLevelRank: Dispatch<React.SetStateAction<string>>,
    setCardsFilterLevelRankCompare: Dispatch<React.SetStateAction<string>>,
    setCardsFilterLink: Dispatch<React.SetStateAction<string>>,
    setCardsFilterAtk: Dispatch<React.SetStateAction<string>>,
    setCardsFilterAtkCompare: Dispatch<React.SetStateAction<string>>,
    setCardsFilterDef: Dispatch<React.SetStateAction<string>>,
    setCardsFilterDefCompare: Dispatch<React.SetStateAction<string>>,
    setCardsFilterSort: Dispatch<React.SetStateAction<string>>,
}

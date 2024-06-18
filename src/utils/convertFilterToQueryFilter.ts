import apiQueryFilters from "../api-service/queryBuilder"


//these should not be nullable but are now for the sake of testing
export interface CardListFilters {
    cardsFilterName?: string
    cardsFilterType?: string
    cardsFilterRace?: string
    cardsFilterAttribute?: string
    cardsFilterLevelRank?: string
    cardsFilterLevelRankCompare?: string
    cardsFilterLink?: string
    cardsFilterLinkMarkers?: string
    cardsFilterLinkValCompare?: string
    cardsFilterScales?: string
    cardsFilterAtk?: string
    cardsFilterDef?: string
    cardsFilterAtkCompare?: string //this should become it's own type
    cardsFilterDefCompare?: string
    cardsFilterSort?: string
  }


 //should fix this once typing is fixed
export const convertToQueryFilter = (cardListFilters: CardListFilters) : apiQueryFilters => {
    let queryFilters: apiQueryFilters = {
        fname: cardListFilters.cardsFilterName,
        type: undefined,
        atk: cardListFilters.cardsFilterAtk,
        def: cardListFilters.cardsFilterDef,
        level: Number(cardListFilters.cardsFilterLevelRank),
        race: undefined,
        attribute: undefined,
        link: cardListFilters.cardsFilterLink,
        linkmarker: undefined,
        scale: cardListFilters.cardsFilterScales, //pendScaleValue
        sort:  cardListFilters.cardsFilterSort, //should be it's own type
        cardsFilterLevelRankCompare: cardListFilters.cardsFilterLevelRankCompare, //this should be it;s own type
        cardsFilterAtkCompare :cardListFilters.cardsFilterAtkCompare, //this should be it's own type
        cardsFilterDefCompare : cardListFilters.cardsFilterDefCompare, //this should be it;s own type
        cardsFilterLinkValCompare: cardListFilters.cardsFilterLinkValCompare //this should be it;s own type
    }
    return queryFilters
}
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  CardListFilters,
  convertToQueryFilter,
} from "../../utils/convertFilterToQueryFilter";
import { buildQuery } from "../../api-service/queryBuilder";
import { fetchCards } from "../../api-service/fetchCards";
import { Paper, Card, CardMedia, Box, ImageList } from "@mui/material";

import { classes } from "./CardListStyles";
import { ICard } from "../../models/ICard";
import { IMetaRequestData } from "../../models/IMetaRequestData";
import { banListSignConverter, moreCardsFetching } from "./CardListUtils";
import ListLoader from "../Loader/ListLoader";

const CardsList = (listFilters: CardListFilters) => {
  const [cardsList, setCardsList] = useState<ICard[]>([]);
  const [dataStatus, setDataStatus] = useState<IMetaRequestData>();
  const length = 40;

  useEffect(() => {
    const cardsFetching = async () => {
      const query = buildQuery(convertToQueryFilter(listFilters));
      try {
        const response = await fetchCards(query);
        setDataStatus(response.meta);
        setCardsList(response.data);
      } catch (ex) {
        setCardsList([]);
        setDataStatus({ rows_remaining: 0 });
      }
    };
    cardsFetching();
  }, [
    listFilters.cardsFilterName,
    listFilters.cardsFilterType,
    listFilters.cardsFilterRace,
    listFilters.cardsFilterAttribute,
    listFilters.cardsFilterLevelRank,
    listFilters.cardsFilterLevelRankCompare,
    listFilters.cardsFilterLink,
    listFilters.cardsFilterAtk,
    listFilters.cardsFilterAtkCompare,
    listFilters.cardsFilterDef,
    listFilters.cardsFilterDefCompare,
    listFilters.cardsFilterSort,
  ]);
  return (
    <Paper sx={classes.cardsListWrapperStyles}>
      <Paper sx={classes.headerStyles} square variant="outlined">
        Cards Library
      </Paper>
      <Paper sx={classes.cardsWrapperStyles}>
        <InfiniteScroll
          dataLength={cardsList && cardsList.length}
          next={moreCardsFetching}
          loader={<ListLoader />}
          hasMore={dataStatus && dataStatus.rows_remaining !== 0 ? true : false}
          height="calc(100vh - 145px)"
        >
          <ImageList sx={{height: 'fit-content'}} cols={5} rowHeight={50}> 
          {cardsList?.map((cardsInfo) =>
            cardsInfo.card_images.map((cardImages) => (
              //this should be exported to it's own component holding it's own state so when dragged and dropped send it's data to the cart
                <Card sx={classes.cardWrapperStyles} key={cardImages.id}>
                  <CardMedia
                    component="img"
                    src={cardImages.image_url}
                    
                    sx={classes.cardStyles}
                  ></CardMedia>
                  {cardsInfo.banlist_info?.ban_tcg && (
                    <CardMedia
                      component="img"
                      src={banListSignConverter(cardsInfo.banlist_info)}
                      sx={classes.banListStyles}
                    ></CardMedia>
                  )}
                </Card>
            ))
          )}
         </ImageList>
        </InfiniteScroll>
      </Paper>
    </Paper>
    
  );
};
export default CardsList;

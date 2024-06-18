import { Card, CardMedia, Paper, Typography } from "@mui/material";
import { classes } from "./CardsDetailStyles";
import { levelRankConverter, linkConverter } from "../../utils/cardLevelUtils";
import { useNavigate } from "react-router-dom";
import { ICard } from "../../models/ICard";
import CardsBackside from "../../assets/images/CardsBackside.png"

interface ICardsDetailProps {
  card: ICard;
}

const CardsDetail = ({ card }: ICardsDetailProps) => {
  const navigate = useNavigate();

  const formatCardLevelRankScale= (card: ICard): string => (
      `${
          card.level
            ? `${levelRankConverter(card.level)} ${card.atk}/${
                card.def
              }${card.scale ? `/SCALE-${card.scale}` : ""}`
            : `${
                card.linkval && card.linkmarkers
                  ? `[${linkConverter(card.linkmarkers)}] ${
                      card.atk
                    }/LINK-${card.linkval}`
                  : ""
              }`
        }` 
  )
    
  const formatCardStats = (card: ICard): string  => (
      `[${card.type}] ${card.race}/${
          card.attribute || card.archetype || "???"
        }`
    )

  return (
    <>
      <Paper sx={classes.cardDetailWrapperStyles}>
        <Paper sx={classes.headerStyles} square variant="outlined">
          {card.name || "Card's name"}
        </Paper>
        <Card sx={classes.imageWrapperStyles}>
          <CardMedia
            component="img"
            src={card ? card.card_images[0].image_url : CardsBackside}
            sx={classes.imageStyles}
            onClick={() => navigate(`${card.card_images[0].id}`)}
          />
        </Card>
        <Paper sx={classes.cardDetailStyles} square variant="outlined">
          <Typography
            variant="body2"
            sx={classes.cardDetailContentStyles}
            style={{ margin: "8px 8px 0 8px" }}
          >
            {formatCardStats(card)}
          </Typography>
          <Typography
            variant="body2"
            sx={classes.cardDetailContentStyles}
            style={{ margin: "0 8px 8px 8px" }}
          >
            {formatCardLevelRankScale(card)}
          </Typography>
          <Typography variant="body2" sx={classes.cardEffectStyles} marginLeft={"10px"}>
            {card ? `${card.desc}` : ""}
          </Typography>
        </Paper>
      </Paper>
    </>
  );
};
export default CardsDetail;

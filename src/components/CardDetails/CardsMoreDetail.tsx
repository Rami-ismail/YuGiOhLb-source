import { useState } from "react";
// import { get } from "../utils/ApiCaller";
import {
  Paper,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Typography,
  Button,
} from "@mui/material";
import Header from "../../Header";
import LevelIcon from "../assets/images/LevelIcon.svg.png";
import RankIcon from "../assets/images/RankIcon.svg.png";
import { classes } from "../CardList/CardListStyles";
import limitedButtons from "../limitedButtons";
import { ICard } from "../../models/ICard";
import { TornadoDragon } from "../../mockData";
import miniCardImage from "../../utils/miniCardImage";
import attribute from "../../utils/attribute";
import { linkConverter } from "../../utils/cardLevelUtils";

const CardsMoreDetail = (props: any) => {
  const { match, history } = props;
  const { params } = match;
  const [card] = useState<ICard>(TornadoDragon);

  const Loader = () => {
    return (
      <Paper sx={classes.loaderStyles}>
        <CircularProgress
          size="60px"
          thickness={5}
          sx={classes.circularProgress}
        />
      </Paper>
    );
  };
  return (
    <Paper sx={classes.pageWrapper}>
      <Paper sx={classes.headerStyles} elevation={24}>
        <Header />
      </Paper>
      <Paper sx={classes.contentWrapper} elevation={24}>
        {card ? (
          <Card sx={classes.content}>
            <Paper sx={classes.cardImageWrapper}>
              <CardMedia
                image={card.card_images[0].image_url}
                sx={classes.cardImageStyles}
              />
              <Paper sx={classes.buttonGroupStyles}>
                {limitedButtons(card.banlist_info)}
              </Paper>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push("/YugiDex")}
              >
                back to yugidex
              </Button>
            </Paper>
            <CardContent sx={classes.cardInfoStyles}>
              <Paper elevation={24} sx={classes.cardNameLevelStyles}>
                <Typography
                  variant="h6"
                  style={{ margin: "16px 16px 16px 24px" }}
                >
                  {card.name}
                </Typography>
                <Paper elevation={0} sx={classes.cardLevelStyles}>
                  <CardMedia
                    image={
                      card.level
                        ? card.type === "XYZ Monster" ||
                          card.type === "XYZ Pendulum Effect Monster"
                          ? RankIcon
                          : LevelIcon
                        : ""
                    }
                    style={{ width: "32px", marginRight: "8px" }}
                    component="img"
                  />
                  <Typography variant="h5" style={{ marginRight: "16px" }}>
                    {card.level ? card.level : ""}
                  </Typography>
                </Paper>
              </Paper>
              <Paper elevation={24} sx={classes.cardImageTypeIDAttributeStyles}>
                <Paper sx={classes.cardImageTypeIDStyles}>
                  <CardMedia
                    src={miniCardImage(card.type)}
                    style={{ width: "32px", margin: "8px 12px 8px 12px" }}
                    component="img"
                    title={card.type}
                  />
                  <Typography
                    variant="body1"
                    style={{ wordBreak: "break-word", wordWrap: "break-word" }}
                  >
                    {card.type} / ID: {card.id}
                  </Typography>
                </Paper>
                <CardMedia
                  src={attribute(card)}
                  style={{ width: "32px", margin: "8px 12px 8px 12px" }}
                  component="img"
                  title={
                    card.type === "Skill Card"
                      ? ""
                      : card.attribute || card.race
                  }
                />
              </Paper>
              {card.type === "Skill Card" ||
              card.type === "Spell Card" ||
              card.type === "Trap Card" ? (
                ""
              ) : (
                <Paper sx={classes.cardATKDEFScaleLinkStyles}>
                  <Typography
                    variant="body1"
                    style={{ margin: "8px 12px 8px 12px" }}
                  >
                    {`${
                      card.level
                        ? `ATK: ${card.atk} / DEF: ${card.def} ${
                            card.scale ? `/ SCALE: ${card.scale}` : ""
                          }`
                        : `${
                            card.linkval
                              ? `ATK: ${card.atk} / LINK: ${card.linkval} [${
                                  card.linkmarkers
                                    ? linkConverter(card.linkmarkers)
                                    : ""
                                }]`
                              : ""
                          }`
                    }`}
                  </Typography>
                </Paper>
              )}
              <Paper sx={classes.cardEffectStyles}>
                <Typography
                  variant="body2"
                  style={{ margin: "16px 12px 16px 12px" }}
                >
                  {card.desc}
                </Typography>
              </Paper>
              <Paper sx={classes.cardPricesStyles}>
                <Typography variant="body2" sx={classes.cardSellerStyles}>
                  <i
                    className="fas fa-shopping-cart"
                    title="Card Market Price"
                  ></i>
                  &nbsp;Card Market: {card.card_prices[0].cardmarket_price}
                  <i className="fas fa-dollar-sign"></i>
                </Typography>
                <Typography variant="body2" sx={classes.cardSellerStyles}>
                  <i className="fas fa-box-open" title="TCG Player Price"></i>
                  &nbsp;TCG Player: {card.card_prices[0].tcgplayer_price}
                  <i className="fas fa-dollar-sign"></i>
                </Typography>
                <Typography variant="body2" sx={classes.cardSellerStyles}>
                  <i className="fab fa-ebay" title="Ebay Price"></i>
                  &nbsp;Ebay: {card.card_prices[0].ebay_price}
                  <i className="fas fa-dollar-sign"></i>
                </Typography>
                <Typography variant="body2" sx={classes.cardSellerStyles}>
                  <i className="fab fa-amazon" title="Amazon Price"></i>
                  &nbsp;Amazon: {card.card_prices[0].amazon_price}
                  <i className="fas fa-dollar-sign"></i>
                </Typography>
              </Paper>
            </CardContent>
          </Card>
        ) : (
          <Loader />
        )}
      </Paper>
    </Paper>
  );
};

export default CardsMoreDetail;

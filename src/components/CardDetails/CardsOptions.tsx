import { SyntheticEvent, useState } from "react";
import {
  Paper,
  Card,
  CardContent,
  InputLabel,
  Input,
  MenuItem,
  InputAdornment,
  IconButton,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import {
  mainDeckTypes,
  extraDeckTypes,
  monsterCardsRaces,
  spellCardsRaces,
  trapCardsRaces,
  monsterCardsAttribute,
  monsterCardsLevelRank,
  monsterCardsLink,
} from "./CardsFilter";
import Selector from "../../utils/Selector";
import { ICardOptions } from "../../models/ICardOptions";

const classes = {
  cardsOptionsWrapperStyles: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
  },
  cardsOptionsHeaderStyles: {
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "#fff",
    textAlign: "center",
    fontSize: "20px",
    marginBottom: "8px",
  },
  cardsOptionsContentStyles: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "96px 96px 96px 96px 96px 100px",
    justifyItems: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    height: "calc(100vh - 145px)",
    paddingBottom: "0!important",
    paddingTop: "0!important",
    overflowY: "auto",
  },
  nameSearcherStyles: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    width: "86%",
    backgroundColor: "transparent",
    marginTop: "36px",
    marginBottom: "12px",
  },
  typeSelectorStyles: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  typeRadioStyles: {
    "& .MuiFormLabel-root": {
      color: "#fff",
    },
  },
};

const CardsOptions = (props: ICardOptions) => {
  const handleSearchChange = (e: SyntheticEvent) => {
    let temp = e.target as HTMLInputElement;
    let v = temp.value;
    props.setCardsFilterName(v);
  };
  const [mainDeckType, setMainDeckType] = useState("");
  const handleMainDeckType = (e: SyntheticEvent) => {
    let temp = e.target as HTMLInputElement;
    let v = temp.value;
    if (v === "Spell Card" || v === "Trap Card" || v === "Skill Card") {
      setAttribute("");
      props.setCardsFilterAttribute("");
      setLevelRank("");
      props.setCardsFilterLevelRank("");
      setAtk("");
      props.setCardsFilterAtk("");
      setDef("");
      props.setCardsFilterDef("");
    }
    if (extraDeckType === "Link Monster") {
      setLink("");
      props.setCardsFilterLink("");
    }
    setMainDeckType(v);
    setExtraDeckType("");
    props.setCardsFilterRace("");
    props.setCardsFilterType(v);
  };
  const [extraDeckType, setExtraDeckType] = useState("");
  const handleExtraDeckType = (e: SyntheticEvent) => {
    let temp = e.target as HTMLInputElement;
    let v = temp.value;
    if (v === "Link Monster") {
      setLevelRank("");
      props.setCardsFilterLevelRank("");
      setDef("");
      props.setCardsFilterDef("");
    }
    if (extraDeckType === "Link Monster") {
      setLink("");
      props.setCardsFilterLink("");
    }
    setExtraDeckType(v);
    setMainDeckType("");
    props.setCardsFilterRace("");
    props.setCardsFilterType(v);
  };
  const [race, setRace] = useState("");
  const handleRace = (e: SyntheticEvent) => {
    let temp = e.target as HTMLInputElement;
    let v = temp.value;
    setRace(v);
    props.setCardsFilterRace(v);
  };
  const [attribute, setAttribute] = useState("");
  const handleAttribute = (e: SyntheticEvent) => {
    let temp = e.target as HTMLInputElement;
    let v = temp.value;
    setAttribute(v);
    props.setCardsFilterAttribute(v);
  };
  const [levelRank, setLevelRank] = useState("");
  const handleLevelRank = (e: SyntheticEvent) => {
    let temp = e.target as HTMLInputElement;
    let v = temp.value;
    setLevelRank(v);
    props.setCardsFilterLevelRank(v);
  };
  const [levelRankCompare, setLevelRankCompare] = useState(0);
  const handleLevelRankCompare = () => {
    setLevelRankCompare(levelRankCompare !== 1 ? levelRankCompare + 1 : -1);
    props.setCardsFilterLevelRankCompare(
      levelRankCompare === 1 ? "lte" : levelRankCompare === 0 ? "gte" : ""
    );
  };
  const [link, setLink] = useState("");
  const handleLink = (e: SyntheticEvent) => {
    let temp = e.target as HTMLInputElement;
    let v = temp.value;
    setLink(v);
    props.setCardsFilterLink(v);
  };
  const [atk, setAtk] = useState("");
  const handleAtk = (e: SyntheticEvent) => {
    let temp = e.target as HTMLInputElement;
    let v = temp.value;
    setAtk(v);
    props.setCardsFilterAtk(v);
  };
  const [atkCompare, setAtkCompare] = useState(0);
  const handleAtkCompare = () => {
    setAtkCompare(atkCompare !== 1 ? atkCompare + 1 : -1);
    props.setCardsFilterAtkCompare(
      atkCompare === 1 ? "lte" : atkCompare === 0 ? "gte" : ""
    );
  };
  const [def, setDef] = useState("");
  const handleDef = (e: SyntheticEvent) => {
    let temp = e.target as HTMLInputElement;
    let v = temp.value;
    setDef(v);
    props.setCardsFilterDef(v);
  };
  const [defCompare, setDefCompare] = useState(0);
  const handleDefCompare = () => {
    setDefCompare(defCompare !== 1 ? defCompare + 1 : -1);
    props.setCardsFilterDefCompare(
      defCompare === 1 ? "lte" : defCompare === -1 ? "gte" : ""
    );
  };
  const [sort, setSort] = useState("name");
  const handleSort = (e: SyntheticEvent) => {
    let temp = e.target as HTMLInputElement;
    let v = temp.value;
    setSort(v);
    props.setCardsFilterSort(v);
  };
  return (
    <Card sx={classes.cardsOptionsWrapperStyles}>
      <Paper sx={classes.cardsOptionsHeaderStyles} square variant="outlined">
        Cards Options
      </Paper>
      <CardContent sx={classes.cardsOptionsContentStyles}>
        <Paper sx={classes.nameSearcherStyles}>
          <InputLabel>Name</InputLabel>
          <Input onChange={handleSearchChange}></Input>
        </Paper>
        <FormControl sx={classes.typeSelectorStyles}>
          <Selector
            id="select-main-deck-type"
            select={true}
            label="Main Deck Type"
            value={mainDeckType}
            onChange={handleMainDeckType}
          >
            {mainDeckTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Selector>
          <Selector
            id="select-extra-deck-type"
            select={true}
            label="Extra Deck Type"
            value={extraDeckType}
            onChange={handleExtraDeckType}
          >
            {extraDeckTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Selector>
        </FormControl>
        <FormControl sx={classes.typeSelectorStyles}>
          <Selector
            id="select-cards-race"
            select={true}
            disabled={mainDeckType === "" && extraDeckType === ""}
            label="Race"
            value={race}
            onChange={handleRace}
          >
            {mainDeckType === "Spell Card"
              ? spellCardsRaces.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))
              : mainDeckType === "Trap Card"
              ? trapCardsRaces.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))
              : monsterCardsRaces.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
          </Selector>
          <Selector
            id="select-monster-attribute"
            select={true}
            disabled={
              mainDeckType === "Spell Card" ||
              mainDeckType === "Trap Card" ||
              mainDeckType === "Skill Card" ||
              (mainDeckType === "" && extraDeckType === "")
            }
            label="Attribute"
            value={attribute}
            onChange={handleAttribute}
          >
            {monsterCardsAttribute.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Selector>
        </FormControl>
        <FormControl sx={classes.typeSelectorStyles}>
          <Selector
            id="select-monster-level/rank"
            select={true}
            disabled={
              mainDeckType === "Spell Card" ||
              mainDeckType === "Trap Card" ||
              mainDeckType === "Skill Card" ||
              extraDeckType === "Link Monster" ||
              (mainDeckType === "" && extraDeckType === "")
            }
            label="Level / Rank"
            value={levelRank}
            onChange={handleLevelRank}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    onClick={handleLevelRankCompare}
                    disabled={
                      mainDeckType === "Spell Card" ||
                      mainDeckType === "Trap Card" ||
                      mainDeckType === "Skill Card" ||
                      extraDeckType === "Link Monster" ||
                      (mainDeckType === "" && extraDeckType === "")
                    }
                  >
                    {levelRankCompare === 1 ? (
                      <TrendingUpRoundedIcon />
                    ) : levelRankCompare === -1 ? (
                      <TrendingDownRoundedIcon />
                    ) : (
                      <ArrowRightAltRoundedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          >
            {monsterCardsLevelRank.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Selector>
          <Selector
            id="select-monster-link"
            select={true}
            disabled={extraDeckType !== "Link Monster"}
            label="Link"
            value={link}
            onChange={handleLink}
          >
            {monsterCardsLink.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Selector>
        </FormControl>
        <FormControl sx={classes.typeSelectorStyles}>
          <Selector
            id="select-monster-ATK"
            select={false}
            disabled={
              mainDeckType === "Spell Card" ||
              mainDeckType === "Trap Card" ||
              mainDeckType === "Skill Card" ||
              (mainDeckType === "" && extraDeckType === "")
            }
            label="ATK"
            type="number"
            value={atk}
            onChange={handleAtk}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    onClick={handleAtkCompare}
                    disabled={
                      mainDeckType === "Spell Card" ||
                      mainDeckType === "Trap Card" ||
                      mainDeckType === "Skill Card" ||
                      (mainDeckType === "" && extraDeckType === "")
                    }
                  >
                    {atkCompare === 1 ? (
                      <TrendingUpRoundedIcon />
                    ) : atkCompare === -1 ? (
                      <TrendingDownRoundedIcon />
                    ) : (
                      <ArrowRightAltRoundedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Selector
            id="select-monster-DEF"
            select={false}
            disabled={
              mainDeckType === "Spell Card" ||
              mainDeckType === "Trap Card" ||
              mainDeckType === "Skill Card" ||
              extraDeckType === "Link Monster" ||
              (mainDeckType === "" && extraDeckType === "")
            }
            label="DEF"
            type="number"
            value={def}
            onChange={handleDef}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    onClick={handleDefCompare}
                    disabled={
                      mainDeckType === "Spell Card" ||
                      mainDeckType === "Trap Card" ||
                      mainDeckType === "Skill Card" ||
                      extraDeckType === "Link Monster" ||
                      (mainDeckType === "" && extraDeckType === "")
                    }
                  >
                    {defCompare === 1 ? (
                      <TrendingUpRoundedIcon />
                    ) : defCompare === -1 ? (
                      <TrendingDownRoundedIcon />
                    ) : (
                      <ArrowRightAltRoundedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl component="fieldset" sx={classes.typeRadioStyles}>
          <FormLabel component="legend">Sort by</FormLabel>
          <RadioGroup
            name="Sort"
            value={sort}
            onChange={handleSort}
            row
            style={{ justifyContent: "center" }}
          >
            <FormControlLabel
              value="name"
              label="Name"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              value="type"
              label="Type"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              value="level"
              label="Level"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              value="atk"
              label="ATK"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              value="def"
              label="DEF"
              control={<Radio color="primary" />}
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
};
export default CardsOptions;

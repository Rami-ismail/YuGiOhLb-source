const cardsListWrapperStyles = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  backgroundColor: "transparent",
  overflow: "hidden",
};

const cardStyles = {
  width: "103px",
  height: "150px",
  marginRight: "0",
  "&:hover": {
    cursor: "pointer",
  },
  zIndex: 1,
};

const headerStyles = {
  backgroundColor: "rgba(0,0,0,0.7)",
  color: "#fff",
  textAlign: "center",
  fontSize: "20px",
  marginBottom: "8px",
};

const cardsWrapperStyles = {
  backgroundColor: "transparent",
  overflow: "hidden",
  width: "fit-content",
  height: "fit-content"
};

const cardWrapperStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  flex: '1 1 25%',
  width: "fit-content",
};

const banListStyles = {
  width: "36px",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 2, // Ensure the banlist image is above the card image
};
export const classes = {
  cardsListWrapperStyles,
  cardStyles,
  headerStyles,
  cardsWrapperStyles,
  cardWrapperStyles,
  banListStyles,
};

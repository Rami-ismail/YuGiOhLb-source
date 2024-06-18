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

const pageWrapper = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "64px 1fr",
  width: "100vw",
  height: "100vh",
  backgroundColor: "transparent",
  overflow: "auto",
};

const contentWrapper = {
  display: "flex",
  backgroundColor: "transparent",
  marginTop: "36px",
  marginBottom: "36px",
  overflow: "auto",
};

const content = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  overflow: "auto",
  backgroundColor: "transparent",
  // [theme.breakpoints.down("sm")]: {
  //   flexDirection: "column",
  //   alignItems: "center",
  //   height: "max-content",
  // },
};

const loaderStyles = {
  width: "100%",
  height: "100%",
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardImageWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "transparent",
  minWidth: "400px",
  height: "600px",
  overflow: "auto",
  // [theme.breakpoints.down("sm")]: {
  //   marginBottom: "36px",
  // },
};

const cardImageStyles = {
  width: "343px",
  height: "500px",
  backgroundColor: "transparent",
};

const cardInfoStyles = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows:
    "min-content min-content min-content min-content min-content",
  gridRowGap: "12px",
  width: "40vw",
  minWidth: "400px",
  padding: "0",
  backgroundColor: "transparent",
};

const buttonGroupStyles = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "transparent",
  width: "100%",
  marginTop: "16px",
  marginBottom: "12px",
};

const limitedButtonStyles = {
  backgroundColor: "#e74c3c",
};

const cardNameLevelStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0.3)",
  wordWrap: "break-word",
  wordBreak: "break-word",
};

const cardLevelStyles = {
  display: "flex",
  backgroundColor: "transparent",
  whiteSpace: "nowrap",
};

const cardImageTypeIDAttributeStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0.3)",
};

const cardImageTypeIDStyles = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
};

const cardATKDEFScaleLinkStyles = {
  backgroundColor: "rgba(0,0,0,0.3)",
};

const cardEffectStyles = {
  backgroundColor: "rgba(0,0,0,0.3)",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  wordWrap: "break-word",
};

const cardPricesStyles = {
  backgroundColor: "rgba(0,0,0,0.3)",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
};

const cardSellerStyles = {
  margin: "8px 12px 8px 12px",
};

const circularProgress = {
  justifySelf: 'center',
};

export const classes = {
  cardsListWrapperStyles,
  cardStyles,
  headerStyles,
  cardsWrapperStyles,
  cardWrapperStyles,
  banListStyles,
  pageWrapper,
  contentWrapper,
  content,
  loaderStyles,
  cardImageWrapper,
  cardImageStyles,
  cardInfoStyles,
  buttonGroupStyles,
  limitedButtonStyles,
  cardNameLevelStyles,
  cardLevelStyles,
  cardImageTypeIDAttributeStyles,
  cardImageTypeIDStyles,
  cardATKDEFScaleLinkStyles,
  cardEffectStyles,
  cardPricesStyles,
  cardSellerStyles,
  circularProgress,
};

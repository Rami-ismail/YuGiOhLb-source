import { AppBar, Toolbar, Typography, Paper, IconButton } from "@mui/material";
import MillenniumPuzzleIcon from "./assets/images/MillenniumPuzzleIcon.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";

const classes = {
  titleStyles: {
    marginLeft: "4px",
    cursor: "pointer",
  },
  logoStyles: {
    width: "48px",
    cursor: "pointer",
  },
  facebookIconStyles: {
    fontSize: "32px",
  },
  githubIconStyles: {
    fontSize: "28px",
  },
  instagramIconStyles: {
    fontSize: "32px",
  },
};

const Header = () => {
  const navigate = useNavigate();
  const handleGithubClick = () => {
    window.open("https://github.com/Rami-ismail/YuGiOhLb-source");
  };
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar style={{ paddingRight: "12px" }}>
        <Typography
          variant="h6"
          style={{ fontFamily: "Orbitron" }}
          sx={classes.titleStyles}
          onClick={() => navigate("/")}
        >
          YuGiOhLb
        </Typography>
        <Paper
          component="img"
          src={MillenniumPuzzleIcon}
          sx={classes.logoStyles}
          elevation={0}
          square
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
        />
        <Typography style={{ flexGrow: "1" }} />
        <IconButton onClick={handleGithubClick}>
          <GitHubIcon sx={classes.githubIconStyles} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

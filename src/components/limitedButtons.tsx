import { Button } from "@mui/material";
import { green, lime, orange, red } from "@mui/material/colors";
import NoEncryptionOutlinedIcon from "@mui/icons-material/NoEncryptionOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";

const UnlimitedButton = {
  root: {
    color: "#fff",
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
};

const SemiLimitedButton = {
  root: {
    color: "#fff",
    backgroundColor: lime[700],
    "&:hover": {
      backgroundColor: lime[900],
    },
  },
};

const LimitedButton = {
  root: {
    color: "#fff",
    backgroundColor: orange[700],
    "&:hover": {
      backgroundColor: orange[900],
    },
  },
};

const BanButton = {
  root: {
    color: "#fff",
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  },
};

const handleTCGClick = () => {
  window.open("https://db.ygoprodeck.com/banlist/?list=TCG");
};
const handleOCGClick = () => {
  window.open("https://db.ygoprodeck.com/banlist/?list=OCG");
};

const limitedButtons = (banlist_info: any) => {
  let tcg, ocg, temp;
  if (banlist_info) {
    temp = banlist_info.ban_tcg;
    switch (temp) {
      case "Banned":
        tcg = (
          <Button
            variant="contained"
            startIcon={<BlockOutlinedIcon />}
            onClick={() => handleTCGClick}
            sx={BanButton}
          >
            TCG Banned
          </Button>
        );
        break;
      case "Limited":
        tcg = (
          <Button
            variant="contained"
            startIcon={<LockOutlinedIcon />}
            onClick={() => handleTCGClick}
            sx={LimitedButton}
          >
            TCG Limited
          </Button>
        );
        break;
      case "Semi-Limited":
        tcg = (
          <Button
            variant="contained"
            startIcon={<LockOpenOutlinedIcon />}
            onClick={() => handleTCGClick}
            sx={SemiLimitedButton}
          >
            TCG Semi-Limited
          </Button>
        );
        break;
      default:
        tcg = (
          <Button
            variant="contained"
            startIcon={<NoEncryptionOutlinedIcon />}
            onClick={() => handleTCGClick}
            sx={UnlimitedButton}
          >
            TCG Unlimited
          </Button>
        );
        break;
    }
    temp = banlist_info.ban_ocg;
    switch (temp) {
      case "Banned":
        ocg = (
          <Button
            variant="contained"
            startIcon={<BlockOutlinedIcon />}
            onClick={() => handleOCGClick}
            sx={BanButton}
          >
            OCG Banned
          </Button>
        );
        break;
      case "Limited":
        ocg = (
          <Button
            variant="contained"
            startIcon={<LockOutlinedIcon />}
            onClick={() => handleOCGClick}
            sx={LimitedButton}
          >
            OCG Limited
          </Button>
        );
        break;
      case "Semi-Limited":
        ocg = (
          <Button
            variant="contained"
            startIcon={<LockOpenOutlinedIcon />}
            onClick={() => handleOCGClick}
            sx={SemiLimitedButton}
          >
            OCG Semi-Limited
          </Button>
        );
        break;
      default:
        ocg = (
          <Button
            variant="contained"
            startIcon={<NoEncryptionOutlinedIcon />}
            onClick={() => handleOCGClick}
            sx={UnlimitedButton}
          >
            OCG Unlimited
          </Button>
        );
        break;
    }
  } else {
    tcg = (
      <Button
        variant="contained"
        startIcon={<NoEncryptionOutlinedIcon />}
        onClick={() => handleTCGClick()}
        sx={UnlimitedButton}
      >
        TCG Unlimited
      </Button>
    );
    ocg = (
      <Button
        variant="contained"
        startIcon={<NoEncryptionOutlinedIcon />}
        onClick={() => handleOCGClick()}
        sx={UnlimitedButton}
      >
        OCG Unlimited
      </Button>
    );
  }
  return (
    <>
      {tcg}
      {ocg}
    </>
  );
};

export default limitedButtons;

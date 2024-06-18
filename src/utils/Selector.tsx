import { TextField } from "@mui/material";
import { ISelector } from "../models/ISelector";

const classes = {
  root: {
    "& label.Mui-focused": {
      color: "#fff",
    },
    width: "43%",
    marginTop: "24px",
    marginBottom: "24px",
  },
};

const Selector = ({
  id,
  select,
  disabled,
  type,
  label,
  value,
  onChange,
  InputProps,
  children,
}: ISelector) => {
  return (
    <TextField
      id={id}
      select={select}
      disabled={disabled}
      type={type}
      label={label}
      value={value}
      onChange={onChange}
      sx={classes.root}
      InputProps={InputProps}
    >
      {children}
    </TextField>
  );
};

export default Selector;

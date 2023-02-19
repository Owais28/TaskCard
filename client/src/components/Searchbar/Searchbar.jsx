import {
  Box,
  Divider,
  FilledInput,
  Icon,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { motion } from "framer-motion";
import React from "react";
import { IoPintOutline, IoSearch } from "react-icons/io5";

const $Input = styled(InputBase)(({ theme }) => ({
  backgroundColor: grey[100],
  borderRadius: 3,
  outline: "1px solid " + grey[200],
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  paddingRight: theme.spacing(1.5),
  paddingLeft: theme.spacing(1.5),
  fontSize: "16px",
  color: grey[800],
}));
export const Searchbar = () => {
  return (
    <motion.div>
      <$Input
        fullWidth
        endAdornment={
          <IoSearch
            style={{ marginLeft: 10 }}
            cursor={false}
            fontSize={20}
            color={grey[800]}
          />
        }
      />
    </motion.div>
  );
};

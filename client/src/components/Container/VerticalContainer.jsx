import React from "react";
import { motion } from "framer-motion";
import { Box, Stack, styled } from "@mui/material";

const $Stack = styled(Stack)(({ theme }) => ({
  width: "100%",
  rowGap: theme.spacing(2),
  paddingTop: theme.spacing(2),
  alignItems: "center",
  display: "grid",
  paddingRight: 15,
  paddingLeft: 15,
}));

export const VerticalContainer = (props) => {
  return (
    <motion.div layout>
      <$Stack>{props.children}</$Stack>
    </motion.div>
  );
};

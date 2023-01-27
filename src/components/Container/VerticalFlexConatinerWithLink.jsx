import { Box } from "@mui/material";
import { ViewTitle } from "../TitleBar/ViewTitle";
import { motion } from "framer-motion";

export const VerticalFlexConatinerWithLink = ({
  children,
  linkText = "See All",
  containerTitle,
  link = "/",
  ...props
}) => {
  return (
    <Box width={"100%"}>
      <ViewTitle title={containerTitle} link={link} />
      <motion.div layout>
        <Box
          display={"grid"}
          // flexDirection={'column'}
          // flex={1}
          overflow="hidden"
          width={"100%"}
          // height={'450px'}
          gridTemplateColumns={"1fr"}
          rowGap={2}
          paddingTop={2}
          paddingBottom={3}
          paddingX={"18px"}
          className={"vertical_flex_container"}
        >
          {children}
        </Box>
      </motion.div>
    </Box>
  );
};

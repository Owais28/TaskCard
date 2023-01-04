import React from "react";
import { Box } from "@mui/material";
import { ViewTitle } from "../TitleBar/ViewTitle";

export const HorizontalFlexContaierWithLink = ({ children,linkText='See All',containerTitle,link='/' }) => {
  return (
    <Box width={'100%'}>
      <ViewTitle title={containerTitle} link={link}/>
      <Box
        display={"flex"}
        flex={1}
        overflow="scroll"
        width={'100%'}
        // height={'450px'}
        paddingTop={2}
        paddingBottom={3}
        paddingX={"18px"}
        className={"horizontal_flex_container"}
        sx={
          {
            '& > *' : {
              marginRight : 3
            }
          }
        }
      >
        {children}
        </Box>
    </Box>
  );
};

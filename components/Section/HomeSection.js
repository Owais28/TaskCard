import { Box } from "@mui/system";
import React from "react";
import { MainCard } from "../Card/Maincard";
import { MainFeed } from "../Feed/MainFeed";
// import { BottomMenu } from "../Navigation/BottomMenu";
import { PrimaryAppBar } from "../PrimaryAppBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HorizontalFlexContaierWithLink } from "../Container/HorizontalFlexContaierWithLink";
import { VerticalFlexConatinerWithLink } from "../Container/VerticalFlexConatinerWithLink";
import { Task } from "../Task/Task";

export const HomeSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "412px",
        position: "relative",
        top: 0,
        minHeight: "100vh",
        maxHeight: "100vh",
        overflow: "scroll",
        fontFamily: "Rubik",
        paddingBottom: "75px",
      }}
    >
      <PrimaryAppBar />
      {/* <MainFeed> */}
      <HorizontalFlexContaierWithLink
        containerTitle={"Recent Project"}
        link={"/"}
      >
        <MainCard
          priority={1}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam ut rerum illum natus placeat exercitationem assumenda odit nostrum quos. Vel quaerat velit dolore perferendis voluptatum possimus illum, unde reprehenderit."
          }
        />
        <MainCard
          priority={2}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam ut rerum illum natus placeat exercitationem assumenda odit nostrum quos. Vel quaerat velit dolore perferendis voluptatum possimus illum, unde reprehenderit."
          }
        />
        <MainCard
          priority={3}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam ut rerum illum natus placeat exercitationem assumenda odit nostrum quos. Vel quaerat velit dolore perferendis voluptatum possimus illum, unde reprehenderit."
          }
        />
        <MainCard
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam ut rerum illum natus placeat exercitationem assumenda odit nostrum quos. Vel quaerat velit dolore perferendis voluptatum possimus illum, unde reprehenderit."
          }
        />
      </HorizontalFlexContaierWithLink>
      <VerticalFlexConatinerWithLink link="/" containerTitle={'Today Task'}>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </VerticalFlexConatinerWithLink>
      {/* </MainFeed> */}
    </Box>
  );
};

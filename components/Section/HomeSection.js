import { Box } from "@mui/system";
import React from "react";
import { MainCard } from "../Card/Maincard";
import { MainFeed } from "../Feed/MainFeed";
// import { BottomMenu } from "../Navigation/BottomMenu";
import { PrimaryAppBar } from "../PrinaryAppBar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const HomeSection = () => {
  return <Box
  sx={{
    width: '100%',
    maxWidth: '412px',
    position: 'relative',
    top: 0,
    minHeight: '100vh',
    overflow: 'hidden',
    fontFamily: 'Rubik',
    paddingBottom: '75px'

  }}>
    <PrimaryAppBar/>
    <MainFeed>
      <MainCard priority={1} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam ut rerum illum natus placeat exercitationem assumenda odit nostrum quos. Vel quaerat velit dolore perferendis voluptatum possimus illum, unde reprehenderit.'}/>
      <MainCard priority={2} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam ut rerum illum natus placeat exercitationem assumenda odit nostrum quos. Vel quaerat velit dolore perferendis voluptatum possimus illum, unde reprehenderit.'}/>
      <MainCard priority={3} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam ut rerum illum natus placeat exercitationem assumenda odit nostrum quos. Vel quaerat velit dolore perferendis voluptatum possimus illum, unde reprehenderit.'}/>
      <MainCard description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam ut rerum illum natus placeat exercitationem assumenda odit nostrum quos. Vel quaerat velit dolore perferendis voluptatum possimus illum, unde reprehenderit.'}/>
    </MainFeed>
  </Box>
}
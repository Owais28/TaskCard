import { Box, Paper, Button } from "@mui/material";
import {
  AddCircleRounded,
  HomeRounded,
  NotificationsRounded,
  SettingsRounded,
} from "@mui/icons-material";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import { useState } from "react";
import { BottomButton } from "../Button/BottomButton";
// import Link from "next/link";
import { useSwiper } from "swiper/react";

const styles = {
  root: {
    color: "green",
    "&$selected": {
      color: "red",
    },
  },
  selected: {},
};

export const BottomMenu = () => {
  const swiper = useSwiper();

  // state that keep track of selected section
  const [selectedButton, setSelectedButton] = useState({
    home: true,
    task: false,
    newTaks: false,
    notifications: false,
    settings: false,
  });

  // console.log(selectedButton)
  // console.log(swiper)

  // function that run un SlideChange event
  swiper.on("slideChange", (swiper) => handleSlideChange(swiper.activeIndex));

  // function to handle slide change
  const handleSlideChange = (activeSlide) => {
    handleClick(activeSlide + 1);
  };

  // Reset title upon every slide
  const setTitle = (title) => {
    document.title = "TaskCard | " + title;
  };

  // function that change color of buttons on the basis of active active slide
  const handleClick = (choice) => {
    switch (choice) {
      case 1:
        setSelectedButton({
          home: true,
          task: false,
          newTaks: false,
          notifications: false,
          settings: false,
        });
        swiper.slideTo(0);
        setTitle("Home");
        break;
      case 2:
        setSelectedButton({
          home: false,
          task: true,
          newTaks: false,
          notifications: false,
          settings: false,
        });
        swiper.slideTo(1);
        setTitle("Project");
        break;
        // case 3:
        //   setSelectedButton({
        //     home: false,
        //     task: false,
        //     newTaks: true,
        //     notifications: false,
        //     settings: false
        //   });

        break;
      case 3:
        setSelectedButton({
          home: false,
          task: false,
          newTaks: false,
          notifications: true,
          settings: false,
        });
        swiper.slideTo(2);
        setTitle("Messages");
        break;
      case 4:
        setSelectedButton({
          home: false,
          task: false,
          newTaks: false,
          notifications: false,
          settings: true,
        });
        swiper.slideTo(3);
        setTitle("Setting");
        break;
      default:
        break;
    }
  };

  return (
    <Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 20,
        }}
        elevation={3}
      >
        {/* Home Button */}
        <Box onClick={(event) => handleClick(1)} flex={1}>
          <BottomButton
            selected={selectedButton.home}
            color="notSelected"
            colorIfSelected="black"
          >
            <HomeRounded fontSize="small" />
          </BottomButton>
        </Box>

        {/* Project Biutton */}
        <Box onClick={(event) => handleClick(2)} flex={1}>
          <BottomButton
            selected={selectedButton.task}
            color="notSelected"
            colorIfSelected="black"
          >
            <FormatListBulletedRoundedIcon fontSize="small" />
          </BottomButton>
        </Box>

        {/* <Box onSelect={(event) => handleClick(3)}>
            <BottomButton selected={selectedButton} py={0} color='blue' colorIfSelected="blue">
            </BottomButton>
          </Box> */}

        {/* Middle Button */}
        <Box
          sx={{
            flex: 1,
            height: "100%",
          }}
          // onClick={(event) =>
          //   handleClick(3)}
        >
          <Button
            color="blue"
            sx={{
              flex: 1,
              width: "100%",
              height: "100%",
              borderRadius: 0,
            }}
          >
            <AddCircleRounded fontSize="large" />
          </Button>
        </Box>

        {/* Messages Button */}
        <Box onClick={(event) => handleClick(3)} flex={1}>
          {/* <Link href={'/make'}> */}
          <BottomButton
            selected={selectedButton.notifications}
            color="notSelected"
            colorIfSelected="black"
          >
            <NotificationsRounded fontSize="small" />
          </BottomButton>
          {/* </Link> */}
        </Box>

        {/* Setting Button */}
        <Box onClick={(event) => handleClick(4)} flex={1}>
          <BottomButton
            selected={selectedButton.settings}
            color="notSelected"
            colorIfSelected="black"
          >
            <SettingsRounded fontSize="small" />
          </BottomButton>
        </Box>
      </Paper>
    </Box>
  );
};

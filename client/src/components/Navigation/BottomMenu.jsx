import { useReducer, useState } from "react";
import {
  Box,
  Paper,
  Button,
  Typography,
  Modal,
  Fade,
  Stack,
  Icon,
} from "@mui/material";

import {
  AddCircleRounded,
  HomeRounded,
  NotificationsRounded,
  SettingsRounded,
} from "@mui/icons-material";

import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import { BottomButton } from "../Button/BottomButton";
import { useSwiper } from "swiper/react";
import TaskDrawer from "../Drawer/TaskDrawer";
import MyProjectDrawer from "../Drawer/ProjectDrawer";
import styled from "@emotion/styled";

// this is button is used in <BottomMenu>
const MyButton = ({ handleClick, buttonStatus, icon, position }) => {
  return (
    <Box onClick={(event) => handleClick(position)} flex={1}>
      <BottomButton
        selected={buttonStatus}
        color="notSelected"
        colorIfSelected="black"
      >
        {icon}
      </BottomButton>
    </Box>
  );
};

// wrapper around <Paper> component
const $Paper = styled(Paper)(({ theme }) => ({
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
}));

const $Modal = styled(Modal)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  bottom: "100%",
  transform: "translate(-50%, -50%)",
  width: "100vw",
  height: "100vh",
  bgcolor: "transparent",
  boxShadow: "none",
}));

// BottomMenu
export const BottomMenu = (props) => {
  /**
   * this function is used to generate new state object based on user click
   * and it make sure that user's last click become invalid
   * @param {string} clickText
   * @param {{ home : boolean,
   *           projects: boolean,
   *           inbox: boolean,
   *           settings : boolean
   * }} oldState
   *
   * @returns {{ home : boolean,
   *            projects: boolean,
   *            inbox: boolean,
   *            settings : boolean
   * }} updated object
   */
  const invalidateLastClick = (clickText, oldState) => {
    const newState = {};
    for (const key in oldState) {
      if (key === clickText) {
        newState[key] = true;
        continue;
      }
      newState[key] = false;
    }
    return newState;
  };

  // reducer
  const reducer = (state, action) => {
    switch (action.buttonText) {
      case "home":
        return invalidateLastClick("home", state);
      case "projects":
        return invalidateLastClick("projects", state);
      case "inbox":
        return invalidateLastClick("inbox", state);
      case "settings":
        return invalidateLastClick("settings", state);
      default:
        new Error("unknow click");
    }
  };

  // state that keep track of selected section from the menu
  const [selectedButton, dispatch] = useReducer(reducer, {
    home: true,
    projects: false,
    inbox: false,
    settings: false,
  });

  const swiper = useSwiper();

  // state for modal
  const [open, setOpen] = useState(false);
  //functions to handle modal appearance
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // state for drawers
  const [projectDrawer, setProjectDrawer] = useState(false);
  const [taskDrawer, setTaskDrawer] = useState(false);

  // function to toggle <ProjectDrawer>
  const toggleProjectDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(false);
    setProjectDrawer(open);
  };

  // function to toggle <TaskDrawer>
  const toggleTaskDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(false);
    setTaskDrawer(open);
  };

  // function that run on SlideChange event
  swiper.on("slideChange", (swiper) => handleSlideChange(swiper.activeIndex));

  // function to handle slide change
  const handleSlideChange = (activeSlide) => {
    handleClick(activeSlide + 1);
  };

  // update document's title on every slide change
  const setTitle = (title) => {
    document.title = "TaskCard → " + title;
  };

  // function that do the following tasks:
  // 1. it dispatch actions on the basis of active
  // slide which in turn change color of <MyButton>
  // 2. call the function that changes slide
  // 3. call the function that changes document's title
  const handleClick = (choice) => {
    switch (choice) {
      case 1:
        dispatch({ buttonText: "home" });
        swiper.slideTo(0);
        setTitle("Home 🏡");
        break;
      case 2:
        dispatch({ buttonText: "projects" });
        swiper.slideTo(1);
        setTitle("Projects 📑");
        break;
      case 3:
        dispatch({ buttonText: "inbox" });
        swiper.slideTo(2);
        setTitle("Inbox 💬");
        break;
      case 4:
        dispatch({ buttonText: "settings" });
        swiper.slideTo(3);
        setTitle("Settings ⚙️");
        break;
      default:
        break;
    }
  };

  return (
    <Box position={"relative"}>
      <$Paper elevation={3}>
        {/* Home Button */}
        <MyButton
          buttonStatus={selectedButton.home}
          handleClick={handleClick}
          icon={<HomeRounded fontSize="small" />}
          position={1}
        />

        {/* Project Button */}
        <MyButton
          buttonStatus={selectedButton.projects}
          icon={<FormatListBulletedRoundedIcon fontSize="small" />}
          handleClick={handleClick}
          position={2}
        />

        {/* Middle Button */}
        <Box
          sx={{
            flex: 1,
            height: "100%",
          }}
        >
          <Button
            color="blue"
            sx={{
              flex: 1,
              width: "100%",
              height: "100%",
              borderRadius: 0,
            }}
            onClick={handleOpen}
          >
            <AddCircleRounded fontSize="large" />
          </Button>
          <$Modal closeAfterTransition open={open} onClose={handleClose}>
            <Fade in={open}>
              <Box
                position={"absolute"}
                top={"40vh"}
                left={"25%"}
                bgcolor={"white"}
                width={"55%"}
                borderRadius={3}
                p={2}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  onClick={toggleProjectDrawer(true)}
                >
                  <Typography color={"rgb(0,0,0,0.7)"} variant="body2">
                    Project
                  </Typography>
                  <Icon>
                    <ListAltRoundedIcon
                      fontSize="small"
                      sx={{ color: "rgb(0,0,0,0.7)" }}
                    />
                  </Icon>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  mt={1}
                  onClick={toggleTaskDrawer(true)}
                >
                  <Typography color={"rgb(0,0,0,0.7)"} variant="body2">
                    Task
                  </Typography>
                  <Icon>
                    <FormatListBulletedRoundedIcon
                      fontSize="small"
                      sx={{ color: "rgb(0,0,0,0.7)" }}
                    />
                  </Icon>
                </Stack>
              </Box>
            </Fade>
          </$Modal>
        </Box>

        {/* Messages Button */}
        <MyButton
          buttonStatus={selectedButton.inbox}
          handleClick={handleClick}
          icon={<NotificationsRounded fontSize="small" />}
          position={3}
        />
        {/* Setting Button */}
        <MyButton
          handleClick={handleClick}
          buttonStatus={selectedButton.settings}
          icon={<SettingsRounded fontSize="small" />}
          position={4}
        />
      </$Paper>

      {/* Project Drawer */}
      <MyProjectDrawer
        isOpen={projectDrawer}
        toggleDrawer={toggleProjectDrawer}
      />
      {/* Task Drawer */}
      <TaskDrawer isOpen={taskDrawer} toggleDrawer={toggleTaskDrawer} />
    </Box>
  );
};

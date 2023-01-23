import { useState } from "react";
import {
  Box,
  Paper,
  Button,
  SwipeableDrawer,
  Typography,
  Modal,
  Fade,
  Stack,
  Icon,
  Divider,
  styled,
  FormControl,
  InputBase,
} from "@mui/material";
import {
  AddCircleRounded,
  ContactSupport,
  HomeRounded,
  NotificationsRounded,
  SettingsRounded,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
// import { AiOutlineProject } from "react-icons/ai";

import { BottomButton } from "../Button/BottomButton";
import { useSwiper } from "swiper/react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  bottom: "100%",
  transform: "translate(-50%, -50%)",
  width: "100vw",
  height: "100vh",
  bgcolor: "transparent",
  // border: "1px solid whitesmoke",
  boxShadow: "none",
  // borderRadius: "lg",
  // p: 4,
};

export const BottomMenu = () => {
  const swiper = useSwiper();

  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
  }));

  // state that keep track of selected section
  const [selectedButton, setSelectedButton] = useState({
    home: true,
    task: false,
    newTaks: false,
    notifications: false,
    settings: false,
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [projectDrawer, setProjectDrawer] = useState(false);

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

  // function that change color of buttons on the basis of active slide
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

  // const [anchorEl, setAnchorEl] = useState(null);
  // const [open, setOpen] = useState(false);

  // const handlePopperClick = (event) => {
  //   setAnchorEl(anchorEl ? null : event.currentTarget);
  // };

  // const handlePopperClose = (event) => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  return (
    <Box position={"relative"}>
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
            onClick={handleOpen}
          >
            <AddCircleRounded fontSize="large" />
          </Button>
          {/* <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopperClose}
            placement="top"
            disablePortal={false}
            modifiers={[
              {
                name: "arrow",
                enabled: true,
              },
            ]}
            sx={{
              zIndex: 10,
            }}
          >
            <Stack p={2} borderRadius={"lg"} bgcolor={"red"} zIndex={10}>
              <Box>
                <Typography>Project</Typography>
              </Box>
              <Box>
                <Typography>Project</Typography>
              </Box>
            </Stack>
          </Popper> */}
          <Modal
            closeAfterTransition
            sx={style}
            open={open}
            onClose={handleClose}
            // aria-labelledby="modal-modal-title"
            // aria-describedby="modal-modal-description"
            // BackdropComponent={Backdrop}
            // BackdropProps={{
            //   timeout: 500,
            // }}
          >
            <Fade in={open}>
              <Box
                position={"absolute"}
                top={"40vh"}
                left={"25%"}
                bgcolor={"white"}
                width={"55%"}
                borderRadius={3}
                p={2}
                // boxShadow={"lg"}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  onClick={toggleProjectDrawer(true)}
                >
                  <Typography
                    color={"rgb(0,0,0,0.7)"}
                    variant="body2"
                    // fontSize={"13px"}
                    // fontFamily={"Rubik"}
                    // color={"rgb(0,0,0,0.6)"}
                  >
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
          </Modal>
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
      <SwipeableDrawer
        anchor="bottom"
        open={projectDrawer}
        onClose={toggleProjectDrawer(false)}
        onOpen={toggleProjectDrawer(true)}
        variant="temporary"
        ModalProps={{
          keepMounted: false,
        }}
        // swipeAreaWidth={57}
        sx={{ borderRadius: 2, backgroundColor: "transparent" }}
      >
        <Box p={2} borderRadius={1}>
          <Typography
            mb={2}
            mt={2}
            textAlign="center"
            fontFamily={"Rubik"}
            fontWeight={"bold"}
          >
            New Project
          </Typography>
          <Divider sx={{ color: "grey.50", bgcolor: "gray.50" }} />
          <Puller />
          <Stack gap={3} mt={2}>
            <InputBase
              sx={{
                flex: 1,
                bgcolor: "grey.50",
                p: 2,
                fontFamily: "Rubik",
                borderRadius: 2.5,
                "& ::placeholder": {
                  fontSize: "small",
                  fontFamily: "Rubik",
                },
              }}
              placeholder="Project Name"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <InputBase
              sx={{
                flex: 1,
                bgcolor: "grey.50",
                p: 2,
                borderRadius: 2.5,
                fontFamily: "Rubik",
                "& ::placeholder": {
                  fontSize: "small",
                  fontFamily: "Rubik",
                },
              }}
              placeholder="Priority"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{
                textDecorationStyle: "dotted",
                py: 1.5,
                borderRadius: 100,
                bgcolor: "black",
              }}
            >
              Create Project
            </Button>
          </Stack>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

import { useEffect } from "react";
import { HomeSection } from "../components/Section/HomeSection";
import { BottomMenu } from "../components/Navigation/BottomMenu";
// import { NewProject } from "../components/Section/NewProject";
import "swiper/css";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ThemeProvider, createTheme } from "@mui/material";
import { Box } from "@mui/material";
import { connect } from "react-redux";
import { setTitle } from "../utils";
import { ProjectSection } from "../components/Section/ProjectSection";
import { InboxSection } from "../components/Section/InboxSection";
import Calender from "react-calendar";

const theme = createTheme({
  palette: {
    blue: {
      main: "#1f78f0",
    },
    notSelected: {
      main: "#ccc",
    },
    black: {
      main: "rgb(0,0,0)",
    },
  },
});

function HomeWrapper({ setLoading }) {
  console.log("Page : Home");

  setTitle("Home 🏡");

  useEffect(() => {
    typeof setLoading === "function" && setLoading(false);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        top: 0,
      }}
    >
      <ThemeProvider theme={theme}>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          initialSlide={0}
          simulateTouch={false}
          allowTouchMove={false}
          zoom={false}
          // onSwiper={(swiper) => {
          // }}
        >
          <SwiperSlide virtualIndex={1}>
            <HomeSection />
          </SwiperSlide>
          <SwiperSlide virtualIndex={2}>
            {/* <NewProject /> */}
            <ProjectSection />
          </SwiperSlide>
          <SwiperSlide virtualIndex={3}>
            <InboxSection />
          </SwiperSlide>
          <SwiperSlide virtualIndex={4}>
            <HomeSection />
          </SwiperSlide>
          <BottomMenu />
        </Swiper>
      </ThemeProvider>
    </Box>
  );
}

// const mapState = (state) => ({
//   data: {
//     tasks: state.taskManager.tasks,
//     taskCount: state.taskManager.totalTasks,
//   },
// });

const mapDispatch = (dispatch) => ({
  setLoading: (loading) => dispatch.loading.setLoading(loading),
});

const Home = connect(null, mapDispatch)(HomeWrapper);
export default Home;

import { ThemeProvider, createTheme } from "@mui/material";
import { HomeSection } from "./components/Section/HomeSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BottomMenu } from "./components/Navigation/BottomMenu";
import { Box } from "@mui/system";
import { NewProject } from "./components/Section/NewProject";
import "./index.css";
import store from "./store/store";
import { connect } from "react-redux";

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

export default function App() {
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
          // modules={[Autoplay]}
          // autoplay={
          //   {
          //     delay: 1000
          //   }
          // }
          // loop={true}
          zoom={false}
          // onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => {
            // console.log(swiper)
            // setSwiper(swiper)
          }}
        >
          <SwiperSlide virtualIndex={1}>
            <HomeSection />
          </SwiperSlide>
          <SwiperSlide virtualIndex={2}>
            <NewProject />
          </SwiperSlide>
          <SwiperSlide virtualIndex={3}>
            <HomeSection />
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

// const mapDispatch = (dispatch) => ({
//   deleteTask: (taskId) => dispatch.taskManager.deleteTask(taskId),
// });

// const AppContainer = connect(mapState, mapDispatch)(App);
// export default AppContainer;
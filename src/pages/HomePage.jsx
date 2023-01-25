import { useEffect } from "react";
import { HomeSection } from "../components/Section/HomeSection";
import { BottomMenu } from "../components/Navigation/BottomMenu";
import { NewProject } from "../components/Section/NewProject";
import "swiper/css";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ThemeProvider, createTheme } from "@mui/material";
import { Box } from "@mui/material";
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

function HomeWrapper({ setLoading }) {
  // console.log(store.dispatch.project.newProject("My New Project"));
  // console.log(store);
  console.log("Page : Home");

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

const mapDispatch = (dispatch) => ({
  setLoading: (loading) => dispatch.loading.setLoading(loading),
});

const Home = connect(null, mapDispatch)(HomeWrapper);
export default Home;

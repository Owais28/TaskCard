import { ThemeProvider, createTheme } from "@mui/material";
import Head from "next/head";
import { HomeSection } from "../components/Section/HomeSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BottomMenu } from "../components/Navigation/BottomMenu";
import { Box } from "@mui/system";
import { NewProject } from "../components/Section/NewProject";

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

  // const window = new Window();
  // window.addEventListener("offline", (event) => onlineStatusAndRelod());

  // const onlineStatusAndRelod = () => {
  //   location.reload()
  // };

export default function Home() {
  // const [swiper, setSwiper] = React.useState<Swiper>()
  
  return (
    <Box
      sx={{
        position: "relative",
        top: 0,
      }}
    >
      <ThemeProvider theme={theme}>
        <Head>
          <title>TaskCard | Home</title>
          <meta name="description" content="A place to manage all your tasks" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="theme-color" content="#4a90e2" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        </Head>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          initialSlide={0}
          simulateTouch={false}
          allowTouchMove={false}
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

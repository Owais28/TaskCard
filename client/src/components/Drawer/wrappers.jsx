import {
  SwipeableDrawer,
  Box,
  Typography,
  Divider,
  Drawer,
  Stack,
  styled,
  Button,
  InputBase,
} from "@mui/material";
import { grey } from "@mui/material/colors";

// Wrappers
// custom Box wrapper
export const $Box = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "10px",
}));

// custom Drawer wrapper
export const $Drawer = styled(Drawer)(({ theme }) => ({
  borderRadius: 2,
  // backgroundColor: "transparent",
}));

// custom SwipeableDrawer wrapper
export const $SwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  borderRadius: 2,
  backgroundColor: "transparent",
}));

// custom Typography wrapper
export const $Text3 = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
  textAlign: "center",
  fontFamily: "Rubik",
  fontWeight: "bold",
}));

// custom Divider wrapper
export const $Divider = styled(Divider)(({ theme }) => ({
  color: grey[50],
  bgcolor: grey[50],
}));

// custom Stack wrapper
export const $Stack = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(3),
  gap: theme.spacing(3),
}));

// Puller
export const Puller = styled(Box)(({ theme }) => ({
  width: 50,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 10,
  left: "calc(50% - 25px)",
}));

// custom Button wrapper
export const $ButtonForDrawer = styled(Button)(({ theme }) => ({
  textDecorationStyle: "dotted",
  paddingTop: 8,
  paddingBottom: 8,
  borderRadius: 100,
}));

// custom Input primarily made for Drawer component
export const $InputForDrawer = styled(InputBase)(({ theme }) => ({
  flex: 1,
  backgroundColor: grey[50],
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  outline: "1px solid " + grey[200],
  fontFamily: "Rubik",
  "& ::placeholder": {
    fontSize: "small",
    fontFamily: "Rubik",
  },
}));

import { useEffect } from "react";
import { NavigationalAppBar } from "../components/NavigationalAppBar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Divider,
  InputAdornment,
  TextField,
  Typography,
  Box,
  Container,
  Link,
  Checkbox,
  Button,
  FormControlLabel,
} from "@mui/material";
import {
  AccountCircle,
  Apple,
  CircleOutlined,
  Facebook,
  Google,
  Visibility,
} from "@mui/icons-material";

import { MobileContainer } from "../components/Container/MobileContainer";
import { useNavigate } from "react-router-dom";
import { setTitle } from "../utils";
import { connect } from "react-redux";
import { useAuth } from "../hooks/auth/useAuth";
import { useSignIn } from "../hooks/auth/useSignIn";
import store from "../data/store/store";

// L -> Login
function L({ setLoading, user, state }) {
  const [email, setEmail, password, setPassword] = useSignIn();
  const { currentUser, signIn, setCurrentUser } = useAuth();

  const { dispatch } = store;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false);
    setTitle("Login 🔐");

    // if user is signed in
    if (currentUser) {
      setLoading(true);
      navigate("/");
    }

    // if user exist in local storage
    if (localStorage.getItem("user")) {
      setCurrentUser(JSON.parse(localStorage.getItem("user")));
      dispatch.user.setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [currentUser]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn(email, password);
  };

  return (
    <MobileContainer>
      <NavigationalAppBar title={"Home"} link="/" />
      <Container>
        <Typography variant="h3" mt={10}>
          Login to your Account
        </Typography>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle sx={{ color: "Black" }} />
                  </InputAdornment>
                ),
              }}
              hiddenLabel
              required
              placeholder="Email"
              value={email}
              fullWidth
              type="text"
              outline="none"
              color="primary"
              style={{ backgroundColor: "#f2f2f2" }}
              onChange={handleEmail}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon sx={{ color: "Black" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <Visibility sx={{ color: "Black" }} />
                  </InputAdornment>
                ),
              }}
              hiddenLabel
              required
              placeholder="Password"
              fullWidth
              value={password}
              type="password"
              outline="none"
              color="primary"
              style={{ backgroundColor: "#f2f2f2" }}
              onChange={handlePassword}
              sx={{ mt: 2, mb: 2 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<CircleOutlined sx={{ color: "blue" }} />}
                  value="remember"
                  color="primary"
                />
              }
              label="Remember me"
              sx={{ mx: 10 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2, borderRadius: 100, bgcolor: "blue", py: 1.2 }}
              onClick={handleLogin}
            >
              Sign In
            </Button>

            <Link
              onClick={(e) => navigate("/login")}
              variant="body2"
              textAlign="center"
              sx={{ color: "blue", ml: 14, cursor: "pointer" }}
            >
              {"Forget the Password?"}
            </Link>

            <Divider sx={{ mt: 6 }}>Or continue with</Divider>
          </Box>
          <Box sx={{ display: "flex", mt: 5, alignItems: "center" }}>
            <Box
              mr={5}
              p={1}
              sx={{
                border: "1px solid #cccccc",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <Google sx={{ color: "orange" }} onClick={(e) => navigate("/")} />
            </Box>
            <Box
              mr={5}
              p={1}
              sx={{
                border: "1px solid #cccccc",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <Facebook sx={{ color: "blue" }} onClick={(e) => navigate("/")} />
            </Box>
            <Box
              p={1}
              sx={{
                border: "1px solid #cccccc",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <Apple onClick={(e) => navigate("/")} />
            </Box>
          </Box>
          <Typography mt={7}>
            Don't have an account?
            <Link
              onClick={(e) => navigate("/signup")}
              ml={1}
              sx={{ cursor: "pointer" }}
            >
              Sign Up
            </Link>{" "}
          </Typography>
        </Box>
      </Container>
    </MobileContainer>
  );
}

const mapDispatch = (dispatch) => ({
  setLoading: (loading) => dispatch.loading.setLoading(loading),
  // setUser: (user) => dispatch.userModel.setUser(user),
});

const mapState = (state) => ({
  user: state.user,
  state: state,
});

const Login = connect(mapState, mapDispatch)(L);
export default Login;

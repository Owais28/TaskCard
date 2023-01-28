import { Stack, TextField, InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";

export function LoginInput({ value }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Stack direction={"column"}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                <Visibility />
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
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mt: 2, mb: 2 }}
        />
      </Stack>
    </div>
  );
}

import { Stack } from "@mui/material";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";

export function LoginInput({value}) {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    return (
        <div>
            <Stack direction={"column"}>
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" >
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    hiddenLabel
                    required
                    placeholder="Email"
                    fullWidth
                    type="text"
                    outline="none"
                    color="primary"
                    style={{ backgroundColor: "#f2f2f2" }}
                    onClick={(e)=>setEmail(e.target.value)}
                />
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" >
                                <LockOutlinedIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="start" >
                                <Visibility />
                            </InputAdornment>
                        ),
                    }}
                    hiddenLabel
                    required
                    placeholder="Password"
                    fullWidth
                    value={pass}
                    type="password"
                    outline="none"
                    color="primary"
                    style={{ backgroundColor: "#f2f2f2" }}
                    onChange={(e) => setPass(e.target.value)}
                    sx={{ mt: 2, mb: 2}}
                />

            </Stack>
        </div>
    )
}


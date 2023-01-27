import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MobileContainer } from "../components/Container/MobileContainer";
import { NavigationalAppBar } from '../components/NavigationalAppBar';
import { Apple, CircleOutlined, Facebook, Google } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import { useNavigate } from 'react-router-dom';


function SignUp() {

    const navigate =useNavigate();

    const [user, setUser] = useState({
        name: '',
        userName: '',
        email: '',
        password: '',
        phoneno: '',
        dob: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted: ",user);
    };

    return (
        <MobileContainer>
            <NavigationalAppBar />
            <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
                <Typography variant="h3"
                    mt={10}
                >
                    Create your account
                </Typography>
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }} >
                    <Box >

                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="Name"
                                    value={user.name}
                                    onChange={(e) => setUser((user) => ({ ...user, name: e.target.value }))}
                                    required
                                    fullWidth
                                    label="Name"
                                    style={{ backgroundColor: "#f2f2f2" }}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="User Name"
                                    value={user.userName}
                                    onChange={(e) => setUser((user) => ({ ...user, userName: e.target.value }))}
                                    name="userName"
                                    autoComplete="family-name"
                                    style={{ backgroundColor: "#f2f2f2" }}

                                />
                            </Grid>
                            <Grid item xs={12}>
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
                                    value={user.email}
                                    fullWidth
                                    type="text"
                                    outline="none"
                                    color="primary"
                                    style={{ backgroundColor: "#f2f2f2" }}
                                    onChange={(e) => setUser((user) => ({ ...user, email: e.target.value }))}
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
                                    value={user.password}
                                    type="password"
                                    outline="none"
                                    color="primary"
                                    style={{ backgroundColor: "#f2f2f2" }}
                                    onChange={(e) => setUser((user) => ({ ...user, password: e.target.value }))}
                                    sx={{ mt: 2, mb: 2 }}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Phone Number"
                                    name="pnumber"
                                    value={user.phoneno}
                                    onChange={(e) => setUser((user) => ({ ...user, phoneno: e.target.value }))}
                                    autoComplete="family-name"
                                    type='tel'
                                    style={{ backgroundColor: "#f2f2f2" }}

                                />
                                <TextField
                                    required
                                    fullWidth
                                    id="pnumber"
                                    name="date"
                                    value={user.dob}
                                    onChange={(e) => setUser((user) => ({ ...user, dob: e.target.value }))}
                                    autoComplete="family-name"
                                    type='date'
                                    style={{ backgroundColor: "#f2f2f2" }}
                                    sx={{ mt: 2 }}

                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box component="form" noValidate sx={{ mt: 2 }} >
                        <FormControlLabel
                            control={<Checkbox icon={<CircleOutlined sx={{ color: "blue" }} />} value="remember" color="primary"
                            />}
                            label="Remember me"

                            sx={{ mx: 10 }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"

                            sx={{ mt: 2, mb: 2, borderRadius: 100, bgcolor: "blue", py: 1.2 }}
                        >
                            Sign Up
                        </Button>
                        <Divider sx={{ mt: 4 }}>Or continue with</Divider>
                    </Box>
                    <Box sx={{ display: 'flex', mt: 3, alignItems: 'center' }}>
                        <Box mr={5} p={1} sx={{ border: '1px solid #cccccc', borderRadius: '5px', cursor: 'pointer' }}>
                            <Google sx={{ color: 'orange' }} onClick={(e) => navigate('/')} />
                        </Box>
                        <Box mr={5} p={1} sx={{ border: '1px solid #cccccc', borderRadius: '5px', cursor: 'pointer' }}>
                            <Facebook sx={{ color: 'blue' }} onClick={(e) => navigate('/')} />
                        </Box>
                        <Box p={1} sx={{ border: '1px solid #cccccc', borderRadius: '5px', cursor: 'pointer' }}>
                            <Apple onClick={(e) => navigate('/')} />
                        </Box>
                    </Box>
                    <Typography mt={7}>Already, have an account?<Link onClick={(e) => navigate('/login')} ml={1} sx={{ cursor: 'pointer' }}>Sign in</Link> </Typography>
                </Box>
            </Container>
        </MobileContainer>
    );
}

export default SignUp;

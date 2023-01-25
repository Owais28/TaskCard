import React from 'react'
import { NavigationalAppBar2 } from '../components/NavigationalAppBar'
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MobileContainer } from "../components/Container/MobileContainer";
import { LoginInput } from '../components/Input/LoginInput';
import { Divider } from '@mui/material';
import { Apple, CircleOutlined, Facebook, Google } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



function Login() {
    let navigate = useNavigate();

    return (
        <MobileContainer>
            <Container>
                <NavigationalAppBar2 />
                <Typography variant="h3"
                    mt={10}
                >
                    Login to your Account
                </Typography>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Box component="form" noValidate sx={{ mt: 1 }} >
                        <LoginInput
                        />
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
                            Sign In
                        </Button>

                        <Link onClick={(e) => navigate('/login')} variant="body2" textAlign='center' sx={{ color: 'blue', ml: 14, cursor: 'pointer' }}>
                            {"Forget the Password?"}
                        </Link>

                        <Divider sx={{ mt: 6 }}>Or continue with</Divider>
                    </Box>
                    <Box sx={{ display: 'flex', mt: 5, alignItems: 'center' }}>
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
                    <Typography mt={7}>Don't have an account?<Link onClick={(e) => navigate('/signup')} ml={1} sx={{ cursor: 'pointer' }}>Sign Up</Link> </Typography>
                </Box>
            </Container>
        </MobileContainer>
    )
}

const mapDispatch = (dispatch) => ({
    setLoading: (loading) => dispatch.loading.setLoading(loading),
});

export default Login;

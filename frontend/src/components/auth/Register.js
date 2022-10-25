import React, { useState } from 'react';

import { Link, Navigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useDispatch, useSelector } from "react-redux";
import { register } from '../../Redux/Actions/auth';
import { SetAlert } from '../../Redux/Actions/alert';
const theme = createTheme();

function Register(props) {
  const [fromData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
  });
  const {
    firstname,
    lastname,
    email,
    password,
    password2,
  } = fromData;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } =auth ;

  const hundelchange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });
   
    const handleSubmit = (event) => {
      event.preventDefault();
      if (password !== password2) SetAlert('Password do not match', 'danger');
      else {
        dispatch(register({
          firstname,
          lastname,
          email,
          password,
          password2,
        }));
      }
    };
  
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    
  <ThemeProvider theme={theme}>
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstname"
              required
              fullWidth
              id="firstName"
              label="First Name"
              value={firstname}
              onChange={(e) => hundelchange(e)}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastname"
              autoComplete="family-name"
              value={lastname}
              onChange={(e) => hundelchange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => hundelchange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              minLength='6'
              onChange={(e) => hundelchange(e)}
            />
                 <TextField
              required
              fullWidth
              name="password2"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password2}
              minLength='6'
              onChange={(e) => hundelchange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="register" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
</ThemeProvider>

     
  );
}

export default Register
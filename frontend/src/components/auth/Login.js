
import React, { useState } from 'react';

import { Link, Navigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { login } from '../../Redux/Actions/auth';
import { useDispatch, useSelector } from "react-redux";
const theme = createTheme();
function Login(props) {
  const [fromData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = fromData;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } =auth ;

  const hundelchange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });


    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(login(email, password));

    };
  
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />
  }

  return (

//         <div>
//       <div class="app-content">




// <div class="u-s-p-b-60">

    
   
//     <div class="section__content">
//         <div class="container">
//             <div class="row row--center">
//                 <div class="col-lg-6 col-md-8 u-s-m-b-30">
//                     <div class="l-f-o">
//                         <div class="l-f-o__pad-box">

//                             {/* <span class="gl-text u-s-m-b-30">By creating an account with our store, you will be able to move through the checkout process faster, store shipping addresses, view and track your orders in your account and more.</span> */}
//                             <div class="u-s-m-b-15">

//                                  <Link to='/register' class="l-f-o__create-link btn--e-transparent-brand-b-2" >CREATE AN ACCOUNT</Link></div>
//                             <h1 class="gl-h1">SIGNIN</h1>

//                             <span class="gl-text u-s-m-b-30">If you have an account with us, please log in.</span>
//                             <form class="l-f-o__form"  onSubmit={(e) => onsubmit(e)}>
                           
//                                 <div class="u-s-m-b-30">

//                                     <label class="gl-label" for="login-email">E-MAIL *</label>

//                                     <input class="input-text input-text--primary-style" id="login-email" placeholder="Enter E-mail"
//                                       type='email'
                                   
//                                       name='email'
//                                       value={email}
//                                       onChange={(e) => hundelchange(e)}
//                                       required
//                                       /></div>
//                                 <div class="u-s-m-b-30">

//                                     <label class="gl-label"  type='password'
                                   
//                                      for="login-password">PASSWORD *</label>

//                                     <input class="input-text input-text--primary-style" type="password" id="login-password" placeholder="Enter Password"
//                                      name='password'
//                                      value={password}
//                                      minLength='6'
//                                      required
//                                      onChange={(e) => hundelchange(e)}/></div>
//                                 <div class="gl-inline">
//                                     <div class="u-s-m-b-30">

//                                         <button class="btn btn--e-transparent-brand-b-2" type="submit">LOGIN</button></div>
//                                     <div class="u-s-m-b-30">

//                                         <Link class="gl-link" to="/forgetpassword">Lost Your Password?</Link></div>
//                                 </div>
//                         <div class="u-s-m-b-30">

//                                     <div class="check-box">

//                                         <input type="checkbox" id="remember-me"/>
//                                         <div class="check-box__state check-box__state--primary">

//                                             <label class="check-box__label" for="remember-me">Remember Me</label></div>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>


//       </div>
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
      Sign in
    </Typography>
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        onChange={(e) => hundelchange(e)}
        value={email}
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={(e) => hundelchange(e)}
         value={password}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  </Box>
</Container>
</ThemeProvider>
  );
}

export default Login;
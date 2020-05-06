import React from 'react';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Orange from '../../Media/orange.jpg';

import * as firebase from 'firebase';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function Login() {

    const [radioValue, setValue] = React.useState('male');

    const handleRadioChange = (event) => {
      setValue(event.target.value);
    };

    const classes = useStyles();

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        confirmPassword: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSignIn = () => {

        let email = document.getElementById('email_signin').value;
        let password = document.getElementById('password_signin').value;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if(errorCode !== null){

                alert(errorMessage + ' Try again.');

                document.getElementById('email_signin').value = '';

                document.getElementById('password_signin').value = '';

                document.getElementById('form-dialog-title').focus();
                return;
            }
        });
    }

    function checkRegistration(){

        // CHECK IF BOTH PASSWORDS ARE EQUAL


        let email = document.getElementById('outlined-basic').value;
        let password = document.getElementById('outlined-adornment-password').value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            alert(error.message);
            return;
        });

        // Setup template surah data in firebase
        //setupNewUser();
    }

    function setupNewUser(){
        firebase.auth().onAuthStateChanged(function(user) {
            if(user){
                var memRef = firebase.database().ref('memorize/' + user.uid);

                memRef.set({
                    1: "0000000",
                    2: "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",

                });
            }
        });

    }

      return (

          <div className="home_login">
            <div class="login_header">
              <img src={Orange} />
              <h2>
                Introducing the <b><i>NEW</i></b>
              </h2>
              <h1>
                R'GARDEN FORUM
              </h1>
              <div class="pun">
                “Kind of a big dill”
                “Oh, kale yeah”
                “Be nice or leaf”
                “Herb your enthusiasm”
              </div>
              <div class="under_desc">
                The platform where everyone can share their experiences, inquire about<br/> gardening practices, and get to know your fellow community members.
              </div>
            </div>
            <div class="line" />
            <h1>Sign Up</h1>
            <form className={classes.root} noValidate autoComplete="off">

                <TextField id="outlined-basic" label="Email" variant="outlined" />

                <br/>

                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>

                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.confirmPassword}
                    onChange={handleChange('confirmPassword')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                    labelWidth={135}
                  />

                </FormControl>

                <br/>

                <FormLabel id="radioGroupHeader" component="legend">Select your profile:</FormLabel>
                <RadioGroup id="radioGroup" value={radioValue} onChange={handleRadioChange}>
                  <FormControlLabel value="learner" control={<Radio />} label="Student" />
                  <FormControlLabel value="teacher" control={<Radio />} label="Staff/Intern" />
                  <FormControlLabel value="teacher" disabled control={<Radio />} label="Community Member" />
                </RadioGroup>

            </form>

            <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={checkRegistration}>
                    Register
            </Button>

            <div className="login_link">
                <Button variant="contained" size="medium" className={classes.margin} onClick={handleClickOpen}>
                    Already have an account?
                </Button>
            </div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" id="form-dialog-title">
            <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To log in using a previously created account, enter the email and password pair that belong to that account.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="email_signin"
                label="Email Address"
                type="email"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="password_signin"
                label="Password"
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSignIn} color="primary">
                Sign in
              </Button>
            </DialogActions>
        </Dialog>

          </div>

  );
}

import React, { useContext, useEffect, useState } from 'react'
import { Avatar, Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'; 
import { AuthContext } from '../../contexts/AuthContext';
import {useForm} from '../../hooks/useForm';
import DlgAlert from '../../components/dialogo/DialogoMsn';
import Swal from 'sweetalert2';
import { Loader } from '../../components/loader/Loader';

export const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showLoding, setShowLoding] = useState(false);
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const {state, login} = useContext(AuthContext);
    const {formState, onChangeInput}= useForm();
    const [error, setError] = useState("")

    useEffect(() => {
        handleMensaje();      
        setShowLoding(state.isLoding);
    }, [state])    

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        setShowLoding(true);        
        login(formState.username, formState.password); 
    }

    const handleMensaje = () => {          
         if (state.message ==="NoRegistra")
        {
            Swal.fire({
                    title: "Error Leer Atte.",
                    text: "Usuario ingresado no se encuentra resgistrado!!!",
                    icon: "error"
            });             
        }                        
         if (state.message ==="errorDatos")
        {
            Swal.fire({
                    title: "Error Leer Atte.",
                    text: "Ingresar los datos solicitados, para poder Realizar Login!!!",
                    icon: "error"
            });             
        }                        
    };

    return (
        <>
            {showLoding && <Loader/>}
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmitLogin} noValidate sx={{mt:1}}>
                <TextField 
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Usuario"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={onChangeInput}
                />               
                <FormControl variant="outlined" fullWidth> 
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        name="password"
                        autoComplete="Password"
                        required
                        fullWidth 
                        onChange={onChangeInput}                       
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                /*onMouseDown={handleMouseDownPassword} */
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />} 
                            </IconButton>
                        </InputAdornment>
                        }                        
                        label="Password"
                    />                    
                </FormControl>                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    INGRESAR
                </Button>

                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                        Recuperar Contraseña?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                        {"Registrarse"}
                        </Link>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}

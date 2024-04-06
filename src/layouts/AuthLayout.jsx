import { ThemeProvider } from '@emotion/react'
import { Box, Container, CssBaseline, createTheme } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/auth/LoginPage'
const defaultTheme = createTheme();

export const AuthLayout = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{                        
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Routes>
                        <Route path='/' element={<LoginPage />} />
                        {/* <Route path='/register' element={<RegisterPage />} /> */}
                    </Routes>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

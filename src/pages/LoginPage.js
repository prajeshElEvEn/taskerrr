import { Box, Container, TextField } from '@mui/material'
import React from 'react'

const LoginPage = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                py: '5rem',
                gap: '1rem',
            }}
        >
            <div className="sub-title">
                Login
            </div>
            <div className="sub-header">
                Provide your credentials
            </div>
            <Box
                sx={{
                    bgcolor: '#DFDFE2',
                    // bgcolor: '#7C5EB7',
                    p: '1rem',
                    // py: '2rem',
                    // px: { xs: '0', md: '2rem' },
                    borderRadius: '10px',
                    width: { xs: '100%', md: 'auto' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <TextField
                    sx={{
                        // m: '1rem',
                        width: '100%',
                    }}
                    type='email'
                    id="outlined-basic"
                    label="Email Id"
                    variant="outlined"
                    color="tertiary"
                />
                <TextField
                    sx={{
                        // m: '1rem',
                        width: '100%',
                    }}
                    type='password'
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    color="tertiary"
                />
                <div className="btn">
                    Login
                </div>
            </Box>
        </Container>
    )
}

export default LoginPage

import { Box, Container, TextField, Typography } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase/config'
import { useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const nav = useNavigate()

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                dispatch(login({
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                    displayName: userCredential.user.displayName,
                }))
                nav('/taskerrr/dashboard')
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

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
            component="main" maxWidth="xs"
        >
            <div className="sub-title">
                Login
            </div>
            <Typography component="h1" variant="h5"className="sub-header">
                Provide your credentials
            </Typography>
            <Box
                
                component="form"
                sx={{ mt: 1, bgcolor: 'white', borderRadius: '5px', padding: '10px'}}
            >
                <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    color="tertiary"
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
                    // id="outlined-basic"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                    color="tertiary"
                />
                <div
                    className="btn"
                    onClick={handleLogin}
                >
                    Login
                </div>
            </Box>
            {/* <Box
                sx={{
                    display: 'flex',
                    gap: '0.5rem',
                }}
            >
                <span>Forgot Password?</span>
                <Link to='/forgot'>
                    Reset Password
                </Link>
            </Box> */}
        </Container>
    )
}

export default LoginPage

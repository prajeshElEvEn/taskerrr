import { Box, Container, TextField } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase/config'
import { useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

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
                nav('/dashboard')
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
                    // id="outlined-basic"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    // id="outlined-basic"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
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

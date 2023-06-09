import { Box, Container, TextField } from '@mui/material'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { auth, db } from '../firebase/config'
import { useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'

const SignupPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()
    const nav = useNavigate()

    const handleSignup = () => {
        if (password !== confirmPassword) {
            toast.error('Passwords do not match')
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    updateProfile(user, {
                        displayName: name,
                    })
                        .then(() => {
                            addDoc(collection(db, 'users'), {
                                uid: user.uid,
                                name: name,
                                email: email,
                                tasksAssigned: [],
                            })
                            dispatch(login({
                                email: userCredential.user.email,
                                uid: userCredential.user.uid,
                                displayName: name,
                            }))

                        })
                    nav('/dashboard')
                })
                .catch((error) => {
                    toast.error(error.message)
                })
        }
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
                Sign Up
            </div>
            <div className="sub-header">
                Please provide the following details
            </div>
            <Box
                sx={{
                    bgcolor: '#DFDFE2',
                    p: '1rem',
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
                    type='text'
                    // id="outlined-basic"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    label="Full Name"
                    variant="outlined"
                    color="tertiary"
                />
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
                <TextField
                    sx={{
                        // m: '1rem',
                        width: '100%',
                    }}
                    type='password'
                    // id="outlined-basic"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    label="Confirm Password"
                    variant="outlined"
                    color="tertiary"
                />
                <div
                    className="btn"
                    onClick={handleSignup}
                >
                    Sign Up
                </div>
            </Box>
        </Container>
    )
}

export default SignupPage

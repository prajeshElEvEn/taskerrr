import { Box, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Container
            sx={{
                // display: 'flex',
                // justifyContent: 'space-between',
                // alignItems: 'center',
                py: '1rem',
                borderTop: '1px solid #221935',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // py: '1rem',
                    // borderTop: '1px solid #221935',
                }}
            >
                <Box>
                    <Link to='/' className="brand-name">
                        📑 Taskerrr
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        // justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '2rem',
                    }}
                >
                    {/* <Link to='/login' className="nav-btn-login">Login</Link> */}
                    {/* <Link to='/signup' className="nav-btn">Sign Up</Link> */}
                    <a
                        className="nav-btn"
                        href="https://github.com/prajeshElEvEn/taskerrr"
                        target="_blank"
                        rel="noopener noreferrer">
                        Github
                    </a>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: '5rem',
                    gap: '0.5rem',
                }}
            >
                <div className="description">
                    Write to us
                </div>
                <div className="sub-title">
                    <a href="mailto:prajesh.eleven118@gmail.com" target="_blank" rel="noopener noreferrer">
                        prajesh.eleven118@gmail.com
                    </a>
                </div>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <div className="left">
                    &copy; {new Date().getFullYear()} Taskerrr
                </div>
                <div className="right">
                    Made with ❤️ by <a href="http://bit.ly/prajesheleven" target="_blank" rel="noopener noreferrer">ElEvEn Co.</a>
                </div>
            </Box>
        </Container>
    )
}

export default Footer

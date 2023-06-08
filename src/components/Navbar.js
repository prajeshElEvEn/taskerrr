import { Box, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: '1rem',
            // borderBottom: '1px solid #E4E4E6',
        }}>
            <Box>
                {/* <img src="" alt="" /> */}
                <Link to='/' className="brand-name">
                    📑 Taskerrr
                </Link>
            </Box>
            {/* <Box>
                <div className="nav-item">Tasks</div>
                <div className="nav-item"></div>
                <div className="nav-item"></div>
                <div className="nav-item"></div>
            </Box> */}
            <Box
                sx={{
                    display: 'flex',
                    // justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '2rem',
                }}
            >
                <Link to='/login' className="nav-btn-login">Login</Link>
                <Link to='/signup' className="nav-btn">Sign Up</Link>
            </Box>
        </Container>
    )
}

export default Navbar

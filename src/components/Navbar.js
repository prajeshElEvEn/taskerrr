import { Box, Button, Container, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Navbar = ({ user }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: '1rem',
            borderBottom: '1px solid #221935',
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
                {
                    user ? (
                        <><Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            color="tertiary"
                        >
                            <NotificationsNoneOutlinedIcon />
                        </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    Notification 1
                                </MenuItem>
                            </Menu>
                            <Link to='/login' className="nav-btn-login">Dasboard</Link>
                            <Link to='/signup' className="nav-btn">Logout</Link>
                        </>
                    ) : (
                        <>
                            <Link to='/login' className="nav-btn-login">Login</Link>
                            <Link to='/signup' className="nav-btn">Sign Up</Link>
                        </>
                    )
                }
            </Box>
        </Container>
    )
}

export default Navbar

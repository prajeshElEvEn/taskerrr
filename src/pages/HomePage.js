import { Box, Container } from '@mui/material'
import React from 'react'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Player } from '@lottiefiles/react-lottie-player';

const HomePage = () => {
    return (
        <Container
            sx={{
                // bgcolor: 'primary.main',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    py: '5rem',
                }}
            >
                <div className="sub-title">
                    Productivity. Efficiency. Simplicity.
                </div>
                <div className="header">
                    Do more with Taskerrr
                </div>
                <div className="description">
                    Manage all your tasks in one place
                </div>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', md: 'row' },
                    // alignItems: 'center',
                }}
            >
                <Box
                    className="feature"
                    sx={{
                        py: '2rem',
                        px: '1rem',
                        borderLeft: '1px solid #221935',
                        borderRight: '1px solid #221935',
                        width: { xs: '100%', md: '24%' },
                    }}
                >
                    <EditNoteOutlinedIcon />
                    <div className="title">
                        Easy-to-use
                    </div>
                    <div className="desc">
                        Create and manage tasks with ease
                    </div>
                </Box>
                <Box
                    className="feature"
                    sx={{
                        py: '2rem',
                        px: '1rem',
                        borderRight: '1px solid #221935',
                        width: { xs: '100%', md: '24%' },
                    }}
                >
                    <GroupsOutlinedIcon />
                    <div className="title">
                        User collaboration
                    </div>
                    <div className="desc">
                        Collaborate and assign tasks to other users
                    </div>
                </Box>
                <Box
                    className="feature"
                    sx={{
                        py: '2rem',
                        px: '1rem',
                        borderRight: '1px solid #221935',
                        width: { xs: '100%', md: '24%' },
                    }}
                >
                    <LockOutlinedIcon />
                    <div className="title">
                        End-to-end encryption
                    </div>
                    <div className="desc">
                        Only you can access your tasks
                    </div>
                </Box>
                <Box
                    className="feature"
                    sx={{
                        py: '2rem',
                        px: '1rem',
                        borderRight: '1px solid #221935',
                        width: { xs: '100%', md: '24%' },
                    }}
                >
                    <NotificationsOutlinedIcon />
                    <div className="title">
                        Realtime updates
                    </div>
                    <div className="desc">
                        Get notified when a task is assigned to you
                    </div>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    py: '5rem',
                }}
            >
                {/* <img
                    className="image"
                    src={InfoImage}
                    alt=""
                /> */}
                <Player
                    className="anime"
                    autoplay
                    loop
                    src="https://assets5.lottiefiles.com/packages/lf20_y9wnxr3h.json"
                // style={{ height: '300px', width: '300px' }}
                />
                <div className="sub-title">
                    Accessing made easy
                </div>
                <div className="sub-header">
                    Never loose information
                </div>
                <div className="description">
                    All your tasks are stored in the cloud. Access them from anywhere, anytime.
                </div>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    py: '5rem',
                }}
            >
                {/* <img
                    className="image"
                    src={CollabImage}
                    alt=""
                /> */}
                <Player
                    className="anime"
                    autoplay
                    loop
                    src="https://assets1.lottiefiles.com/packages/lf20_5J8eTHBXqO.json"
                // style={{ height: '300px', width: '300px' }}
                />
                <div className="sub-title">
                    Productivity++
                </div>
                <div className="sub-header">
                    Make more out of your tasks
                </div>
                <div className="description">
                    Collaborate and assign tasks to other users. Get notified when a task is assigned to you.
                </div>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    py: '5rem',
                }}
            >
                {/* <img
                    className="image"
                    src={SecurityImage}
                    alt=""
                /> */}
                <Player
                    className="anime"
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_M1fcEcu4xd.json"
                // style={{ height: '300px', width: '300px' }}
                />
                <div className="sub-title">
                    Encrypltion
                </div>
                <div className="sub-header">
                    Hardened security
                </div>
                <div className="description">
                    Your data is safe with us. We use end-to-end encryption to ensure that only you can access your tasks.
                </div>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    py: '5rem',
                }}
            >
                {/* <img
                    className="image"
                    src={SecurityImage}
                    alt=""
                /> */}
                <Player
                    className="anime"
                    autoplay
                    loop
                    src="https://assets5.lottiefiles.com/packages/lf20_lbHpNV.json"
                    style={{ width: '100%' }}
                />
                <div className="sub-title">
                    About
                </div>
                <div className="sub-header">
                    We're a India based Team
                </div>
                <div className="description">
                    Our mission is to increase people's productivity by helping them accomplish their tasks better.
                </div>
            </Box>
        </Container>
    )
}

export default HomePage

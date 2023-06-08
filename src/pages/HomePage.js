import { Box, Container } from '@mui/material'
import React from 'react'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

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
                    // justifyContent: 'center',
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
        </Container>
    )
}

export default HomePage

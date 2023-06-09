import { Box, Button, Container, Menu, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

const Dashboard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDue = () => {
        setAnchorEl(null);
    };
    const handleCompleted = () => {
        setAnchorEl(null);
    };
    return (
        <Container>
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
                    Create
                </div>
                <div className="sub-header">
                    Create a new task
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
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        label="Title"
                        variant="outlined"
                        color="tertiary"
                    />
                    <TextField
                        sx={{
                            // m: '1rem',
                            width: '100%',
                        }}
                        type='text'
                        // id="outlined-basic"
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        label="Description"
                        variant="outlined"
                        color="tertiary"
                    />
                    <TextField
                        sx={{
                            // m: '1rem',
                            width: '100%',
                        }}
                        type='date'
                        // id="outlined-basic"
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        // label="Description"
                        variant="outlined"
                        color="tertiary"
                    />
                    <div
                        className="btn"
                    // onClick={handleSignup}
                    >
                        Add
                    </div>
                </Box>
            </Box>
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
                    Visualise
                </div>
                <div className="sub-header">
                    Your tasks
                </div>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <div className="description">
                        View your tasks on the bases of due date or status
                    </div>
                    <div>
                        <Button
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            variant="contained"
                            color="tertiary"
                        >
                            <FilterListOutlinedIcon />
                        </Button>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem
                                onClick={handleDue}
                            >
                                Due Tasks
                            </MenuItem>
                            <MenuItem
                                onClick={handleCompleted}
                            >
                                Completed Tasks
                            </MenuItem>
                        </Menu>
                    </div>
                </Box>
            </Box>
        </Container>
    )
}

export default Dashboard

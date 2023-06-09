import { Box, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const Dashboard = () => {
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
                <div className="description">
                    View your tasks on the bases of due date or status
                </div>
            </Box>
        </Container>
    )
}

export default Dashboard

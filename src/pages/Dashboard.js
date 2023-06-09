import { Box, Button, Card, CardActions, CardContent, Container, Menu, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

const Dashboard = ({ user }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState('due')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [tasks, setTasks] = useState([])
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDue = () => {
        setAnchorEl(null)
        setValue('due')
    };
    const handleCompleted = () => {
        setAnchorEl(null)
        setValue('completed')
    };

    const handleAdd = async () => {
        const taskRef = collection(db, 'tasks')
        await addDoc(taskRef, {
            title: title,
            description: description,
            dueDate: dueDate,
            completed: false,
            author: {
                name: user.displayName,
                email: user.email,
            },
            assignedTo: [],
            timestamp: serverTimestamp(),
            updatedAt: serverTimestamp(),
        })
        setTitle('')
        setDescription('')
        setDueDate('')
    }

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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        // label="Description"
                        variant="outlined"
                        color="tertiary"
                    />
                    <div
                        className="btn"
                        onClick={handleAdd}
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
                <Box
                    sx={{
                        display: 'flex',
                        // justifyContent: 'space-between',
                        width: '100%',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        py: '2rem',
                    }}
                >
                    {
                        value === 'due' && (
                            <>
                                <Card
                                    sx={{
                                        maxWidth: { xs: '100%', md: 345 },
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            gap: '0.5rem',
                                        }}
                                    >
                                        <div className="card-title">
                                            Lizard
                                        </div>
                                        <div className='card-desc'>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </div>
                                        <div className="date">
                                            Due Date: <span>
                                                12/12/2021
                                            </span>
                                        </div>
                                    </CardContent>
                                    <CardActions
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            width: '90%',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: '0.5rem',
                                            }}
                                        >
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="tertiary"
                                            >
                                                <ModeEditOutlineOutlinedIcon />
                                            </Button>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="tertiary"
                                            >
                                                <DeleteOutlineOutlinedIcon />
                                            </Button>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="tertiary"
                                            >
                                                <DoneOutlinedIcon />
                                            </Button>
                                        </Box>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="tertiary"
                                        >
                                            Assign
                                        </Button>
                                    </CardActions>
                                </Card>
                            </>
                        )
                    }
                    {
                        value === 'completed' && (
                            <>
                                <Card
                                    sx={{
                                        maxWidth: { xs: '100%', md: 345 },
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            gap: '0.5rem',
                                        }}
                                    >
                                        <div className="card-title">
                                            Lizard
                                        </div>
                                        <div className='card-desc'>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </div>
                                        <div className="date">
                                            Due Date: <span>
                                                12/12/2021
                                            </span>
                                        </div>
                                    </CardContent>
                                    <CardActions
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            width: '90%',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: '0.5rem',
                                            }}
                                        >
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="tertiary"
                                            >
                                                <ModeEditOutlineOutlinedIcon />
                                            </Button>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="tertiary"
                                            >
                                                <DeleteOutlineOutlinedIcon />
                                            </Button>
                                        </Box>
                                    </CardActions>
                                </Card>
                            </>
                        )
                    }
                </Box>
            </Box>
        </Container>
    )
}

export default Dashboard

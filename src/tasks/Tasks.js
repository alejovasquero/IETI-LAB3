import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Avatar, Card, CardHeader, CssBaseline, Fab, Grid, Dialog, DialogTitle, TextField, Divider, DialogContent, InputLabel } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import "./Tasks.css"

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import TaskCreator from './TaskCreator';
import TaskCard from './TaskCard';
import LeftDrawer from './LeftDrawer';


class Tasks extends React.Component {


    constructor(props) {
        super(props);
        this.state = { drawerOpen: false, dialogOpen: false, tasks: [] };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
    }

    toggleDrawer = (open) => (event) => {
        console.log(open);
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({ drawerOpen: open });
    };

    handleDrawerOpen() {
        this.setState({ drawerOpen: true });
    };

    handleDrawerClose() {
        this.setState({ drawerOpen: false });
    };

    handleTaskSubmit = (event) => {
        event.preventDefault();
        let newTask = {
            description: event.target[0].value,
            responsible: {
                name: event.target[1].value,
                email: event.target[2].value
            },
            status: event.target[3].value,
            dueDate: new Date()

        }
        this.setState(prevState => {
            const tasks = prevState.tasks.concat(newTask)
            return {
                tasks
            }
        });
        console.log(this.state.tasks);
    }

    handleDialogClose() {
        this.setState({ dialogOpen: false });
    }

    render() {
        console.log(this.state.tasks)
        const taskList = this.state.tasks.map((task, i) => {
            return (
                <TaskCard key={i} task={task} />
            );
        });

        return (
            <div>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Task Planner
                        </Typography>
                    </Toolbar>


                </AppBar>

                <div className="pageContent">

                    {taskList}

                    <div className="addIcon">
                        <Fab onClick={() => { this.setState({ dialogOpen: true }) }} aria-label="Add Task">
                            <AddIcon />
                        </Fab>
                    </div>

                </div>

                <TaskCreator
                    handleTaskSubmit={this.handleTaskSubmit}
                    open={this.state.dialogOpen}
                    onClose={this.handleDialogClose}>
                </TaskCreator>

                <LeftDrawer open={this.state.drawerOpen} toggleDrawer={this.toggleDrawer}></LeftDrawer>


            </div>
        );
    }
}


export default Tasks;
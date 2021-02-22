import React from 'react';
import { Button, Dialog, DialogTitle, TextField, Divider, DialogContent, InputLabel } from '@material-ui/core';
import "./Tasks.css"
import Select from '@material-ui/core/Select';


class TaskCreator extends React.Component {


    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    render() {

        return (
            <div>

                <Dialog fullWidth open={this.props.open} onClose={this.props.onClose}>
                    <DialogTitle >Add Task</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.props.handleTaskSubmit}>
                            <TextField fullWidth label="Description" variant="filled"></TextField>
                            <Divider></Divider>
                            <TextField fullWidth label="Responsable" variant="filled"></TextField>
                            <Divider></Divider>
                            <TextField fullWidth label="Correo" variant="filled"></TextField>
                            <Divider></Divider>
                            <InputLabel htmlFor="state-select">State</InputLabel>
                            <Select
                                native
                                inputProps={{
                                    name: 'age',
                                    id: 'state-select',
                                }}
                            >
                                <option value="To Do">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Ready">Ready</option>
                            </Select>
                            <Divider></Divider>
                            <Button type="submit">Done</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}


export default TaskCreator;
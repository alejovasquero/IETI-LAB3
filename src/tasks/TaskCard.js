import React from 'react';
import './TaskCard.css'
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import "./Tasks.css"
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';


class TaskCard extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Card className="mainCard">
                    <div className="container">
                        <CardContent className="content">
                            <Typography color="textPrimary" gutterBottom>
                                {this.props.task.description}
                            </Typography>

                            <Typography color="textSecondary" gutterBottom>
                                {this.props.task.status}
                            </Typography>

                            <Typography color="textSecondary" gutterBottom>
                                {this.props.task.responsible.name}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {new Date(this.props.task.duaDate).toString()}
                            </Typography>
                        </CardContent>
                    </div>
                    {this.props.task.status === "To Do" ? <ErrorIcon/> : this.props.task.status === "Ready" ? <CheckIcon/> : <PlayCircleFilledWhiteIcon/>}
                </Card>
            </div>
        );
    }
}


export default TaskCard;
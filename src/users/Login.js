import React from 'react';
import { Button, Card, CardMedia, FormControl, TextField, Grid } from '@material-ui/core';
import './Login.css';
import LoginPhoto from "../images/tasklogo.png";
import { Link } from 'react-router-dom'
class Login extends React.Component {


    constructor(props) {
        super(props);
    }



    render() {

        return (
            <div className="outer">
                <div className="middle">
                    <div className="inner">

                        <Card className="card">

                            <CardMedia className="cardMedia"
                                image={LoginPhoto}
                                title="Task Planner"
                                component="img"
                            />
                            <form action="/tasks">
                                <div>
                                    <Grid container
                                        direction="column"
                                        justify="center"
                                        alignItems="center"
                                        >
                                        <Grid container justify="center">
                                            <FormControl className="textField">

                                                <TextField fullWidth label="Usuario" variant="filled" />
                                            </FormControl>
                                        </Grid>

                                        <Grid container justify="center">
                                            <FormControl className="textField">

                                                <TextField fullWidth label="Contraseña" variant="filled" type="password" />
                                            </FormControl>
                                        </Grid>

                                        <Grid container justify="center">
                                            <Button className="button" variant="outlined" type="submit">
                                                Log In
                                            </Button>
                                        </Grid>

                                        {/*<Link>Create Account</Link>*/}

                                    </Grid>

                                </div>

                            </form>



                        </Card>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
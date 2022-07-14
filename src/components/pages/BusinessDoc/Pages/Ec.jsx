import { Typography } from "@material-ui/core";
import React from "react";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Button } from '@material-ui/core';
import Howitworks7 from '../Howitworks7';
import Whyus from '../Whyus';
import useStyles from './businessstyle';
import Gpaybutton from "../../../Gpaybutton";

function Company() {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.hero}>
                <Box>
                    <br></br>
                    {/* change */}
                    Employment Contract

                </Box>
            </Box>

            <Howitworks7 />
            <br></br><br></br>
            <Whyus />

            <Container maxWidth="lg" className={classes.blogsButton}>
                <Typography variant="h3">Why is this Certificate Important?</Typography>
            </Container>

            <Container maxWidth="lg" className={classes.blogsButton}>
                {/* change */}
                <Typography variant="h6">
                An employment agreement is a document which outlines the bounds of relationship between an employer and employee.<br></br>
<br></br>It is an agreement entered into between an employer and an employee at the time, the employee is hired, that describes the nature of their business relationship, specifically what the employee will receive in exchange for specific work performed.It consists of Job title and description, Compensation, Confidentiality requirements, Non-compete clause, Termination information and other important sections. <br></br>
                    <br></br>
                  
                </Typography>
            </Container>
            <Container maxWidth="lg" className={classes.blogsButton}>
            <Gpaybutton />
            </Container>
        </>
    );
}

export default Company;

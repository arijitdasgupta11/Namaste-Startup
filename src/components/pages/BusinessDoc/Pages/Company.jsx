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

import Advantages from '../Advantages8';
import Howitworks from '../Howitworks';
import Whyus from '../Whyus';

import Gpaybutton from "../../../Gpaybutton";
import useStyles from './businessstyle';


function Company() {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.hero}>
                <Box>
                    <br></br>
                    {/* change */}
                    Company Registration
                </Box>
            </Box>

            <Howitworks />
            <Advantages />
            <Whyus />

            <Container maxWidth="lg" className={classes.blogsButton}>
                <Typography variant="h3">Why is this Certificate Important?</Typography>
            </Container>

            <Container maxWidth="lg" className={classes.blogsButton}>
                {/* change */}
                <Typography variant="h6">One Person Company is a new form of business registration introduced under Companies Act, 2013, enabling a single person to register a company. This has been started to give all budding entrepreneurs a chance to start their venture without any mandatory requirement of two directors.So if you want to start your company but don’t have a co-founder, then don’t wait any longer. Register your OPC and get started!!</Typography>
            </Container>
            <Container maxWidth="lg" className={classes.blogsButton}>                
                <Gpaybutton />
            </Container>
        </>
    );
}

export default Company;

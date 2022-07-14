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
import Advantages7 from '../Advantages7';
import Howitworks8 from '../Howitworks8';
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
                    LEGAL CONSULTATION
                </Box>
            </Box>

            <Howitworks8 />
            <Advantages7 />
            <Whyus />

            <Container maxWidth="lg" className={classes.blogsButton}>
                <Typography variant="h3">Why is this Certificate Important?</Typography>
            </Container>

            <Container maxWidth="lg" className={classes.blogsButton}>
                {/* change */}
                <Typography variant="h6">Are you stuck somewhere legally? Looking for an expert legal opinion? If Yes, then you are at the right place. We provide best legal solutions for all your legal queries through the panel of our expert lawyers.
<br></br>Our team of lawyers deal in various courts including but not limited to the Supreme Court, High Courts, District Courts, Consumer Courts, National Green Tribunal, Debts Recovery Tribunal, etc. <br></br>
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

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
import Advantages5 from '../Advantages5';
import Howitworks5 from '../Howitworks5';
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
                    Power of Attorney
                </Box>
            </Box>

            <Howitworks5 />
            <Advantages5 />
            <Whyus />

            <Container maxWidth="lg" className={classes.blogsButton}>
                <Typography variant="h3">Why is this Certificate Important?</Typography>
            </Container>

            <Container maxWidth="lg" className={classes.blogsButton}>
                {/* change */}
                <Typography variant="h6">You have a successfully running business but you are missing out clients because one of your competitor is using the exact same logo or name as yours and generating sales.<br></br>
Then comes the role of Trademark registration, A trademark is an intellectual property right that is used to help the applicant or the trademark owner to protect his logo or trademark. Trademark can be done for word signature, name, device, label, numerals or combination of colours used by a business.<br></br>
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

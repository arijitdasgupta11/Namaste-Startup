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
                    Draft  A  Will

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
A Will is a legal document that clearly sets out the manner of distribution of the wealth and assets after the death of a peron. Will is the best way to help ensure that your assets are protected and distributed according to your wishes without any quarrel.<br></br>
<br></br>Will is a testamentary document that comes into action after the death of a person which consist of the name of the persons and their share in the estate of the deceased. <br></br>
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

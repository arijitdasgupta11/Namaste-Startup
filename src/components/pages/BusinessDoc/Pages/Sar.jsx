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
import Advantages6 from '../Advantages6';
import Howitworks6 from '../Howitworks6';
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
                    SHOP ACT REGISTRATION
                </Box>
            </Box>

            <Howitworks6 />
            <Advantages6 />
            <Whyus />

            <Container maxWidth="lg" className={classes.blogsButton}>
                <Typography variant="h3">Why is this Certificate Important?</Typography>
            </Container>

            <Container maxWidth="lg" className={classes.blogsButton}>
                {/* change */}
                <Typography variant="h6">Any person who plans to start any business needs to get the licence under the Shops and Establishment Act.<br></br>
Shops and Establishment Act governs the working conditions and rights of workers engaged in the unorganized sector. This includes wage payments, leaves and holidays, work hours, etc. Shop/Trade licenses are State subject and the rules differ accordingly. <br></br>
                    <br></br>
                    <br></br>
                    <strong><u>Shop & Establishment Act Cover:</u></strong><br></br>
                    <ul>
                    <li>Retail or Wholesale Shop.<br></br></li>
                    <li>Store rooms,Godowns and warehouses<br></br></li>
                    <li>Supplying goods or services through E-commerce Operator.<br></br></li>
                   <li> E-commerce Operator / Aggregator.<br></br></li>
                   <li>Making any supply to other states.<br></br></li>
                   </ul>
                </Typography>
            </Container>
            <Container maxWidth="lg" className={classes.blogsButton}>
            <Gpaybutton />
            </Container>
        </>
    );
}

export default Company;

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
import Advantages4 from '../Advantages4';
import Howitworks4 from '../Howitworks4';
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
                    Import - Export - Code
                </Box>
            </Box>

            <Howitworks4 />
            <Advantages4 />
            <Whyus />

            <Container maxWidth="lg" className={classes.blogsButton}>
                <Typography variant="h3">Why is this Certificate Important?</Typography>
            </Container>

            <Container maxWidth="lg" className={classes.blogsButton}>
                {/* change */}
                <Typography variant="h6">IEC(Import Export Code) is unique code provided to every Importer and Exporter of goods and services from India. IEC code is a 10 Digit Code. IEC Code is issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industries, Government of India and is must for every business that is in import and export. IE Code stands for Import Export Code. It is required for any person importing or exporting goods and services to or from India. <br></br>
                    <br></br>
                    <strong><u>Who Should Register for IEC?</u></strong><br></br>
                    All business owners whether Sole proprietors, Partnerships or Private limited companies dealing in or intend to import and exports of goods need to have an import-export code mandatorily. It is not necessary to set up a business for the same. All sellers need to register for the IEC number irrespective of the size of their business.
                </Typography>
            </Container>
            <Container maxWidth="lg" className={classes.blogsButton}>
            <Gpaybutton />
            </Container>
        </>
    );
}

export default Company;

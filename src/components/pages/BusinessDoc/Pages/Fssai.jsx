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
import Advantages3 from '../Advantages3';
import Howitworks3 from '../Howitworks3';
import Whyus from '../Whyus';
import useStyles from './businessstyle';


function Company() {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.hero}>
                <Box>
                    <br></br>
                    {/* change */}
                    FSSAI Registration
                </Box>
            </Box>

            <Howitworks3 />
            <Advantages3 />
            <Whyus />

            <Container maxWidth="lg" className={classes.blogsButton}>
                <Typography variant="h3">Why is this Certificate Important?</Typography>
            </Container>

            <Container maxWidth="lg" className={classes.blogsButton}>
                {/* change */}
                <Typography variant="h6">FSSAI stands for the Food Safety and Standards Authority of India which serves as an independent government authority that was created in 2008 as per regulations laid down in the Food Safety and Standards Act of 2006. <br></br><br></br><strong><u>IMPORTANT:</u></strong><br></br>As per the regulation, all food business operator in India must have a FSSAI registration or license if they are involved in the manufacturing, storage, transportation or distribution of food products. <br></br>
                    <br></br>
                    <br></br>
                    <strong><u>Types of FSSAI:</u></strong><br></br>
                    <ul>
                    <li><strong>I Basic Registration: </strong>For businesses with an annual turnover of up to INR.12 lakhs; Dairy having capacity less that 500 liters per day or daily manufacturing capacity less than 100kg per day needs to get basic FSSAI registration.<br></br></li>
                    <li><strong>II State License: </strong>For businesses with an annual turnover is of more than INR.12 lakhs but up to 20 Crores; i.e. Medium food manufacturer.Manufacturing units having capacity upto 2 MT per day, Dairy units handling business upto 50000 liters per day,, 3 star hotels and above, repackers and relebelling units, clubs canteens, all the catering business irrespective of their turnover needs to apply for State licence.<br></br></li>
                    <li><strong>III Central License: </strong>For businesses with annual turnover more than INR.20 Crores. i.e. Large food manufacturer. businesses which do not fall under the above two categories, they need to go for central licence, the importer and exporters mandatorily needs central licence, in case you are in a business having multiple outlets across the country then you need to go for central licence for your registered address and also need to get basic state or central licences depending on the turnover of each outlet.<br></br></li>
                    
                   </ul>
                </Typography>
            </Container>
            <Container maxWidth="lg" className={classes.blogsButton}>
                <Button variant="contained" color="secondary" href="#" >
                    {/* change the amount */}
                    Get it Registered at Rs 1,399
                </Button>
            </Container>
        </>
    );
}

export default Company;

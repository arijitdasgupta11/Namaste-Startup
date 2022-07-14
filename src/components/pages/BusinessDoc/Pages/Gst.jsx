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
import Advantages from '../Advantages2';
import Howitworks2 from '../Howitworks2';
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
                    GST Registration
                </Box>
            </Box>

            <Howitworks2 />
            <Advantages />
            <Whyus />

            <Container maxWidth="lg" className={classes.blogsButton}>
                <Typography variant="h3">Why is this Certificate Important?</Typography>
            </Container>

            <Container maxWidth="lg" className={classes.blogsButton}>
                {/* change */}
                <Typography variant="h6">GST is one tax for whole nation, which makes India one unified common market. GST is a single tax on the supply of goods and services. GST is a destination based tax which is levied only on value addition at each stage because credits of input taxes paid at procurement of inputs will be available.<br></br>
                    <br></br>
                    <ul>
                    <li>Currently registered under any of the earlier indirect tax regimes (VAT, Excise Laws, Service Tax Laws).<br></br></li>
                    <li>Businesses with turnover above the threshold limit of Rs. 20 Lakhs (Rs. 10 Lakhs for North-Eastern States, J&K, Himachal Pradesh and Uttarakhand)<br></br></li>
                    <li>Agents of a supplier & Input service distributor.<br></br></li>
                    <li>Required to pay tax under Reverse Charge.<br></br></li>
                    <li>Supplying goods or services through E-commerce Operator.<br></br></li>
                   <li> E-commerce Operator / Aggregator.<br></br></li>
                   <li>Making any supply to other states.<br></br></li>
                   <li> Person supplying online information and database access or retrieval services from a place outside India to a person in India, other than a registered taxable person.<br></br></li>
                
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

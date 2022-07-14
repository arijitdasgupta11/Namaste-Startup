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
import { NavLink } from "react-router-dom";

import useStyles from './BusinessDoc/businessstyle';

function BDocuments() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.hero3}>
        <Box>
          <br></br>
          START YOUR STARTUP
        </Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/companyr" style={{ textDecoration: 'none', color: 'unset' }} >
                      Company Registration
                    </NavLink >
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                  One Person Company is a new form of business registration introduced under Companies Act, 2013, enabling a single person to register a company.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card2}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/gst" style={{ textDecoration: 'none', color: 'unset' }} >
                      GST Registration
                    </NavLink >
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                  GST is one tax for whole nation, which makes India one unified common market. GST is a single tax on the supply of goods and services.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/fss" style={{ textDecoration: 'none', color: 'unset' }} >
                      FSSAI Registration
                    </NavLink >
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                  FSSAI stands for the Food Safety and Standards Authority of India.which serves as an independent government authority.Tap to View more details.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card2}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/iec" style={{ textDecoration: 'none', color: 'unset' }} >
                      Import Export Code
                    </NavLink >
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                  IEC(Import Export Code) is unique code provided to every Importer and Exporter of goods and services from India. IEC code is a 10 Digit Code. 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/sar" style={{ textDecoration: 'none', color: 'unset' }} >
                      Shop Act Registration
                    </NavLink >
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                  Shops and Establishment Act governs the working conditions and rights of workers engaged in the unorganized sector. 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card2}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/mr" style={{ textDecoration: 'none', color: 'unset' }} >
                      MSME Registration
                    </NavLink >
                  </Typography> 
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                  MSME is a government registration that is provided along with a recognition certificate and a unique number in order to certify small enterprises.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <br></br><br></br>
      <Box className={classes.hero4}>
        <Box>          
          PROTECT YOUR STARTUP
        </Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/tr" style={{ textDecoration: 'none', color: 'unset' }} >
                      Trademark Registration
                    </NavLink >
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                  You have a successfully running business but you are missing out clients because one of your competitor is using the exact same logo.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card2}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/dw" style={{ textDecoration: 'none', color: 'unset' }} >
                      Draft a Will
                    </NavLink >
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                  A Will is a legal document that clearly sets out the manner of distribution of the wealth and assets after the death of a person.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/ec" style={{ textDecoration: 'none', color: 'unset' }} >
                      Employement Contract
                    </NavLink >
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                  An employment agreement is a document which outlines the bounds of relationship between an employer and employee.                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card2}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/lc" style={{ textDecoration: 'none', color: 'unset' }} >
                    Legal Consultation
                    </NavLink >
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                  Are you stuck somewhere legally? Looking for an expert legal opinion? If Yes, then you are at the right place. 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/pa" style={{ textDecoration: 'none', color: 'unset' }} >
                      Power of Attorney
                    </NavLink >
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
A power of attorney is an instrument containing an authorization for one to act as the agent of the principal.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card2}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/shd" style={{ textDecoration: 'none', color: 'unset' }} >
                      Shareholder Agreement
                    </NavLink >
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                  A shareholders’ agreement is an agreement between the shareholders of a company i.e. between shareholders.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/va" style={{ textDecoration: 'none', color: 'unset' }} >
                      Vendor Agreement
                    </NavLink >
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                  A written document between a business and vendor that lays down the description of goods or services also the rights and obligations of both the sides is known as a Vendor Agreement.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card2}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/pda" style={{ textDecoration: 'none', color: 'unset' }} >
                      Partnership Deed
                    </NavLink >
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
This partnership deed is a written agreement which contains all the rights and duties of the parties to the business relating to management and organization of the business.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <NavLink to="/rra" style={{ textDecoration: 'none', color: 'unset' }} >
                      Residential Rental Agreement
                    </NavLink >
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                  The rent agreement is a written document which consists of the duration of tenancy, commencement of tenancy, security amount, monthly rent and other terms of tenancy.                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BDocuments;

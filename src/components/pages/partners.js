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

import useStyles from './BusinessDoc/stylepartners';


function Partners() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.hero3}>
        <Box>
          <br></br>
          Top Investors ready to Fund
        </Box>
      </Box>
      <br></br>
      <Box className={classes.blogTitle2}>
        If you are a StartUp, looking for Investment, 
        <NavLink to="/contact"  className={classes.navl}>
         &nbsp; Contact Us!
        </NavLink>
      </Box>
      <br></br>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://entrackr.com/wp-content/uploads/2019/10/OYO--1200x600.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.nam}>
                    Ritesh Agarwal<br></br>(CEO of OYO Rooms)
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://miro.medium.com/max/800/1*SAPtoZbTP3cZzdRAR6QgJw.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.nam}>
                    Kunal Shah<br></br>(Founder of CRED)
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.moneycontrol.com/static-mcnews/2020/07/Nithin-Kamath-Zerodha.jpg?impolicy=website&width=770&height=431"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.nam}>
                    Nithin Kamath<br></br>(Founder of Zerodha)
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://dmerharyana.org/wp-content/uploads/2021/12/20211223_230717_0000.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.nam}>
                    Peyush Bansal<br></br>(Founder of Lenskart)
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.hindustantimes.com/img/2022/02/09/1600x900/namitaathapar_1644372346516_1644372357495.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.nam}>
                    Namita Thapar<br></br>(CEO of Emcure Pharmacy)
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.yourstory.com/cs/4/8e7cc4102d6c11e9aa979329348d4c3e/Image275c-1583929908147.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.nam}>
                    Isha Choudhary<br></br>(CEO of ZoloStays)
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
          Top Mentors ready to Guide
        </Box>
      </Box>
      <br></br>
      <Box className={classes.blogTitle2}>
        If you are a StartUp, looking for Mentors,
        <NavLink to="/contact"  className={classes.navl}>
          &nbsp;Contact Us!
        </NavLink>
      </Box>
      <br></br>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://static.uacdn.net/thumbnail/course/v2/6CDEE31F-EEE0-4A42-BFD5-F1C050357F3D_special_class.png?q=100&w=512"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.nam}>
                    Rachana Ranade
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://static.toiimg.com/thumb/resizemode-4,width-400,msid-86091670/86091670.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.nam}>
                    Sharan Hedge
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://assets.telegraphindia.com/telegraph/2022/Jan/1641021165_1.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.nam}>
                    Ankur Warikoo
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i0.wp.com/wikiwiki.in/wp-content/uploads/2021/12/Neha-Nagar-Entrepreneur-1.jpg?resize=761.25%2C428&ssl=1"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.nam}>
                    Neha Nagar
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.livemint.com/img/2021/08/20/600x338/Pranjal_1629461953712_1629461960265.JPG"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.nam}>
                    Pranjal Kamra
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://static.toiimg.com/photo/msid-70026143/70026143.jpg?456235"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.nam}>
                    Tanmay Bhat
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
          Top Business Incubators
        </Box>
      </Box>
      <br></br>
      <Box className={classes.blogTitle2}>
        If you are a StartUp, looking to get Incubated,
        <NavLink to="/contact" className={classes.navl}>
          &nbsp;Contact Us!
        </NavLink>
      </Box>
      <br></br>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://rmponweb.org/wp-content/uploads/2019/07/atal-incubation.jpg"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://media-exp1.licdn.com/dms/image/C560BAQHiZ_FAhi8iQQ/company-logo_200_200/0/1596730781146?e=2147483647&v=beta&t=SDkNtCENkWhlLMt8ggYrH-oGAB20kEqf4z-kFGOv6As"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.postimg.cc/C1rCzpkv/aicsmu.png"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://biharvidyapeeth.edu.in/wp-content/uploads/2020/10/aic-biharvidyapeeth-300x174.jpeg"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.postimg.cc/tgwSM6mR/aic-jitf-logo.png"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.postimg.cc/HkK9Yg0B/vidya.png"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default Partners;

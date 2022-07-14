import React from 'react';
import Typography from '@material-ui/core/Typography';
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
import { NavLink } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Contact from './contact';
import useStyles from './styles';

function Homepage() {
    const classes = useStyles();

    return (
        <div className="homepage">
            <Box className={classes.hero}>
                <Box>
                    We Turn Your  <br></br>Ideas Into Reality!
                    <br></br>
                    <Button variant="contained" color="secondary" href=" https://messenger-by-arijit.herokuapp.com/" target='_blank'>Free Global Discussion Panel</Button>
                </Box>
            </Box>

            <Box className={classes.hero2} >
                <br></br>
                <Box className={classes.blogTitle}>A Few Things We're Great At</Box>
                <Box className={classes.smallpara}><br></br><br></br>We act as a bridge between your idea and its success.
                    We provide a one stop platform for all the assistance<br></br>
                    an entrepreneur requires in his/her entrepreneurial journey.
                    We help startups and young entrepreneurs<br></br>
                    to get started with trusted and experienced
                    professionals to achieve success in their startup journey.
                </Box>
                <br></br>
                <Container maxWidth="lg" className={classes.blogsContainer}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Avatar src="https://i.postimg.cc/9XKVQWyX/Untitled-design-3.png" className={classes.avatar} />
                                        <Typography gutterBottom variant="h5" component="h2">
                                            COMMUNICATION
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" className={classes.p}>
                                            Communicating with Business Incubators, Mentors, Investors or any funding agencies at any time from anywhere.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Avatar src="https://i.postimg.cc/kM83p1tV/Untitled-design-1-removebg-preview.png" className={classes.avatar} />
                                        <Typography gutterBottom variant="h5" component="h2">
                                            GUIDANCE
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" className={classes.p}>
                                            To start with your idea from the basic guidance to becoming a successful Entreprenuer there will be a complete guidance from us.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Avatar src="https://i.postimg.cc/JzSsMYKf/Untitled-design-3-removebg-preview.png" className={classes.avatar} />
                                        <Typography gutterBottom variant="h5" component="h2">
                                            TRANSPARENT PRICING
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" className={classes.p}>
                                            Registering our portal, from communicating to proceeding to the final step , there will be 35% offer in total fee amount unlike other platforms.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Avatar src="https://i.postimg.cc/85XQg9mW/Untitled-design-4-removebg-preview.png" className={classes.avatar} />
                                        <Typography gutterBottom variant="h5" component="h2">
                                            INCUBATION SETUP
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" className={classes.p}>
                                            Building a state of the art incubation center for academic institutions which helps startups grow their ventures and generate employment for the youth of India.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Avatar src="https://i.postimg.cc/vH3PqfXg/Untitled-design-6-removebg-preview.png" className={classes.avatar} />
                                        <Typography gutterBottom variant="h5" component="h2">
                                            EXPERIENCED MENTORS
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" className={classes.p}>
                                            Get your work done through the team of our experienced professionals who have a cumulative experience of more than 40 years with top organisations verified by us.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Avatar src="https://i.postimg.cc/BnX2sVf3/Untitled-design-7-removebg-preview-1.png" className={classes.avatar} />
                                        <Typography gutterBottom variant="h5" component="h2">
                                            PROTECTING YOUR STARTUP
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" className={classes.p}>
                                            We'll Protect Your Startup ideas and help you for the various paperworks , plans until you become an Entreprenueur.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <br></br><br></br><br></br><br></br><br></br>
            <Box className={classes.test}>
                <Container maxWidth="lg" className={classes.blogsContainer}>

                    <Box className={classes.blogTitle}>

                        CLIENT TESTIMONIALS
                    </Box>
                    <br></br><br></br>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://media.istockphoto.com/photos/green-quote-sign-icon-3d-illustration-picture-id1194735769?k=20&m=1194735769&s=612x612&w=0&h=wsSVqwiodNtbvwbikvncelYc4OLSg6-1lSd2Lf2cAh8="
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Aditya Vashishth
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" className={classes.p}>
                                            It was a great pleasure associating with
                                            Arthayan. Our incubatees who were part of this batch were
                                            tech entrepreneurs who were into agritech, mobile retail,
                                            value added products and fintech. They got first hand
                                            experience of dealing with investors. The way in which this
                                            program was conducted was very appreciable!
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.cardActions}>
                                    <Box className={classes.author}>
                                        <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                        <Box ml={2}>
                                            <Typography variant="subtitle2" component="p">
                                                Aditya Vashishth
                                            </Typography>
                                            <Typography variant="subtitle2" color="textSecondary" className={classes.p}>
                                                January 12, 2022
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <BookmarkBorderIcon />
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://media.istockphoto.com/photos/green-quote-sign-icon-3d-illustration-picture-id1194735769?k=20&m=1194735769&s=612x612&w=0&h=wsSVqwiodNtbvwbikvncelYc4OLSg6-1lSd2Lf2cAh8="
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Basudha Shrivastav
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" className={classes.p}>
                                            We work in the domains of food tech,
                                            materials, devices and IoT sensors. This particular program
                                            helped us a lot in getting the best investors on a single
                                            virtual platform. 14+ of our incubatees participated and
                                            presented their case to investors. Many of them were able to
                                            convince  will get 	positive news shortly.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.cardActions}>
                                    <Box className={classes.author}>
                                        <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                                        <Box ml={2}>
                                            <Typography variant="subtitle2" component="p">
                                                Basudha Shrivastav
                                            </Typography>
                                            <Typography variant="subtitle2" color="textSecondary" className={classes.p}>
                                                February 15, 2022
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <BookmarkBorderIcon />
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://media.istockphoto.com/photos/green-quote-sign-icon-3d-illustration-picture-id1194735769?k=20&m=1194735769&s=612x612&w=0&h=wsSVqwiodNtbvwbikvncelYc4OLSg6-1lSd2Lf2cAh8="
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Priya Jindal
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" className={classes.p}>
                                            Great support and advise by their team helped me in setting up my business.Being a part of startup community is tremendous.Being a part of startup community is tremendous.The person who creates a new enterprise and embraces every challenge for its development and operation is known as an entrepreneur.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.cardActions}>
                                    <Box className={classes.author}>
                                        <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                        <Box ml={2}>
                                            <Typography variant="subtitle2" component="p">
                                                Priya Jindal
                                            </Typography>
                                            <Typography variant="subtitle2" color="textSecondary" className={classes.p}>
                                                March 28, 2022
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <BookmarkBorderIcon />
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box className={classes.test2}>
                <Container maxWidth="lg" className={classes.blogsContainer}>

                    <Box className={classes.blogTitle}>

                        INCUBATOR TESTIMONIALS
                    </Box>
                    <br></br><br></br>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://media.istockphoto.com/photos/green-quote-sign-icon-3d-illustration-picture-id1194735769?k=20&m=1194735769&s=612x612&w=0&h=wsSVqwiodNtbvwbikvncelYc4OLSg6-1lSd2Lf2cAh8="
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        C. J. George
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" className={classes.p}>
                                            It was a great pleasure associating with
                                            Arthayan. Our incubatees who were part of this batch were
                                            tech entrepreneurs who were into agritech, mobile retail,
                                            value added products and fintech. They got first hand
                                            experience of dealing with investors. The way in which this
                                            program was conducted was very appreciable!
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.cardActions}>
                                    <Box className={classes.author}>
                                        <Avatar src="https://dhanamonline.com/h-upload/old_images/842207-cj-george.webp" />
                                        <Box ml={2}>
                                            <Typography variant="subtitle2" component="p">
                                            C. J. George
                                            </Typography>
                                            <Typography variant="subtitle2" color="textSecondary" className={classes.p}>
                                                January 12, 2022
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <BookmarkBorderIcon />
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://media.istockphoto.com/photos/green-quote-sign-icon-3d-illustration-picture-id1194735769?k=20&m=1194735769&s=612x612&w=0&h=wsSVqwiodNtbvwbikvncelYc4OLSg6-1lSd2Lf2cAh8="
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Falguni Nayar
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" className={classes.p}>
                                            We work in the domains of food tech,
                                            materials, devices and IoT sensors. This particular program
                                            helped us a lot in getting the best investors on a single
                                            virtual platform. 14+ of our incubatees participated and
                                            presented their case to investors. Many of them were able to
                                            convince  will get 	positive news shortly.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.cardActions}>
                                    <Box className={classes.author}>
                                        <Avatar src="https://m.economictimes.com/thumb/msid-90841981,width-1200,height-900,resizemode-4,imgsize-148968/falguni-nayar.jpg" />
                                        <Box ml={2}>
                                            <Typography variant="subtitle2" component="p">
                                            Falguni Nayar
                                            </Typography>
                                            <Typography variant="subtitle2" color="textSecondary" className={classes.p}>
                                                February 15, 2022
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <BookmarkBorderIcon />
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://media.istockphoto.com/photos/green-quote-sign-icon-3d-illustration-picture-id1194735769?k=20&m=1194735769&s=612x612&w=0&h=wsSVqwiodNtbvwbikvncelYc4OLSg6-1lSd2Lf2cAh8="
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Aditi Gupta
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" className={classes.p}>
                                            Great support and advise by their team helped me in setting up my business.Being a part of startup community is tremendous.Being a part of startup community is tremendous.The person who creates a new enterprise and embraces every challenge for its development and operation is known as an entrepreneur.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.cardActions}>
                                    <Box className={classes.author}>
                                        {/* <Avatar src="data:image/jpeg;base64,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" /> */}
                                       <Avatar src="https://femina.wwmindia.com/thumb/content/2021/jul/thaditi1626419182.jpg?width=1200&height=900"/>
                                        <Box ml={2}>
                                            <Typography variant="subtitle2" component="p">
                                            Aditi Gupta
                                            </Typography>
                                            <Typography variant="subtitle2" color="textSecondary" className={classes.p}>
                                                March 28, 2022
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <BookmarkBorderIcon />
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <br /><br /><br />
            <Container maxWidth="lg" className={classes.blogsContainer}>
                <Box className={classes.blogTitle}>
                    OUR PARTNERS
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://1000logos.net/wp-content/uploads/2020/05/Google-cloud-logo.jpg"
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
                                    image="https://cdn.dribbble.com/users/708424/screenshots/2837557/logo_dribbble_still_2x.gif?compress=1&resize=400x300&vertical=top"
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
                                    image="https://www.freepnglogos.com/uploads/shopify-logo-png/shopify-partner-logo-icon-png-6.jpg"
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
                                    image="data:image/png;base64,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"
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
                                    image="https://gust-production.s3.amazonaws.com/uploads/accelerator/logo_image/7406/fastercapital_300x300.jpg"
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
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajJxycYCnzFJmUM2ds27xldgN276fTgTTqC0W4CWTU3wpy86nEgyKHnNpdK5ua9d3KtQ&usqp=CAU"
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="lg" className={classes.blogsContainer}>
                <Contact />
            </Container>

        </div>
    );
}


export default Homepage;

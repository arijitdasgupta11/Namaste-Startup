import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';

import useStyles from './businessstyle';

const Whyus = () => {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.blogsContainer}>
                <Box className={classes.blogTitle}>
                    WHY US?
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card4}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://i.postimg.cc/wTbm2z9Z/Untitled-design-6.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Transparent Pricing
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                        We do not have any hidden charges, all our prices includes everything mentioned.
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
                                    image="https://i.postimg.cc/VkX80tfb/Untitled-design-1.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Timely Delivery
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                        We value the time and thus ensure timely delivery of all the assigned projects.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card2}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://i.postimg.cc/ZnfkZPx1/Colorful-People-Icon-Company-Logo-T-Shirt.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Experienced Team
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                        Get your work done through our wide team of experienced professionals.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Whyus
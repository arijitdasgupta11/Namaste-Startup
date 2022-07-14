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

const Advantages = () => {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.hero2} >
                <br></br>
                <Box className={classes.blogTitle}>ADVANTAGES & BENEFITS</Box>
                <Container maxWidth="lg" className={classes.blogsContainer}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Gain Compensation
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                            If your competitor or any other business is using your logo/name then you can compensation from them.
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
                                            Stop Competition
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                            Easily stop your competitors from selling similar kind of products with the same name or logo.
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
                                            Exclusive Rights
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                            Gives you exclusive right to your logo or name so that you can flaunt it to the world with TM registered mark.
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
                                            Protection to your Brand
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                            A registered trademark establishes ownership over the brand.It protects your brand from any third party.
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
                                        Provides Uniqueness to Brand
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                        A brand that is unique must be registered as every business needs a logo, which differentiates from others.                                              </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card2}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Legal Protection
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                            Once your trademark is registered, you get legally protected till 10 years for the business.</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Advantages
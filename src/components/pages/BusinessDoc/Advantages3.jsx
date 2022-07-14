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
                                        Consumer awareness
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
Helps to attract more customers to your business and makes them aware about food quality and hygiene.
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
                                        Fssai logo
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
You can use the fssai logo on all your products which gives your product a superior quality over other.
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
                                        Business expansion
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
Help you to expand your business by making it easy to apply for loans and funding.
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
                                        Reputation Building
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
Helps you to build your reputation in the market by improving the standard of your product.
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
                                        Build Goodwill
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                        Obtaining a license can provide the food business with build goodwill,create consumer awareness,and assist.                                       
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
                                        Legal Benefits: 
                                        </Typography> 
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                        As per FSSAI rules, a business cannot run without proper registration.This gives you a legal advantage .                                       </Typography>
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
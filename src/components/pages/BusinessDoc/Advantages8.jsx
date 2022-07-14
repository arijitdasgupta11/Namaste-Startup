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
                <Box className={classes.blogTitle}>FIELDS OF EXPERTISE</Box>
                <Container maxWidth="lg" className={classes.blogsContainer}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card2}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Easy Funding
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
Preferred by most of the angel investors, corporate, banks and more for funding opportunities.                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Limited Liability​
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
Keeps you and your personal assets safe as it is a legally identified separate entity.                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card2}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Continous Existence​
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
Allows you to continue the business operations even if any of the member leaves.                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
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
                            <Card className={classes.card2}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Greater Stability
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
Has greater capital contribution making it more stable than other registrations.
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
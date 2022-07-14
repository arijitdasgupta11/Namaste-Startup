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
                                        Legal Protection
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
Gives you protection against legal complexities and all the legal actions of the authorities.  </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card2}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Smooth Business Activities
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
Helps to carry on business peacefully without any hassle to run here and there.
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
                                        For Small Business Owners
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
Even small businesses intending to do import and export get benefit by the registration in IEC.                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card2}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        No Compliance
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                        Does not require any compliance after registration of the Shop & Establishment Act.</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Market Expansion
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                        The registration of Import Export License allows you to increase the scope of your business                                         </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card2}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Lifetime Validity
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
One time registration to the IEC will save you from the hassles of any kind of renewal of licence.     
</Typography>
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
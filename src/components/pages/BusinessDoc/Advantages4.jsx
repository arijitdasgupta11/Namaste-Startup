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
                                        Export subsidies
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
Business owners can benefit their business by various subsidies and schemes from the government                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card2}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Business Growth
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
You will be able to sell your product or services to the international market for the expansion of business.                                        </Typography>
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
                                        No Annual Compliance
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                        Once registered, the Import-Export License is valid for a lifetime i.e. that you do not require re-filing or renewing it.                                         </Typography>
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
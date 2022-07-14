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
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Eliminating tax on tax effect
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
Previously, several taxes were levied on the same product that increased the price of the product. With the passing of GST, it will eliminate the tax on tax effect by providing credit for the taxes paid.
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
                                        Easy Compliance
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
All the compliances like registration, returns, payments, etc. under the GST system will have to be done online, which makes compliance under the GST system hassle-free and transparent.
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
                                        One Tax
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                        Instead of several different taxes being levied by state and central government, GST proposes to impose only one tax. GST will replace hidden taxes ,imposed by state governments , will improve ease of doing business.
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
                                        Decrease in price of products
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
GST will be charged at the manufacturing cost and collected at the point of sale,i.e.price will come down , will benefit the consumers.The consumption of consumers will increase which will benefit the companies.
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
                                        Composition Scheme
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                        Small businesses can find respite from tax burdens through the composition scheme. Small businesses that earn turnovers ranging from Rs.20 lakh to Rs.50 lakh will be subject to lower taxes.                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card2}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Benefits to Industry and Trade
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.par}>
                                        Uniform procedures for registration, filing of returns, payment of taxes, and tax refunds.Elimination of cascading of taxes to the seamless flow of tax credit from the manufacturer to the retailer or user.</Typography>
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
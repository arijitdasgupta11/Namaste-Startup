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

import useStyles from './businessstyle';

const Howitworks = () => {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.blogsContainer}>
                <Box className={classes.blogTitle}>
                    HOW IT WORKS?
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_64,h_64/https://startupvisors.com/wp-content/uploads/2019/03/icons8-level-1-64.png" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle1" component="h3">
                                            <br></br>Our expert professional consultant will call you to understand your requirements.
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card2}>
                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_64,h_64/https://startupvisors.com/wp-content/uploads/2019/03/icons8-circled-2-64.png" />
                                    <Box ml={2}>
                                    <Typography variant="subtitle1" component="p">
                                            <br></br>Payment link will be sent to your email along with all the details.
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_64,h_64/https://startupvisors.com/wp-content/uploads/2019/03/icons8-circled-3-64.png" />
                                    <Box ml={2}>
                                        
                                        <Typography variant="subtitle1" component="p">
                                            <br></br>We will inform you as soon as the company is incorporated.
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    
                </Grid>
            </Container>
        </div>
    )
}

export default Howitworks
import React from 'react'
import { Grid, Card, CardActionArea, CardContent, Typography, Hidden, CardMedia } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyle = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: '150',
    }
});

const PostCard = ({post}) => {
    const classes = useStyle();
    console.log(post.image)
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea components='a' href="#">
                <Card className={classes.card}>
                    <div>
                    <CardContent>
                        <Typography component="h2" variant="h5">{post.title}</Typography>
                        <Typography variant="subtitle1" color="textSecondary">{post.date}</Typography>
                        <Typography variant="subtitle1" paragraph>{post.description}</Typography>
                        <Typography variant="subtitle1" style={{color: "skyblue"}}>Continue Reading...</Typography>
                    </CardContent>
                    </div>
                    {/* <Hidden xsDown>
                        <CardMedia 
                            className={classes.cardMedia}
                            image={post.image}
                            title={post.imageText}
                        />
                    </Hidden> */}
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default PostCard

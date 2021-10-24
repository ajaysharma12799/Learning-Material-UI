import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import makeStyles from '@mui/styles/makeStyles';

const useStyle = makeStyles({
    title: {
        fontSize: 40
    },
    cover: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1633113089635-115b38c66c49?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80)',
        backgroundPosition: 'center',
        padding: '35px 25px'
    }
});

const FeaturedPost = () => {
    const classes = useStyle();

    return (
        <Card className={classes.cover}>
            <CardContent className={classes.textContainer}>
                <Typography gutterBottom className={classes.title}>Title of a Longer Feature Post</Typography>
                <Typography variant="h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quia qui minus ab molestias animi veritatis quisquam harum, blanditiis sit.</Typography>
            </CardContent>
            <CardActions>
                <Button variant="text" className={classes.btn}>Read More...</Button>
            </CardActions>
        </Card>
    )
}

export default FeaturedPost

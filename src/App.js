import { Container, createTheme, ThemeProvider, Grid } from '@mui/material';
import React from 'react'
import "./App.css";
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import { featuredPosts } from './data/Data';
import PostCard from './components/PostCard';

const App = () => {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Container>
                <Header />
                <FeaturedPost />
                <br />
                <Grid container spacing={4}>
                {
                    featuredPosts.map((post) => (
                        <PostCard post={post} key={post.title} />
                    ))
                }
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default App

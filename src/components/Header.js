import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import makeStyles from '@mui/styles/makeStyles';
import SideDrawer from './Drawer';

const useStyle = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    tagline: {
        fontSize: 20,
        justifyContent: 'center',
        textTransform: 'uppercase',
    }
}));

const Header = () => {
    const classes = useStyle()
    return (
        <>
            <Toolbar>
                <SideDrawer>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                </SideDrawer>
                <Typography variant="h6" className={classes.title}>Blogging Website</Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="primary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
            <Divider/>
            <Toolbar className={classes.tagline}>
                Express Your Emotion Through Your Thoughts
            </Toolbar>
        </>
    )
}

export default Header

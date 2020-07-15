import React from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from "../Styles";
import {useTheme} from "@material-ui/core/styles";
import PeopleIcon from '@material-ui/icons/People';
import MovieIcon from '@material-ui/icons/Movie';
import { Link } from 'react-router-dom';

export function Sidebar({open, handleDrawerClose}) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon><PeopleIcon /></ListItemIcon>
                        <Link to='/' className={classes.aLink}><ListItemText primary="People"/></Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><MovieIcon /></ListItemIcon>
                        <Link to='/films' className={classes.aLink}><ListItemText primary="Films"/></Link>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}
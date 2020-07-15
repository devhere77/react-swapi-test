import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from "clsx";
import { useStyles } from '../Styles';
import {Sidebar} from "../sidebar/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {setSidebarOpen, setSidebarClose} from "../../actions";

function Header() {
    const classes = useStyles();
    const open = useSelector(state=>state.setSidebar);
    const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        dispatch(setSidebarOpen());
    };

    const handleDrawerClose = () => {
        dispatch(setSidebarClose());
    };

    return(
        <div>
            <AppBar position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        SWAPI
                    </Typography>
                </Toolbar>
            </AppBar>
            <Sidebar open={open} handleDrawerClose={handleDrawerClose}/>
        </div>
    )
}

export default Header;
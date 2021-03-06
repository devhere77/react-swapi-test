import React, {useEffect, useState} from "react";
import Header from "../header/Header";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import {useStyles} from "../Styles";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import {Link} from 'react-router-dom';
import {PeopleFilmPagination} from "../PeopleFilmPagination";
import {useSelector} from "react-redux";

function Films(props) {

    const [films, setData] = useState([]);
    const classes = useStyles()
    const [page, currentPage] = useState(1);
    const [totalPage, getTotalPages] = useState(0);
    const open = useSelector(state=>state.setSidebar);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if(!props.isLoggedIn && !isLoggedIn){
            window.location.href = '/login'
        }

        axios.get('https://swapi.dev/api/films/?page=1')
            .then(res => {
                setData(res.data.results)

                if (res.data.count > (page * 10)) {
                    getTotalPages(Math.ceil(res.data.count / res.data.results.length))
                }
            })
    }, [page, props.isLoggedIn])

    const handlePageChange = (e, value) => {
        console.log("e ", value, e.target);
        currentPage(value)
    }

    function FormRow({director, producer, title, index}) {

        return (
            <React.Fragment>
                <Link to={`/films/details/${index}`} className={classes.aLink}>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <div>Film:- {title}</div>
                            <div>Director:- {director}</div>
                            <br/>
                            <div>Producer:- {producer}</div>
                        </Paper>
                    </Grid>
                </Link>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Header/>
            <main className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}>
                <div className={classes.drawerHeader}/>

                <Grid container spacing={8}>
                    {films && films.map((key, item) =>
                        <Grid container item xs={12} sm={3} spacing={3} key={item}>
                            <FormRow
                                classes={classes}
                                director={key.director}
                                producer={key.producer}
                                title={key.title}
                                index={item + 1}
                            />
                        </Grid>
                    )}
                </Grid>

                {totalPage > 1 &&
                <PeopleFilmPagination classes={classes} totalPage={totalPage} handlePageChange={handlePageChange}/>
                }
            </main>
        </div>
    )

}


export default Films;
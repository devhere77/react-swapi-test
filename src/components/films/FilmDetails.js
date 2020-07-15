import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../header/Header";
import clsx from "clsx";
import {useStyles} from "../Styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export function FilmDetails(props) {
    const classes = useStyles();
    const filmId = props.match.params.id
    const [filmData, setFilmData] = useState([])
    const open = useSelector(state=>state.setSidebar);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if(!props.isLoggedIn && !isLoggedIn){
            window.location.href = '/login'
        }

        axios.get(`https://swapi.dev/api/films/${filmId}`)
            .then(res => {
                setFilmData(res.data)
            })
    }, [filmId, props.isLoggedIn])

    let peopleId;
    return (
        <div className={classes.root}>
            <Header/>
            <main className={clsx(classes.content, classes.gridSpace, {
                [classes.contentShift]: open,
            })}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            {Object.keys(filmData).map((film, i) =>
                                <TableRow key={i}>
                                    <TableCell>
                                        {film.charAt(0).toUpperCase() + film.slice(1).replace('_', ' ')}
                                    </TableCell>
                                    {film !== "characters" ?
                                        <TableCell>{filmData[film]}</TableCell> :
                                        filmData[film].map((people, i) => {
                                                peopleId = people.split('/')
                                                peopleId = peopleId[peopleId.length-2]
                                                return (
                                                    <Link to={`/people/details/${peopleId}`} key={i}>
                                                        <TableCell>{people}</TableCell>
                                                    </Link>
                                                )
                                            }
                                        )}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </main>
        </div>
    )
}
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

export function PeopleDetails(props) {
    const classes = useStyles();
    const peopleId = props.match.params.id
    const [peopleData, setPeopleData] = useState([])
    const open = useSelector(state=>state.setSidebar);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if(!props.isLoggedIn && !isLoggedIn){
            window.location.href = '/login'
        }

        axios.get(`https://swapi.dev/api/people/${peopleId}`)
            .then(res => {
                setPeopleData(res.data)
            })
    }, [peopleId, props.isLoggedIn])

    let filmId;
    return (
        <div className={classes.root}>
            <Header/>
            <main className={clsx(classes.content, classes.gridSpace, {
                [classes.contentShift]: open,
            })}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            {Object.keys(peopleData).map((people, i) =>
                                <TableRow key={i}>
                                    <TableCell>
                                        {people.charAt(0).toUpperCase() + people.slice(1).replace('_', ' ')}
                                    </TableCell>
                                    {people !== "films" ?
                                        <TableCell>{peopleData[people]}</TableCell> :
                                        peopleData[people].map((film, i) => {
                                            filmId = film.split('/')
                                            filmId = filmId[filmId.length-2]
                                            return (
                                                <Link to={`/films/details/${filmId}`} key={i}>
                                                    <TableCell>{film}</TableCell>
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
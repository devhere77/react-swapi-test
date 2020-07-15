import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export const PeopleFilmPagination = ({classes, totalPage, handlePageChange}) => {
    return(
        <div className={classes.pageRoot}>
            <Pagination count={totalPage} color="primary" onChange={handlePageChange}/>
        </div>
    )
}
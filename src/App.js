import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PeopleHome from "./components/home";
import Films from "./components/films/Films";
import {PeopleDetails} from "./components/home/PeopleDetails";
import {FilmDetails} from "./components/films/FilmDetails";
import Login from "./components/login/Login";
import {useSelector} from "react-redux";


function App() {
    const isLoggedIn = useSelector(state=>state.userReducer)

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' render={(props) => ( <PeopleHome {...props} isLoggedIn={isLoggedIn}/>)} />
                    <Route exact path='/films' render={(props) => ( <Films {...props} isLoggedIn={isLoggedIn}/>)} />
                    <Route path='/people/details/:id' render={(props) => ( <PeopleDetails {...props} isLoggedIn={isLoggedIn}/>)}/>
                    <Route path='/films/details/:id' render={(props) => ( <FilmDetails {...props} isLoggedIn={isLoggedIn}/>)} />
                    <Route path='/login' component={Login} />
                </Switch>
            </div>
        </Router>

    );
}

export default App;
